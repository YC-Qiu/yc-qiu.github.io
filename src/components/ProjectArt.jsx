// Lightweight conceptual illustrations, not screenshots or measured trajectories.
const captions = {
  context: ['BEHAVIOR / IN CONTEXT', 'Every day has a pattern.', 'Conceptual app-usage rhythms grouped into behavioral contexts for future food recommendations. Illustrative patterns, not measured results.'],
  knowledge: ['KNOWLEDGE / WITH BOUNDARIES', 'The right answer. The right access.', 'Concept: permitted sources feed a cited answer inside an access boundary.'],
  narrative: ['NARRATIVE / WITH MEMORY', 'A story that remembers.', 'Concept: player choices pass through validation before changing persistent story state.'],
  football: ['MULTI-VIEW / REPLAY REVIEW', 'One moment. More angles.', 'Concept: two synchronized football views highlight possible contact, with a shared playback timeline.'],
  blocking: ['AGENT LEARNING / STRATEGY', 'The way forward isn’t always straight.', 'Illustrative grid-world: an agent takes a detour to block an opponent before returning to its goal. Not an experimental trajectory.'],
};

function Knowledge() {
  return <svg viewBox="0 0 600 270" aria-hidden="true">
    <rect x="30" y="20" width="540" height="220" rx="18" fill="none" stroke="#75aeb0" strokeDasharray="5 6" />
    <text x="48" y="46" fill="#94c9c5" fontSize="12" letterSpacing="2">PERMISSION BOUNDARY</text>
    {[75, 130, 185].map((y, i) => <g key={y}><rect x="55" y={y} width="112" height="38" rx="6" fill="#2e505f"/><path d={`M70 ${y+12}h38m-38 9h65`} stroke="#a5c6c9" strokeWidth="3"/><path d={`M167 ${y+19}H215V149H251`} fill="none" stroke="#86b6b7"/>{i===0 && <text x="55" y="67" fill="#bfd4d4" fontSize="11">Internal sources</text>}</g>)}
    <circle cx="285" cy="149" r="34" fill="#c4decd"/><path d="M273 145v-8a12 12 0 0 1 24 0v8m-26 0h28v24h-28z" fill="none" stroke="#254957" strokeWidth="3"/>
    <path d="M320 149h42" stroke="#a5c6c9" strokeWidth="2"/><path d="m355 144 8 5-8 5" fill="none" stroke="#a5c6c9" strokeWidth="2"/>
    <rect x="375" y="86" width="164" height="125" rx="10" fill="#f2eddc"/><text x="391" y="111" fill="#284958" fontSize="13">Source-backed answer</text>
    <path d="M391 131h125m-125 12h107m-107 12h117" stroke="#9dafac" strokeWidth="4"/>
    <rect x="390" y="173" width="88" height="22" rx="5" fill="#ccddd1"/><text x="400" y="188" fill="#305d55" fontSize="10">↗ View source</text>
  </svg>;
}
function Narrative() {
  return <svg viewBox="0 0 600 270" aria-hidden="true">
    <path d="M52 55Q135 30 215 60v165q-80-30-163-5z" fill="#fff8e8" stroke="#bda68c"/><path d="M215 60q80-30 150-5v165q-70-25-150 5z" fill="#eee0ca" stroke="#bda68c"/>
    <text x="76" y="86" fill="#8c624d" fontSize="11" letterSpacing="2">CHAPTER 01</text><text x="76" y="118" fill="#583e40" fontSize="23" fontFamily="Georgia, serif">The locked door</text>
    <path d="M76 140h106m-106 12h92m-92 12h110" stroke="#d0bca4" strokeWidth="3"/>
    <path d="M260 180v-65a27 27 0 0 1 54 0v65z" fill="#917f88"/><circle cx="301" cy="146" r="3" fill="#f9dc94"/>
    <path d="M330 134h60v-45h30m-30 45v59h30" fill="none" stroke="#9a797c" strokeWidth="2"/>
    <rect x="413" y="66" width="140" height="46" rx="8" fill="#e1d4df"/><text x="428" y="87" fill="#624d6e" fontSize="12">Attempt action</text><text x="428" y="102" fill="#846a86" fontSize="10">Check rules + inventory</text>
    <rect x="413" y="169" width="140" height="46" rx="8" fill="#d7dfcb"/><text x="428" y="190" fill="#4d6654" fontSize="12">Story state</text><text x="428" y="205" fill="#607964" fontSize="10">Keep valid choices</text>
    <path d="M483 114v51m-5-8 5 8 5-8" fill="none" stroke="#9a797c" strokeWidth="2"/>
  </svg>;
}
function Football() {
  return <svg viewBox="0 0 600 270" aria-hidden="true">
    {[30,310].map((x,i)=><g key={x}><rect x={x} y="26" width="260" height="172" rx="8" fill={i?'#214e46':'#295d4a'}/><path d={`M${x+12} 179l35-115h164l35 115z M${x+132} 64v115`} fill="none" stroke="#6c9b7c"/><ellipse cx={x+132} cy="122" rx="31" ry="18" fill="none" stroke="#6c9b7c"/><text x={x+13} y="48" fontSize="10" fill="#cae4ca" letterSpacing="2">{i?'REPLAY / B':'LIVE / A'}</text>
      <g transform={`translate(${x+111} 95) rotate(${i?-12:8})`} stroke="#e6efcb" strokeWidth="5" strokeLinecap="round"><circle cx="0" cy="0" r="6" fill="#e6efcb" stroke="none"/><path d="M0 12v22l-16 20m16-20 20 12M0 18l-14 9m14-9 18 1" fill="none"/></g>
      <g transform={`translate(${x+154} 98) rotate(${i?15:-10})`} stroke="#e5ac78" strokeWidth="5" strokeLinecap="round"><circle r="6" fill="#e5ac78" stroke="none"/><path d="M0 12v22l-20 12m20-12 16 20M0 18l-17 9m17-9 15 2" fill="none"/></g>
      <rect x={x+119} y="124" width="38" height="35" rx="3" fill="none" stroke="#ffcd82" strokeWidth="2"/>
    </g>)}
    <path d="m35 225 9 6-9 6z" fill="#cadbca"/><path d="M64 231h495" stroke="#557469" strokeWidth="4"/><path d="M64 231h215" stroke="#dfc18e" strokeWidth="4"/><circle cx="279" cy="231" r="6" fill="#f6dba4"/>
    <text x="30" y="260" fill="#afc9bc" fontSize="10" letterSpacing="1">SYNCHRONIZED VIEWS</text><text x="416" y="260" fill="#afc9bc" fontSize="10">CONTACT CUES · EXPORT</text>
  </svg>;
}
function Blocking() {
  return <svg viewBox="0 0 600 270" aria-hidden="true">
    <g transform="translate(45 15)">
      {Array.from({length:40},(_,i)=><rect key={i} x={(i%8)*29} y={Math.floor(i/8)*43} width="27" height="41" rx="3" fill={[10,11,12,28,29,30].includes(i)?'#d7b88a':'#f5ead3'}/>)}
      <path d="M14 107v-86h174v86h29" fill="none" stroke="#327b83" strokeWidth="5" strokeLinejoin="round"/><path d="M14 192h174v-85" fill="none" stroke="#c9805d" strokeWidth="3" strokeDasharray="6 5"/>
      <circle cx="14" cy="107" r="9" fill="#327b83"/><circle cx="14" cy="192" r="9" fill="#c9805d"/><rect x="178" y="97" width="20" height="20" rx="3" fill="#327b83" stroke="#fff8e9" strokeWidth="2"/><path d="m210 96 15 11-15 11z" fill="#7c6850"/>
    </g>
    <text x="323" y="55" fill="#7e664d" fontSize="11" letterSpacing="2">LEARN THE DETOUR</text>
    <text x="323" y="94" fill="#354f52" fontSize="23" fontFamily="Georgia, serif">Detour.</text><text x="323" y="126" fill="#354f52" fontSize="23" fontFamily="Georgia, serif">Block. Return.</text>
    <circle cx="330" cy="164" r="5" fill="#327b83"/><text x="345" y="168" fill="#52676a" fontSize="12">Learning agent</text><circle cx="330" cy="190" r="5" fill="#c9805d"/><text x="345" y="194" fill="#836a56" fontSize="12">BFS opponent</text>
    <text x="45" y="256" fill="#907b61" fontSize="10" letterSpacing="1">ILLUSTRATIVE STRATEGY · NOT AN EVALUATION TRACE</text>
  </svg>;
}
function Context() {
  const colors = ['#767bd4', '#409d97', '#cf895d'];
  return <svg viewBox="0 0 600 270" aria-hidden="true">
    <text x="30" y="30" fill="#5c637d" fontSize="13" letterSpacing="2">APP-USAGE RHYTHMS</text>
    {[65, 117, 169].map((y, row) => <g key={y}>
      <path d={`M30 ${y+22}H350`} stroke="#d5d9e6" />
      {Array.from({length: 16}, (_, i) => {
        const height = 8 + ((i * 13 + row * 19) % 33);
        return <rect key={i} x={34+i*20} y={y+22-height} width="12" height={height} rx="4" fill={colors[row]} opacity={i%3===0 ? '.45' : '.85'} />;
      })}
    </g>)}
    <text x="30" y="220" fill="#697087" fontSize="12">Morning</text><text x="283" y="220" fill="#697087" fontSize="12">Late night</text>
    <path d="M386 40v172" stroke="#c8cedd" />
    {[[460, 75], [514, 139], [445, 178]].map(([x,y], i) => <g key={x}>
      <circle cx={x} cy={y} r="36" fill={colors[i]} opacity=".12" />
      {[[0,0],[-14,-8],[13,-12],[8,14],[-12,12]].map(([dx,dy], j) => <circle key={j} cx={x+dx} cy={y+dy} r={j===0?6:4} fill={colors[i]} />)}
    </g>)}
    <text x="410" y="234" fill="#5c637d" fontSize="12">Behavioral contexts</text>
    <text x="30" y="258" fill="#72788d" fontSize="11" letterSpacing="1">ILLUSTRATIVE PATTERNS · RECOMMENDATION PROTOTYPE</text>
  </svg>;
}
export default function ProjectArt({ kind }) {
  const [label, title, description] = captions[kind];
  const Diagram = { knowledge: Knowledge, narrative: Narrative, football: Football, blocking: Blocking, context: Context }[kind];
  return <div className={`concept-art concept-${kind}`} role="img" aria-label={description}>
    <div className="concept-label">{label}<span>CONCEPT</span></div>
    <div className="concept-title">{title}</div>
    <Diagram />
  </div>;
}
