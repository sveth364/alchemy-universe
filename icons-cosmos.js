/* Иконки эпохи «Космос». Детали — в icons.js и файлах предыдущих эпох */

// маленькая спиральная галактика
const miniGalaxy = (x, y, s, c1, c2) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M0 0c5-4 11-1 11 5s-9 10-15 6" fill="none" stroke="${c1}" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M0 0c-5 4-11 1-11-5s9-10 15-6" fill="none" stroke="${c2}" stroke-width="3.2" stroke-linecap="round"/>
  <circle r="3.6" fill="#fff8d0"/></g>`;
const stars = (list) => list.map(([x, y, r, c = '#fff']) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('');

// эллиптическая галактика-«чечевица»: x, y, размер, поворот, цвет
const ellGal = (x, y, r, rot, c) => `<g transform="rotate(${rot} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .38}" fill="${c}" opacity=".55"/>` +
  `<ellipse cx="${x}" cy="${y}" rx="${r * .55}" ry="${r * .22}" fill="${c}"/><circle cx="${x}" cy="${y}" r="${r * .2}" fill="#fff"/></g>`;

Object.assign(ICONS, {
  system: { color: '#ffd166', svg: `
    <g fill="none" stroke="#c9b6ff" stroke-width="1.2" opacity=".7"><circle cx="32" cy="32" r="13"/><circle cx="32" cy="32" r="21"/><circle cx="32" cy="32" r="29"/></g>
    ${ball('__s', 32, 32, 7, ['#fffbe0', '#ffd166', '#ff7a1a'], '#fff3c4', 1.4)}
    ${ball('__a', 43, 25, 3, ['#ffe0d0', '#ff8f6b', '#a0412a'], '#fff', 1)}
    ${ball('__b', 14, 43, 4, ['#d0f4ff', '#4cc9ff', '#1d4ed8'], '#fff', 1)}
    ${ball('__c', 52, 52, 5, ['#fff3c4', '#ffb347', '#c4560b'], '#fff', 1)}
    ${arcHalf(52, 52, 8, 2.4, -20, '#ffe0b0', 1.4, true)}` },

  asteroid: { color: '#a9a4c8', svg: `
    ${radG('__g', ['#d9d4f2', '#7a7499', '#3a3560'], .4, .3, .8)}
    <path d="M14 22c6-10 20-12 30-8s14 12 12 22-8 18-20 18-22-4-26-12 0-14 4-20z" fill="url(#__g)" stroke="#e6e3f5" stroke-width="2"/>
    <g fill="#3a3560" opacity=".55"><circle cx="38" cy="30" r="5"/><circle cx="24" cy="40" r="3.4"/><circle cx="44" cy="44" r="2.4"/><circle cx="26" cy="24" r="2"/></g>
    <g fill="none" stroke="#e6e3f5" stroke-width="1" opacity=".6"><circle cx="38" cy="30" r="5"/><circle cx="24" cy="40" r="3.4"/></g>
    ${stars([[6, 8, 1.2], [58, 10, 1], [8, 56, 1], [56, 58, 1.2, '#9ff']])}${spark(54, 20, 3)}` },

  comet: { color: '#6ee7ff', svg: `
    ${linG('__t', ['rgba(110,231,255,0)', 'rgba(199,125,255,.55)', '#bfefff'], 1, 1)}
    <path d="M2 4 40 34l6-10z" fill="url(#__t)"/><path d="M4 16 38 38l2-6z" fill="url(#__t)" opacity=".6"/>
    ${halo('__h', 46, 40, 16, '#6ee7ff', .55)}
    ${ball('__c', 46, 40, 8, ['#ffffff', '#bfefff', '#4cc9ff'], '#fff', 1.6)}
    ${spark(16, 50, 3)}${spark(56, 14, 2.5, '#ffd6ff')}` },

  meteor: { color: '#ff9f43', svg: `
    ${linG('__t', ['rgba(255,209,102,0)', '#ffd166', '#ff5e3a'], 1, 1)}
    <path d="M4 6 44 42l6-8z" fill="url(#__t)"/>
    <path d="M10 4l30 28M6 14l32 26" stroke="#fff3c4" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
    ${halo('__h', 46, 42, 14, '#ff9f43', .6)}
    ${ball('__r', 46, 42, 6, ['#fff3c4', '#ffb347', '#c4560b'], '#fff3c4', 1.4)}
    ${spark(54, 12, 3.5)}${spark(14, 50, 2.5, '#9ff')}` },

  exoplanet: { color: '#2ee6a6', svg: `
    ${ball('__s', 52, 12, 5, ['#ffffff', '#ffd6ff', '#ff8fd1'], '#fff', 1.2)}
    ${halo('__h', 30, 36, 28, '#2ee6a6', .4)}
    ${radG('__g', ['#d4ffea', '#2ee6a6', '#0b5e5a'], .35, .3, .8)}
    <clipPath id="__c"><circle cx="30" cy="36" r="18"/></clipPath>
    <circle cx="30" cy="36" r="18" fill="url(#__g)"/>
    <g clip-path="url(#__c)" fill="none" stroke="#c77dff" stroke-width="3" opacity=".5"><path d="M10 30c8 3 16-3 24 0s12 3 18 0M10 42c8 3 14-3 22 0s14 3 20 0"/></g>
    <circle cx="30" cy="36" r="18" fill="none" stroke="#d4ffea" stroke-width="2"/>
    ${ball('__m', 54, 46, 4, ['#ffe0b0', '#ff9f43', '#a8501a'], '#fff', 1)}
    ${spark(10, 10, 3)}` },

  alien: { color: '#7dff6a', svg: `
    ${radG('__g', ['#e8ffd4', '#7dff6a', '#1f9d3a'], .45, .3, .8)}
    <path d="M22 12l-6-8M42 12l6-8" stroke="#7dff6a" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="16" cy="4" r="3" fill="#ff8fd1"/><circle cx="48" cy="4" r="3" fill="#ff8fd1"/>
    <path d="M32 10c14 0 22 8 22 20 0 14-12 28-22 28S10 44 10 30c0-12 8-20 22-20z" fill="url(#__g)" stroke="#e8ffd4" stroke-width="2"/>
    <g fill="#12102a"><ellipse cx="22" cy="32" rx="7" ry="10" transform="rotate(30 22 32)"/><ellipse cx="42" cy="32" rx="7" ry="10" transform="rotate(-30 42 32)"/></g>
    <g fill="#fff" opacity=".85"><ellipse cx="20" cy="28" rx="2.4" ry="3.4" transform="rotate(30 20 28)"/><ellipse cx="40" cy="28" rx="2.4" ry="3.4" transform="rotate(-30 40 28)"/></g>
    <path d="M28 48c3 2 5 2 8 0" fill="none" stroke="#1f5a2f" stroke-width="1.8" stroke-linecap="round"/>` },

  ufo: { color: '#6ee7ff', svg: `
    ${linG('__b', ['rgba(255,245,157,.7)', 'rgba(255,245,157,0)'])}
    <path d="M24 36h16l10 24H14z" fill="url(#__b)"/>
    ${radG('__d', ['#ffffff', '#bfefff', '#4cc9ff'], .4, .3, .8)}
    <path d="M20 26a12 12 0 0 1 24 0z" fill="url(#__d)" stroke="#fff" stroke-width="1.8"/>
    ${linG('__s', ['#e6e9ff', '#8a93c9'])}
    <ellipse cx="32" cy="30" rx="28" ry="9" fill="url(#__s)" stroke="#fff" stroke-width="2"/>
    <g fill="#ffe066">${[12, 22, 32, 42, 52].map(x => `<circle cx="${x}" cy="31" r="2.2"/>`).join('')}</g>
    ${spark(54, 10, 3)}${spark(8, 12, 2.5, '#ffd6ff')}` },

  astronaut: { color: '#e6e9ff', svg: `
    ${linG('__s', ['#ffffff', '#c9cde6'])}
    <path d="M10 60c0-12 8-18 22-18s22 6 22 18z" fill="url(#__s)" stroke="#fff" stroke-width="2"/>
    <rect x="26" y="48" width="12" height="8" rx="2" fill="#4cc9ff" stroke="#fff" stroke-width="1.2"/>
    <circle cx="32" cy="26" r="20" fill="url(#__s)" stroke="#fff" stroke-width="2"/>
    ${linG('__v', ['#ffb347', '#c77dff', '#1d3fa0'], 1, 1)}
    <rect x="16" y="16" width="32" height="20" rx="10" fill="url(#__v)" stroke="#e6e9ff" stroke-width="1.8"/>
    <path d="M22 22c3-3 7-4 10-3" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>
    ${spark(40, 30, 2)}<circle cx="12" cy="26" r="2.6" fill="#ff5f8a"/>` },

  moonlanding: { color: '#d9dcef', svg: `
    ${radG('__g', ['#ffffff', '#c9cde6', '#7f86a8'], .5, .1, .9)}
    <path d="M0 46c10-6 20-8 32-8s22 2 32 8v18H0z" fill="url(#__g)" stroke="#fff" stroke-width="1.8"/>
    <g fill="#7f86a8" opacity=".5"><ellipse cx="14" cy="52" rx="5" ry="2"/><ellipse cx="48" cy="56" rx="6" ry="2.4"/></g>
    <path d="M24 42V8" stroke="#e6e9ff" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M25 9h22v14H25z" fill="#ff5f8a" stroke="#fff" stroke-width="1.4"/>
    <path d="M25 13h22M25 17h22" stroke="#fff" stroke-width="1.6"/><rect x="25" y="9" width="8" height="6" fill="#4cc9ff"/>
    <g fill="#5b5680"><ellipse cx="38" cy="48" rx="2.4" ry="4" transform="rotate(20 38 48)"/><ellipse cx="44" cy="44" rx="2.4" ry="4" transform="rotate(20 44 44)"/></g>
    ${ball('__e', 54, 10, 5, ['#d0f4ff', '#4cc9ff', '#1d4ed8'], '#fff', 1)}` },

  cluster: { color: '#c77dff', svg: `
    ${halo('__h', 32, 32, 30, '#c77dff', .35)}
    ${miniGalaxy(20, 20, .9, '#ff8fd1', '#9d7bff')}${miniGalaxy(44, 22, .7, '#6ee7ff', '#c77dff')}
    ${miniGalaxy(30, 44, 1, '#ffd166', '#ff8fd1')}${miniGalaxy(50, 46, .55, '#ff8fd1', '#6ee7ff')}${miniGalaxy(12, 44, .5, '#c77dff', '#ffd166')}
    ${stars([[56, 8, 1.2], [6, 8, 1], [8, 30, 1, '#9ff'], [58, 32, 1]])}` },

  darkmatter: { color: '#9d7bff', svg: `
    <g fill="none" stroke="#c9b6ff" stroke-dasharray="3 4">
      <circle cx="32" cy="32" r="28" stroke-width="1.4" opacity=".45"/><circle cx="32" cy="32" r="21" stroke-width="1.6" opacity=".65"/></g>
    <path d="M10 18c8 4 14 4 22 0s14-4 22 0M10 46c8-4 14-4 22 0s14 4 22 0" fill="none" stroke="#6ee7ff" stroke-width="1.4" opacity=".55"/>
    ${radG('__g', ['#3d2a7a', '#120c26', '#05030f'], .4, .35, .8)}
    <circle cx="32" cy="32" r="14" fill="url(#__g)" stroke="#9d7bff" stroke-width="2"/>
    ${shine(27, 26, 3.4, 1.8, .25)}
    ${stars([[8, 10, 1.2], [56, 12, 1, '#9ff'], [52, 54, 1.2], [12, 54, 1, '#ffd6ff']])}` },

  darkenergy: { color: '#c77dff', svg: `
    ${halo('__h', 32, 32, 30, '#c77dff', .5)}
    <g stroke="#ff8fd1" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none">${[0, 60, 120, 180, 240, 300].map(a =>
      `<path d="M32 15V5m-4 4 4-4 4 4" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    ${ball('__c', 32, 32, 11, ['#ffe6f4', '#c77dff', '#4b1080'], '#f0d8ff')}
    <path d="M27 32c2-6 8-6 10 0s-8 6-6 0" fill="none" stroke="#fff" stroke-width="1.6" opacity=".8"/>` },

  web: { color: '#ff8fd1', svg: `
    ${halo('__h', 32, 32, 30, '#9d7bff', .3)}
    <g fill="none" stroke="#c77dff" stroke-width="2" stroke-linecap="round" opacity=".85">
      <path d="M8 12 22 26 34 14 52 20 44 38 56 52M22 26l-6 18 18 10 10-16M34 14l0 16 10 8M16 44 6 54M34 30 22 26"/></g>
    <g fill="none" stroke="#ffd6ff" stroke-width=".8" opacity=".7"><path d="M8 12 22 26 34 14 52 20 44 38 56 52M22 26l-6 18 18 10 10-16"/></g>
    ${[[22, 26, 3.4], [34, 14, 2.6], [52, 20, 3], [44, 38, 3.6], [16, 44, 2.8], [34, 54, 3], [34, 30, 2.4], [8, 12, 2], [56, 52, 2.2], [6, 54, 1.8]].map(([x, y, r]) =>
      `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff8d0" stroke="#ff8fd1" stroke-width="1.2"/>`).join('')}` },

  wormhole: { color: '#6ee7ff', svg: `
    ${linG('__g', ['#6ee7ff', '#c77dff', '#ff8fd1'])}
    <g fill="none" stroke="url(#__g)">${[[32, 12, 28, 9, 2.6], [32, 20, 21, 7, 2.3], [32, 27, 15, 5, 2], [32, 33, 10, 3.4, 1.8], [32, 38, 6, 2, 1.6]].map(([x, y, rx, ry, w]) =>
      `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" stroke-width="${w}"/>`).join('')}</g>
    <path d="M4 12C14 20 26 30 26 40M60 12C50 20 38 30 38 40" fill="none" stroke="#c9b6ff" stroke-width="1.4" opacity=".7"/>
    <g fill="none" stroke="url(#__g)" opacity=".75">${[[32, 60, 28, 6, 2.2], [32, 52, 18, 4.5, 2], [32, 46, 10, 3, 1.8]].map(([x, y, rx, ry, w]) =>
      `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" stroke-width="${w}"/>`).join('')}</g>
    <circle cx="32" cy="42" r="3" fill="#fff"/>${spark(54, 30, 3)}` },

  expansion: { color: '#ffd166', svg: `
    ${halo('__h', 32, 32, 18, '#ffd166', .5)}
    <g stroke="#ffd166" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">${[0, 45, 90, 135, 180, 225, 270, 315].map(a =>
      `<path d="M32 20V6m-3.5 3.5L32 6l3.5 3.5" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    ${[[32, 32, 4, '#fff'], [24, 26, 2, '#ff8fd1'], [40, 26, 2, '#6ee7ff'], [25, 39, 2, '#6ee7ff'], [39, 39, 2, '#ff8fd1']].map(([x, y, r, c]) =>
      `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('')}
    ${stars([[10, 22, 1.2, '#c9b6ff'], [54, 42, 1.2, '#c9b6ff'], [22, 56, 1, '#c9b6ff'], [44, 8, 1, '#c9b6ff']])}` },

  universe: { color: '#c77dff', svg: `
    ${halo('__h', 32, 32, 32, '#c77dff', .6)}
    ${radG('__g', ['#3d2a9a', '#1a1050', '#05030f'], .5, .5, .55)}
    <circle cx="32" cy="32" r="26" fill="url(#__g)" stroke="#e6dcff" stroke-width="2.2"/>
    <circle cx="20" cy="22" r="9" fill="#ff5fa2" opacity=".35"/><circle cx="44" cy="42" r="10" fill="#6ee7ff" opacity=".3"/>
    ${radG('__a', ['#ffe066', '#ff5fa2', '#7b5cff'], .5, .5, .5)}
    <g fill="url(#__a)">${[0, 120, 240].map(a =>
      `<path d="M30 28C38 22 50 26 49 38 45 31 38 29 32 33z" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    <circle cx="32" cy="32" r="6" fill="#fff8d0"/>
    ${stars([[14, 36, 1, '#fff'], [48, 20, 1.2, '#fff'], [22, 48, 1, '#9ff'], [42, 12, 1, '#ffd6ff'], [52, 32, 1, '#fff']])}
    ${arcHalf(32, 32, 30, 8, -20, '#ffd166', 1.6, true, .8)}
    ${spark(54, 6, 4)}${spark(8, 56, 3, '#9ff')}${spark(8, 8, 2.5, '#ffd6ff')}` },

  multiverse: { color: '#ff8fd1', svg: `
    ${[[22, 24, 16, ['#ffd1f0', '#c77dff', '#3d1a7a']], [44, 20, 11, ['#d0f4ff', '#4cc9ff', '#1d3fa0']], [42, 44, 13, ['#fff3c4', '#ff8fd1', '#7a1f6a']], [16, 48, 8, ['#d4ffea', '#2ee6a6', '#0b5e5a']]]
      .map(([x, y, r, arr], i) => `${radG('__b' + i, arr, .4, .35, .8)}
        <circle cx="${x}" cy="${y}" r="${r}" fill="url(#__b${i})" fill-opacity=".85" stroke="#fff" stroke-width="1.6"/>
        ${miniGalaxy(x, y, r / 22, '#fff', '#ffd6ff')}${shine(x - r * .4, y - r * .45, r * .25, r * .12, .7)}`).join('')}
    ${spark(56, 56, 3.5)}${spark(56, 4, 2.5, '#9ff')}` },

  // ── расширение «Космоса» ──
  // орбита — планета и наклонённая орбита с аппаратом (задняя половина орбиты — за планетой)
  orbit: { color: '#6ee7ff', svg: `
    ${arcHalf(32, 32, 28, 11, -25, '#6ee7ff', 2, false, .45)}
    ${ball('__p', 32, 32, 14, ['#c8f1ff', '#4cc9ff', '#1d4ed8'], '#c8f1ff', 2)}
    <path d="M24 28c4-3 9-3 12 1" fill="none" stroke="#3ddc84" stroke-width="3" stroke-linecap="round" opacity=".8"/>
    ${arcHalf(32, 32, 28, 11, -25, '#6ee7ff', 2.4, true)}
    <g transform="translate(50 47) rotate(-25)"><rect x="-7" y="-2" width="14" height="4" rx="1" fill="#3a4bff" stroke="#c8f1ff" stroke-width="1"/>
      <rect x="-2.5" y="-3.5" width="5" height="7" rx="1.5" fill="#fff" stroke="#c9cde6" stroke-width="1"/></g>
    ${spark(54, 10, 3.5)}${spark(10, 54, 2.5, '#ffd6ff')}` },

  // космический телескоп — труба с солнечными панелями, наклонённая к звёздам
  spacetelescope: { color: '#c9cde6', svg: `
    ${linG('__t', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 0)}${linG('__p', ['#9ad7ff', '#3a4bff'], 1, 1)}${linG('__l', ['rgba(255,245,157,0)', 'rgba(255,245,157,.75)'], 1, 1)}
    <path d="M58 4L45 9L50 15Z" fill="url(#__l)"/>
    <g transform="rotate(-35 32 34)">
      <rect x="5" y="22" width="17" height="9" rx="1.5" fill="url(#__p)" stroke="#c8f1ff" stroke-width="1.2"/>
      <rect x="42" y="22" width="17" height="9" rx="1.5" fill="url(#__p)" stroke="#c8f1ff" stroke-width="1.2"/>
      <g stroke="#c8f1ff" stroke-width=".8" opacity=".75"><path d="M10.5 22v9M16 22v9M47.5 22v9M53 22v9"/></g>
      <rect x="22" y="12" width="20" height="40" rx="3" fill="url(#__t)" stroke="#fff" stroke-width="2"/>
      <rect x="22" y="38" width="20" height="14" rx="3" fill="#ffcf5a" stroke="#fff3c4" stroke-width="1.6"/>
      <g stroke="#b8860b" stroke-width="1" opacity=".7"><path d="M26 40v10M31 40v10M36 40v10"/></g>
      <path d="M22 20h20M22 30h20" stroke="#6a6f99" stroke-width="1.6"/>
      <path d="M23 12C21 6 27 2 34 3" fill="#c9cde6" stroke="#fff" stroke-width="1.6"/>
      <ellipse cx="32" cy="12" rx="10" ry="3.2" fill="#1a1240" stroke="#fff" stroke-width="1.6"/>
      <circle cx="32" cy="12" r="2" fill="#6ee7ff"/>
      <path d="M42 46l6 4" stroke="#c9cde6" stroke-width="1.6"/><path d="M45 52a5 5 0 0 1 6-6z" fill="#e6e9ff" stroke="#fff" stroke-width="1"/>
    </g>
    ${spark(58, 4, 3.4, '#fff59d')}${spark(60, 26, 2.2, '#9ff')}${spark(38, 6, 1.8, '#ffd6ff')}${spark(8, 56, 2.5)}` },

  // космическая станция — модули и большие солнечные крылья
  spacestation: { color: '#6ee7ff', svg: `
    ${linG('__p', ['#9ad7ff', '#3a4bff'], 1, 1)}${linG('__m', ['#ffffff', '#c9cde6', '#6a6f99'])}
    <path d="M10 32H54" stroke="#e6e9ff" stroke-width="3.4"/>
    <g fill="url(#__p)" stroke="#c8f1ff" stroke-width="1.2">
      <rect x="6" y="12" width="10" height="17" rx="1"/><rect x="6" y="35" width="10" height="17" rx="1"/>
      <rect x="48" y="12" width="10" height="17" rx="1"/><rect x="48" y="35" width="10" height="17" rx="1"/></g>
    <g stroke="#c8f1ff" stroke-width=".8" opacity=".7"><path d="M11 12v17M11 35v17M53 12v17M53 35v17"/></g>
    <rect x="24" y="25" width="16" height="14" rx="4" fill="url(#__m)" stroke="#fff" stroke-width="1.8"/>
    <rect x="28" y="14" width="8" height="12" rx="3" fill="url(#__m)" stroke="#fff" stroke-width="1.6"/>
    <rect x="28" y="38" width="8" height="12" rx="3" fill="url(#__m)" stroke="#fff" stroke-width="1.6"/>
    <circle cx="32" cy="32" r="2.6" fill="#ffcf5a"/>
    ${spark(54, 58, 3)}${spark(32, 6, 2.6, '#9ff')}` },

  // Марс — ржавая планета с полярной шапкой и кратерами
  mars: { color: '#ff7a59', svg: `
    ${halo('__h', 32, 32, 30, '#ff7a59', .4)}
    ${ball('__m', 32, 32, 21, ['#ffc9a8', '#ff7a59', '#9c2f17'], '#ffd6c4', 2.2)}
    <path d="M22 15c6-3 14-3 20 0-5 3-15 3-20 0z" fill="#fff" opacity=".9"/>
    <g fill="#b8452a" opacity=".75"><circle cx="40" cy="36" r="4"/><circle cx="26" cy="42" r="3"/><circle cx="44" cy="25" r="2"/><ellipse cx="30" cy="30" rx="7" ry="2.4" transform="rotate(-15 30 30)"/></g>
    ${spark(56, 8, 3.5)}${spark(8, 54, 2.5, '#ffe08a')}` },

  // ── расширение «Космоса», этап 2 ──
  // метеорит — оплавленный железный камень с вмятинами на земле
  meteorite: { color: '#ffb347', svg: `
    ${halo('__h', 32, 36, 24, '#ff9f43', .45)}
    ${linG('__r', ['#8a83b8', '#3d3866', '#1e1a33'], 1, 1)}
    <path d="M10 50C6 40 12 26 24 20C34 14 50 18 54 30C58 40 52 52 40 54C28 56 14 56 10 50Z" fill="url(#__r)" stroke="#ffcf9a" stroke-width="2.2"/>
    <g fill="#2a2650" stroke="#9a93c0" stroke-width="1"><ellipse cx="24" cy="32" rx="5" ry="3.5"/><ellipse cx="40" cy="28" rx="4" ry="3"/><ellipse cx="36" cy="44" rx="6" ry="3.5"/><ellipse cx="18" cy="45" rx="3" ry="2"/></g>
    <path d="M22 22c6-3 14-3 20 0" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".5"/>
    <path d="M14 52c2 1 4 1 6 0" fill="none" stroke="#ff9f43" stroke-width="2" stroke-linecap="round"/>
    ${spark(54, 10, 3.4)}${spark(10, 14, 2.4, '#ffe08a')}` },

  // гравитационные волны — две чёрные дыры кружат и пускают рябь
  gravwave: { color: '#9d7bff', svg: `
    <g fill="none" stroke-linecap="round">
      <circle cx="32" cy="32" r="28" stroke="#9d7bff" stroke-width="1.6" opacity=".3"/>
      <circle cx="32" cy="32" r="22" stroke="#9d7bff" stroke-width="2" opacity=".5"/>
      <circle cx="32" cy="32" r="16" stroke="#c9b6ff" stroke-width="2.2" opacity=".75"/>
      <path d="M22 32C22 22 42 20 42 32" stroke="#6ee7ff" stroke-width="2"/><path d="M42 32C42 42 22 44 22 32" stroke="#ff8fd1" stroke-width="2"/></g>
    ${halo('__a', 23, 32, 9, '#ffb347', .8)}${halo('__b', 41, 32, 9, '#6ee7ff', .8)}
    <circle cx="23" cy="32" r="5" fill="#0b0820" stroke="#ffcf5a" stroke-width="1.8"/>
    <circle cx="41" cy="32" r="5" fill="#0b0820" stroke="#bff6ff" stroke-width="1.8"/>
    ${spark(56, 8, 3.2)}${spark(8, 56, 2.4, '#ffd6ff')}` },

  // лунная база — купола на сером грунте, в небе Земля
  moonbase: { color: '#c9c3ec', svg: `
    ${ball('__e', 50, 13, 7, ['#c8f1ff', '#4cc9ff', '#1d4ed8'], '#c8f1ff', 1.4)}
    ${linG('__g', ROCK)}${linG('__d', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 0)}
    <path d="M2 48C16 44 30 46 40 45S56 44 62 46V62H2Z" fill="url(#__g)" stroke="#e6e3f5" stroke-width="1.6"/>
    <g fill="#6d6890"><ellipse cx="50" cy="55" rx="5" ry="1.8"/><ellipse cx="12" cy="57" rx="3" ry="1.2"/></g>
    <path d="M10 48a10 10 0 0 1 20 0Z" fill="url(#__d)" stroke="#fff" stroke-width="1.8"/>
    <path d="M30 47a7 7 0 0 1 14 0Z" fill="url(#__d)" stroke="#fff" stroke-width="1.6"/>
    <path d="M28 44h4" stroke="#c9cde6" stroke-width="3"/>
    <g fill="#ffcf5a"><circle cx="16" cy="44" r="1.6"/><circle cx="22" cy="43" r="1.6"/><circle cx="37" cy="44" r="1.4"/></g>
    <path d="M46 46V32" stroke="#c9cde6" stroke-width="1.8"/><path d="M42 30a5 5 0 0 0 8 0" fill="#e6e9ff" stroke="#fff" stroke-width="1.2"/>
    ${spark(22, 12, 3)}${spark(8, 26, 2.2, '#9ff')}` },

  // колония на Марсе — стеклянные купола с зеленью на красном грунте
  colony: { color: '#ff7a59', svg: `
    ${linG('__g', ['#ff9a6b', '#a63c1f'])}
    <path d="M2 48C14 45 26 47 36 46S54 44 62 46V62H2Z" fill="url(#__g)" stroke="#ffc2a8" stroke-width="1.6"/>
    <g fill="#3ddc84" stroke="#d9ffc4" stroke-width="1"><path d="M14 47c0-5 2-8 4-9 2 1 4 4 4 9z"/><path d="M22 47c0-4 2-6 3-7 2 1 3 3 3 7z"/><path d="M42 46c0-4 1-6 3-7 2 1 3 3 3 7z"/></g>
    <path d="M8 48a13 13 0 0 1 26 0Z" fill="#bfefff" fill-opacity=".22" stroke="#e0fbff" stroke-width="2"/>
    <path d="M36 47a10 10 0 0 1 20 0Z" fill="#bfefff" fill-opacity=".22" stroke="#e0fbff" stroke-width="2"/>
    <path d="M13 40c2-4 5-6 9-6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
    <path d="M34 45h2" stroke="#e0fbff" stroke-width="3"/>
    ${ball('__m', 50, 14, 6, ['#ffc9a8', '#ff7a59', '#9c2f17'], '#ffd6c4', 1.2)}
    ${spark(14, 12, 3.2)}${spark(30, 22, 2.2, '#ffd6ff')}` },

  // терраформирование — планета, наполовину красная, наполовину зелёно-голубая
  terraforming: { color: '#3ddc84', svg: `
    ${halo('__h', 32, 32, 30, '#3ddc84', .35)}
    <defs><clipPath id="__c"><circle cx="32" cy="32" r="22"/></clipPath></defs>
    ${radG('__r', ['#ffc9a8', '#ff7a59', '#9c2f17'])}${radG('__b', ['#c8f1ff', '#4cc9ff', '#1d4ed8'])}
    <g clip-path="url(#__c)">
      <rect x="0" y="0" width="64" height="64" fill="url(#__r)"/>
      <path d="M38 0C26 14 42 26 30 40S34 56 28 64H64V0Z" fill="url(#__b)"/>
      <path d="M44 20c4-2 8 0 9 4-3 2-6 1-9-1zM40 40c4-1 7 2 7 5-4 1-6-1-7-5z" fill="#3ddc84"/>
      <g fill="#b8452a" opacity=".7"><circle cx="16" cy="24" r="3"/><circle cx="20" cy="40" r="2.2"/></g>
    </g>
    <circle cx="32" cy="32" r="22" fill="none" stroke="#e6ffd0" stroke-width="2.2"/>
    <path d="M40 8C26 20 44 28 32 40" fill="none" stroke="#fff" stroke-width="1.4" stroke-dasharray="2 3" opacity=".6"/>
    ${shine(22, 20, 5, 2.6, .45)}${spark(56, 8, 3.4)}${spark(8, 56, 2.4, '#ffe08a')}` },

  // межпланетный зонд — большая антенна-тарелка, корпус и длинная штанга
  probe: { color: '#ffcf5a', svg: `
    ${linG('__d', ['#ffffff', '#e6e9ff', '#9a93c0'], 1, 1)}
    <path d="M30 34L60 52" stroke="#c9cde6" stroke-width="1.8"/><circle cx="60" cy="52" r="2" fill="#6ee7ff"/>
    <path d="M24 38L8 56" stroke="#c9cde6" stroke-width="1.8"/><rect x="4" y="53" width="7" height="7" rx="1.5" fill="#ffcf5a" stroke="#fff" stroke-width="1"/>
    <rect x="22" y="30" width="14" height="10" rx="2" fill="#ffcf5a" stroke="#fff3c4" stroke-width="1.6"/>
    <path d="M10 22C14 8 36 2 46 12C38 24 20 30 10 22Z" fill="url(#__d)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M28 17L29 31" stroke="#c9cde6" stroke-width="1.6"/><circle cx="28" cy="16" r="2.2" fill="#9d7bff" stroke="#fff" stroke-width="1"/>
    ${spark(54, 10, 3.4)}${spark(50, 30, 2, '#9ff')}${spark(10, 40, 2.4, '#ffd6ff')}` },

  // радиотелескоп — тарелка на опоре, ловящая радиоволны
  radiotelescope: { color: '#c9cde6', svg: `
    ${linG('__d', ['#ffffff', '#e6e9ff', '#9a93c0'], 1, 1)}${linG('__s', ['#c9cde6', '#6a6f99'])}
    <path d="M24 46L18 60H44L38 46Z" fill="url(#__s)" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M31 44V36" stroke="#c9cde6" stroke-width="4"/>
    <path d="M8 22C12 40 38 46 52 34C40 34 20 28 8 22Z" fill="url(#__d)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14 28L30 22M44 36L30 22" stroke="#c9cde6" stroke-width="1.4"/><circle cx="30" cy="21" r="2.6" fill="#ffcf5a" stroke="#fff" stroke-width="1"/>
    <g fill="none" stroke="#6ee7ff" stroke-width="2" stroke-linecap="round"><path d="M38 12a8 8 0 0 1 8-6"/><path d="M42 16a14 14 0 0 1 14-10" opacity=".75"/><path d="M47 20a20 20 0 0 1 14-12" opacity=".5"/></g>
    ${spark(10, 8, 3.2)}${spark(56, 46, 2.4, '#ffd6ff')}` },

  // контакт — сигнал между двумя мирами
  contact: { color: '#7dff7a', svg: `
    ${ball('__e', 12, 46, 9, ['#c8f1ff', '#4cc9ff', '#1d4ed8'], '#c8f1ff', 1.6)}
    ${ball('__a', 52, 16, 9, ['#e6ffd0', '#5fe35a', '#1f7a3a'], '#e6ffd0', 1.6)}
    <path d="M20 40C26 26 28 40 34 28S40 26 44 22" fill="none" stroke="#fff59d" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="1 4.5"/>
    <g fill="none" stroke-width="2" stroke-linecap="round"><path d="M22 34a6 6 0 0 1 5-5" stroke="#6ee7ff"/><path d="M42 28a6 6 0 0 1-5 5" stroke="#7dff7a"/></g>
    <path d="M46 12c3-2 6-1 7 1-2 2-5 2-7-1zM50 20c3 0 5 1 5 3-3 1-5 0-5-3z" fill="#1f7a3a" opacity=".8"/>
    <path d="M7 43c2-3 6-3 7-1-1 3-5 4-7 1zM12 50c2-1 5 0 5 2-2 1-4 0-5-2z" fill="#3ddc84" opacity=".9"/>
    ${spark(32, 32, 3.6, '#fff59d')}${spark(54, 54, 2.6)}${spark(10, 10, 2.4, '#ffd6ff')}` },

  // пояс астероидов — кольцо камней вокруг Солнца (задняя половина бледнее)
  asteroidbelt: { color: '#c9c3ec', svg: `
    <g transform="translate(32 34) scale(1.3) translate(-32 -35)">
    <g fill="#8a83b8" opacity=".55"><path d="M8 30l3-2 3 2-2 3z"/><path d="M18 24l3-1 2 2-3 2z"/><path d="M30 21l3-1 2 3-3 1z"/><path d="M42 22l3 0 1 3-3 1z"/><path d="M53 26l3 1-1 3-3-1z"/></g>
    ${halo('__h', 32, 33, 14, '#ffd166', .8)}${ball('__s', 32, 33, 6, ['#ffffff', '#fff59d', '#ffb347'], '#fff3c4', 1.4)}
    <g fill="#c9c3ec" stroke="#fff" stroke-width="1"><path d="M6 38l4-3 4 2-1 4-4 1z"/><path d="M16 45l5-2 3 3-2 4-5-1z"/><path d="M28 48l4-2 4 2-1 4-5 0z"/>
      <path d="M41 47l5-1 2 4-3 3-4-2z"/><path d="M52 41l4-1 3 3-2 3-4-1z"/><path d="M58 33l3 1 0 3-3 0z"/></g>
    <g fill="#9a93c0"><circle cx="23" cy="42" r="1.2"/><circle cx="36" cy="44" r="1"/><circle cx="48" cy="44" r="1.2"/><circle cx="12" cy="34" r="1"/></g>
    </g>
    ${spark(54, 10, 3.2)}${spark(10, 14, 2.4, '#9ff')}` },

  // ── расширение «Космоса», этап 3 ──
  // гравитационная линза — скопление в центре изгибает свет далёкой галактики в дуги
  gravlens: { color: '#6ee7ff', svg: `
    ${halo('__h', 32, 32, 16, '#ffd166', .8)}
    <g fill="#fff3c4" stroke="#fff" stroke-width=".8"><circle cx="32" cy="32" r="4"/><circle cx="26" cy="28" r="2"/><circle cx="38" cy="35" r="2.4"/><circle cx="35" cy="26" r="1.6"/></g>
    <g fill="none" stroke-linecap="round">
      <path d="M12 24A22 22 0 0 1 30 10" stroke="#6ee7ff" stroke-width="3.6"/>
      <path d="M52 40A22 22 0 0 1 36 54" stroke="#6ee7ff" stroke-width="3.6"/>
      <path d="M44 12A22 22 0 0 1 54 26" stroke="#9d7bff" stroke-width="2.6"/>
      <path d="M10 38A22 22 0 0 0 20 50" stroke="#9d7bff" stroke-width="2.6"/></g>
    <circle cx="32" cy="32" r="22" fill="none" stroke="#bff6ff" stroke-width="1" stroke-dasharray="2 4" opacity=".5"/>
    ${spark(56, 56, 3.2)}${spark(8, 8, 2.4, '#ffd6ff')}` },

  // симуляция Вселенной — экран, на котором растёт паутина из нитей и узлов
  simulation: { color: '#9d7bff', svg: `
    ${linG('__s', ['#1e1a33', '#3b2a8f'], 1, 1)}${linG('__f', ['#ffffff', '#c9cde6', '#6a6f99'])}
    <rect x="4" y="8" width="56" height="40" rx="5" fill="url(#__s)" stroke="#d9ccff" stroke-width="2.2"/>
    <g fill="none" stroke="#c9b6ff" stroke-width="1.4" opacity=".85">
      <path d="M12 18L24 24L34 16L50 20M24 24L22 38L36 34L50 40M34 16L36 34M12 40L22 38M50 20L50 40"/></g>
    <g fill="#fff59d" stroke="#fff" stroke-width=".6"><circle cx="24" cy="24" r="2.6"/><circle cx="36" cy="34" r="3"/><circle cx="34" cy="16" r="1.8"/><circle cx="50" cy="20" r="2"/>
      <circle cx="22" cy="38" r="1.8"/><circle cx="50" cy="40" r="2.2"/><circle cx="12" cy="18" r="1.4"/><circle cx="12" cy="40" r="1.4"/></g>
    <path d="M26 48l-3 8h18l-3-8z" fill="url(#__f)" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
    ${spark(58, 4, 3)}${spark(4, 58, 2.4, '#9ff')}` },

  // сверхскопление — группы галактик, связанные нитями
  supercluster: { color: '#c9b6ff', svg: `
    ${halo('__h', 32, 32, 30, '#9d7bff', .35)}
    <g fill="none" stroke="#c9b6ff" stroke-width="1.6" opacity=".7"><path d="M14 16L32 32L50 14M32 32L20 50M32 32L50 48"/></g>
    ${ellGal(14, 16, 6, -20, '#ffd6ff')}${ellGal(20, 11, 3.5, 30, '#c9b6ff')}${ellGal(50, 14, 6, 25, '#9ff')}${ellGal(55, 20, 3.4, -10, '#ffd6ff')}
    ${ellGal(32, 32, 8, -15, '#ffe08a')}${ellGal(25, 37, 3.4, 20, '#9ff')}${ellGal(40, 27, 3, -40, '#ffd6ff')}
    ${ellGal(20, 50, 5.5, 30, '#9ff')}${ellGal(50, 48, 6, -25, '#ffd6ff')}${ellGal(56, 54, 3, 10, '#c9b6ff')}
    ${spark(58, 32, 2.6)}${spark(6, 34, 2.2, '#9ff')}` },

  // реликтовое излучение — пятнистая «карта неба», как у спутника «Планк»
  cmb: { color: '#ff9f43', svg: `
    <defs><clipPath id="__c"><ellipse cx="32" cy="32" rx="28" ry="17"/></clipPath></defs>
    <g clip-path="url(#__c)">
      <rect x="0" y="0" width="64" height="64" fill="#3a6fd8"/>
      <g fill="#ffb347"><circle cx="14" cy="26" r="6"/><circle cx="30" cy="38" r="7"/><circle cx="46" cy="22" r="6"/><circle cx="52" cy="40" r="5"/><circle cx="24" cy="18" r="3.5"/></g>
      <g fill="#e0502a"><circle cx="31" cy="38" r="3"/><circle cx="46" cy="23" r="2.6"/><circle cx="12" cy="27" r="2.4"/></g>
      <g fill="#6ee7ff"><circle cx="38" cy="30" r="4"/><circle cx="20" cy="42" r="4"/><circle cx="58" cy="28" r="3"/><circle cx="36" cy="14" r="3"/></g>
      <g fill="#fff59d"><circle cx="28" cy="27" r="2"/><circle cx="44" cy="44" r="2"/></g>
    </g>
    <ellipse cx="32" cy="32" rx="28" ry="17" fill="none" stroke="#fff3c4" stroke-width="2.2"/>
    ${spark(56, 8, 3.2)}${spark(8, 56, 2.4, '#9ff')}` },

  // Венера — раскалённая планета в жёлтых облаках-завитках
  venus: { color: '#ffcf5a', svg: `
    ${halo('__h', 32, 32, 30, '#ffcf5a', .45)}
    ${ball('__v', 32, 32, 21, ['#fff3c4', '#ffcf5a', '#c47a1f'], '#fff3c4', 2.2)}
    <g fill="none" stroke="#fff3c4" stroke-width="2.2" stroke-linecap="round" opacity=".6">
      <path d="M14 30c6-4 14 4 22-2s12 0 14 2"/><path d="M16 40c6 4 14-2 20 2s10 0 12-2"/><path d="M22 20c4 2 10 0 16 2"/></g>
    <g fill="none" stroke="#e0502a" stroke-width="1.4" opacity=".5"><path d="M20 35c5-2 10 2 14 0"/></g>
    ${spark(56, 8, 3.4)}${spark(8, 54, 2.4, '#ffe08a')}` },

  // Сатурн — планета с широкими кольцами и щелью Кассини
  saturn: { color: '#ffcf5a', svg: `
    ${arcHalf(32, 34, 30, 9, -18, '#e8c08a', 5, false, .6)}${arcHalf(32, 34, 22, 6.5, -18, '#fff1b8', 3, false, .6)}
    ${ball('__p', 32, 32, 15, ['#fff3dc', '#ffd9a8', '#b8862b'], '#fff3dc', 2)}
    <g fill="none" stroke="#d9a35a" stroke-width="1.8" opacity=".6"><path d="M19 28c8 2 18 2 26 0M18 35c8 2 20 2 28 0"/></g>
    ${arcHalf(32, 34, 22, 6.5, -18, '#fff1b8', 3, true)}${arcHalf(32, 34, 30, 9, -18, '#e8c08a', 5, true)}
    ${spark(56, 8, 3.4)}${spark(8, 56, 2.4, '#ffd6ff')}` },

  // пояс Койпера — далёкое Солнце, кольцо ледяных тел и комета
  kuiperbelt: { color: '#bff6ff', svg: `
    ${halo('__h', 32, 34, 8, '#ffd166', .9)}<circle cx="32" cy="34" r="2.4" fill="#fff"/>
    ${arcHalf(32, 34, 26, 9, -10, '#6ee7ff', 1.2, false, .5)}${arcHalf(32, 34, 26, 9, -10, '#6ee7ff', 1.2, true, .5)}
    <g fill="#e0fbff" stroke="#6ee7ff" stroke-width=".8">
      ${[[7, 37, 2.4], [14, 42, 2], [24, 45, 2.6], [37, 45, 2.2], [48, 41, 2.6], [56, 34, 2], [52, 27, 1.6], [12, 30, 1.6], [40, 24, 1.4], [22, 25, 1.4]]
        .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>
    ${linG('__t', ['rgba(110,231,255,0)', '#bff6ff'], 1, 1)}<path d="M28 4L50 12L48 16Z" fill="url(#__t)"/>
    ${ball('__c', 50, 14, 3.4, ['#ffffff', '#bff6ff', '#4cc9ff'], '#fff', 1)}
    ${spark(10, 10, 2.6)}${spark(58, 56, 2.4, '#ffd6ff')}` },

  // карликовая планета — бежевый шарик со светлым «сердцем», как у Плутона
  dwarfplanet: { color: '#ffe0b0', svg: `
    ${halo('__h', 32, 32, 26, '#ffe0b0', .35)}
    ${ball('__p', 32, 32, 18, ['#fff3dc', '#d9b48a', '#7a4f33'], '#fff3dc', 2)}
    <path d="M32 46C24 40 20 34 22 30S30 27 32 31C34 27 40 26 42 30S40 40 32 46Z" fill="#fffbe8" opacity=".85"/>
    <g fill="#7a4f33" opacity=".5"><circle cx="20" cy="24" r="2"/><circle cx="44" cy="40" r="1.6"/></g>
    ${ball('__m', 54, 12, 4, ['#ffffff', '#c9c3ec', '#6d6890'], '#fff', 1)}
    ${spark(10, 10, 3)}${spark(8, 54, 2.4, '#ffd6ff')}` },

  // космический мусор — обломки спутника на орбите над Землёй
  debris: { color: '#c9cde6', svg: `
    ${linG('__e', ['#6ee7ff', '#1d4ed8'])}
    <path d="M2 64C4 54 16 48 32 48S60 54 62 64Z" fill="url(#__e)" stroke="#c8f1ff" stroke-width="1.8"/>
    <path d="M4 40C16 30 48 30 60 40" fill="none" stroke="#c9b6ff" stroke-width="1.2" stroke-dasharray="3 3" opacity=".6"/>
    <g transform="rotate(25 18 22)"><rect x="10" y="18" width="14" height="8" rx="1" fill="#3a4bff" stroke="#c8f1ff" stroke-width="1.2"/><path d="M15 18v8M20 18v8" stroke="#c8f1ff" stroke-width=".8"/></g>
    <path d="M34 14l8-4 4 6-6 6-7-2z" fill="#c9cde6" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M44 30l5-2 2 4-4 3z" fill="#ffcf5a" stroke="#fff" stroke-width="1"/>
    <g fill="#e6e9ff"><circle cx="28" cy="30" r="1.4"/><circle cx="54" cy="22" r="1.2"/><circle cx="12" cy="36" r="1"/></g>
    <g stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".5"><path d="M30 12l-6 3M42 30l-6 2"/></g>
    ${spark(56, 8, 3)}` },

  // звездолёт — длинный корабль с вращающимся кольцом и термоядерным выхлопом
  starship: { color: '#9d7bff', svg: `
    <g stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".5"><path d="M50 30l12-6M54 40l10-4M44 20l10-6"/></g>
    <g transform="rotate(-30 32 32)">
      ${linG('__b', ['#ffffff', '#c9cde6', '#6a6f99'])}${linG('__f', ['#ffffff', '#c9b6ff', 'rgba(157,123,255,0)'], 1, 0)}
      <path d="M4 32L14 27V37Z" fill="url(#__f)" transform="rotate(180 9 32) translate(-8 0)"/>
      <path d="M-6 28H10V36H-6Z" fill="url(#__f)" opacity=".8"/>
      <rect x="10" y="28" width="40" height="8" rx="4" fill="url(#__b)" stroke="#fff" stroke-width="1.6"/>
      <path d="M50 28L60 32L50 36Z" fill="#c9b6ff" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
      <ellipse cx="26" cy="32" rx="5" ry="14" fill="none" stroke="#6ee7ff" stroke-width="3"/>
      <rect x="10" y="27" width="5" height="10" rx="1.5" fill="#9d7bff" stroke="#fff" stroke-width="1"/>
      <circle cx="44" cy="32" r="1.8" fill="#6ee7ff"/>
    </g>
    ${spark(10, 10, 3)}${spark(56, 56, 2.4, '#ffd6ff')}` },

  // сфера Дайсона — решётчатая оболочка из панелей вокруг звезды
  dysonsphere: { color: '#ffcf5a', svg: `
    ${halo('__h', 32, 32, 30, '#ffd166', .6)}
    ${ball('__s', 32, 32, 10, ['#ffffff', '#fff59d', '#ffb347'], '#fff3c4', 1.4)}
    <g fill="none" stroke="#c9cde6" stroke-width="1.6">
      <circle cx="32" cy="32" r="24"/><ellipse cx="32" cy="32" rx="10" ry="24"/><ellipse cx="32" cy="32" rx="24" ry="9"/>
      <ellipse cx="32" cy="32" rx="20" ry="24"/></g>
    <g fill="#3a4bff" fill-opacity=".85" stroke="#c8f1ff" stroke-width="1">
      <path d="M12 23L22 17L22 25L12 30Z"/><path d="M42 39L52 34L50 42L42 47Z"/><path d="M36 9L44 12L42 18L36 16Z"/><path d="M20 46L26 50L26 55L19 52Z"/><path d="M46 20L54 26L54 30L46 26Z"/></g>
    ${spark(58, 6, 3.4)}${spark(6, 58, 2.4, '#9ff')}` },

  // большое сжатие — галактики стягиваются обратно в одну точку
  bigcrunch: { color: '#ff5f8a', svg: `
    ${halo('__h', 32, 32, 14, '#ff5f8a', .9)}
    <path d="${burst(32, 32, 8, 8, 3)}" fill="#fff" />
    <g fill="none" stroke="#ff8fd1" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      ${[0, 60, 120, 180, 240, 300].map(a => `<g transform="rotate(${a} 32 32)"><path d="M32 6V16"/><path d="M28 12L32 17L36 12"/></g>`).join('')}</g>
    ${ellGal(12, 14, 5, 30, '#c9b6ff')}${ellGal(54, 20, 4.5, -30, '#9ff')}${ellGal(16, 52, 4.5, -20, '#ffd6ff')}${ellGal(52, 50, 5, 20, '#c9b6ff')}
    ${spark(58, 34, 2.4)}` },

  // тепловая смерть — остывшая, угасающая галактика и последний тлеющий красный карлик
  heatdeath: { color: '#8a83b8', svg: `
    <g opacity=".6">${ellGal(28, 30, 20, -25, '#8a83b8')}</g>
    ${halo('__h', 44, 44, 8, '#c4572e', .6)}
    ${ball('__r', 44, 44, 3.6, ['#ffb39a', '#c4572e', '#5a2010'], '#e07a45', 1)}
    <g fill="#8a83b8" opacity=".6"><circle cx="10" cy="14" r="1"/><circle cx="54" cy="12" r="1.2"/><circle cx="14" cy="50" r="1"/><circle cx="56" cy="56" r=".9"/><circle cx="22" cy="8" r=".8"/></g>
    <circle cx="32" cy="32" r="29" fill="none" stroke="#5b5680" stroke-width="1.4" stroke-dasharray="2 5"/>
    ${spark(52, 22, 2.4, '#bff6ff')}${spark(12, 34, 1.8, '#bff6ff')}` },
});
