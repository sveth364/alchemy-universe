/* Иконки эпохи «Цивилизация». Детали — в icons.js, icons-life.js, icons-human.js */

const GOLD = ['#fff1b8', '#ffcf5a', '#b8860b'];
const METAL = ['#ffffff', '#c9cde6', '#6a6f99'];
const STONEW = ['#fff3dc', '#e6dcc8', '#b0a48a'];
// греческий фасад: колонны + фронтон
const temple = (fill, roof, cols = 4, badge = '') => `
  ${linG('__tf', fill)}
  <path d="M6 22 32 8l26 14z" fill="${roof}" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>
  <rect x="8" y="22" width="48" height="5" fill="url(#__tf)" stroke="#fff" stroke-width="1.4"/>
  <g fill="url(#__tf)" stroke="#fff" stroke-width="1.4">${Array.from({ length: cols }, (_, i) =>
    `<rect x="${14 + i * (36 / (cols - 1)) - 3}" y="27" width="6" height="22"/>`).join('')}</g>
  <rect x="6" y="49" width="52" height="5" fill="url(#__tf)" stroke="#fff" stroke-width="1.4"/>
  <rect x="2" y="54" width="60" height="5" rx="1" fill="url(#__tf)" stroke="#fff" stroke-width="1.4"/>${badge}`;

Object.assign(ICONS, {
  city: { color: '#6ee7ff', svg: `
    ${linG('__a', ['#9d7bff', '#3a2a7a'])}${linG('__b', ['#4cc9ff', '#1d3fa0'])}
    <g stroke="#e6dcff" stroke-width="1.6" stroke-linejoin="round">
      <path d="M6 58V30h12v28z" fill="url(#__a)"/><path d="M18 58V14l8-6 8 6v44z" fill="url(#__b)"/>
      <path d="M34 58V24h12v34z" fill="url(#__a)"/><path d="M46 58V34h12v24z" fill="url(#__b)"/>
    </g>
    <path d="M26 8V2" stroke="#e6dcff" stroke-width="1.6"/><circle cx="26" cy="2" r="1.4" fill="#ff5fa2"/>
    <g fill="#ffe066">${[[9, 34], [13, 40], [9, 46], [22, 18], [28, 24], [22, 30], [28, 36], [22, 44], [37, 28], [41, 36], [37, 44], [49, 38], [53, 46]].map(([x, y]) =>
      `<rect x="${x}" y="${y}" width="3" height="3" rx=".5"/>`).join('')}</g>
    <path d="M2 58h60" stroke="#c77dff" stroke-width="2.4" stroke-linecap="round"/>` },

  civ: { color: '#fff3dc', svg: `${temple(STONEW, '#e6dcc8')}<circle cx="32" cy="16" r="2.6" fill="#ffcf5a"/>${spark(54, 8, 3)}` },

  paper: { color: '#fff3dc', svg: `
    ${linG('__p', ['#fffaf0', '#f0e0c0'])}
    <rect x="14" y="12" width="36" height="40" fill="url(#__p)" stroke="#fff" stroke-width="1.8"/>
    <g fill="#e0c9a0" stroke="#fff" stroke-width="1.6"><rect x="10" y="6" width="44" height="8" rx="4"/><rect x="10" y="50" width="44" height="8" rx="4"/></g>
    <g stroke="#c9a27a" stroke-width="1.6" stroke-linecap="round" opacity=".6"><path d="M20 22h24M20 28h20M20 34h24M20 40h16"/></g>` },

  writing: { color: '#c77dff', svg: `
    ${linG('__p', ['#fffaf0', '#f0e0c0'])}
    <rect x="6" y="20" width="34" height="38" rx="2" fill="url(#__p)" stroke="#fff" stroke-width="1.8" transform="rotate(-6 23 39)"/>
    <g stroke="#6c4fe0" stroke-width="1.6" stroke-linecap="round" opacity=".75" transform="rotate(-6 23 39)">
      <path d="M11 30c3-2 5 2 8 0s5-2 8 0 4 1 6 0M11 38c3-2 5 2 8 0s5-2 8 0M11 46c3-2 5 2 8 0"/></g>
    ${linG('__q', ['#ffffff', '#e6dcff', '#c77dff'], 1, 1)}
    <path d="M58 4C46 6 36 18 32 34l4 2C44 24 54 14 58 4z" fill="url(#__q)" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M34 34l-4 10" stroke="#2a1f4a" stroke-width="2" stroke-linecap="round"/>` },

  book: { color: '#ff8fd1', svg: `
    ${linG('__c', ['#ff8fd1', '#9d7bff'])}
    <path d="M4 50V16c10-4 20-2 28 4 8-6 18-8 28-4v34c-10-4-20-2-28 4-8-6-18-8-28-4z" fill="url(#__c)" stroke="#ffd6ef" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M7 46V14c9-3 18-1 25 5 7-6 16-8 25-5v32c-9-3-18-1-25 5-7-6-16-8-25-5z" fill="#fffaf0" stroke="#fff" stroke-width="1.2"/>
    <path d="M32 19v32" stroke="#e0c9a0" stroke-width="1.6"/>
    <g stroke="#c9b6ff" stroke-width="1.4" stroke-linecap="round"><path d="M12 22c6-2 10-1 15 2M12 28c6-2 10-1 15 2M12 34c6-2 10-1 15 2M37 24c5-3 9-4 15-2M37 30c5-3 9-4 15-2M37 36c5-3 9-4 15-2"/></g>` },

  library: { color: '#c68b59', svg: `
    ${linG('__s', ['#c68b59', '#6b4020'])}
    <rect x="4" y="6" width="56" height="52" rx="3" fill="url(#__s)" stroke="#f0c9a0" stroke-width="2"/>
    <path d="M6 31h52" stroke="#f0c9a0" stroke-width="2"/>
    ${[[9, 11, 6, '#ff5f8a'], [16, 13, 5, '#4cc9ff'], [22, 10, 6, '#ffd166'], [29, 14, 5, '#3ddc84'], [35, 12, 7, '#c77dff'], [43, 13, 5, '#ff9f43'], [49, 11, 6, '#6ee7ff'],
       [9, 37, 7, '#c77dff'], [17, 39, 5, '#ffd166'], [23, 36, 6, '#ff5f8a'], [30, 38, 5, '#4cc9ff'], [36, 36, 6, '#3ddc84'], [43, 40, 5, '#ff9f43'], [49, 37, 6, '#ff8fd1']]
      .map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${(y < 30 ? 30 : 56) - y}" rx="1" fill="${c}" stroke="#fff" stroke-width=".9"/>`).join('')}` },

  knowledge: { color: '#ff8fd1', svg: `
    ${radG('__g', ['#ffe6f4', '#ff9fd6', '#c2449b'])}
    <path d="M31 10c-6-4-14 0-14 6-6 0-10 6-8 12-4 4-2 12 4 14 0 6 6 10 12 8 2 4 4 4 6 2zM33 10c6-4 14 0 14 6 6 0 10 6 8 12 4 4 2 12-4 14 0 6-6 10-12 8-2 4-4 4-6 2z"
      fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke="#c2449b" stroke-width="1.6" stroke-linecap="round" opacity=".7">
      <path d="M20 22c4 0 6 2 6 6M16 34c4-2 8 0 8 4M24 46c0-4 2-6 6-6M44 22c-4 0-6 2-6 6M48 34c-4-2-8 0-8 4M40 46c0-4-2-6-6-6"/></g>
    ${spark(54, 8, 4)}${spark(10, 8, 3, '#9ff')}${spark(32, 4, 2.5, '#ffe08a')}` },

  school: { color: '#ffb347', svg: `
    ${linG('__w', ['#ffd1a8', '#e07a4f'])}
    <path d="M6 58V30h52v28z" fill="url(#__w)" stroke="#ffe0cc" stroke-width="1.8"/>
    <path d="M24 30V16l8-6 8 6v14z" fill="url(#__w)" stroke="#ffe0cc" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M22 17l10-9 10 9" fill="none" stroke="#4cc9ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="32" cy="21" r="3.4" fill="#ffd166" stroke="#fff" stroke-width="1.2"/>
    <g fill="#bfefff" stroke="#fff" stroke-width="1.2">${[10, 18, 42, 50].map(x => `<rect x="${x}" y="36" width="5" height="7" rx="1"/>`).join('')}</g>
    <path d="M27 58V44a5 5 0 0 1 10 0v14z" fill="#8a5a36" stroke="#ffe0cc" stroke-width="1.4"/>
    <path d="M32 8V2l6 2-6 2" fill="#ff5fa2" stroke="#fff" stroke-width="1"/>` },

  university: { color: '#9d7bff', svg: `
    ${linG('__c', ['#6c4fe0', '#2a1670'])}
    <path d="M18 30v12c0 4 6 8 14 8s14-4 14-8V30" fill="url(#__c)" stroke="#d9ccff" stroke-width="1.8"/>
    <path d="M32 12 2 24l30 12 30-12z" fill="url(#__c)" stroke="#d9ccff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 24l18 6v14" fill="none" stroke="#ffd166" stroke-width="2" stroke-linecap="round"/>
    <path d="M47 44h6l-1 10h-4z" fill="#ffd166" stroke="#fff3c4" stroke-width="1.2" stroke-linejoin="round"/>
    <circle cx="32" cy="24" r="2.2" fill="#ffd166"/>${spark(54, 8, 3)}` },

  science: { color: '#3ddc84', svg: `
    <path d="M24 6h16M26 6v16L10 50c-2 4 0 8 4 8h36c4 0 6-4 4-8L38 22V6" fill="#bfefff" fill-opacity=".15" stroke="#e0fbff" stroke-width="2.2" stroke-linejoin="round"/>
    ${linG('__g', ['#a6ff8a', '#1fae5a'])}
    <path d="M16 40h32l6 10c2 4 0 8-4 8H14c-4 0-6-4-4-8z" fill="url(#__g)"/>
    <path d="M16 40c5-2 9 2 16 0s11-2 16 0" fill="none" stroke="#d9ffc4" stroke-width="1.6"/>
    <g fill="#d9ffc4"><circle cx="26" cy="48" r="2.4"/><circle cx="36" cy="52" r="1.6"/><circle cx="34" cy="32" r="2"/><circle cx="30" cy="22" r="1.4"/></g>
    <path d="M28 12v10" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>${spark(54, 10, 3.5)}` },

  coin: { color: '#ffcf5a', svg: `
    ${radG('__g', GOLD, .4, .35, .75)}
    <ellipse cx="34" cy="34" rx="22" ry="22" fill="#b8860b"/>
    <circle cx="31" cy="31" r="22" fill="url(#__g)" stroke="#fff1b8" stroke-width="2"/>
    <circle cx="31" cy="31" r="16" fill="none" stroke="#b8860b" stroke-width="1.6" stroke-dasharray="2 2"/>
    <path d="${burst(31, 31, 5, 9, 4)}" fill="#fff6cc" stroke="#b8860b" stroke-width="1.2"/>
    ${shine(21, 20, 4, 2, .6)}${spark(55, 10, 3.5)}` },

  money: { color: '#3ddc84', svg: `
    ${linG('__g', ['#b6ffcf', '#3ddc84', '#128a52'], 1, 1)}
    <rect x="10" y="12" width="48" height="28" rx="3" fill="#128a52" stroke="#d9ffc4" stroke-width="1.6" transform="rotate(-8 34 26)"/>
    <rect x="6" y="22" width="48" height="28" rx="3" fill="url(#__g)" stroke="#e8ffe8" stroke-width="2"/>
    <rect x="10" y="26" width="40" height="20" rx="2" fill="none" stroke="#e8ffe8" stroke-width="1.2" opacity=".7"/>
    <circle cx="30" cy="36" r="7" fill="#e8ffe8" stroke="#128a52" stroke-width="1.4"/>
    <path d="${burst(30, 36, 5, 4.6, 2)}" fill="#3ddc84"/>
    <g fill="#e8ffe8"><circle cx="14" cy="30" r="1.6"/><circle cx="46" cy="42" r="1.6"/></g>` },

  market: { color: '#ff8fd1', svg: `
    <path d="M10 26v30M54 26v30" stroke="#c68b59" stroke-width="3" stroke-linecap="round"/>
    <clipPath id="__c"><path d="M4 12h56l-4 16H8z"/></clipPath>
    <path d="M4 12h56l-4 16H8z" fill="#fff"/>
    <g clip-path="url(#__c)" fill="#ff5f8a">${[4, 18, 32, 46].map(x => `<rect x="${x}" y="10" width="7" height="20"/>`).join('')}</g>
    <path d="M4 12h56l-4 16H8z" fill="none" stroke="#ffd6ef" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M8 28c2 3 6 3 8 0 2 3 6 3 8 0 2 3 6 3 8 0 2 3 6 3 8 0 2 3 6 3 8 0 2 3 6 3 8 0" fill="#ff5f8a" stroke="#ffd6ef" stroke-width="1.2"/>
    ${linG('__t', ['#e0a86a', '#8a5a36'])}<rect x="8" y="44" width="48" height="8" rx="1.5" fill="url(#__t)" stroke="#f0c9a0" stroke-width="1.4"/>
    <g stroke="#fff" stroke-width="1"><circle cx="16" cy="41" r="3.6" fill="#ff4d6d"/><circle cx="24" cy="41" r="3.6" fill="#ff9f43"/><circle cx="34" cy="41" r="3.6" fill="#3ddc84"/><circle cx="44" cy="41" r="3.6" fill="#ffd166"/></g>` },

  bank: { color: '#ffcf5a', svg: `${temple(['#fff6cc', '#e6dcc8'], '#fff1b8', 4,
    `${radG('__k', GOLD)}<circle cx="32" cy="17" r="4" fill="url(#__k)" stroke="#fff" stroke-width="1.2"/>`)}${spark(54, 8, 3)}` },

  king: { color: '#ffcf5a', svg: `
    ${linG('__g', GOLD)}
    <path d="M8 22l10 10 14-18 14 18 10-10-4 28H12z" fill="url(#__g)" stroke="#fff1b8" stroke-width="2" stroke-linejoin="round"/>
    <rect x="10" y="48" width="44" height="8" rx="2" fill="url(#__g)" stroke="#fff1b8" stroke-width="1.8"/>
    <g stroke="#fff" stroke-width="1"><circle cx="8" cy="20" r="3" fill="#ff4d6d"/><circle cx="32" cy="12" r="3.4" fill="#4cc9ff"/><circle cx="56" cy="20" r="3" fill="#ff4d6d"/>
    <circle cx="22" cy="52" r="2.4" fill="#3ddc84"/><circle cx="32" cy="52" r="2.6" fill="#c77dff"/><circle cx="42" cy="52" r="2.4" fill="#3ddc84"/></g>
    <path d="M32 36l4 4-4 4-4-4z" fill="#ff5fa2" stroke="#fff" stroke-width="1"/>${spark(54, 6, 3)}` },

  castle: { color: '#c9b6ff', svg: `
    ${linG('__s', ['#e6dcff', '#8a83b8'])}
    <path d="M4 58V22h4v-4h4v4h4v-4h4v4h4v36z" fill="url(#__s)" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M40 58V22h4v-4h4v4h4v-4h4v4h4v36z" fill="url(#__s)" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M18 58V32h4v-4h4v4h4v-4h4v4h4v-4h4v4h2v26z" fill="url(#__s)" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M26 58V48a6 6 0 0 1 12 0v10z" fill="#4a2c5c" stroke="#fff" stroke-width="1.4"/>
    <path d="M14 18V6l8 3-8 3M50 18V6l8 3-8 3" fill="#ff5fa2" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>
    <g fill="#ffe066"><rect x="12" y="30" width="3" height="5" rx="1"/><rect x="49" y="30" width="3" height="5" rx="1"/></g>` },

  pyramid: { color: '#ffd166', svg: `
    ${ball('__s', 50, 14, 6, ['#fffbe0', '#ffd166', '#ff9f1c'], '#fff3c4', 1.4)}
    <path d="M32 12 4 52h28z" fill="#ffd166" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 12l28 40H32z" fill="#d99a2b" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <g stroke="#b8860b" stroke-width="1.1" opacity=".55"><path d="M10 44h22M16 36h16M22 28h10M32 44h22M32 36h17M32 28h11"/></g>
    <path d="M2 54c10-3 20 1 30 0s20-3 30 0v6H2z" fill="#ffe08a" stroke="#fff3c4" stroke-width="1.4"/>` },

  road: { color: '#a9a4c8', svg: `
    <path d="M2 58h60" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    ${linG('__r', ['#8a83b8', '#3d3866'])}
    <path d="M26 6h12l20 52H6z" fill="url(#__r)" stroke="#e6e3f5" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#ffe066"><path d="M31 10h2v6h-2zM30.6 22h2.8v8h-2.8zM30 36h4v10h-4z"/></g>
    ${spark(54, 12, 3)}${spark(10, 14, 2.5, '#9ff')}` },

  bridge: { color: '#e6dcc8', svg: `
    ${linG('__w', ['#6ee7ff', '#3a6fd8'])}
    <path d="M2 50c8-3 14 3 22 0s14-3 22 0 12 2 16 0v12H2z" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.4"/>
    ${linG('__s', STONEW)}
    <path d="M2 26h60v8c-6 0-10 4-12 14h-6c-2-8-6-12-12-12s-10 4-12 12h-6c-2-10-6-14-12-14z" fill="url(#__s)" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M2 26h60" stroke="#c68b59" stroke-width="3" stroke-linecap="round"/>
    <g stroke="#fff" stroke-width="1.6"><path d="M6 26v-6M16 26v-6M26 26v-6M38 26v-6M48 26v-6M58 26v-6M4 20h56"/></g>` },

  statue: { color: '#a9a4c8', svg: `
    ${linG('__s', ['#d9d4f2', '#8a83b8', '#4d4775'], 1, 0)}
    <path d="M18 58V20c0-10 6-16 14-16s12 6 12 14v8l-2 6 4 4-4 4v18z" fill="url(#__s)" stroke="#f1effa" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 22h12" stroke="#2a2650" stroke-width="3" stroke-linecap="round"/>
    <path d="M36 22l4 14" stroke="#2a2650" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M28 44h10" stroke="#2a2650" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M12 58h40" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>${spark(54, 10, 3)}` },

  theatre: { color: '#ffd166', svg: `
    <g stroke="#fff" stroke-width="1.8" stroke-linejoin="round">
      <path d="M8 10c8-4 18-4 26 0v18c0 10-6 16-13 16S8 38 8 28z" fill="#ffd166"/>
      <path d="M30 22c8-4 18-4 26 0v18c0 10-6 16-13 16s-13-6-13-16z" fill="#c77dff"/>
    </g>
    <g fill="#2a1f4a"><path d="M13 20c2-2 4-2 6 0M23 20c2-2 4-2 6 0" stroke="#2a1f4a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M14 30c3 5 11 5 14 0z"/><path d="M35 33c2 1 4 1 6-1M45 32c2 2 4 2 6 1" stroke="#2a1f4a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M37 48c3-5 9-5 12 0z"/></g>` },

  guitar: { color: '#ff9f43', svg: `
    <path d="M38 26 56 8" stroke="#6b4020" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 6l6 6" stroke="#2a1f4a" stroke-width="5" stroke-linecap="round"/>
    ${radG('__g', ['#ffd1a8', '#ff9f43', '#a8501a'])}
    <path d="M24 22c6-6 14-4 16 2s-2 8 0 12-2 14-12 18-20-2-22-10 2-14 8-14 4-4 10-8z" fill="url(#__g)" stroke="#ffe0b0" stroke-width="2"/>
    <circle cx="27" cy="38" r="5" fill="#4a2414" stroke="#ffe0b0" stroke-width="1.2"/>
    <path d="M20 46l6-6M38 26 26 38" stroke="#fff3dc" stroke-width="1" opacity=".8"/>
    <path d="M17 44l8 8" stroke="#4a2414" stroke-width="2.4" stroke-linecap="round"/>` },

  hammer: { color: '#c9cde6', svg: `
    ${linG('__h', ['#e0a86a', '#6b4020'], 1, 0)}
    <path d="M30 26 12 58" stroke="#f0c9a0" stroke-width="8" stroke-linecap="round"/><path d="M30 26 12 58" stroke="url(#__h)" stroke-width="5" stroke-linecap="round"/>
    ${linG('__m', METAL)}
    <path d="M18 14l20-10 12 22-20 10z" fill="url(#__m)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 14l14-7" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>${spark(54, 44, 3.5)}` },

  sword: { color: '#bfefff', svg: `
    ${linG('__b', ['#ffffff', '#bfefff', '#7f86a8'], 1, 0)}
    <path d="M52 4 22 36l6 6L60 12z" fill="url(#__b)" stroke="#fff" stroke-width="1.8" stroke-linejoin="round" transform="translate(-2 2)"/>
    <path d="M50 8 24 36" stroke="#fff" stroke-width="1.2" opacity=".8"/>
    <path d="M16 34l14 14" stroke="#ffcf5a" stroke-width="5" stroke-linecap="round"/>
    <path d="M24 42 10 56" stroke="#8a5a36" stroke-width="5" stroke-linecap="round"/>
    ${ball('__p', 9, 57, 3.6, GOLD, '#fff1b8', 1.2)}<circle cx="23" cy="41" r="2" fill="#ff4d6d"/>` },

  gear: { color: '#c9cde6', svg: `
    ${radG('__g', METAL)}
    <path d="${burst(32, 32, 10, 26, 20)}" fill="url(#__g)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="32" cy="32" r="16" fill="url(#__g)" stroke="#fff" stroke-width="1.4"/>
    <circle cx="32" cy="32" r="7" fill="#2a2650" stroke="#fff" stroke-width="2"/>
    ${shine(24, 22, 4, 2, .5)}` },

  clock: { color: '#ffcf5a', svg: `
    <path d="M32 10c-4-6 4-8 4-2" fill="none" stroke="#ffcf5a" stroke-width="2"/>
    <path d="M36 6c8 0 14 2 20-2" fill="none" stroke="#ffcf5a" stroke-width="1.6" stroke-dasharray="2 2"/>
    <rect x="29" y="8" width="6" height="5" rx="1.5" fill="#ffcf5a" stroke="#fff1b8" stroke-width="1"/>
    ${radG('__g', GOLD)}<circle cx="32" cy="36" r="22" fill="url(#__g)" stroke="#fff1b8" stroke-width="2"/>
    <circle cx="32" cy="36" r="17" fill="#fffaf0" stroke="#b8860b" stroke-width="1.4"/>
    <g fill="#2a1f4a">${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6;
      return `<circle cx="${(32 + 14 * Math.sin(a)).toFixed(1)}" cy="${(36 - 14 * Math.cos(a)).toFixed(1)}" r="${i % 3 ? .9 : 1.5}"/>`; }).join('')}</g>
    <path d="M32 36V25M32 36l7 5" stroke="#2a1f4a" stroke-width="2.2" stroke-linecap="round"/><circle cx="32" cy="36" r="1.8" fill="#ff4d6d"/>` },

  lens: { color: '#6ee7ff', svg: `
    <path d="M40 40l16 16" stroke="#8a5a36" stroke-width="8" stroke-linecap="round"/>
    ${radG('__g', ['#ffffff', '#bfefff', '#6ee7ff'], .35, .3, .8)}
    <circle cx="26" cy="26" r="18" fill="url(#__g)" fill-opacity=".45" stroke="#ffcf5a" stroke-width="4"/>
    <path d="M16 20a12 12 0 0 1 8-8" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
    ${spark(30, 30, 4)}` },

  microscope: { color: '#c9cde6', svg: `
    ${linG('__m', ['#e6e9ff', '#7f86a8'])}
    <path d="M10 56h40" stroke="#c9cde6" stroke-width="5" stroke-linecap="round"/>
    <path d="M44 56c6-6 6-18 0-24" fill="none" stroke="#8a83b8" stroke-width="5" stroke-linecap="round"/>
    <path d="M22 46h24" stroke="#c9cde6" stroke-width="3" stroke-linecap="round"/>
    <rect x="26" y="8" width="10" height="28" rx="3" fill="url(#__m)" stroke="#fff" stroke-width="1.8" transform="rotate(-25 31 22)"/>
    <rect x="22" y="4" width="10" height="6" rx="2" fill="#9d7bff" stroke="#fff" stroke-width="1.4" transform="rotate(-25 27 7)"/>
    <path d="M36 36l-2 6" stroke="#6ee7ff" stroke-width="2" stroke-linecap="round"/>
    <circle cx="33" cy="45" r="2" fill="#3ddc84"/>` },

  telescope: { color: '#9d7bff', svg: `
    ${linG('__t', ['#c9b6ff', '#4b2bb0'])}
    <path d="M30 34 18 58M34 34l12 24M32 34v24" stroke="#c68b59" stroke-width="2.6" stroke-linecap="round"/>
    <g transform="rotate(-30 32 30)">
      <rect x="10" y="24" width="44" height="12" rx="4" fill="url(#__t)" stroke="#e6dcff" stroke-width="2"/>
      <rect x="4" y="26" width="8" height="8" rx="2" fill="#ffcf5a" stroke="#fff1b8" stroke-width="1.4"/>
      <rect x="52" y="22" width="6" height="16" rx="2" fill="#ffcf5a" stroke="#fff1b8" stroke-width="1.4"/>
    </g>
    ${spark(54, 8, 4.5)}${spark(42, 4, 2.5, '#9ff')}` },

  compass: { color: '#ffcf5a', svg: `
    ${radG('__g', GOLD)}<circle cx="32" cy="32" r="25" fill="url(#__g)" stroke="#fff1b8" stroke-width="2"/>
    <circle cx="32" cy="32" r="20" fill="#fffaf0" stroke="#b8860b" stroke-width="1.4"/>
    <g fill="#2a1f4a" font-size="6" font-weight="800" font-family="system-ui,sans-serif" text-anchor="middle">
      <text x="32" y="18">N</text><text x="32" y="51">S</text><text x="47" y="34">E</text><text x="17" y="34">W</text></g>
    <path d="M32 32l-4 0 4-14 4 14z" fill="#ff4d6d"/><path d="M32 32l4 0-4 14-4-14z" fill="#4cc9ff"/>
    <circle cx="32" cy="32" r="2" fill="#fff" stroke="#2a1f4a" stroke-width="1"/>` },

  map: { color: '#ffd166', svg: `
    ${linG('__p', ['#fff3dc', '#f0d8a8'])}
    <path d="M4 14l18-6 20 6 18-6v42l-18 6-20-6-18 6z" fill="url(#__p)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 8v42M42 14v42" stroke="#e0c9a0" stroke-width="1.6"/>
    <path d="M10 42c6-4 10-14 18-12s10 10 16 6 8-12 10-14" fill="none" stroke="#ff5fa2" stroke-width="2.2" stroke-dasharray="3 3" stroke-linecap="round"/>
    <path d="M50 18l6 6M56 18l-6 6" stroke="#ff4d6d" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M10 22c4-2 6 2 8 0" fill="none" stroke="#3ddc84" stroke-width="2" stroke-linecap="round"/>` },

  ship: { color: '#4cc9ff', svg: `
    <path d="M22 8v34M40 12v30" stroke="#c68b59" stroke-width="2.4" stroke-linecap="round"/>
    <g fill="#fffaf0" stroke="#fff" stroke-width="1.4" stroke-linejoin="round">
      <path d="M12 12c6 4 6 14 0 18h20c-6-4-6-14 0-18z"/><path d="M30 16c6 4 6 12 0 16h18c-6-4-6-12 0-16z"/></g>
    <path d="M22 4l8 3-8 3z" fill="#ff5fa2"/>
    ${linG('__h', ['#c68b59', '#5a3420'])}
    <path d="M4 38h56l-8 14H12z" fill="url(#__h)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#ffe066"><circle cx="20" cy="44" r="1.8"/><circle cx="30" cy="44" r="1.8"/><circle cx="40" cy="44" r="1.8"/></g>
    ${water(52)}` },

  anchor: { color: '#c9cde6', svg: `
    ${linG('__m', METAL, 1, 1)}
    <g fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"><path d="M32 16v40M12 38c0 10 10 18 20 18s20-8 20-18M22 24h20"/></g>
    <g fill="none" stroke="url(#__m)" stroke-width="5" stroke-linecap="round"><path d="M32 16v40M12 38c0 10 10 18 20 18s20-8 20-18M22 24h20"/></g>
    <circle cx="32" cy="11" r="5" fill="none" stroke="#c9cde6" stroke-width="3.5"/>
    <path d="M8 40l4-4 4 4M48 40l4-4 4 4" fill="none" stroke="#c9cde6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` },

  lantern: { color: '#ffb347', svg: `
    ${halo('__h', 32, 36, 24, '#ffb347', .45)}
    <path d="M26 8a6 6 0 0 1 12 0" fill="none" stroke="#c9cde6" stroke-width="2.4"/>
    <path d="M20 14h24l-2 6H22z" fill="#5b5680" stroke="#c9cde6" stroke-width="1.6" stroke-linejoin="round"/>
    <rect x="20" y="20" width="24" height="28" rx="3" fill="#ffd166" fill-opacity=".3" stroke="#c9cde6" stroke-width="2"/>
    ${flame(32, 44, .7)}
    <path d="M20 48h24l-2 6H22z" fill="#5b5680" stroke="#c9cde6" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M26 20v28M38 20v28" stroke="#c9cde6" stroke-width="1.4" opacity=".6"/>` },

  umbrella: { color: '#ff5fa2', svg: `
    <g stroke="#6ee7ff" stroke-width="2" stroke-linecap="round"><path d="M10 6l-2 5M22 4l-2 5M44 4l-2 5M56 6l-2 5"/></g>
    ${linG('__g', ['#ff8fd1', '#c2185b'])}
    <path d="M4 34C4 20 16 10 32 10s28 10 28 24c-4-3-8-3-10 0-4-3-10-3-12 0-2-3-8-3-12 0-2-3-8-3-12 0-2-3-6-3-10 0z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 10v0M20 30c0-8 4-16 12-20M44 30c0-8-4-16-12-20" fill="none" stroke="#ffd6ef" stroke-width="1.4" opacity=".7"/>
    <path d="M32 32v20c0 6-8 6-8 0" fill="none" stroke="#c9cde6" stroke-width="3" stroke-linecap="round"/>` },

  ladder: { color: '#e0a86a', svg: `
    ${linG('__w', ['#f0c9a0', '#a8703a'], 1, 0)}
    <g stroke="#fff3dc" stroke-width="7" stroke-linecap="round"><path d="M20 4 14 60M44 4l6 56"/></g>
    <g stroke="url(#__w)" stroke-width="4.5" stroke-linecap="round"><path d="M20 4 14 60M44 4l6 56"/></g>
    <g stroke="#e0a86a" stroke-width="3.5" stroke-linecap="round"><path d="M19 14h26M18 26h28M16 38h31M15 50h33"/></g>
    ${spark(56, 10, 3)}` },

  steel: { color: '#c9cde6', svg: `
    ${linG('__m', METAL)}
    <path d="M8 14h48v8H38v20h18v8H8v-8h18V22H8z" fill="url(#__m)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12 17h40" stroke="#fff" stroke-width="1.6" opacity=".8"/>
    <g fill="#6a6f99"><circle cx="14" cy="46" r="1.4"/><circle cx="50" cy="46" r="1.4"/><circle cx="14" cy="18" r="1.4"/><circle cx="50" cy="18" r="1.4"/></g>
    ${spark(54, 6, 3.5)}${spark(8, 58, 2.5, '#9ff')}` },

  medicine: { color: '#ff5fa2', svg: `
    <g transform="rotate(-35 32 30)">
      <path d="M20 22h12v16H20a8 8 0 0 1 0-16z" fill="#ff5fa2" stroke="#ffd6ef" stroke-width="2"/>
      <path d="M32 22h12a8 8 0 0 1 0 16H32z" fill="#ffffff" stroke="#ffd6ef" stroke-width="2"/>
      <path d="M18 26h10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    </g>
    ${ball('__a', 16, 50, 6, ['#ffffff', '#bfefff', '#4cc9ff'], '#fff', 1.4)}
    ${ball('__b', 46, 52, 5, ['#fffbe0', '#ffd166', '#e09b00'], '#fff', 1.4)}
    <path d="M12 50h8" stroke="#4cc9ff" stroke-width="1.2"/>${spark(54, 10, 3)}` },

  hospital: { color: '#ff4d6d', svg: `
    ${linG('__w', ['#ffffff', '#dfe7ff'])}
    <path d="M8 58V20h48v38z" fill="url(#__w)" stroke="#fff" stroke-width="2"/>
    <path d="M4 20h56" stroke="#9fc4e8" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 6h8v6h6v8h-6v6h-8v-6h-6v-8h6z" fill="#ff4d6d" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" transform="translate(0 4) scale(1 .9)"/>
    <g fill="#9fdcff" stroke="#fff" stroke-width="1">${[[13, 30], [23, 30], [37, 30], [47, 30], [13, 42], [47, 42]].map(([x, y]) =>
      `<rect x="${x}" y="${y}" width="5" height="6" rx="1"/>`).join('')}</g>
    <path d="M25 58V44h14v14z" fill="#6ee7ff" stroke="#fff" stroke-width="1.6"/><path d="M32 44v14" stroke="#fff" stroke-width="1.2"/>` },

  // ── расширение «Космоса» ──
  // мыло — розовый брусок в мыльных пузырях
  soap: { color: '#ff8fd1', svg: `
    ${linG('__s', ['#ffe0f2', '#ff8fd1', '#c2417f'], 1, 1)}
    <g transform="rotate(-12 30 42)"><rect x="10" y="32" width="38" height="20" rx="8" fill="url(#__s)" stroke="#ffe0f2" stroke-width="2"/>
      <rect x="16" y="36" width="26" height="6" rx="3" fill="#fff" opacity=".35"/></g>
    <g fill="#bfefff" fill-opacity=".18" stroke="#e0fbff" stroke-width="1.6">
      <circle cx="44" cy="16" r="9"/><circle cx="26" cy="18" r="6"/><circle cx="54" cy="34" r="5"/><circle cx="14" cy="28" r="3.5"/></g>
    ${shine(41, 13, 3, 1.6, .8)}${shine(24, 16, 2, 1.1, .8)}${shine(53, 32, 1.6, .9, .8)}
    ${spark(56, 54, 3)}${spark(32, 4, 2.4, '#9ff')}` },

  // ── расширение «Космоса», этап 2 ──
  // антибиотик — чашка Петри: плесень и чистый круг вокруг неё (открытие Флеминга)
  antibiotic: { color: '#6ee7ff', svg: `
    ${linG('__d', ['#e0fbff', '#9ad7ff'])}
    <ellipse cx="32" cy="38" rx="27" ry="17" fill="#bfefff" fill-opacity=".18" stroke="#e0fbff" stroke-width="2.4"/>
    <ellipse cx="32" cy="36" rx="23" ry="13" fill="#ffe8a8" fill-opacity=".85" stroke="#fff3c4" stroke-width="1.2"/>
    <g fill="#ff9f43"><circle cx="14" cy="34" r="1.8"/><circle cx="18" cy="42" r="2"/><circle cx="48" cy="30" r="1.8"/><circle cx="50" cy="40" r="2.2"/><circle cx="22" cy="28" r="1.4"/><circle cx="44" cy="45" r="1.6"/></g>
    <ellipse cx="32" cy="36" rx="12" ry="7" fill="#fffbe8" stroke="#fff" stroke-width="1" opacity=".95"/>
    ${radG('__m', GREEN, .4, .35, .7)}
    <path d="M26 36c0-4 3-6 6-5 2-3 7-2 7 2 3 0 4 4 1 5-1 3-5 3-7 2-3 2-7 0-7-4z" fill="url(#__m)" stroke="#d9ffc4" stroke-width="1.2"/>
    <path d="M7 34C9 26 20 20 32 20S55 26 57 34" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>
    ${spark(54, 10, 3.4)}${spark(10, 12, 2.4, '#ffd6ff')}` },

  // обсерватория — купол со щелью на горе, из щели смотрит телескоп
  observatory: { color: '#c9b6ff', svg: `
    ${linG('__g', ['#9d7bff', '#3b2a8f'])}${linG('__d', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 0)}
    <path d="M2 62L20 40L30 46L42 34L62 62Z" fill="url(#__g)" stroke="#c9b6ff" stroke-width="1.6" stroke-linejoin="round"/>
    <rect x="22" y="38" width="22" height="10" fill="url(#__d)" stroke="#fff" stroke-width="1.6"/>
    <path d="M20 38a13 13 0 0 1 26 0Z" fill="url(#__d)" stroke="#fff" stroke-width="2"/>
    <path d="M33 26h4v12h-4z" fill="#1a1240"/>
    <path d="M34 30L46 14" stroke="#ffcf5a" stroke-width="4.5" stroke-linecap="round"/><path d="M45.5 14.5L47.5 12" stroke="#fff3c4" stroke-width="5" stroke-linecap="round"/>
    <rect x="30" y="42" width="6" height="6" rx="1" fill="#6ee7ff"/>
    ${spark(54, 8, 3.6)}${spark(12, 14, 2.6, '#9ff')}${spark(26, 8, 2, '#ffd6ff')}` },
});
