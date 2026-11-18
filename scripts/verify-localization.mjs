import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

// Bundle the real JSX for server rendering; no browser or additional test dependency is needed.
const result = await build({
  stdin: {
    resolveDir: fileURLToPath(new URL('..', import.meta.url)),
    loader: 'jsx',
    contents: `
      import assert from 'node:assert/strict';
      import React from 'react';
      import { renderToStaticMarkup } from 'react-dom/server';
      import { MemoryRouter } from 'react-router-dom';
      import { LocaleContext, LANGUAGE_KEY, readLanguage } from './src/i18n/locale.js';
      import LocaleProvider from './src/i18n/LocaleProvider.jsx';
      import LanguageToggle from './src/components/LanguageToggle.jsx';
      import { SiteHeader } from './src/components/SiteLayout.jsx';
      import ProjectCard from './src/components/ProjectCard.jsx';
      import Home from './src/pages/Home.jsx';
      import Projects from './src/pages/Projects.jsx';
      import Work from './src/pages/Work.jsx';
      import Education from './src/pages/Education.jsx';
      import Games from './src/pages/BoardGame.jsx';
      import { projects } from './src/data/projects.js';
      import { boardGames } from './src/data/boardGames.js';
      import { experiences, researchProjects } from './src/data/work.js';
      import { educationData } from './src/data/education.js';
      import { projectSlug } from './src/data/projectSlug.js';
      import { projectTranslations, localizeProject } from './src/i18n/projects.zh.js';
      import { workTranslations } from './src/i18n/work.zh.js';
      import { educationTranslations } from './src/i18n/education.zh.js';
      import { boardGameTranslations } from './src/i18n/boardGames.zh.js';

      const chinese = /[\u3400-\u9fff]/;
      const snapshots = JSON.stringify({ projects, boardGames, experiences, researchProjects, educationData });
      function render(node, language, url = '/') {
        const value = { language, setLanguage() {}, t: (en, zh) => language === 'zh' ? (zh ?? en) : en };
        return renderToStaticMarkup(<MemoryRouter initialEntries={[url]}><LocaleContext.Provider value={value}>{node}</LocaleContext.Provider></MemoryRouter>);
      }
      const imageSources = html => [...html.matchAll(/<img[^>]*src="([^"]+)"/g)].map(match => match[1]);
      const hrefs = html => [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
      for (const project of projects) {
        const translation = projectTranslations[project.title];
        assert.ok(translation && chinese.test(translation.title), project.title + ': translated title');
        for (const field of ['description', 'contributions']) {
          assert.equal(translation[field].length, project[field].length, project.title + ': complete ' + field);
          assert.ok(translation[field].every(text => chinese.test(text)), project.title + ': Chinese ' + field);
        }
        assert.equal(localizeProject(project, 'en'), project, 'English uses original data');
        const en = render(<ProjectCard project={project} initialExpanded />, 'en');
        const zh = render(<ProjectCard project={project} initialExpanded />, 'zh');
        assert.ok(zh.includes(renderToStaticMarkup(<h3>{translation.title}</h3>)), project.title + ': Chinese card title');
        const stableId = 'id="' + projectSlug(project.title) + '"';
        assert.ok(en.includes(stableId) && zh.includes(stableId), 'stable project ID');
        assert.deepEqual(hrefs(en), hrefs(zh), 'links unchanged');
        assert.deepEqual(imageSources(en), imageSources(zh), 'images unchanged');
        const cover = html => html.split('<div class="project-cover">')[1].split('<div class="project-card-body">')[0];
        assert.equal(cover(en), cover(zh).replaceAll('查看原图', 'Open full image'), 'illustrations unchanged');
      }
      for (const item of [...experiences, ...researchProjects]) {
        assert.equal(workTranslations[item.organization].bullets.length, item.bullets.length, 'all experience bullets translated');
      }
      for (const item of educationData) {
        const translated = educationTranslations[item.school];
        assert.equal(translated.courses.length, item.courses.length, 'all courses translated');
        assert.equal(translated.honors.length, item.honors.length, 'all honors translated');
      }
      for (const game of boardGames) {
        const translated = boardGameTranslations[game.title];
        assert.equal(translated.description.length, game.description.length, 'all tabletop paragraphs translated');
        assert.equal(translated.timeline?.length, game.timeline?.length, 'development notes translated');
      }
      for (const [Page, url, enTitle, zhTitle] of [
        [Home, '/', 'YC (Yucheng) Qiu', 'YC (Yucheng) Qiu'],
        [Projects, '/projects', 'Explore the projects', '探索项目'],
        [Work, '/work', 'Professional experience', '工作经历'],
        [Education, '/education', 'Northwestern University', '西北大学'],
        [Games, '/games', 'Explore the games', '探索游戏'],
      ]) {
        const en = render(<Page />, 'en', url);
        const zh = render(<Page />, 'zh', url);
        assert.ok(en.includes(enTitle) && zh.includes(zhTitle), url + ': bilingual page');
        assert.deepEqual(imageSources(en), imageSources(zh), url + ': same images');
        assert.deepEqual(hrefs(en), hrefs(zh), url + ': same links');
      }
      for (const language of ['en', 'zh']) {
        const linked = render(<Games />, language, '/games?project=checkmate');
        assert.ok(linked.includes('id="checkmate"'), 'direct project link remains valid');
        assert.ok(linked.includes(language === 'zh' ? '设计全部 14 种棋魂' : 'Designed all 14 chess spirits'), 'linked game is expanded');
        for (const [category, visible, count] of [['video-games', 'game-projects', 7], ['mods', 'game-mods', 2], ['tabletop', 'board-projects', 3]]) {
          const html = render(<Games />, language, '/games?category=' + category);
          for (const section of ['game-projects', 'game-mods', 'board-projects']) {
            assert.equal(html.includes('id="' + section + '"'), section === visible, 'category filtering in ' + language);
          }
          assert.ok(html.includes('role="status">' + count + (language === 'zh' ? ' 项内容' : ' items')), 'localized counts');
        }
        const nav = render(<SiteHeader />, language);
        assert.ok(nav.includes(language === 'zh' ? '>经历</a>' : '>Experience</a>'), 'navigation language');
        assert.equal((nav.match(/class="language-toggle"/g) || []).length, 1, 'one header toggle');
      }
      const originalWindow = globalThis.window;
      try {
        delete globalThis.window;
        assert.equal(readLanguage(), 'en', 'English default without storage');
        for (const [saved, expected] of [[null, 'en'], ['zh', 'zh'], ['en', 'en'], ['invalid', 'en']]) {
          globalThis.window = { localStorage: { getItem(key) { assert.equal(key, LANGUAGE_KEY); return saved; } } };
          assert.equal(readLanguage(), expected, 'saved preference');
          const html = renderToStaticMarkup(<LocaleProvider><LanguageToggle /></LocaleProvider>);
          assert.ok(html.includes('aria-pressed="true">' + (expected === 'zh' ? '中' : 'ENG')), 'provider restores selection');
        }
        globalThis.window = { localStorage: { getItem() { throw new Error('storage disabled'); } } };
        assert.equal(readLanguage(), 'en', 'storage failure fallback');
      } finally {
        if (originalWindow === undefined) delete globalThis.window;
        else globalThis.window = originalWindow;
      }
      assert.equal(JSON.stringify({ projects, boardGames, experiences, researchProjects, educationData }), snapshots, 'source content never mutated');
      console.log('PASS: complete Chinese content, English defaults, saved-language fallback, bilingual pages and filters, stable deep links, unchanged images, and original source data.');
    `,
  },
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs',
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react-dom/*'],
  logLevel: 'silent',
});
new Function('require', 'module', 'exports', result.outputFiles[0].text)(createRequire(import.meta.url), { exports: {} }, {});
