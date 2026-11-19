import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import vm from 'node:vm';
import { projects } from '../src/data/projects.js';
import { educationData } from '../src/data/education.js';
import { experiences, researchProjects } from '../src/data/work.js';
import { boardGames } from '../src/data/boardGames.js';
const groups = [['Projects', 'projects', projects], ['Education', 'educationData', educationData], ['Work','experiences',experiences], ['Work','researchProjects',researchProjects], ['BoardGame','boardGames',boardGames]];
for (const [page, name, data] of groups) {
  const original = execFileSync('git', ['show', `1f0e61c:src/pages/${page}.jsx`], {encoding:'utf8'});
  const literal = original.match(new RegExp(`const ${name} = (\\[.*?\\n\\s*\\]);`, 's'))[1];
  const baseline = vm.runInNewContext(literal);
  // Owner clarified this project's scope: domain shift, without fine-tuning.
  // Compare all other content exactly; allow only its explicitly revised copy.
  const revisedFields = ['title', 'tech', 'description', 'contributions'];
  const normalize = (entries) => entries.map((entry) => {
    // Resume-backed description updates; preserve dates, roles, and other entries.
    if ((name === 'experiences' && entry.organization === 'Wicresoft International LTD.') ||
        (name === 'researchProjects' && entry.organization === 'Mechanical Impedance of Ankle — University of Michigan')) {
      return Object.fromEntries(Object.entries(entry).filter(([key]) => key !== 'bullets'));
    }
    if (name !== 'projects') return entry;
    // Owner reclassified the three coursework games under Games.
    if (entry.category === 'coursework') entry = { ...entry, category: 'featured-game' };
    // Game routing metadata was added when games moved to their own page.
    return Object.fromEntries(Object.entries(entry).filter(([key]) =>
      key !== 'isGame' && !(entry.category === 'ai-ml' && entry.order === 2 && revisedFields.includes(key))
    ));
  });
  const preserved = name === 'projects' ? data.slice(0, baseline.length) : data;
  assert.equal(JSON.stringify(normalize(preserved)), JSON.stringify(normalize(baseline)), `${name}: original content preserved outside owner-approved copy edits`);
  for (const entry of data) for (const image of entry.images || []) {
    assert.ok(existsSync(`public${image.src}`), image.src);
    assert.ok(existsSync(`public${image.src.replace('.png','.webp')}`));
    assert.ok(existsSync(`public${image.src.replace('.png','-mobile.webp')}`));
  }
}
assert.equal(projects.length,15);
assert.ok(projects.some(p => p.art === 'context' && p.links.some(link => link.url === 'https://github.com/YC-Qiu/context-aware-user-recommendation')));
for (const title of ['Abbott — AI Knowledge Assistant', 'Narrative Agent for Interactive Fiction', 'Multi-View Football Foul Detection', 'Taking a Detour to Win: Strategic Blocking in LLM Agents']) assert.ok(projects.some(p => p.title === title));
assert.equal(projects.find(p => p.category === 'ai-ml' && p.order === 2).title, 'Cross-Domain Sentiment Analysis without Fine-Tuning');
assert.deepEqual(['ai-ml','featured-game','coursework'].map(category=>projects.filter(p=>p.category===category).length),[8,7,0]);
const built = readdirSync('dist/assets');
for(const page of ['Projects','Education','Work','BoardGame']) assert.ok(built.some(name=>name.startsWith(page+'-')&&name.endsWith('.js')));
assert.ok(!readFileSync('dist/index.html','utf8').includes('/src/assets'));
const main = readFileSync('dist/assets/'+built.find(name=>/^index-.*\.js$/.test(name)),'utf8');
assert.ok(!main.includes('Standardized 20+ country datasets'));
console.log('PASS: original data outside owner-approved copy edits, 15 projects, category counts, all image variants, four route chunks, no project copy in entry bundle.');
