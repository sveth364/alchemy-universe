/* Иконки эпохи «Технологии». Детали — в icons.js и файлах предыдущих эпох */

const DARKM = ['#8a83b8', '#3d3866', '#1e1a33'];
// колесо: x, y, r
const tyre = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2a2650" stroke="#c9c3ec" stroke-width="2"/>
  <circle cx="${x}" cy="${y}" r="${r * .45}" fill="#c9cde6" stroke="#fff" stroke-width="1"/>`;
const screenGlow = (x, y, w, h, arr = ['#6ee7ff', '#9d7bff']) =>
  `${linG('__sc', arr, 1, 1)}<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="url(#__sc)"/>`;

Object.assign(ICONS, {
  steamengine: { color: '#ff5f5f', svg: `
    ${cloudShape([[14, 10, 5], [21, 7, 6], [28, 9, 5]], '#ffffff', '#e6dcff', 1.6)}
    <rect x="14" y="14" width="7" height="12" fill="#3d3866" stroke="#c9c3ec" stroke-width="1.6"/>
    ${linG('__b', ['#ff8f8f', '#c1121f'])}
    <rect x="6" y="26" width="34" height="16" rx="6" fill="url(#__b)" stroke="#ffd1d1" stroke-width="1.8"/>
    <rect x="38" y="16" width="18" height="26" rx="2" fill="url(#__b)" stroke="#ffd1d1" stroke-width="1.8"/>
    <rect x="42" y="20" width="10" height="8" rx="1.5" fill="#ffe066" stroke="#fff" stroke-width="1.2"/>
    <path d="M36 14h22" stroke="#3d3866" stroke-width="3" stroke-linecap="round"/>
    <path d="M2 42l6 4h4" fill="none" stroke="#ffcf5a" stroke-width="2.4" stroke-linejoin="round"/>
    ${tyre(16, 48, 7)}${tyre(32, 48, 7)}${tyre(49, 49, 6)}
    <path d="M16 48h33" stroke="#ffcf5a" stroke-width="2"/>` },

  train: { color: '#6ee7ff', svg: `
    ${linG('__b', ['#ffffff', '#c9d6ff'])}
    <path d="M4 46V26c0-6 4-10 10-10h26c12 0 20 10 20 22v8z" fill="url(#__b)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M4 38h56" stroke="#ff5f8a" stroke-width="4"/>
    ${screenGlow(42, 20, 12, 10)}
    <g fill="#4cc9ff" stroke="#fff" stroke-width="1">${[8, 18, 28].map(x => `<rect x="${x}" y="22" width="8" height="8" rx="1.5"/>`).join('')}</g>
    <g fill="#5b5680">${[12, 26, 44].map(x => `<circle cx="${x}" cy="48" r="3"/>`).join('')}</g>
    <path d="M2 54h60M8 58h4M20 58h4M32 58h4M44 58h4" stroke="#c9c3ec" stroke-width="2" stroke-linecap="round"/>` },

  factory: { color: '#a9a4c8', svg: `
    ${cloudShape([[46, 10, 4], [51, 7, 5], [56, 10, 4]], '#ffffff', '#e6dcff', 1.4)}
    <rect x="44" y="12" width="7" height="22" fill="#c1351f" stroke="#ffd1c2" stroke-width="1.4"/>
    ${linG('__w', ['#c9c3ec', '#5b5680'])}
    <path d="M4 58V30l12-8v8l12-8v8l12-8v8h18v28z" fill="url(#__w)" stroke="#f1effa" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#ffe066" stroke="#fff" stroke-width="1">${[10, 22, 34, 46].map(x => `<rect x="${x}" y="38" width="7" height="6" rx="1"/>`).join('')}</g>
    <rect x="24" y="48" width="12" height="10" fill="#3d3866" stroke="#fff" stroke-width="1.4"/>` },

  petrol: { color: '#ff5f5f', svg: `
    ${linG('__g', ['#ff8f8f', '#c1121f'])}
    <rect x="8" y="10" width="30" height="48" rx="4" fill="url(#__g)" stroke="#ffd1d1" stroke-width="2"/>
    ${screenGlow(13, 15, 20, 12, ['#d9ffc4', '#3ddc84'])}
    <path d="M38 22h6c4 0 6 2 6 6v20c0 3 4 3 4 0V22l-4-6" fill="none" stroke="#3d3866" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 34c-4 6-6 9-6 12a6 6 0 0 0 12 0c0-3-2-6-6-12z" fill="#ffe066" stroke="#fff" stroke-width="1.4"/>
    <rect x="6" y="56" width="34" height="4" rx="1" fill="#3d3866"/>` },

  car: { color: '#ff5f8a', svg: `
    ${linG('__g', ['#ff8fab', '#c2185b'])}
    <path d="M4 44v-8c0-4 2-6 6-6l8-10c2-2 4-3 8-3h12c4 0 6 1 8 4l6 9c6 0 8 2 8 6v8z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <path d="M21 22h8v9H14zM33 22h7c2 0 3 1 4 2l5 7H33z" fill="#bfefff" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
    <rect x="54" y="34" width="5" height="3" rx="1" fill="#ffe066"/>
    ${tyre(17, 45, 7)}${tyre(47, 45, 7)}
    <path d="M2 54h60" stroke="#c9c3ec" stroke-width="2" stroke-linecap="round" opacity=".5"/>` },

  bicycle: { color: '#3ddc84', svg: `
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="15" cy="42" r="11" stroke="#c9c3ec" stroke-width="3"/><circle cx="49" cy="42" r="11" stroke="#c9c3ec" stroke-width="3"/>
      <path d="M15 42l10-16h18l6 16M25 26l8 16 10-16M33 42H15" stroke="#3ddc84" stroke-width="3.2"/>
      <path d="M22 22h8M43 26l-2-8h6" stroke="#5b5680" stroke-width="3"/>
    </g>
    <circle cx="33" cy="42" r="3" fill="#ffd166"/>` },

  motorbike: { color: '#ff9f43', svg: `
    ${linG('__g', ['#ffb347', '#c4560b'])}
    <path d="M14 40l8-14h16l8 6h6l-4 10H26z" fill="url(#__g)" stroke="#ffe0b0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 26c2-4 8-4 14-2" fill="none" stroke="#3d3866" stroke-width="4" stroke-linecap="round"/>
    <path d="M46 32l2-10h6" fill="none" stroke="#c9c3ec" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 40h18" stroke="#c9cde6" stroke-width="3" stroke-linecap="round"/>
    ${tyre(14, 44, 9)}${tyre(52, 44, 9)}
    <path d="M2 50l6-2M4 44l5-1" stroke="#c9c3ec" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>` },

  bus: { color: '#ffd166', svg: `
    ${linG('__g', ['#fff3c4', '#ffd166', '#e09b00'])}
    <rect x="4" y="14" width="56" height="32" rx="6" fill="url(#__g)" stroke="#fff3c4" stroke-width="2"/>
    <g fill="#bfefff" stroke="#fff" stroke-width="1.2">${[8, 20, 32, 44].map(x => `<rect x="${x}" y="19" width="10" height="11" rx="1.5"/>`).join('')}</g>
    <path d="M4 36h56" stroke="#c4560b" stroke-width="2"/>
    <rect x="54" y="38" width="4" height="3" rx="1" fill="#fff"/>
    ${tyre(16, 46, 6)}${tyre(48, 46, 6)}` },

  tractor: { color: '#3ddc84', svg: `
    ${linG('__g', ['#7dff9a', '#1fae5a'])}
    <path d="M26 40V20h18l4 12h8v10z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M30 20v12h14" fill="#bfefff" fill-opacity=".6" stroke="#fff" stroke-width="1.4"/>
    <path d="M50 32V22" stroke="#3d3866" stroke-width="3" stroke-linecap="round"/>
    ${tyre(20, 42, 14)}${tyre(52, 48, 8)}
    <g stroke="#5b5680" stroke-width="2">${[0, 45, 90, 135].map(a => `<path d="M20 30v24" transform="rotate(${a} 20 42)"/>`).join('')}</g>
    <circle cx="20" cy="42" r="5" fill="#ffd166" stroke="#fff" stroke-width="1.2"/>` },

  plane: { color: '#6ee7ff', svg: `
    ${linG('__g', ['#ffffff', '#c9d6ff'], 1, 0)}
    <g transform="rotate(-35 32 32)">
      <path d="M8 32c0-3 6-5 12-5h28c6 0 10 3 10 5s-4 5-10 5H20c-6 0-12-2-12-5z" fill="url(#__g)" stroke="#fff" stroke-width="1.8"/>
      <path d="M26 28 18 8h7l15 20zM26 36l-8 20h7l15-20zM10 30 6 20h5l6 9zM10 34l-4 10h5l6-9z" fill="#4cc9ff" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M50 30h4" stroke="#2a2650" stroke-width="2" stroke-linecap="round"/>
    </g>
    ${spark(54, 50, 3)}${spark(10, 10, 2.5, '#ffd6ff')}` },

  helicopter: { color: '#ff9f43', svg: `
    <path d="M6 12h52M32 12v8" stroke="#c9c3ec" stroke-width="3" stroke-linecap="round"/>
    ${linG('__g', ['#ffb347', '#c4560b'])}
    <path d="M14 32c0-8 8-12 18-12 12 0 16 8 16 14s-4 10-14 10H24c-6 0-10-4-10-12z" fill="url(#__g)" stroke="#ffe0b0" stroke-width="2"/>
    <path d="M34 22c6 0 10 4 11 10H34z" fill="#bfefff" stroke="#fff" stroke-width="1.4"/>
    <path d="M14 30H2l-2-6" fill="none" stroke="#ff9f43" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 18v12" stroke="#c9c3ec" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M22 44l-2 8M40 44l2 8M14 52h34" stroke="#c9c3ec" stroke-width="2.6" stroke-linecap="round"/>` },

  rocket: { color: '#ff5f8a', svg: `
    ${linG('__f', ['#fff59d', '#ff9f43', 'rgba(255,61,90,0)'])}
    <path d="M26 46c0 8 3 14 6 16 3-2 6-8 6-16z" fill="url(#__f)"/>
    ${linG('__g', ['#ffffff', '#e6e9ff', '#a9b0d8'], 1, 0)}
    <path d="M32 4c8 6 12 18 10 34H22C20 22 24 10 32 4z" fill="url(#__g)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 4c4 3 7 7 8 12H24c1-5 4-9 8-12z" fill="#ff5f8a"/>
    <path d="M22 30l-8 10v8l8-6zM42 30l8 10v8l-8-6z" fill="#ff5f8a" stroke="#ffd6ef" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="32" cy="24" r="5" fill="#6ee7ff" stroke="#fff" stroke-width="2"/>
    <path d="M26 38h12v4H26z" fill="#9d7bff"/>${spark(54, 10, 3)}${spark(10, 18, 2.5, '#9ff')}` },

  bulb: { color: '#ffe066', svg: `
    ${halo('__h', 32, 24, 26, '#ffe066', .5)}
    ${rays(32, 24, 8, 22, 29, 1.6, '#fff3c4', 22.5, .9)}
    ${radG('__g', ['#ffffff', '#fff59d', '#ffc93c'], .4, .3, .8)}
    <path d="M32 6a16 16 0 0 0-10 28c2 2 3 4 3 7h14c0-3 1-5 3-7A16 16 0 0 0 32 6z" fill="url(#__g)" stroke="#fff" stroke-width="2"/>
    <path d="M27 34c0-6 2-12 5-12s5 6 5 12" fill="none" stroke="#ff9f43" stroke-width="1.8"/>
    <rect x="25" y="41" width="14" height="10" rx="2" fill="#c9cde6" stroke="#fff" stroke-width="1.4"/>
    <path d="M25 45h14M25 48h14" stroke="#7f86a8" stroke-width="1"/><path d="M29 51h6l-1 4h-4z" fill="#5b5680"/>
    ${shine(25, 16, 3.4, 2, .7)}` },

  battery: { color: '#3ddc84', svg: `
    <rect x="22" y="4" width="20" height="6" rx="2" fill="#c9cde6" stroke="#fff" stroke-width="1.4"/>
    <rect x="12" y="10" width="40" height="50" rx="6" fill="#2a2650" stroke="#e6e9ff" stroke-width="2.4"/>
    ${linG('__g', ['#a6ff8a', '#1fae5a'])}
    <g fill="url(#__g)"><rect x="17" y="40" width="30" height="15" rx="2"/><rect x="17" y="27" width="30" height="11" rx="2"/></g>
    <path d="M35 14l-8 12h6l-4 10 10-14h-6z" fill="#ffe066" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>` },

  phone: { color: '#ff5f8a', svg: `
    ${linG('__g', ['#ff8fab', '#c2185b'])}
    <path d="M8 18c0-6 10-10 24-10s24 4 24 10v4c0 2-2 3-4 3h-6c-2 0-3-1-3-3v-3c-4-1-7-1-11-1s-7 0-11 1v3c0 2-1 3-3 3h-6c-2 0-4-1-4-3z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <path d="M18 30h28l6 26H12z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="32" cy="43" r="9" fill="#fff3f8" stroke="#fff" stroke-width="1.4"/>
    <g fill="#c2185b">${Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4.5 - 1.2;
      return `<circle cx="${(32 + 6 * Math.cos(a)).toFixed(1)}" cy="${(43 + 6 * Math.sin(a)).toFixed(1)}" r="1.2"/>`; }).join('')}</g>` },

  radio: { color: '#ff9f43', svg: `
    <path d="M44 22 54 4" stroke="#c9cde6" stroke-width="2.4" stroke-linecap="round"/><circle cx="54" cy="4" r="2" fill="#ff5fa2"/>
    ${linG('__g', ['#ffb347', '#a8501a'])}
    <rect x="4" y="22" width="56" height="34" rx="6" fill="url(#__g)" stroke="#ffe0b0" stroke-width="2"/>
    <circle cx="20" cy="39" r="11" fill="#5a2c14" stroke="#ffe0b0" stroke-width="1.6"/>
    <g stroke="#ffb347" stroke-width="1.2" opacity=".7"><path d="M12 35h16M11 39h18M12 43h16"/></g>
    <rect x="36" y="28" width="18" height="10" rx="2" fill="#fff3c4" stroke="#fff" stroke-width="1.2"/>
    <path d="M40 30v6M44 30v6M48 30v6M42 33h-4" stroke="#c4560b" stroke-width="1"/>
    <g fill="#fff3dc" stroke="#fff" stroke-width="1"><circle cx="40" cy="46" r="3"/><circle cx="50" cy="46" r="3"/></g>` },

  tv: { color: '#9d7bff', svg: `
    <path d="M22 4l10 10 10-10" fill="none" stroke="#c9cde6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    ${linG('__g', ['#c9b6ff', '#4b2bb0'])}
    <rect x="4" y="14" width="56" height="38" rx="7" fill="url(#__g)" stroke="#e6dcff" stroke-width="2"/>
    <clipPath id="__c"><rect x="9" y="19" width="38" height="28" rx="4"/></clipPath>
    <g clip-path="url(#__c)">${['#ff4d6d', '#ff9f43', '#ffe066', '#3ddc84', '#4cc9ff', '#9d7bff'].map((c, i) =>
      `<rect x="${9 + i * 6.4}" y="19" width="6.5" height="28" fill="${c}"/>`).join('')}</g>
    <rect x="9" y="19" width="38" height="28" rx="4" fill="none" stroke="#fff" stroke-width="1.4"/>
    <g fill="#fff3dc"><circle cx="54" cy="25" r="2.4"/><circle cx="54" cy="33" r="2.4"/></g>
    <path d="M16 52l-4 6M48 52l4 6" stroke="#c9cde6" stroke-width="2.4" stroke-linecap="round"/>` },

  camera: { color: '#c9cde6', svg: `
    ${linG('__g', DARKM)}
    <path d="M22 14h20l4 6h10c3 0 4 1 4 4v26c0 3-1 4-4 4H8c-3 0-4-1-4-4V24c0-3 1-4 4-4h10z" fill="url(#__g)" stroke="#e6e9ff" stroke-width="2" stroke-linejoin="round"/>
    ${radG('__l', ['#e0fbff', '#4cc9ff', '#1d3fa0'], .35, .3, .8)}
    <circle cx="32" cy="36" r="12" fill="#c9cde6" stroke="#fff" stroke-width="1.6"/><circle cx="32" cy="36" r="8.5" fill="url(#__l)"/>
    <circle cx="29" cy="33" r="2.2" fill="#fff" opacity=".8"/>
    <rect x="48" y="24" width="7" height="4" rx="1" fill="#ffe066"/><circle cx="12" cy="17" r="2.6" fill="#ff5f5f"/>` },

  photo: { color: '#ffd166', svg: `
    <rect x="6" y="10" width="52" height="44" rx="3" fill="#fffaf0" stroke="#fff" stroke-width="2" transform="rotate(-6 32 32)"/>
    <g transform="rotate(-6 32 32)">
      ${linG('__s', ['#9fe8ff', '#c77dff'])}<rect x="11" y="15" width="42" height="30" fill="url(#__s)"/>
      <circle cx="44" cy="23" r="4" fill="#ffe066"/>
      <path d="M11 45l12-16 9 10 6-6 15 12z" fill="#3ddc84" stroke="#d9ffc4" stroke-width="1" stroke-linejoin="round"/>
    </g>` },

  movie: { color: '#c9cde6', svg: `
    ${linG('__g', DARKM)}
    <rect x="6" y="26" width="52" height="30" rx="3" fill="url(#__g)" stroke="#e6e9ff" stroke-width="2"/>
    <g transform="rotate(-14 6 24)">
      <rect x="6" y="14" width="52" height="10" rx="2" fill="#2a2650" stroke="#e6e9ff" stroke-width="2"/>
      <g fill="#ffffff">${[10, 22, 34, 46].map(x => `<path d="M${x} 14h6l-4 10h-6z"/>`).join('')}</g>
    </g>
    <g fill="#ffffff">${[10, 22, 34, 46].map(x => `<path d="M${x} 26h6l-4 6h-6z"/>`).join('')}</g>
    <path d="M14 40h20M14 46h28" stroke="#c9c3ec" stroke-width="2" stroke-linecap="round"/>` },

  chip: { color: '#3ddc84', svg: `
    <g stroke="#ffcf5a" stroke-width="2.4" stroke-linecap="round">${[18, 26, 34, 42].map(v =>
      `<path d="M${v + 2} 6v8M${v + 2} 50v8M6 ${v + 2}h8M50 ${v + 2}h8"/>`).join('')}</g>
    ${linG('__g', ['#3d3866', '#1e1a33'])}
    <rect x="14" y="14" width="36" height="36" rx="4" fill="url(#__g)" stroke="#c9c3ec" stroke-width="2"/>
    <rect x="22" y="22" width="20" height="20" rx="2" fill="#2a2650" stroke="#3ddc84" stroke-width="1.6"/>
    <path d="M22 28h-4M42 36h4M28 22v-4M36 42v4" stroke="#3ddc84" stroke-width="1.4"/>
    <circle cx="32" cy="32" r="3" fill="#3ddc84"/>${spark(54, 10, 3)}` },

  computer: { color: '#6ee7ff', svg: `
    ${linG('__g', ['#e6e9ff', '#8a93c9'])}
    <rect x="10" y="10" width="44" height="30" rx="3" fill="url(#__g)" stroke="#fff" stroke-width="2"/>
    ${screenGlow(14, 14, 36, 22)}
    <path d="M18 22h12M18 27h20M18 32h8" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".85"/>
    <path d="M4 44h56l-4 8H8z" fill="url(#__g)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M26 47h12" stroke="#6a6f99" stroke-width="2" stroke-linecap="round"/>` },

  internet: { color: '#6ee7ff', svg: `
    ${halo('__h', 32, 32, 28, '#6ee7ff', .35)}
    <g fill="none" stroke="#6ee7ff" stroke-width="1.8" opacity=".85">
      <circle cx="32" cy="32" r="22"/><ellipse cx="32" cy="32" rx="10" ry="22"/><path d="M10 32h44M14 20h36M14 44h36"/></g>
    <g stroke="#ff8fd1" stroke-width="1.6"><path d="M18 18 44 26 26 46 48 42M44 26l4 16"/></g>
    ${[[18, 18], [44, 26], [26, 46], [48, 42]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#fff" stroke="#ff8fd1" stroke-width="1.6"/>`).join('')}` },

  smartphone: { color: '#9d7bff', svg: `
    <rect x="16" y="4" width="32" height="56" rx="7" fill="#2a2650" stroke="#e6e9ff" stroke-width="2.2"/>
    ${screenGlow(19, 10, 26, 44, ['#c9b6ff', '#ff8fd1'])}
    <rect x="28" y="6" width="8" height="2" rx="1" fill="#5b5680"/>
    <g stroke="#fff" stroke-width=".8">${[[22, 14, '#ffd166'], [30, 14, '#3ddc84'], [38, 14, '#4cc9ff'], [22, 22, '#ff5f5f'], [30, 22, '#9d7bff'], [38, 22, '#ff9f43']]
      .map(([x, y, c]) => `<rect x="${x}" y="${y}" width="5" height="5" rx="1.4" fill="${c}"/>`).join('')}</g>
    <rect x="22" y="44" width="21" height="6" rx="3" fill="#fff" opacity=".7"/>` },

  messenger: { color: '#4cc9ff', svg: `
    ${linG('__a', ['#8fe8ff', '#3a8fd8'])}${linG('__b', ['#e6dcff', '#9d7bff'])}
    <path d="M6 12c0-4 2-6 6-6h28c4 0 6 2 6 6v14c0 4-2 6-6 6H18l-8 7v-7c-3 0-4-2-4-6z" fill="url(#__a)" stroke="#e0fbff" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#fff"><circle cx="18" cy="19" r="2.4"/><circle cx="26" cy="19" r="2.4"/><circle cx="34" cy="19" r="2.4"/></g>
    <path d="M58 34c0-4-2-6-6-6H28c-4 0-6 2-6 6v10c0 4 2 6 6 6h18l8 6v-6c3 0 4-2 4-6z" fill="url(#__b)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M30 37h20M30 43h12" stroke="#4b2bb0" stroke-width="2" stroke-linecap="round" opacity=".7"/>` },

  game: { color: '#c77dff', svg: `
    ${linG('__g', ['#c9b6ff', '#5b3fd6'])}
    <path d="M18 18h28c8 0 12 6 14 16s0 18-6 18c-5 0-7-6-12-8H22c-5 2-7 8-12 8-6 0-8-8-6-18s6-16 14-16z" fill="url(#__g)" stroke="#e6dcff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M18 26v12M12 32h12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <g stroke="#fff" stroke-width="1"><circle cx="44" cy="27" r="3" fill="#ffe066"/><circle cx="50" cy="33" r="3" fill="#ff5f8a"/><circle cx="38" cy="33" r="3" fill="#3ddc84"/><circle cx="44" cy="39" r="3" fill="#4cc9ff"/></g>` },

  glasses: { color: '#6ee7ff', svg: `
    <path d="M4 26l6-6M60 26l-6-6M26 32c2-3 10-3 12 0" fill="none" stroke="#c77dff" stroke-width="3" stroke-linecap="round"/>
    ${radG('__l', ['#ffffff', '#bfefff', '#6ee7ff'], .35, .3, .8)}
    <g fill="url(#__l)" fill-opacity=".5" stroke="#c77dff" stroke-width="3.4"><circle cx="17" cy="34" r="11"/><circle cx="47" cy="34" r="11"/></g>
    <path d="M11 30a7 7 0 0 1 5-4M41 30a7 7 0 0 1 5-4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>` },

  vr: { color: '#c77dff', svg: `
    <path d="M6 24c-4 0-4 16 0 16M58 24c4 0 4 16 0 16" fill="none" stroke="#5b5680" stroke-width="3"/>
    ${linG('__g', ['#e6e9ff', '#8a93c9'])}
    <path d="M6 22c0-4 2-6 6-6h40c4 0 6 2 6 6v18c0 4-2 6-6 6H40l-4-6h-8l-4 6H12c-4 0-6-2-6-6z" fill="url(#__g)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    ${linG('__v', ['#ff8fd1', '#6ee7ff'], 1, 0)}
    <rect x="11" y="21" width="42" height="14" rx="5" fill="url(#__v)" stroke="#fff" stroke-width="1.4"/>
    <path d="M15 25h12" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>${spark(54, 8, 3)}${spark(10, 54, 2.5, '#9ff')}` },

  robot: { color: '#6ee7ff', svg: `
    <path d="M32 10V4" stroke="#c9cde6" stroke-width="2.4"/><circle cx="32" cy="4" r="3" fill="#ff5f8a" stroke="#fff" stroke-width="1"/>
    ${linG('__g', ['#ffffff', '#c9cde6', '#7f86a8'])}
    <rect x="4" y="24" width="6" height="14" rx="3" fill="#8a93c9"/><rect x="54" y="24" width="6" height="14" rx="3" fill="#8a93c9"/>
    <rect x="10" y="10" width="44" height="40" rx="10" fill="url(#__g)" stroke="#fff" stroke-width="2"/>
    <rect x="15" y="18" width="34" height="14" rx="7" fill="#2a2650"/>
    <g fill="#6ee7ff"><circle cx="24" cy="25" r="4"/><circle cx="40" cy="25" r="4"/></g>
    <g fill="#fff"><circle cx="25" cy="24" r="1.4"/><circle cx="41" cy="24" r="1.4"/></g>
    <rect x="22" y="38" width="20" height="6" rx="2" fill="#2a2650"/>
    <path d="M26 38v6M30 38v6M34 38v6M38 38v6" stroke="#6ee7ff" stroke-width="1"/>
    <rect x="22" y="50" width="20" height="8" rx="2" fill="#8a93c9" stroke="#fff" stroke-width="1.4"/>` },

  ai: { color: '#c77dff', svg: `
    ${halo('__h', 32, 32, 28, '#c77dff', .45)}
    ${[[12, 14], [52, 14], [8, 36], [56, 36], [20, 54], [44, 54], [32, 6]].map(([x, y]) =>
      `<path d="M32 32L${x} ${y}" stroke="#c9b6ff" stroke-width="1.4" opacity=".75"/><circle cx="${x}" cy="${y}" r="3.4" fill="#6ee7ff" stroke="#fff" stroke-width="1.2"/>`).join('')}
    <path d="M12 14 8 36 20 54M52 14l4 22-12 18" fill="none" stroke="#c9b6ff" stroke-width="1" opacity=".5"/>
    ${ball('__c', 32, 32, 12, ['#ffe6f4', '#c77dff', '#5b1f9a'], '#f0d8ff')}
    ${sym('AI', 32, 31, 11)}` },

  satellite: { color: '#6ee7ff', svg: `
    <g transform="rotate(-30 32 32)">
      ${linG('__p', ['#6ee7ff', '#1d3fa0'])}
      <g fill="url(#__p)" stroke="#e0fbff" stroke-width="1.4"><rect x="2" y="26" width="18" height="12"/><rect x="44" y="26" width="18" height="12"/></g>
      <path d="M8 26v12M14 26v12M50 26v12M56 26v12M2 32h18M44 32h18" stroke="#e0fbff" stroke-width=".8"/>
      <path d="M20 32h4M40 32h4" stroke="#c9cde6" stroke-width="2"/>
      ${linG('__b', ['#ffe08a', '#c48a00'])}<rect x="24" y="24" width="16" height="16" rx="2" fill="url(#__b)" stroke="#fff3c4" stroke-width="1.6"/>
      <path d="M32 24v-6" stroke="#c9cde6" stroke-width="2"/><circle cx="32" cy="16" r="3" fill="none" stroke="#c9cde6" stroke-width="2"/>
    </g>
    <path d="M44 50a8 8 0 0 0 6-6M44 56a14 14 0 0 0 12-12" fill="none" stroke="#ff8fd1" stroke-width="2" stroke-linecap="round"/>` },

  gps: { color: '#ff4d6d', svg: `
    <ellipse cx="32" cy="54" rx="16" ry="4" fill="none" stroke="#ff8fab" stroke-width="2" opacity=".7"/>
    <ellipse cx="32" cy="54" rx="24" ry="6.5" fill="none" stroke="#ff8fab" stroke-width="1.4" opacity=".4"/>
    ${radG('__g', ['#ffd1dc', '#ff4d6d', '#a4133c'], .4, .3, .8)}
    <path d="M32 54C22 40 14 32 14 22a18 18 0 0 1 36 0c0 10-8 18-18 32z" fill="url(#__g)" stroke="#ffc2d1" stroke-width="2"/>
    <circle cx="32" cy="22" r="7" fill="#fff" stroke="#ffc2d1" stroke-width="1.4"/>
    ${shine(22, 14, 3.6, 2, .6)}` },

  electriccar: { color: '#3ddc84', svg: `
    ${linG('__g', ['#7dff9a', '#1fae5a'])}
    <path d="M4 46v-8c0-4 2-6 6-6l8-10c2-2 4-3 8-3h12c4 0 6 1 8 4l6 9c6 0 8 2 8 6v8z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M21 24h8v9H14zM33 24h7c2 0 3 1 4 2l5 7H33z" fill="#bfefff" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M30 34l-4 6h4l-2 5 6-7h-4l2-4z" fill="#ffe066" stroke="#fff" stroke-width=".8" stroke-linejoin="round"/>
    ${tyre(17, 47, 7)}${tyre(47, 47, 7)}
    <path d="M60 38c4 0 4 6 0 8" fill="none" stroke="#ffcf5a" stroke-width="2.2" stroke-linecap="round"/>
    ${spark(54, 10, 3)}` },

  vaccine: { color: '#6ee7ff', svg: `
    <g transform="rotate(-40 32 32)">
      <path d="M32 6v8M26 6h12" stroke="#c9cde6" stroke-width="3" stroke-linecap="round"/>
      <rect x="24" y="14" width="16" height="30" rx="2" fill="#bfefff" fill-opacity=".3" stroke="#e0fbff" stroke-width="2"/>
      ${linG('__g', ['#8fe8ff', '#4cc9ff'])}<rect x="26" y="26" width="12" height="16" fill="url(#__g)"/>
      <path d="M24 20h5M24 26h5M24 32h5M24 38h5" stroke="#fff" stroke-width="1.2"/>
      <path d="M28 44h8l-2 4h-4z" fill="#c9cde6"/><path d="M32 48v12" stroke="#e6e9ff" stroke-width="1.6" stroke-linecap="round"/>
    </g>
    ${spark(50, 50, 3.5)}${spark(12, 12, 2.5, '#9ff')}` },

  // ── расширение «Космоса» ──
  // двигатель — блок цилиндров с поршнями и шкивом
  // двигатель — ракетный: камера сгорания, трубки подачи топлива и сопло-колокол с пламенем
  engine: { color: '#ffb347', svg: `
    ${linG('__f', ['#ffffff', '#9ad7ff', '#ff9f43', 'rgba(255,61,90,0)'])}
    <path d="M18 44C20 54 26 62 32 63C38 62 44 54 46 44Z" fill="url(#__f)"/>
    <path d="M26 44C27 50 29 54 32 56C35 54 37 50 38 44Z" fill="#fff" opacity=".7"/>
    ${linG('__n', ['#ffe0b0', '#ff9f43', '#b8562a'], 1, 0)}${linG('__m', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 0)}
    <path d="M26 26H38C38 34 44 40 48 44H16C20 40 26 34 26 26Z" fill="url(#__n)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke="#ffe0b0" stroke-width="1.2" opacity=".7"><path d="M24 34.5h16M21 39.5h22"/></g>
    <rect x="22" y="12" width="20" height="15" rx="4" fill="url(#__m)" stroke="#fff" stroke-width="2"/>
    <rect x="27" y="5" width="10" height="8" rx="2" fill="url(#__m)" stroke="#fff" stroke-width="1.6"/>
    <g fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M22 17C14 17 12 24 18 30" stroke="#6ee7ff"/><path d="M42 17C50 17 52 24 46 30" stroke="#ff8fd1"/></g>
    <circle cx="10" cy="12" r="5" fill="url(#__m)" stroke="#6ee7ff" stroke-width="1.6"/><path d="M14 14l8 2" stroke="#6ee7ff" stroke-width="2"/>
    ${spark(55, 9, 3.5)}${spark(56, 34, 2.4, '#ffe08a')}` },

  // ракетное топливо — криогенный бак: жидкий водород и жидкий кислород
  rocketfuel: { color: '#6ee7ff', svg: `
    ${linG('__h', ['#e0fbff', '#6ee7ff', '#3a4bff'])}${linG('__o', ['#ffd6ef', '#ff7fb5', '#b8336a'])}
    <path d="M20 14a12 8 0 0 1 24 0V31H20z" fill="url(#__h)" stroke="#e0fbff" stroke-width="2"/>
    <path d="M20 33H44V50a12 8 0 0 1-24 0z" fill="url(#__o)" stroke="#ffd6ef" stroke-width="2"/>
    <path d="M20 32h24" stroke="#fff" stroke-width="2.4"/>
    ${sym('H₂', 32, 22, 11)}${sym('O₂', 32, 42, 11)}
    <path d="M24 12c2-3 5-4 8-4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <path d="M27 58c2 3 8 3 10 0" fill="none" stroke="#ffb347" stroke-width="2.4" stroke-linecap="round"/>
    ${spark(52, 16, 3.2)}${spark(10, 26, 2.6, '#c8f1ff')}${spark(54, 46, 2.2, '#ffd6ff')}` },

  // марсоход — шестиколёсный робот с мачтой-камерой на красном грунте
  rover: { color: '#ff7a59', svg: `
    ${linG('__g', ['#ff9a6b', '#a63c1f'])}${linG('__b', ['#ffffff', '#c9cde6', '#6a6f99'])}
    <path d="M0 62L64 46V64H0z" fill="url(#__g)" stroke="#ffc2a8" stroke-width="1.4"/>
    <g fill="#ffc2a8" opacity=".5"><circle cx="6" cy="54" r="2"/><circle cx="2" cy="49" r="1.4"/><circle cx="9" cy="48" r="1.2"/></g>
    <g transform="rotate(-14 32 40)">
      <path d="M40 24V10" stroke="#c9cde6" stroke-width="2.6" stroke-linecap="round"/>
      <rect x="34" y="4" width="13" height="7" rx="2.5" fill="url(#__b)" stroke="#fff" stroke-width="1.4"/><circle cx="44" cy="7.5" r="1.8" fill="#6ee7ff"/>
      <path d="M16 22L12 14" stroke="#c9cde6" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="13" r="2.4" fill="#ffcf5a"/>
      <rect x="10" y="20" width="40" height="5" rx="1.5" fill="#3a4bff" stroke="#c8f1ff" stroke-width="1.2"/>
      <rect x="13" y="25" width="34" height="10" rx="3" fill="url(#__b)" stroke="#fff" stroke-width="1.8"/>
      <g fill="none" stroke="#e6e9ff" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M14 47L22 37L32 47M22 37h8M30 37L42 37L50 47"/></g>
      ${tyre(14, 48, 5.5)}${tyre(32, 48, 5.5)}${tyre(50, 48, 5.5)}
    </g>
    ${spark(58, 10, 3.2)}${spark(20, 6, 2.4, '#ffd6ff')}` },

  // ── расширение «Космоса», этап 2 ──
  // лазер — излучатель и узкий яркий луч
  laser: { color: '#ff5f8a', svg: `
    ${linG('__b', ['#ff5f8a', '#fff'], 1, -.6)}${linG('__m', ['#ffffff', '#c9cde6', '#6a6f99'])}
    <path d="M28 38L58 8L60 10L30 40Z" fill="#ff5f8a" opacity=".45"/>
    <path d="M28 38L59 9" stroke="url(#__b)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${burst(58, 9, 6, 6, 2.2)}" fill="#fff" stroke="#ffd6ef" stroke-width=".8"/>
    <g transform="rotate(-45 22 44)"><rect x="6" y="37" width="26" height="14" rx="3" fill="url(#__m)" stroke="#fff" stroke-width="2"/>
      <rect x="32" y="40" width="5" height="8" rx="1.5" fill="#ff5f8a" stroke="#ffd6ef" stroke-width="1.2"/>
      <g fill="#6a6f99"><rect x="10" y="40" width="2.5" height="8" rx="1"/><rect x="15" y="40" width="2.5" height="8" rx="1"/></g></g>
    ${spark(12, 12, 3.2)}${spark(52, 50, 2.6, '#ffd6ff')}` },

  // ядерный реактор — градирня с паром и значок атома
  reactor: { color: '#7dff7a', svg: `
    ${linG('__t', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 0)}
    <g fill="#f2efff" stroke="#e6e1ff" stroke-width="1.4" opacity=".9"><circle cx="26" cy="12" r="6"/><circle cx="34" cy="8" r="7"/><circle cx="42" cy="13" r="5.5"/></g>
    <path d="M18 20H46C42 30 42 44 50 60H14C22 44 22 30 18 20Z" fill="url(#__t)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M20 24h24" stroke="#9a93c0" stroke-width="1.4"/>
    ${arcHalf(32, 42, 9, 3.5, 30, '#3ddc84', 1.8, false, .9)}${arcHalf(32, 42, 9, 3.5, -30, '#3ddc84', 1.8, false, .9)}
    <circle cx="32" cy="42" r="3" fill="#7dff7a" stroke="#fff" stroke-width="1"/>
    ${arcHalf(32, 42, 9, 3.5, 30, '#3ddc84', 1.8, true)}${arcHalf(32, 42, 9, 3.5, -30, '#3ddc84', 1.8, true)}
    ${spark(56, 30, 3.2)}${spark(8, 30, 2.4, '#e6ffd0')}` },

  // солнечная батарея — панель из ячеек под солнцем
  solarpanel: { color: '#4cc9ff', svg: `
    ${halo('__h', 14, 13, 13, '#ffd166', .7)}${ball('__s', 14, 13, 6, ['#ffffff', '#fff59d', '#ffb347'], '#fff3c4', 1.4)}
    ${linG('__p', ['#9ad7ff', '#3a4bff', '#1d2a8f'], 1, 1)}
    <path d="M30 50V58M22 58h16" stroke="#c9cde6" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M14 50L26 22H60L48 50Z" fill="url(#__p)" stroke="#e0fbff" stroke-width="2" stroke-linejoin="round"/>
    <g stroke="#c8f1ff" stroke-width="1" opacity=".75"><path d="M18 41h34M22 31.5h34M35.5 22L23.5 50M48 22L36 50"/></g>
    <path d="M28 25L22 39" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    ${spark(56, 8, 3.2)}${spark(58, 56, 2.4, '#ffd6ff')}` },

  // квантовый компьютер — кубит (сфера Блоха) над чипом
  quantum: { color: '#9d7bff', svg: `
    ${linG('__c', ['#4b3a99', '#1e1a33'], 1, 1)}
    <g stroke="#ffcf5a" stroke-width="2" stroke-linecap="round"><path d="M18 46v6M26 46v6M34 46v6M42 46v6M50 46v6"/></g>
    <path d="M12 40L20 34H52L60 40L52 46H20Z" fill="url(#__c)" stroke="#c9b6ff" stroke-width="1.8" stroke-linejoin="round"/>
    ${arcHalf(34, 20, 16, 5, 0, '#6ee7ff', 1.6, false, .6)}
    ${ball('__q', 34, 20, 13, ['#e6dcff', '#9d7bff', '#4b2bb0'], '#d9ccff', 1.8)}
    ${arcHalf(34, 20, 16, 5, 0, '#6ee7ff', 1.8, true)}
    <path d="M34 20L42 9" stroke="#fff59d" stroke-width="2.4" stroke-linecap="round"/><circle cx="42.5" cy="8.5" r="2.6" fill="#fff59d"/>
    <circle cx="34" cy="20" r="2" fill="#fff"/>
    ${spark(8, 12, 3.2)}${spark(58, 26, 2.4, '#ffd6ff')}` },

  // коллайдер — кольцо ускорителя и вспышка столкновения
  collider: { color: '#6ee7ff', svg: `
    ${linG('__r', ['#6ee7ff', '#9d7bff', '#ff7fb5'], 1, 1)}
    <circle cx="32" cy="30" r="22" fill="none" stroke="#2a2650" stroke-width="9"/>
    <circle cx="32" cy="30" r="22" fill="none" stroke="url(#__r)" stroke-width="4"/>
    <g fill="none" stroke-width="2.4" stroke-linecap="round"><path d="M12 39A22 22 0 0 0 28 52" stroke="#fff"/><path d="M52 39A22 22 0 0 1 36 52" stroke="#fff"/></g>
    ${halo('__h', 32, 52, 12, '#fff59d', .9)}
    <path d="${burst(32, 52, 8, 9, 3)}" fill="#fff59d" stroke="#fff" stroke-width=".8"/>
    <g stroke="#ffb347" stroke-width="1.6" stroke-linecap="round"><path d="M32 52l-10 9M32 52l9 10M32 52l14 2"/></g>
    ${spark(32, 30, 3.4)}${spark(56, 8, 2.6, '#9ff')}` },
});
