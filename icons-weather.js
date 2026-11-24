/* Иконки эпохи «Стихии». Детали (ball, halo, rays…) — в icons.js */

// пушистое облако; fill — цвет/градиент, y — сдвиг по вертикали
const cloudPuff = (fill, stroke, dy = 0) => cloudShape(
  [[20, 34 + dy, 10], [32, 26 + dy, 13], [44, 33 + dy, 10], [32, 38 + dy, 10]], fill, stroke, 3);
const WATER = ['#b8f3ff', '#3fb6ff', '#3a4bff'];

Object.assign(ICONS, {
  // «Земля»-стихия: глыба земли с травой и камешками
  land: { color: '#c68b59', svg: `
    ${linG('__g', ['#e0b48a', '#9c6644', '#5a3420'])}
    <path d="M6 30c8-4 16-6 26-6s18 2 26 6l-4 20c-6 6-14 8-22 8s-16-2-22-8z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M10 40c8 3 14-2 22 0s14 3 22 0" fill="none" stroke="#5a3420" stroke-width="1.8" opacity=".6"/>
    <g fill="#e6dcff" opacity=".55"><circle cx="20" cy="46" r="2.2"/><circle cx="40" cy="48" r="1.6"/><circle cx="32" cy="38" r="1.4"/></g>
    ${linG('__t', ['#a6ff8a', '#1fae5a'])}
    <path d="M6 30c8-4 16-6 26-6s18 2 26 6c-8 3-17 4-26 4S14 33 6 30z" fill="url(#__t)" stroke="#d9ffc4" stroke-width="1.6"/>
    <g stroke="#7dff9a" stroke-width="2" stroke-linecap="round"><path d="M16 27l-2-6M20 26l1-6M44 26l-1-6M48 27l2-6M32 25v-7"/></g>
    ${spark(54, 12, 3)}` },
  ice: { color: '#9fdcff', svg: `
    ${linG('__l', ['#e0fbff', '#7cc8ff'])}${linG('__r', ['#9fdcff', '#4b8fe0'])}
    <g stroke="#ffffff" stroke-width="2" stroke-linejoin="round">
      <path d="M12 23 32 33v21L12 44z" fill="url(#__l)" fill-opacity=".85"/>
      <path d="M52 23 32 33v21l20-10z" fill="url(#__r)" fill-opacity=".85"/>
      <path d="M32 13l20 10-20 10-20-10z" fill="#ffffff" fill-opacity=".9"/>
    </g>
    <path d="M17 28v10M22 31v4" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    ${spark(54, 10, 3.5)}${spark(10, 54, 2.5, '#9ff')}` },

  air: { color: '#bfefff', svg: `
    ${linG('__l', ['#bfefff', '#e6dcff', '#bfefff'], 1, 0)}
    <g fill="none" stroke="url(#__l)" stroke-linecap="round">
      <path d="M6 22h30a7 7 0 1 0-7-7" stroke-width="3.5"/>
      <path d="M6 33h44a7 7 0 1 1-7 7" stroke-width="3.5"/>
      <path d="M10 44h16" stroke-width="2.6" opacity=".7"/>
    </g>
    ${spark(52, 16, 3.5)}${spark(18, 52, 2.5, '#9ff')}` },

  steam: { color: '#e6dcff', svg: `
    ${linG('__s', ['#ffffff', '#e6dcff'], 0, 1)}
    <g fill="none" stroke-width="3.2" stroke-linecap="round">
      <path d="M22 44c-6-6 6-10 0-16s6-10 0-16" stroke="#e6dcff" opacity=".9"/>
      <path d="M32 44c-6-6 6-10 0-16s6-10 0-16" stroke="#ffffff"/>
      <path d="M42 44c-6-6 6-10 0-16s6-10 0-16" stroke="#e6dcff" opacity=".9"/>
    </g>
    ${radG('__w', WATER, .5, .3, .8)}
    <ellipse cx="32" cy="51" rx="22" ry="6" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.8"/>
    <g fill="#ff9f43"><circle cx="18" cy="51" r="1.4"/><circle cx="46" cy="51" r="1.4"/></g>` },

  geyser: { color: '#6ee7ff', svg: `
    ${linG('__j', ['#ffffff', '#6ee7ff'])}
    <path d="M28 46c-1-12-2-24 4-38 6 14 5 26 4 38z" fill="url(#__j)" stroke="#e0fbff" stroke-width="1.6"/>
    <g fill="#bfefff"><circle cx="20" cy="18" r="2.2"/><circle cx="44" cy="16" r="2.6"/><circle cx="16" cy="30" r="1.6"/><circle cx="48" cy="28" r="1.8"/><circle cx="24" cy="9" r="1.4"/><circle cx="41" cy="7" r="1.4"/></g>
    ${radG('__g', ['#c9b6a0', '#8a6a4f', '#4a3424'])}
    <path d="M4 58c4-8 14-12 22-12h12c8 0 18 4 22 12z" fill="url(#__g)" stroke="#e0c9ac" stroke-width="2" stroke-linejoin="round"/>` },

  cloud: { color: '#e6dcff', svg: `
    <radialGradient id="__g" gradientUnits="userSpaceOnUse" cx="28" cy="24" r="26">${stops(['#ffffff', '#e6dcff', '#9d8fd8'])}</radialGradient>
    ${cloudPuff('url(#__g)', '#ffffff', 2)}
    ${shine(26, 24, 5, 2.4, .7)}
    ${spark(54, 12, 3.5)}${spark(10, 14, 2.5, '#9ff')}` },

  rain: { color: '#4cc9ff', svg: `
    <radialGradient id="__g" gradientUnits="userSpaceOnUse" cx="28" cy="18" r="26">${stops(['#ffffff', '#c9cde6', '#7a7fb0'])}</radialGradient>
    ${cloudPuff('url(#__g)', '#eef0ff', -8)}
    <g stroke="#6ee7ff" stroke-width="2.6" stroke-linecap="round"><path d="M20 44l-3 7M30 44l-3 9M40 44l-3 7M25 54l-2 4M45 52l-2 4"/></g>` },

  storm: { color: '#fff59d', svg: `
    <radialGradient id="__g" gradientUnits="userSpaceOnUse" cx="28" cy="18" r="26">${stops(['#9a93c0', '#5b4f99', '#2a1f4a'])}</radialGradient>
    ${cloudPuff('url(#__g)', '#c9b6ff', -8)}
    <path d="M34 34l-8 12h7l-5 12 12-16h-7l5-8z" fill="#fff59d" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
    <g stroke="#6ee7ff" stroke-width="2.4" stroke-linecap="round"><path d="M18 44l-3 7M48 44l-3 7M22 54l-2 4"/></g>` },

  lightning: { color: '#fff59d', svg: `
    <path d="M36 4 22 30h10l-6 14" fill="none" stroke="#c77dff" stroke-width="7" stroke-linejoin="round" opacity=".45"/>
    <g fill="none" stroke-linejoin="round" stroke-linecap="round">
      <path d="M36 4 22 30h10l-6 14 4 16" stroke="#fff59d" stroke-width="3.2"/>
      <path d="M26 44l-10 6-2 8M30 30l12 6 4 10M42 36l8-2" stroke="#fff3c4" stroke-width="1.8"/>
    </g>
    ${spark(52, 12, 3.5)}${spark(12, 20, 2.5, '#9ff')}` },

  wind: { color: '#3ddc84', svg: `
    <g fill="none" stroke="#bfefff" stroke-width="2.8" stroke-linecap="round" opacity=".85">
      <path d="M4 24c12-6 24 6 38 0"/><path d="M8 38c14-6 26 6 44 0"/><path d="M6 50c10-4 18 2 26 0"/>
    </g>
    ${linG('__l', ['#a6ff8a', '#1fae5a'])}
    <path d="M46 12c8 0 12 6 12 10-6 0-12-4-12-10z" fill="url(#__l)" stroke="#d9ffc4" stroke-width="1.4" transform="rotate(20 52 17)"/>
    <path d="M38 40c6-2 11 2 12 6-5 1-10-1-12-6z" fill="url(#__l)" stroke="#d9ffc4" stroke-width="1.4"/>
    <path d="M20 8c5 0 8 4 8 7-4 0-8-3-8-7z" fill="#ffd166" stroke="#fff3c4" stroke-width="1.2"/>` },

  tornado: { color: '#b9b2e0', svg: `
    <g fill="none" stroke-linecap="round">
      <path d="M8 10h48" stroke="#e6e3f5" stroke-width="5"/><path d="M13 20h38" stroke="#c9c3ec" stroke-width="5"/><path d="M19 30h28" stroke="#e6e3f5" stroke-width="4.5"/>
      <path d="M24 39h18" stroke="#b9b2e0" stroke-width="4"/><path d="M28 47h10" stroke="#d9d4f2" stroke-width="3.5"/><path d="M31 54h4" stroke="#b9b2e0" stroke-width="3"/>
    </g>
    <path d="M14 15c10 2 26 2 36 0M22 35c6 1 14 1 20 0" fill="none" stroke="#8a83b8" stroke-width="1.4" opacity=".7"/>
    <g fill="#c68b59"><rect x="50" y="34" width="4" height="4" rx="1" transform="rotate(25 52 36)"/><rect x="10" y="40" width="3" height="3" rx="1"/></g>
    <circle cx="55" cy="22" r="1.6" fill="#3ddc84"/>` },

  rainbow: { color: '#ff8fd1', svg: `
    <g fill="none" stroke-width="4">
      ${['#ff4d6d', '#ff9f43', '#ffe066', '#3ddc84', '#4cc9ff', '#9d7bff'].map((c, i) =>
        `<path d="M${6 + i * 4} 46a${26 - i * 4} ${26 - i * 4} 0 0 1 ${52 - i * 8} 0" stroke="${c}"/>`).join('')}
    </g>
    ${cloudShape([[10, 48, 6], [17, 46, 6], [13, 52, 5]], '#ffffff', '#e6dcff', 2)}
    ${cloudShape([[47, 48, 6], [54, 46, 6], [51, 52, 5]], '#ffffff', '#e6dcff', 2)}
    ${spark(32, 10, 3)}` },

  ocean: { color: '#4cc9ff', svg: `
    ${linG('__a', ['#6ee7ff', '#3a6fd8'])}${linG('__b', ['#3fb6ff', '#2a2fa8'])}
    <path d="M2 38c6-12 18-16 26-10-6 0-8 6-4 8 6 3 12-4 18-4s14 4 20 2v26H2z" fill="url(#__a)" stroke="#d6f8ff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M2 50c8-4 14 2 22 0s14-4 22 0 12 2 16 0v14H2z" fill="url(#__b)" stroke="#bfefff" stroke-width="1.6"/>
    <path d="M28 28c-4 0-6 4-3 6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
    <g fill="#fff"><circle cx="40" cy="30" r="1.4"/><circle cx="46" cy="27" r="1.1"/></g>
    ${spark(52, 12, 3.5)}${spark(12, 16, 2.5, '#ffd6ff')}` },

  river: { color: '#4cc9ff', svg: `
    <path d="M6 10c10 0 14 4 10 12s-6 14 6 18 22 4 28 18" fill="none" stroke="#3ddc84" stroke-width="20" stroke-linecap="round" opacity=".35"/>
    <path d="M6 10c10 0 14 4 10 12s-6 14 6 18 22 4 28 18" fill="none" stroke="#d6f8ff" stroke-width="12" stroke-linecap="round"/>
    ${linG('__w', WATER, 1, 1)}
    <path d="M6 10c10 0 14 4 10 12s-6 14 6 18 22 4 28 18" fill="none" stroke="url(#__w)" stroke-width="9" stroke-linecap="round"/>
    <path d="M14 18c1 2 0 4-1 6M30 42c3 1 6 1 9 2" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
    ${spark(50, 14, 3.5)}${spark(12, 50, 2.5, '#9ff')}` },

  atmosphere: { color: '#6ee7ff', svg: `
    <g fill="none" stroke-linecap="round">
      <path d="M2 56a30 30 0 0 1 60 0" stroke="#c77dff" stroke-width="3" opacity=".4"/>
      <path d="M8 56a24 24 0 0 1 48 0" stroke="#6ee7ff" stroke-width="3" opacity=".6"/>
      <path d="M13 56a19 19 0 0 1 38 0" stroke="#bfefff" stroke-width="3" opacity=".85"/>
    </g>
    ${radG('__p', ['#b8f3ff', '#3fb6ff', '#1d3fa0'], .5, .2, .8)}
    <path d="M17 58a15 15 0 0 1 30 0z" fill="url(#__p)" stroke="#d6f8ff" stroke-width="1.6"/>
    <path d="M24 52c3-3 7-2 8 0s5 2 7 0" fill="none" stroke="#3ddc84" stroke-width="2.4" stroke-linecap="round"/>
    <g fill="#ffffff" opacity=".8"><circle cx="40" cy="22" r="1.4"/><circle cx="22" cy="28" r="1.2"/></g>
    ${spark(54, 10, 3.5)}${spark(10, 14, 2.5, '#ffd6ff')}` },

  snow: { color: '#bfefff', svg: `
    ${halo('__h', 32, 32, 26, '#bfefff', .35)}
    <g stroke="#e0fbff" stroke-width="3" stroke-linecap="round">${[0, 60, 120].map(a =>
      `<g transform="rotate(${a} 32 32)"><path d="M32 8v48"/><path d="M26 13l6 6 6-6M26 51l6-6 6 6" fill="none" stroke-width="2.2"/></g>`).join('')}</g>
    <circle cx="32" cy="32" r="3.5" fill="#fff"/>
    ${spark(54, 10, 3)}${spark(10, 52, 2.5, '#9ff')}` },

  snowman: { color: '#e0fbff', svg: `
    ${ball('__a', 32, 46, 13, ['#ffffff', '#e0fbff', '#9fc4e8'], '#fff')}
    ${ball('__b', 32, 24, 9.5, ['#ffffff', '#e0fbff', '#9fc4e8'], '#fff')}
    <rect x="23" y="11" width="18" height="3" rx="1.5" fill="#4b2bb0"/><rect x="26" y="3" width="12" height="9" rx="1.5" fill="#4b2bb0"/>
    <rect x="26" y="9" width="12" height="2" fill="#ff5fa2"/>
    <g fill="#2a1f4a"><circle cx="28.5" cy="22" r="1.4"/><circle cx="35.5" cy="22" r="1.4"/><circle cx="32" cy="42" r="1.4"/><circle cx="32" cy="48" r="1.4"/></g>
    <path d="M32 25l7 2-7 1.5z" fill="#ff9f43"/>
    <path d="M20 40l-9-6M44 40l9-6" stroke="#c68b59" stroke-width="2.2" stroke-linecap="round"/>` },

  sound: { color: '#ff8fd1', svg: `
    ${linG('__s', ['#e6dcff', '#9d7bff'])}
    <path d="M8 26h8l12-10v32L16 38H8z" fill="url(#__s)" stroke="#f0e8ff" stroke-width="2" stroke-linejoin="round"/>
    <g fill="none" stroke-linecap="round">
      <path d="M36 24a10 10 0 0 1 0 16" stroke="#ff8fd1" stroke-width="3"/>
      <path d="M42 18a18 18 0 0 1 0 28" stroke="#c77dff" stroke-width="3"/>
      <path d="M48 12a26 26 0 0 1 0 40" stroke="#6ee7ff" stroke-width="3"/>
    </g>` },

  aurora: { color: '#3ddc84', svg: `
    ${linG('__a', ['#ff8fd1', '#3ddc84', 'rgba(61,220,132,0)'])}
    ${linG('__b', ['#c77dff', '#6ee7ff', 'rgba(110,231,255,0)'])}
    <path d="M4 14c10-6 18 4 28-2s18-4 28 2v24c-10-4-18 2-28-2S14 30 4 36z" fill="url(#__a)" opacity=".85"/>
    <path d="M10 22c8-4 16 4 24 0s16-2 24 2v20c-8-4-16 2-24-2s-16 0-24 2z" fill="url(#__b)" opacity=".55"/>
    ${linG('__g', ['#2a1f4a', '#120c26'])}
    <path d="M2 52l12-10 10 6 12-12 12 10 14-6v24H2z" fill="url(#__g)" stroke="#9d7bff" stroke-width="1.6" stroke-linejoin="round"/>
    ${spark(50, 8, 3)}${spark(12, 8, 2.5)}` },

  // ── расширение «Космоса» ──
  // дым — клубы, поднимающиеся от тлеющего уголька
  smoke: { color: '#b9b4d6', svg: `
    ${radG('__s', ['#f2efff', '#b9b4d6', '#6d6890'], .4, .35, .8)}
    <g fill="url(#__s)" stroke="#e6e1ff" stroke-width="1.6">
      <circle cx="30" cy="44" r="8"/><circle cx="38" cy="32" r="9"/><circle cx="28" cy="22" r="8"/><circle cx="38" cy="12" r="6"/></g>
    <g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"><path d="M26 42c1-3 4-4 6-3M34 30c1-3 4-4 7-3M24 20c1-3 4-4 6-3"/></g>
    ${radG('__e', ['#fff59d', '#ff9f43', '#d9480f'], .5, .5, .5)}<ellipse cx="28" cy="56" rx="8" ry="3.5" fill="url(#__e)"/>
    ${spark(52, 50, 3.2)}${spark(12, 12, 2.6, '#ffd6ff')}` },

  // ── расширение «Космоса», этап 2 ──
  // прилив — Луна тянет к себе горб океанской воды
  tide: { color: '#4cc9ff', svg: `
    ${ball('__m', 48, 13, 8, ['#ffffff', '#e6e1ff', '#9a93c0'], '#fff', 1.6)}
    ${linG('__w', WATER)}
    <path d="M2 46C12 46 18 30 30 30S48 46 62 46V62H2Z" fill="url(#__w)" stroke="#d0f4ff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14 52c4-2 8-2 12 0M36 54c4-2 8-2 12 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>
    <g fill="none" stroke="#ffe066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M36 30L42 22"/><path d="M38 21l4 1 0 4"/></g>
    ${spark(12, 12, 3.2)}${spark(26, 20, 2.2, '#9ff')}` },

  // озоновый слой — светящийся щит над Землёй отражает жёсткие лучи
  ozone: { color: '#6ee7ff', svg: `
    ${linG('__e', ['#6ee7ff', '#3a4bff'])}
    <path d="M2 64C2 50 16 42 32 42S62 50 62 64Z" fill="url(#__e)" stroke="#c8f1ff" stroke-width="2"/>
    <path d="M14 56c4-3 9-4 12-2M38 52c4 0 8 2 10 5" fill="none" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    <path d="M2 40C10 26 22 22 32 22S54 26 62 40" fill="none" stroke="#9d7bff" stroke-width="7" stroke-linecap="round" opacity=".45"/>
    <path d="M2 40C10 26 22 22 32 22S54 26 62 40" fill="none" stroke="#bff6ff" stroke-width="2.4" stroke-linecap="round"/>
    <g fill="none" stroke="#ff8fd1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 4L20 18L12 10"/><path d="M34 2L34 16L28 8"/><path d="M52 6L46 18L54 12"/></g>
    ${spark(58, 22, 2.8)}${spark(6, 22, 2.4, '#9ff')}` },

  // ── расширение «Космоса», этап 3 ──
  // парниковый эффект — свет проходит под купол атмосферы, а тепло остаётся внутри
  greenhouse: { color: '#ff7a59', svg: `
    ${linG('__e', ['#3ddc84', '#128a52'])}
    <path d="M6 60C6 52 18 48 32 48S58 52 58 60Z" fill="url(#__e)" stroke="#d9ffc4" stroke-width="1.6"/>
    <path d="M4 58C4 30 16 16 32 16S60 30 60 58" fill="#bfefff" fill-opacity=".14" stroke="#bff6ff" stroke-width="2.4"/>
    <path d="M14 28c4-5 9-7 14-8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>
    <g fill="none" stroke="#ffe066" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M38 2L30 44"/><path d="M27 39l3 5 4-4"/></g>
    <g fill="none" stroke="#ff5f8a" stroke-width="2.2" stroke-linecap="round">
      <path d="M18 46c-2-4 2-6 0-10s2-6 4-8"/><path d="M46 46c2-4-2-6 0-10s-2-6-4-8"/><path d="M22 27c4-3 8-3 10-1"/></g>
    ${spark(54, 8, 3.4)}${spark(8, 10, 2.4, '#ffe08a')}` },
});
