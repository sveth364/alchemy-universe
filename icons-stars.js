/* Иконки эпохи «Звёзды». Детали (ball, halo, rays…) — в icons.js */

// слиток для золота и серебра
const ingot = (front, top, stroke, s, textColor) => `
  ${linG('__f', front)}
  <path d="M16 30l6-8h20l6 8z" fill="${top}" stroke="${stroke}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M10 46l6-16h32l6 16z" fill="url(#__f)" stroke="${stroke}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M15 43l4-10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/>
  ${sym(s, 32, 38.5, 12, textColor)}
  ${spark(50, 18, 4.5)}${spark(12, 20, 2.5)}${spark(46, 52, 2.5)}`;

// облако из кружков со светлым внешним контуром
const cloudShape = (circles, fill, stroke, sw = 3) =>
  `<g stroke="${stroke}" stroke-width="${sw}">${circles.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>` +
  `<g fill="${fill}">${circles.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>`;

Object.assign(ICONS, {
  gas: { color: '#bfefff', svg: `
    <g fill="none" stroke-width="3.5" stroke-linecap="round">
      <path d="M8 22c8-7 19-7 23-1s-2 11-8 7" stroke="#bfefff"/>
      <path d="M20 37c10-6 23-5 29 1s-1 11-8 7" stroke="#e6dcff"/>
      <path d="M8 50c7-4 15-3 19 2" stroke="#c9b6ff"/>
    </g>
    <g><circle cx="46" cy="17" r="2.4" fill="#6ee7ff"/><circle cx="54" cy="27" r="2" fill="#ff8fd1"/>
    <circle cx="13" cy="36" r="2" fill="#ffe066"/><circle cx="38" cy="55" r="2.2" fill="#6ee7ff"/></g>
    ${spark(54, 50, 3)}` },

  nebula: { color: '#ff5fa2', svg: `
    <radialGradient id="__g" gradientUnits="userSpaceOnUse" cx="32" cy="34" r="24">${stops(['#ffd1f0', '#ff5fa2', '#7b5cff'])}</radialGradient>
    ${cloudShape([[20, 37, 12], [35, 27, 14], [47, 38, 11], [31, 45, 10]], 'url(#__g)', '#ffd6ff')}
    <circle cx="42" cy="41" r="8" fill="#6ee7ff" opacity=".35"/><circle cx="22" cy="32" r="6" fill="#ffe066" opacity=".25"/>
    ${spark(29, 32, 3.2)}${spark(43, 33, 2.4, '#fffbe0')}${spark(24, 44, 2)}
    ${spark(55, 10, 3.5)}${spark(8, 12, 2.5, '#9ff')}` },

  sun: { color: '#ffb347', svg: `
    ${halo('__h', 32, 32, 30, '#ffd166', .55)}
    <g fill="#ffb347">${Array.from({ length: 16 }, (_, i) => {
      const a = i * Math.PI / 8; return `<circle cx="${(32 + 20 * Math.cos(a)).toFixed(1)}" cy="${(32 + 20 * Math.sin(a)).toFixed(1)}" r="4.2"/>`; }).join('')}</g>
    ${ball('__s', 32, 32, 18, ['#fffbe0', '#ffe066', '#ffb347', '#ff7a1a'], '#fff3c4')}
    ${spark(55, 9, 3.5)}` },

  redgiant: { color: '#ff6b3d', svg: `
    ${halo('__h', 32, 32, 31, '#ff6b3d', .5)}
    ${ball('__s', 32, 32, 23, ['#ffd1a8', '#ff6b3d', '#c1121f', '#7a0a1a'], '#ffb4a2')}
    <g fill="#7a0a1a" opacity=".3"><ellipse cx="40" cy="40" rx="6" ry="3.5"/><ellipse cx="24" cy="44" rx="4" ry="2.4"/><ellipse cx="44" cy="25" rx="3" ry="2"/></g>
    ${spark(56, 8, 3.5)}` },

  whitedwarf: { color: '#bfefff', svg: `
    ${halo('__h', 32, 32, 26, '#bfefff', .7)}
    <g stroke="#fff" stroke-linecap="round"><path d="M32 6V58M6 32H58" stroke-width="1.6" opacity=".75"/><path d="M20 20l24 24M44 20 20 44" stroke-width="1" opacity=".5"/></g>
    ${ball('__s', 32, 32, 8, ['#ffffff', '#dff6ff', '#8fd3ff'], '#fff')}` },

  supernova: { color: '#ff8fd1', svg: `
    ${halo('__h', 32, 32, 30, '#ff8fd1', .35)}
    <circle cx="32" cy="32" r="23" fill="none" stroke="#ff8fd1" stroke-width="4" opacity=".85"/>
    <circle cx="32" cy="32" r="23" fill="none" stroke="#fff" stroke-width="1" opacity=".6"/>
    <circle cx="32" cy="32" r="16" fill="none" stroke="#ffd166" stroke-width="2" stroke-dasharray="4 3"/>
    ${radG('__g', ['#ffffff', '#fff59d', '#ff9f43'], .5, .5, .5)}
    <path d="${burst(32, 32, 8, 12, 5)}" fill="url(#__g)"/>
    <g>${[[6, 14, '#6ee7ff'], [58, 20, '#ffe066'], [56, 52, '#6ee7ff'], [10, 50, '#ffe066'], [32, 3, '#fff'], [32, 61, '#c77dff']].map(([x, y, c]) =>
      `<circle cx="${x}" cy="${y}" r="2" fill="${c}"/>`).join('')}</g>` },

  nstar: { color: '#6ee7ff', svg: `
    <linearGradient id="__u" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ee7ff" stop-opacity="0"/><stop offset="1" stop-color="#d0f4ff"/></linearGradient>
    <linearGradient id="__d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d0f4ff"/><stop offset="1" stop-color="#6ee7ff" stop-opacity="0"/></linearGradient>
    <g transform="rotate(-20 32 32)">
      <path d="M32 32 25 1h14z" fill="url(#__u)"/><path d="M32 32 25 63h14z" fill="url(#__d)"/>
      <g fill="none" stroke="#c9b6ff" stroke-width="1.8" opacity=".8"><path d="M32 25c-14-7-14 21 0 14"/><path d="M32 25c14-7 14 21 0 14"/></g>
    </g>
    ${ball('__s', 32, 32, 8, ['#ffffff', '#c8f1ff', '#4cc9ff'], '#fff')}
    ${spark(54, 50, 3)}${spark(10, 12, 2.5, '#ffd6ff')}` },

  carbon: { color: '#9aa0c8', svg: token('C', ['#b8bddb', '#4a4f6e', '#1e2033'], '#c9cde6', '#ffe066') },
  oxygen: { color: '#4cc9ff', svg: token('O', ['#d0f4ff', '#4cc9ff', '#0b6fb8'], '#c8f1ff', '#ff8fd1') },
  nitrogen: { color: '#7b8cff', svg: token('N', ['#e0e7ff', '#7b8cff', '#2f3fb3'], '#d6dcff', '#6ee7ff') },
  silicon: { color: '#2ec4b6', svg: token('Si', ['#d9fff6', '#2ec4b6', '#0b6e63'], '#c9fff4', '#ffe066') },
  iron: { color: '#e07a4f', svg: token('Fe', ['#ffd0b5', '#c8643b', '#6b2c16'], '#ffd0b5', '#6ee7ff') },

  gold: { color: '#ffcf5a', svg: ingot(['#fff1b8', '#ffcf5a', '#b8860b'], '#fff6cc', '#fff3c4', 'Au', '#fff') },
  silver: { color: '#dfe3ff', svg: ingot(['#ffffff', '#c9cde6', '#7f86a8'], '#ffffff', '#ffffff', 'Ag', '#fff') },

  dust: { color: '#ffd6ff', svg: `
    <path d="M6 46Q32 20 58 18" fill="none" stroke="#c9b6ff" stroke-width="10" stroke-linecap="round" opacity=".15"/>
    <g>${[[8, 46, 1.8, '#ffe066'], [14, 41, 1.2, '#6ee7ff'], [19, 38, 2, '#ff8fd1'], [24, 35, 1.3, '#fff'], [28, 31, 2.2, '#c77dff'],
      [33, 29, 1.4, '#ffe066'], [37, 26, 1.8, '#6ee7ff'], [42, 24, 1.2, '#fff'], [46, 22, 2, '#ff8fd1'], [51, 20, 1.4, '#ffe066'],
      [56, 18, 1.8, '#6ee7ff'], [22, 44, 1.2, '#c77dff'], [36, 34, 1.3, '#fff'], [44, 30, 1.6, '#ffe066'], [16, 32, 1.1, '#6ee7ff']]
      .map(([x, y, r, c]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`).join('')}</g>
    ${spark(30, 30, 4.5)}${spark(48, 14, 3.5, '#ffd6ff')}${spark(14, 52, 3, '#9ff')}` },

  solarwind: { color: '#ffd166', svg: `
    ${radG('__s', ['#fffbe0', '#ffe066', '#ff9f1c'], .7, .5, .6)}
    <circle cx="-6" cy="32" r="22" fill="url(#__s)" stroke="#fff3c4" stroke-width="2"/>
    ${linG('__l', ['#ffd166', '#ff8fd1', '#6ee7ff'], 1, 0)}
    <g fill="none" stroke="url(#__l)" stroke-width="2.6" stroke-linecap="round">
      <path d="M19 18c12-4 22 4 40-2"/><path d="M21 32c12-4 23 4 40-2"/><path d="M19 46c12-4 23 4 40 0"/>
    </g>
    <g fill="#fff59d"><circle cx="34" cy="18" r="1.6"/><circle cx="48" cy="31" r="1.6"/><circle cx="40" cy="47" r="1.6"/></g>` },

  constellation: { color: '#c9b6ff', svg: `
    <g fill="none" stroke="#c9b6ff" stroke-width="1.4" opacity=".8"><path d="M10 44 20 30 32 34 42 20 54 13M32 34 46 41 56 51"/></g>
    ${[[10, 44, 3.5, '#fff'], [20, 30, 3, '#9ff'], [32, 34, 4.5, '#fff'], [42, 20, 3.2, '#ffd6ff'], [54, 13, 4, '#fff'], [46, 41, 3, '#9ff'], [56, 51, 3.5, '#ffe08a']]
      .map(([x, y, r, c]) => spark(x, y, r, c)).join('')}` },

  quasar: { color: '#c77dff', svg: `
    ${halo('__h', 32, 32, 22, '#c77dff', .5)}
    <linearGradient id="__u" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ee7ff" stop-opacity="0"/><stop offset="1" stop-color="#ffffff"/></linearGradient>
    <linearGradient id="__d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#6ee7ff" stop-opacity="0"/></linearGradient>
    <g transform="rotate(-15 32 32)">
      <path d="M32 32 29 0h6z" fill="url(#__u)"/><path d="M32 32 29 64h6z" fill="url(#__d)"/>
      ${arcHalf(32, 32, 22, 6, 0, '#ff8fd1', 4, false, .7)}
    </g>
    ${ball('__c', 32, 32, 6, ['#ffffff', '#fff59d', '#ffb347'], '#fff')}
    <g transform="rotate(-15 32 32)">${arcHalf(32, 32, 22, 6, 0, '#ffb347', 4, true)}</g>` },
});
