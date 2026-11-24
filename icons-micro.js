/* Иконки эпохи «Микромир». Детали (ball, halo, rays…) — в icons.js */

const RED = ['#ffd1dc', '#ff4d6d', '#a4133c'];
const BLUE = ['#d0f4ff', '#4cc9ff', '#1d4ed8'];
const VIOLET = ['#e6dcff', '#9d7bff', '#4b2bb0'];

// термометр для «Тепла» и «Холода»
const thermo = (bulb, level, glass) => `
  <rect x="27" y="8" width="10" height="36" rx="5" fill="#fff" fill-opacity=".14" stroke="${glass}" stroke-width="2"/>
  <rect x="30" y="${level}" width="4" height="${46 - level}" rx="2" fill="${bulb[1]}"/>
  ${ball('__t', 32, 46, 8, bulb, glass)}
  <g stroke="${glass}" stroke-width="1.6" stroke-linecap="round" opacity=".8"><path d="M39 14h3M39 20h3M39 26h3M39 32h3"/></g>`;

Object.assign(ICONS, {
  light: { color: '#ffe066', svg: `
    ${halo('__h', 32, 32, 30, '#fff59d', .6)}
    ${rays(32, 32, 8, 7, 30, 2.6, '#fff3c4')}
    ${rays(32, 32, 8, 7, 21, 2, '#ffd166', 22.5)}
    ${ball('__c', 32, 32, 9, ['#ffffff', '#fff59d', '#ffc93c'], '#fff')}` },

  gluon: { color: '#a6ff8a', svg: `
    ${linG('__s', ['#a6ff8a', '#ffe066'], 1, 0)}
    <path d="M15 32q3-16 6 0t6 0 6 0 6 0 6 0 6 0" fill="none" stroke="url(#__s)" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M15 32q3-16 6 0t6 0 6 0 6 0 6 0 6 0" fill="none" stroke="#fff" stroke-width="1" opacity=".5"/>
    ${ball('__a', 10, 32, 7, RED, '#ffc2d1')}
    ${ball('__b', 54, 32, 7, BLUE, '#c8f1ff')}
    ${spark(32, 12, 3.5)}${spark(30, 52, 2.5, '#d9ffc4')}` },

  spacetime: { color: '#8b7bff', svg: `
    ${linG('__l', ['#6ee7ff', '#c77dff'], 1, 0)}
    <g fill="none" stroke="url(#__l)" stroke-width="1.9" stroke-linecap="round">
      <path d="M5 16Q32 30 59 16"/><path d="M5 28Q32 50 59 28"/><path d="M5 42Q32 66 59 42"/>
      <path d="M14 8Q22 34 16 58"/><path d="M32 6Q33.5 18 32 30"/><path d="M50 8Q42 34 48 58"/>
    </g>
    ${ball('__p', 32, 40, 8, ['#fff3c4', '#ffb347', '#e0560b'], '#ffe0b0')}
    ${spark(54, 54, 3.5)}${spark(10, 52, 2.5, '#9ff')}` },

  bigbang: { color: '#ffb347', svg: `
    ${halo('__h', 32, 32, 31, '#fff59d', .6)}
    ${radG('__g', ['#ffffff', '#fff59d', '#ff9f43', '#ff3d7f'], .5, .5, .5)}
    <path d="${burst(32, 32, 12, 27, 12)}" fill="url(#__g)" stroke="#fff3c4" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="${burst(32, 32, 8, 13, 6, .2)}" fill="#fff" opacity=".9"/>
    <g><circle cx="8" cy="9" r="2" fill="#6ee7ff"/><circle cx="57" cy="10" r="1.8" fill="#ff8fd1"/>
    <circle cx="58" cy="54" r="2" fill="#ffe066"/><circle cx="7" cy="55" r="1.6" fill="#c77dff"/></g>` },

  vacuum: { color: '#bfefff', svg: `
    ${linG('__m', ['#fff1b8', '#ffcf5a', '#b8860b'])}
    <path d="M18 50V30a14 14 0 0 1 28 0v20z" fill="#bfefff" fill-opacity=".1" stroke="#bfefff" stroke-width="2.2"/>
    <path d="M22.5 46V31a9.5 9.5 0 0 1 5-8.3" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
    <rect x="13" y="50" width="38" height="7" rx="3" fill="url(#__m)" stroke="#fff1b8" stroke-width="1.4"/>
    <circle cx="32" cy="13" r="3" fill="url(#__m)" stroke="#fff1b8" stroke-width="1.2"/>
    <g fill="#bfefff" opacity=".45"><circle cx="37" cy="36" r="1.2"/><circle cx="30" cy="42" r="1"/><circle cx="35" cy="27" r=".9"/></g>
    ${spark(54, 16, 3.5)}${spark(9, 30, 2.5, '#9ff')}` },

  eternity: { color: '#c77dff', svg: `
    ${linG('__l', ['#6ee7ff', '#c77dff', '#ff5fa2'], 1, 0)}
    <path d="M32 32C24 19 9 19 9 32s15 13 23 0 23-13 23 0-15 13-23 0z" fill="none" stroke="url(#__l)" stroke-width="6.5" stroke-linejoin="round"/>
    <path d="M32 32C24 19 9 19 9 32s15 13 23 0 23-13 23 0-15 13-23 0z" fill="none" stroke="#fff" stroke-width="1.3" opacity=".55"/>
    ${spark(19, 32, 3)}${spark(45, 32, 3, '#ffd6ff')}${spark(54, 11, 4)}${spark(10, 52, 2.5, '#9ff')}` },

  wave: { color: '#6ee7ff', svg: `
    <path d="M4 32H60" stroke="#e6dcff" stroke-width="1" stroke-dasharray="2 3" opacity=".35"/>
    <path d="M4 32q7-18 14 0t14 0 14 0 14 0" fill="none" stroke="#6ee7ff" stroke-width="3.6" stroke-linecap="round"/>
    <path d="M4 32q7 14 14 0t14 0 14 0 14 0" fill="none" stroke="#ff5fa2" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
    ${spark(11, 12, 3.5)}${spark(53, 52, 3, '#ffd6ff')}` },

  higgs: { color: '#ffd166', svg: `
    <g fill="#c9b6ff" opacity=".75">${Array.from({ length: 12 }, (_, i) => {
      const a = i * Math.PI / 6; return `<circle cx="${(32 + 25 * Math.cos(a)).toFixed(1)}" cy="${(32 + 25 * Math.sin(a)).toFixed(1)}" r="1.7"/>`; }).join('')}</g>
    <circle cx="32" cy="32" r="18" fill="none" stroke="#ffd166" stroke-width="1.6" stroke-dasharray="2 3" opacity=".7"/>
    ${halo('__h', 32, 32, 18, '#ffd166', .5)}
    ${ball('__c', 32, 32, 10, ['#fffbe0', '#ffd166', '#e08a00'], '#fff3c4')}
    ${spark(53, 9, 3.5)}` },

  antimatter: { color: '#ff5fa2', svg: `
    <path d="M32 6V58" stroke="#fff" stroke-width="1.4" stroke-dasharray="3 3" opacity=".45"/>
    ${ball('__a', 18, 32, 11, BLUE, '#c8f1ff')}
    ${radG('__m', ['#ffd1f0', '#ff5fa2', '#7b1fa2'])}
    <circle cx="46" cy="32" r="11" fill="url(#__m)" fill-opacity=".85" stroke="#ffc2df" stroke-width="2" stroke-dasharray="3 2"/>
    ${sym('+', 18, 32, 16)}${sym('−', 46, 32, 16)}
    ${spark(53, 11, 3.5)}${spark(11, 53, 2.5, '#9ff')}` },

  electron: { color: '#4cc9ff', svg: `
    <linearGradient id="__t" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#4cc9ff" stop-opacity="0"/><stop offset="1" stop-color="#6ee7ff"/></linearGradient>
    <path d="M6 54Q20 50 30 38" fill="none" stroke="url(#__t)" stroke-width="7" stroke-linecap="round"/>
    ${ball('__b', 38, 28, 13, BLUE, '#c8f1ff')}
    ${sym('−', 38, 28, 20)}
    ${spark(54, 52, 3.5)}${spark(14, 14, 2.5, '#9ff')}` },

  proton: { color: '#ff4d6d', svg: `
    ${halo('__h', 32, 32, 28, '#ff4d6d', .45)}
    ${ball('__b', 32, 32, 16, RED, '#ffc2d1')}
    ${sym('+', 32, 31, 24)}
    ${spark(54, 10, 3.5)}` },

  neutron: { color: '#a59bd8', svg: `
    ${halo('__h', 32, 32, 28, '#a59bd8', .4)}
    ${ball('__b', 32, 32, 16, ['#f1edff', '#a59bd8', '#5b4f99'], '#e6dcff')}
    ${sym('n', 32, 30, 22)}
    ${spark(54, 10, 3.5)}` },

  nucleus: { color: '#ff9f43', svg: `
    ${halo('__h', 32, 32, 30, '#ff9f43', .5)}
    ${radG('__r', RED)}${radG('__u', BLUE)}
    ${[[41, 32], [36.5, 39.8], [27.5, 39.8], [23, 32], [27.5, 24.2], [36.5, 24.2], [32, 32]].map(([x, y], i) =>
      `<circle cx="${x}" cy="${y}" r="7" fill="url(#${i % 2 ? '__u' : '__r'})" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>` +
      shine(x - 2.4, y - 2.8, 2.2, 1.2, .55)).join('')}
    ${spark(54, 10, 3.5)}${spark(10, 54, 2.5, '#ffe08a')}` },

  ion: { color: '#9d7bff', svg: `
    ${ball('__b', 27, 36, 15, VIOLET, '#d9ccff')}
    ${sym('+', 27, 35, 20)}
    <g stroke="#6ee7ff" stroke-width="2" stroke-linecap="round" opacity=".8"><path d="M40 24l5-4M43 30l6-3M38 19l3-5"/></g>
    ${ball('__e', 53, 12, 5, BLUE, '#c8f1ff', 1.4)}
    ${spark(10, 12, 3)}` },

  plasma: { color: '#c77dff', svg: `
    ${radG('__g', ['#ffd6ff', '#c77dff', '#6a1b9a'])}
    <path d="M32 9C42 8 50 14 53 22c4 9-1 14 1 21 1 8-9 13-18 11-8-1-14 3-21-3-6-5-2-12-5-19-2-8 3-15 10-19 4-3 7-4 12-4z" fill="url(#__g)" stroke="#f0c4ff" stroke-width="2.2"/>
    ${shine(22, 18, 6, 3, .5)}
    ${sym('+', 24, 28, 11, '#ffe066')}${sym('−', 41, 30, 11, '#6ee7ff')}${sym('+', 37, 45, 11, '#ffe066')}${sym('−', 22, 43, 11, '#6ee7ff')}
    ${spark(56, 10, 3.5)}` },

  hydrogen: { color: '#4cc9ff', svg: token('H', BLUE, '#c8f1ff', '#ffe066') },
  helium: { color: '#ffd166', svg: token('He', ['#fffbe0', '#ffd166', '#d08a00'], '#fff3c4', '#6ee7ff') },

  molecule: { color: '#ff8fab', svg: `
    <g stroke="#e6dcff" stroke-width="4" stroke-linecap="round"><path d="M32 36 16 21M32 36 48 21"/></g>
    ${ball('__o', 32, 37, 12, RED, '#ffc2d1')}
    ${ball('__h', 15, 20, 7.5, ['#ffffff', '#dfe7ff', '#8a93c9'], '#fff')}
    ${ball('__k', 49, 20, 7.5, ['#ffffff', '#dfe7ff', '#8a93c9'], '#fff')}
    ${spark(54, 50, 3.5)}${spark(10, 46, 2.5, '#9ff')}` },

  matter: { color: '#9d7bff', svg: `
    ${linG('__l', ['#9d7bff', '#4b2bb0'])}${linG('__r', ['#6c4fe0', '#2a1670'])}
    <g stroke="#e6dcff" stroke-width="2" stroke-linejoin="round">
      <path d="M12 21 32 31v23L12 44z" fill="url(#__l)"/>
      <path d="M52 21 32 31v23l20-10z" fill="url(#__r)"/>
      <path d="M32 11l20 10-20 10-20-10z" fill="#c9b6ff"/>
    </g>
    <path d="M17 24l12 6" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    ${spark(54, 9, 4)}${spark(9, 54, 2.5, '#ffd6ff')}` },

  mass: { color: '#8a93c9', svg: `
    ${linG('__m', ['#eef0ff', '#8a93c9', '#3d4270'])}
    <path d="M25 27a7 7 0 1 1 14 0" fill="none" stroke="#c9cde6" stroke-width="4"/>
    <path d="M17 55l4-28h22l4 28z" fill="url(#__m)" stroke="#eef0ff" stroke-width="2" stroke-linejoin="round"/>
    ${sym('kg', 32, 42, 13)}
    <path d="M22 32l-2 16" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    ${spark(54, 12, 3.5)}${spark(10, 18, 2.5, '#9ff')}` },

  gravity: { color: '#ff4d6d', svg: `
    <g stroke="#c9b6ff" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" opacity=".8"><path d="M22 4v10M32 2v10M42 4v10"/></g>
    ${radG('__a', RED)}
    <path d="M32 27c-4-4-14-3-14 8 0 10 7 18 14 18s14-8 14-18c0-11-10-12-14-8z" fill="url(#__a)" stroke="#ffc2d1" stroke-width="2"/>
    <path d="M32 27c0-4 1-6 3-8" fill="none" stroke="#c68b59" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="40" cy="20" rx="5" ry="2.5" fill="#3ddc84" transform="rotate(-25 40 20)"/>
    ${shine(24, 33, 3.5, 2, .6)}
    <path d="M55 32v16m-4-4 4 4 4-4" fill="none" stroke="#6ee7ff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>` },

  pressure: { color: '#6ee7ff', svg: `
    ${linG('__m', ['#eef0ff', '#8a93c9'])}
    <rect x="9" y="7" width="46" height="7" rx="2.5" fill="url(#__m)" stroke="#fff" stroke-width="1.4"/>
    <rect x="9" y="50" width="46" height="7" rx="2.5" fill="url(#__m)" stroke="#fff" stroke-width="1.4"/>
    ${radG('__b', ['#d0f4ff', '#6ee7ff', '#7b5cff'])}
    <ellipse cx="32" cy="32" rx="16" ry="11" fill="url(#__b)" stroke="#d6f8ff" stroke-width="2"/>
    ${shine(26, 27, 4, 2, .6)}
    <g fill="none" stroke="#ffe066" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 18v8m-3-3 3 3 3-3M52 18v8m-3-3 3 3 3-3M12 46v-8m-3 3 3-3 3 3M52 46v-8m-3 3 3-3 3 3"/>
    </g>` },

  heat: { color: '#ff7a1a', svg: `
    ${thermo(RED, 16, '#ffd6c2')}
    <g fill="none" stroke="#ffb347" stroke-width="2.2" stroke-linecap="round">
      <path d="M50 44c-3-4 3-8 0-12s3-8 0-12"/><path d="M16 44c-3-4 3-8 0-12s3-8 0-12"/>
    </g>` },

  cold: { color: '#6ee7ff', svg: `
    ${thermo(BLUE, 34, '#d6f8ff')}
    <g stroke="#bfefff" stroke-width="2" stroke-linecap="round">
      <path d="M14 14v14M8 17.5l12 7M8 24.5l12-7"/><path d="M51 34v10M46.7 36.5l8.6 5M46.7 41.5l8.6-5"/>
    </g>
    ${spark(52, 14, 3)}` },

  electricity: { color: '#fff59d', svg: `
    <g stroke="#8a93c9" stroke-width="3" stroke-linecap="round"><path d="M12 47v11M52 47v11"/></g>
    ${ball('__a', 12, 40, 7.5, ['#ffffff', '#c9cde6', '#5b5f80'], '#eef0ff')}
    ${ball('__b', 52, 40, 7.5, ['#ffffff', '#c9cde6', '#5b5f80'], '#eef0ff')}
    <path d="M19 38l6-8 4 6 6-10 4 8 6 4" fill="none" stroke="#6ee7ff" stroke-width="6" stroke-linejoin="round" opacity=".45"/>
    <path d="M19 38l6-8 4 6 6-10 4 8 6 4" fill="none" stroke="#fff59d" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
    ${spark(33, 13, 3.5)}${spark(22, 18, 2.2, '#9ff')}${spark(44, 18, 2.2, '#ffe08a')}` },

  magnetism: { color: '#ff4d6d', svg: `
    ${linG('__m', ['#ff8fab', '#e63946'], 1, 0)}
    <g fill="none" stroke="#6ee7ff" stroke-width="1.8" stroke-dasharray="3 3" opacity=".85"><path d="M20 12Q32 4 44 12"/><path d="M13 14Q32 -2 51 14"/></g>
    <path d="M18 22v16a14 14 0 0 0 28 0V22" fill="none" stroke="url(#__m)" stroke-width="10"/>
    <path d="M14.5 26v12" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    <rect x="13" y="14" width="10" height="8" rx="1.5" fill="#e6e9ff" stroke="#fff" stroke-width="1.2"/>
    <rect x="41" y="14" width="10" height="8" rx="1.5" fill="#e6e9ff" stroke="#fff" stroke-width="1.2"/>` },

  radiation: { color: '#7dff6a', svg: `
    ${halo('__h', 33, 34, 26, '#7dff6a', .45)}
    ${radG('__g', ['#e8ffd4', '#7dff6a', '#1f9d3a'])}
    <path d="M20 44l4-18 10-8 10 8 2 16-12 8z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M34 18l-2 16-12 10M32 34l14 8" fill="none" stroke="#d9ffc4" stroke-width="1.3" opacity=".7"/>
    <g stroke="#b6ff8a" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="3 3"><path d="M16 22 8 15M34 12V3M50 22l8-7"/></g>` },

  neutrino: { color: '#c9b6ff', svg: `
    <linearGradient id="__t" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#c9b6ff" stop-opacity="0"/><stop offset="1" stop-color="#e6dcff" stop-opacity=".9"/></linearGradient>
    <path d="M5 59 34 30" stroke="url(#__t)" stroke-width="6" stroke-linecap="round"/>
    <path d="M12 60 34 38M4 50l22-22" stroke="url(#__t)" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
    ${radG('__b', ['#ffffff', '#e6dcff', '#8b7bff'])}
    <circle cx="42" cy="22" r="11" fill="url(#__b)" fill-opacity=".6" stroke="#e6dcff" stroke-width="2" stroke-dasharray="3 2.5"/>
    ${sym('ν', 42, 21, 15)}
    ${spark(12, 12, 3)}` },

  annihilation: { color: '#fff59d', svg: `
    ${halo('__h', 32, 32, 26, '#ffffff', .6)}
    ${radG('__g', ['#ffffff', '#fff59d', '#ff9f43'], .5, .5, .5)}
    <path d="${burst(32, 32, 10, 17, 7)}" fill="url(#__g)" stroke="#fff" stroke-width="1.2"/>
    <g stroke-width="2" stroke-linecap="round"><path d="M4 52l6-4" stroke="#6ee7ff"/><path d="M60 12l-6 4" stroke="#ff8fd1"/></g>
    ${ball('__a', 13, 46, 6, BLUE, '#c8f1ff', 1.5)}
    ${radG('__m', ['#ffd1f0', '#ff5fa2', '#7b1fa2'])}<circle cx="51" cy="18" r="6" fill="url(#__m)" stroke="#ffc2df" stroke-width="1.5" stroke-dasharray="2.5 2"/>` },

  // ── расширение «Космоса» ──
  // метан CH₄: углерод и четыре водорода
  methane: { color: '#9d7bff', svg: `
    <g stroke="#d9ccff" stroke-width="3" stroke-linecap="round"><path d="M32 33L14 16M32 33L50 16M32 33L16 52M32 33L48 52"/></g>
    ${ball('__h1', 14, 16, 7, BLUE, '#d0f4ff', 1.5)}${ball('__h2', 50, 16, 7, BLUE, '#d0f4ff', 1.5)}
    ${ball('__h3', 16, 52, 6, BLUE, '#d0f4ff', 1.5)}${ball('__h4', 48, 52, 6, BLUE, '#d0f4ff', 1.5)}
    ${ball('__c', 32, 33, 12, ['#b9b4d6', '#5d5878', '#2a2650'], '#e6e1ff', 2)}${sym('C', 32, 33, 13)}
    ${spark(56, 34, 3)}${spark(8, 34, 2.4, '#ffd6ff')}` },

  // аммиак NH₃: азот, три водорода и «облачко» свободной пары электронов
  ammonia: { color: '#6ee7ff', svg: `
    ${halo('__p', 32, 14, 13, '#ff8fd1', .55)}
    <g stroke="#c8f1ff" stroke-width="3" stroke-linecap="round"><path d="M32 30L12 46M32 30L52 46M32 30V54"/></g>
    ${ball('__h1', 12, 46, 6.5, ['#ffffff', '#d9ccff', '#9d7bff'], '#fff', 1.5)}${ball('__h2', 52, 46, 6.5, ['#ffffff', '#d9ccff', '#9d7bff'], '#fff', 1.5)}
    ${ball('__h3', 32, 54, 6, ['#ffffff', '#d9ccff', '#9d7bff'], '#fff', 1.5)}
    ${ball('__n', 32, 30, 12, BLUE, '#d0f4ff', 2)}${sym('N', 32, 30, 13)}
    ${spark(53, 12, 3.2)}${spark(11, 20, 2.4, '#ffd6ff')}` },

  // ── расширение «Космоса», этап 2 ──
  // термоядерный синтез — два ядра сливаются во вспышку внутри магнитного кольца (токамак)
  fusion: { color: '#ffb347', svg: `
    ${arcHalf(32, 34, 27, 10, 0, '#9d7bff', 5, false, .55)}
    ${halo('__h', 32, 32, 22, '#ffb347', .8)}
    <path d="${burst(32, 32, 8, 13, 5, .2)}" fill="#fff59d" stroke="#fff" stroke-width="1"/>
    <circle cx="32" cy="32" r="4.5" fill="#fff"/>
    <g stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7"><path d="M3 22l6 2M3 28l5 1M61 22l-6 2M61 28l-5 1"/></g>
    ${ball('__a', 13, 24, 5.5, BLUE, '#d0f4ff', 1.4)}${ball('__b', 51, 24, 5.5, RED, '#ffd1dc', 1.4)}
    ${arcHalf(32, 34, 27, 10, 0, '#c9b6ff', 5, true)}
    ${spark(54, 8, 3.2)}${spark(10, 54, 2.4, '#ffe08a')}` },

  // ── расширение «Космоса», этап 3 ──
  // инфляция — из крошечной точки пространство раздувается раструбом
  inflation: { color: '#ff8fd1', svg: `
    ${linG('__c', ['#ffd6ef', '#9d7bff', '#3b2a8f'], 1, 0)}
    <path d="M6 32L58 4V60Z" fill="url(#__c)" fill-opacity=".35" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke="#e6dcff" stroke-width="1.1" opacity=".75">
      <path d="M20 24.5V39.5M34 17V47M46 10.5V53.5"/><path d="M6 32L58 18M6 32L58 46M6 32H58"/></g>
    ${halo('__h', 7, 32, 8, '#fff59d', 1)}<circle cx="7" cy="32" r="2.6" fill="#fff"/>
    ${spark(50, 32, 3)}${spark(40, 24, 2, '#9ff')}${spark(42, 42, 2, '#ffe08a')}${spark(14, 10, 2.6)}` },
});
