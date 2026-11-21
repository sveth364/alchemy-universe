/* Иконки эпохи «Космос». Детали — в icons.js и файлах предыдущих эпох */

// маленькая спиральная галактика
const miniGalaxy = (x, y, s, c1, c2) => `<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M0 0c5-4 11-1 11 5s-9 10-15 6" fill="none" stroke="${c1}" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M0 0c-5 4-11 1-11-5s9-10 15-6" fill="none" stroke="${c2}" stroke-width="3.2" stroke-linecap="round"/>
  <circle r="3.6" fill="#fff8d0"/></g>`;
const stars = (list) => list.map(([x, y, r, c = '#fff']) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('');

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
    ${linG('__t', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 0)}${linG('__p', ['#9ad7ff', '#3a4bff'], 1, 1)}
    <g transform="rotate(-35 32 34)">
      <rect x="6" y="18" width="16" height="9" rx="1.5" fill="url(#__p)" stroke="#c8f1ff" stroke-width="1.2"/>
      <rect x="42" y="18" width="16" height="9" rx="1.5" fill="url(#__p)" stroke="#c8f1ff" stroke-width="1.2"/>
      <g stroke="#c8f1ff" stroke-width=".8" opacity=".7"><path d="M14 18v9M50 18v9"/></g>
      <rect x="22" y="10" width="20" height="42" rx="4" fill="url(#__t)" stroke="#fff" stroke-width="2"/>
      <path d="M22 18h20" stroke="#ffcf5a" stroke-width="3"/>
      <ellipse cx="32" cy="10" rx="10" ry="3.2" fill="#2a2650" stroke="#fff" stroke-width="1.6"/>
    </g>
    ${spark(52, 8, 4)}${spark(58, 26, 2.4, '#9ff')}${spark(42, 6, 2, '#ffd6ff')}${spark(8, 56, 2.5)}` },

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
});
