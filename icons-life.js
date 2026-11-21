/* Иконки эпохи «Жизнь». Детали (ball, halo, rays…) — в icons.js */

const GREEN = ['#d4ff9a', '#3ddc84', '#128a52'];
const LEAF = (x, y, rot, s = 1, fill = '#3ddc84') =>
  `<path d="M0 0c-5-2-8-7-7-12 5 1 8 6 7 12z" fill="${fill}" stroke="#d9ffc4" stroke-width="1.1" transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"/>`;
const eye = (x, y, r = 3) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x + r * .2}" cy="${y + r * .1}" r="${r * .55}" fill="#1a1240"/><circle cx="${x + r * .45}" cy="${y - r * .3}" r="${r * .2}" fill="#fff"/>`;

Object.assign(ICONS, {
  // ───── растения и клетки ─────
  dna: { color: '#c77dff', svg: `
    <g stroke="#e6dcff" stroke-width="2" stroke-linecap="round" opacity=".85">
      <path d="M25 12h14M28 20h8M28 44h8M25 52h14"/><path d="M29 16h6M29 48h6" stroke="#ffe066"/>
    </g>
    <path d="M22 6C46 18 18 46 42 58" fill="none" stroke="#ff5fa2" stroke-width="4" stroke-linecap="round"/>
    <path d="M42 6C18 18 46 46 22 58" fill="none" stroke="#4cc9ff" stroke-width="4" stroke-linecap="round"/>
    ${spark(52, 30, 3.5)}${spark(12, 30, 2.5, '#ffd6ff')}` },

  cell: { color: '#ff8fd1', svg: `
    ${radG('__g', ['#ffe6f4', '#ff9fd6', '#c2449b'])}
    <circle cx="32" cy="32" r="24" fill="url(#__g)" fill-opacity=".8" stroke="#ffd6ef" stroke-width="2.4"/>
    <circle cx="32" cy="32" r="20.5" fill="none" stroke="#fff" stroke-width="1" opacity=".5"/>
    ${ball('__n', 30, 30, 8, ['#e6dcff', '#9d7bff', '#4b2bb0'], '#d9ccff', 1.6)}
    <rect x="38" y="40" width="12" height="6" rx="3" fill="#ffb347" stroke="#ffe0b0" stroke-width="1.2" transform="rotate(-25 44 43)"/>
    <g fill="#6ee7ff"><circle cx="18" cy="38" r="2"/><circle cx="44" cy="22" r="1.6"/><circle cx="24" cy="46" r="1.4"/></g>
    ${spark(55, 9, 3.5)}` },

  // эволюция — ветвящееся «древо жизни»: от одной клетки к разным видам
  evolution: { color: '#3ddc84', svg: `
    ${halo('__h', 32, 34, 28, '#3ddc84', .3)}
    ${linG('__t', ['#a6ff8a', '#1fae5a'])}
    <g fill="none" stroke="url(#__t)" stroke-linecap="round" stroke-linejoin="round">
      <path d="M32 55V41" stroke="#3ddc84" stroke-width="4"/>
      <path d="M32 42C32 34 22 32 18 24M32 42C32 34 44 33 46 24" stroke-width="3.2"/>
      <path d="M19 26C15 22 10 21 9 15M19 26C20 20 25 17 26 11M45 26C43 20 39 17 38 11M45 26C49 22 54 21 55 15" stroke-width="2.4"/>
    </g>
    ${ball('__r', 32, 55, 4.5, GREEN, '#d9ffc4', 1.4)}
    ${ball('__a', 9, 13, 4.6, ['#ffd6ef', '#ff7fb5', '#b8336a'], '#ffd6ef', 1.3)}
    ${ball('__b', 26, 9, 4.6, ['#fff59d', '#ffb347', '#d9731f'], '#ffe0b0', 1.3)}
    ${ball('__c', 38, 9, 4.6, ['#c8f1ff', '#4cc9ff', '#1d4ed8'], '#c8f1ff', 1.3)}
    ${ball('__d', 55, 13, 4.6, ['#e6dcff', '#9d7bff', '#4b2bb0'], '#d9ccff', 1.3)}
    ${spark(54, 50, 3.5)}${spark(11, 46, 2.5, '#d9ffc4')}` },

  plant: { color: '#3ddc84', svg: `
    ${linG('__s', ['#c68b59', '#7a4a2a'])}
    <path d="M16 54c2-6 8-8 16-8s14 2 16 8z" fill="url(#__s)" stroke="#f0c9a0" stroke-width="1.8"/>
    <path d="M32 47V24" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 30c-10 0-16-8-15-14 9 0 15 6 15 14z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="1.6"/>
    <path d="M32 26c2-9 10-14 17-12-1 8-8 13-17 12z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="1.6"/>
    ${radG('__g', GREEN)}
    ${spark(54, 12, 3.5)}` },

  grass: { color: '#3ddc84', svg: `
    ${linG('__g', ['#a6ff8a', '#1fae5a'])}
    <g fill="url(#__g)" stroke="#d9ffc4" stroke-width="1.3" stroke-linejoin="round">
      <path d="M8 56c2-14 0-24-4-32 8 8 10 20 10 32z"/><path d="M16 56c0-18 4-30 10-40-2 12-4 26-2 40z"/>
      <path d="M26 56c2-16 8-28 18-34-8 10-12 22-12 34z"/><path d="M38 56c0-12-4-22-10-28 10 6 16 16 16 28z"/>
      <path d="M46 56c2-14 6-22 14-28-6 8-8 18-8 28z"/>
    </g>
    <path d="M4 56h56" stroke="#7a4a2a" stroke-width="3" stroke-linecap="round"/>
    ${spark(54, 12, 3)}` },

  forest: { color: '#3ddc84', svg: `
    ${linG('__a', ['#7dff9a', '#128a52'])}${linG('__b', ['#3ddc84', '#0b5e3a'])}
    ${[[44, 8, 14, '__b'], [20, 12, 13, '__b'], [32, 16, 15, '__a']].map(([x, y, w, g]) => `
      <path d="M${x} ${y}l${w * .6} ${w}h-${w * .3}l${w * .7} ${w * .9}H${x - w}l${w * .7}-${w * .9}h-${w * .3}z" fill="url(#${g})" stroke="#d9ffc4" stroke-width="1.6" stroke-linejoin="round"/>
      <rect x="${x - 2}" y="${y + w * 1.9}" width="4" height="${58 - y - w * 1.9}" fill="#9c6644"/>`).join('')}
    ${spark(8, 10, 3)}` },

  flower: { color: '#ff8fd1', svg: `
    <path d="M32 36v22" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    ${LEAF(32, 50, -60, 1.1)}
    ${radG('__p', ['#ffe6f4', '#ff8fd1', '#c2449b'])}
    <g fill="url(#__p)" stroke="#ffd6ef" stroke-width="1.4">${[0, 72, 144, 216, 288].map(a =>
      `<circle cx="32" cy="15" r="8" transform="rotate(${a} 32 25)"/>`).join('')}</g>
    ${ball('__c', 32, 25, 6, ['#fffbe0', '#ffd166', '#e08a00'], '#fff3c4', 1.4)}
    ${spark(55, 10, 3)}` },

  sunflower: { color: '#ffd166', svg: `
    <path d="M32 40v18" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    ${LEAF(32, 52, 60, 1.1)}
    <g fill="#ffd166" stroke="#fff3c4" stroke-width="1">${Array.from({ length: 14 }, (_, i) =>
      `<ellipse cx="32" cy="9" rx="3.6" ry="8" transform="rotate(${i * 360 / 14} 32 24)"/>`).join('')}</g>
    ${radG('__c', ['#a0714a', '#5a3420'])}<circle cx="32" cy="24" r="9" fill="url(#__c)" stroke="#e0b48a" stroke-width="1.4"/>
    <g fill="#e0b48a" opacity=".7"><circle cx="29" cy="22" r="1"/><circle cx="34" cy="21" r="1"/><circle cx="31" cy="27" r="1"/><circle cx="36" cy="26" r="1"/></g>` },

  rose: { color: '#ff4d6d', svg: `
    <path d="M32 36v22" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    ${LEAF(32, 48, -55, 1.1)}${LEAF(32, 54, 55, .9)}
    ${radG('__g', ['#ffd1dc', '#ff4d6d', '#a4133c'])}
    <path d="M18 22c0-10 8-14 14-14s14 4 14 14c0 8-6 14-14 14s-14-6-14-14z" fill="url(#__g)" stroke="#ffc2d1" stroke-width="1.8"/>
    <path d="M32 26c-3 0-4-3-2-5s6-1 6 3-3 7-7 7-8-4-7-9 6-8 11-7" fill="none" stroke="#a4133c" stroke-width="1.8" stroke-linecap="round"/>
    ${spark(54, 10, 3)}` },

  fruit: { color: '#ff4d6d', svg: `
    <path d="M24 38c2-12 6-22 14-30M42 38c-2-12-2-22-4-30" fill="none" stroke="#3ddc84" stroke-width="2.4" stroke-linecap="round"/>
    ${LEAF(38, 8, 70, 1.2)}
    ${ball('__a', 22, 44, 11, ['#ffd1dc', '#ff4d6d', '#a4133c'], '#ffc2d1')}
    ${ball('__b', 44, 44, 11, ['#ffd1dc', '#ff4d6d', '#a4133c'], '#ffc2d1')}
    ${spark(54, 20, 3)}` },

  seed: { color: '#c68b59', svg: `
    ${radG('__g', ['#f0c9a0', '#c68b59', '#7a4a2a'])}
    <path d="M32 58c-11 0-16-8-16-16 0-10 8-18 16-24 8 6 16 14 16 24 0 8-5 16-16 16z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2"/>
    <path d="M32 22v30" stroke="#7a4a2a" stroke-width="1.4" opacity=".6"/>
    <path d="M32 18c0-6 4-10 10-10" fill="none" stroke="#3ddc84" stroke-width="2.6" stroke-linecap="round"/>
    ${LEAF(42, 8, 100, 1)}
    ${shine(25, 34, 3, 1.6, .5)}${spark(14, 16, 3)}` },

  mushroom: { color: '#ff4d6d', svg: `
    ${linG('__s', ['#fff8ee', '#e6d4c0'])}
    <path d="M26 34h12l2 20c0 3-16 3-16 0z" fill="url(#__s)" stroke="#fff" stroke-width="1.8"/>
    ${radG('__c', ['#ffd1dc', '#ff4d6d', '#a4133c'], .4, .3, .8)}
    <path d="M8 36c0-16 12-26 24-26s24 10 24 26c-8 3-40 3-48 0z" fill="url(#__c)" stroke="#ffc2d1" stroke-width="2"/>
    <g fill="#fff"><circle cx="22" cy="24" r="3.4"/><circle cx="36" cy="18" r="2.6"/><circle cx="44" cy="28" r="3"/><circle cx="30" cy="30" r="2"/></g>` },

  cactus: { color: '#3ddc84', svg: `
    ${linG('__g', ['#7dff9a', '#1fae5a'], 1, 0)}
    <g fill="url(#__g)" stroke="#d9ffc4" stroke-width="1.8" stroke-linejoin="round">
      <path d="M26 58V16a6 6 0 0 1 12 0v42z"/><path d="M26 38h-8a4 4 0 0 1-4-4V24a4 4 0 0 1 8 0v6h4z"/><path d="M38 32h6v-8a4 4 0 0 1 8 0v8a6 6 0 0 1-6 6h-8z"/>
    </g>
    <g stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".8"><path d="M30 22h-2M36 30h2M30 40h-2M36 48h2"/></g>
    <g fill="#ff8fd1" stroke="#ffd6ef" stroke-width="1"><circle cx="32" cy="9" r="3"/><circle cx="29" cy="11" r="2"/><circle cx="35" cy="11" r="2"/></g>
    <path d="M10 58h44" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>` },

  wheat: { color: '#ffd166', svg: `
    <path d="M32 58V16" stroke="#e0a800" stroke-width="2.4" stroke-linecap="round"/>
    ${radG('__g', ['#fff3c4', '#ffd166', '#c48a00'])}
    <g fill="url(#__g)" stroke="#fff3c4" stroke-width="1">${[14, 22, 30, 38].map(y =>
      `<ellipse cx="27" cy="${y}" rx="3.4" ry="5.5" transform="rotate(-30 27 ${y})"/><ellipse cx="37" cy="${y}" rx="3.4" ry="5.5" transform="rotate(30 37 ${y})"/>`).join('')}
      <ellipse cx="32" cy="9" rx="3" ry="5"/></g>
    <path d="M32 46c-6-2-10 0-12 4M32 50c6-2 10 0 12 4" fill="none" stroke="#3ddc84" stroke-width="2" stroke-linecap="round"/>` },

  palm: { color: '#3ddc84', svg: `
    <path d="M30 58c0-14 2-28 6-38" fill="none" stroke="#c68b59" stroke-width="5" stroke-linecap="round"/>
    <g stroke="#7a4a2a" stroke-width="1.4"><path d="M27 52h6M28 44h6M29 36h6M31 28h6"/></g>
    ${linG('__l', ['#a6ff8a', '#1fae5a'])}
    <g fill="url(#__l)" stroke="#d9ffc4" stroke-width="1.3" stroke-linejoin="round">
      <path d="M36 20c-8-6-20-4-24 4 8-4 16-4 24-4z"/><path d="M36 20c4-8 16-10 22-4-8 0-14 1-22 4z"/>
      <path d="M36 20c0 8-4 16-10 18 4-6 6-12 10-18z"/><path d="M36 20c8 0 16 6 16 14-4-6-10-10-16-14z"/><path d="M36 20c-2-6 0-12 4-16 0 6-2 10-4 16z"/>
    </g>
    <g fill="#9c6644"><circle cx="34" cy="22" r="2.4"/><circle cx="38" cy="23" r="2.2"/></g>` },

  autumn: { color: '#ff9f43', svg: `
    ${linG('__a', ['#ffd166', '#ff7a1a'])}${linG('__b', ['#ff8f6b', '#c1121f'])}
    <g stroke-width="1.4" stroke-linejoin="round">
      <path d="M20 8c12 2 18 12 14 26-12-2-18-12-14-26z" fill="url(#__a)" stroke="#fff3c4"/>
      <path d="M20 8c4 8 8 16 14 26" fill="none" stroke="#c46a00"/>
      <path d="M38 26c12 0 18 10 16 22-12 0-18-10-16-22z" fill="url(#__b)" stroke="#ffd1c2"/>
      <path d="M38 26c4 8 10 14 16 22" fill="none" stroke="#7a0a1a"/>
      <path d="M12 40c8-2 14 4 14 12-8 2-14-4-14-12z" fill="#ffd166" stroke="#fff3c4"/>
    </g>
    ${spark(52, 12, 3)}` },

  banana: { color: '#ffe066', svg: `
    ${linG('__g', ['#fff59d', '#ffd166', '#e0a800'], 1, 1)}
    <path d="M14 14c-4 18 6 36 30 40 6 1 10-1 8-4-22-4-32-18-30-36z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M18 18c0 14 8 26 24 32" fill="none" stroke="#c48a00" stroke-width="1.4" opacity=".6"/>
    <path d="M14 14l2-6 6 4" fill="#7a4a2a" stroke="#c68b59" stroke-width="1.4" stroke-linejoin="round"/>
    ${spark(50, 16, 3.5)}` },

  coconut: { color: '#c68b59', svg: `
    ${ball('__a', 40, 26, 14, ['#c99a6b', '#8a5a36', '#4a2c18'], '#e0b48a')}
    <g fill="#3a2010"><circle cx="36" cy="22" r="1.6"/><circle cx="42" cy="21" r="1.6"/><circle cx="39" cy="26" r="1.6"/></g>
    <path d="M6 42a16 16 0 0 0 32 0z" fill="#8a5a36" stroke="#e0b48a" stroke-width="2" stroke-linejoin="round"/>
    <path d="M10 42a12 12 0 0 0 24 0z" fill="#fffaf0"/>
    <ellipse cx="22" cy="42" rx="16" ry="3" fill="#f0f8ff" stroke="#e0b48a" stroke-width="1.6"/>` },

  coral: { color: '#ff8fab', svg: `
    ${linG('__g', ['#ffb3c7', '#ff5f8a'])}
    <g fill="none" stroke="url(#__g)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M32 58V34l-10-10v-10M32 38l10-10V16M22 30l-8-4v-8M42 34l10-4v-8M32 34V20"/>
    </g>
    <g fill="#ffd6e2"><circle cx="22" cy="12" r="2.6"/><circle cx="42" cy="14" r="2.6"/><circle cx="14" cy="16" r="2.4"/><circle cx="52" cy="20" r="2.4"/><circle cx="32" cy="18" r="2.6"/></g>
    <path d="M14 58h36" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <g fill="#6ee7ff" opacity=".8"><circle cx="50" cy="44" r="1.6"/><circle cx="54" cy="38" r="1.2"/></g>` },

  // ───── мелкие существа ─────
  insect: { color: '#3ddc84', svg: `
    <g stroke="#2a1f4a" stroke-width="2.2" stroke-linecap="round" fill="none">
      <path d="M22 30l-10-4M22 38H10M24 46l-8 6M42 30l10-4M42 38h12M40 46l8 6"/><path d="M28 16l-4-8M36 16l4-8"/>
    </g>
    ${radG('__g', ['#d4ffea', '#2ee6a6', '#0f6e5a'])}
    <ellipse cx="32" cy="38" rx="13" ry="16" fill="url(#__g)" stroke="#d6fff0" stroke-width="2"/>
    <path d="M32 24v30" stroke="#0f6e5a" stroke-width="1.6"/>
    ${ball('__h', 32, 20, 6, ['#9a93c0', '#4d4775', '#1e1a33'], '#c9c3ec', 1.4)}
    ${shine(26, 32, 3, 5, .45)}` },

  ant: { color: '#e07a4f', svg: `
    <g stroke="#5a2c18" stroke-width="2" stroke-linecap="round" fill="none">
      <path d="M30 34l-8-8M32 36l-12 2M34 38l-8 10M34 34l8-8M36 36l12 2M38 38l8 10"/><path d="M14 22l-4-8M18 20l2-8"/>
    </g>
    ${radG('__g', ['#ffd0b5', '#c8643b', '#6b2c16'])}
    <ellipse cx="48" cy="40" rx="10" ry="8" fill="url(#__g)" stroke="#ffd0b5" stroke-width="1.6"/>
    <ellipse cx="33" cy="35" rx="6" ry="5" fill="url(#__g)" stroke="#ffd0b5" stroke-width="1.6"/>
    <circle cx="18" cy="28" r="7" fill="url(#__g)" stroke="#ffd0b5" stroke-width="1.6"/>
    <circle cx="15" cy="27" r="1.4" fill="#fff"/>` },

  bee: { color: '#ffd166', svg: `
    <g fill="#e0fbff" fill-opacity=".6" stroke="#ffffff" stroke-width="1.4">
      <ellipse cx="26" cy="18" rx="8" ry="11" transform="rotate(-25 26 18)"/><ellipse cx="40" cy="18" rx="8" ry="11" transform="rotate(25 40 18)"/>
    </g>
    ${radG('__g', ['#fff59d', '#ffd166', '#e09b00'])}
    <clipPath id="__c"><ellipse cx="33" cy="38" rx="17" ry="13"/></clipPath>
    <ellipse cx="33" cy="38" rx="17" ry="13" fill="url(#__g)"/>
    <g clip-path="url(#__c)" fill="#2a1f4a"><rect x="24" y="20" width="5" height="40"/><rect x="34" y="20" width="5" height="40"/><rect x="44" y="20" width="6" height="40"/></g>
    <ellipse cx="33" cy="38" rx="17" ry="13" fill="none" stroke="#fff3c4" stroke-width="1.8"/>
    <path d="M50 38l6 0" stroke="#2a1f4a" stroke-width="2.4" stroke-linecap="round"/>
    ${eye(21, 35, 3)}
    <path d="M18 28c-2-4-6-6-8-6M22 26c0-4-2-8-4-9" fill="none" stroke="#2a1f4a" stroke-width="1.6" stroke-linecap="round"/>` },

  butterfly: { color: '#ff8fd1', svg: `
    ${linG('__a', ['#ff8fd1', '#9d7bff'])}${linG('__b', ['#6ee7ff', '#9d7bff'])}
    <g stroke="#fff" stroke-width="1.6" stroke-linejoin="round">
      <path d="M31 30C24 12 8 8 6 18s10 16 25 14z" fill="url(#__a)"/><path d="M33 30C40 12 56 8 58 18s-10 16-25 14z" fill="url(#__a)"/>
      <path d="M31 33C18 34 10 44 16 50s14-4 15-15z" fill="url(#__b)"/><path d="M33 33C46 34 54 44 48 50s-14-4-15-15z" fill="url(#__b)"/>
    </g>
    <g fill="#fff" opacity=".7"><circle cx="16" cy="18" r="2.6"/><circle cx="48" cy="18" r="2.6"/><circle cx="20" cy="44" r="1.8"/><circle cx="44" cy="44" r="1.8"/></g>
    <rect x="30" y="20" width="4" height="26" rx="2" fill="#2a1f4a"/>
    <path d="M31 20c-2-6-6-10-8-10M33 20c2-6 6-10 8-10" fill="none" stroke="#2a1f4a" stroke-width="1.6" stroke-linecap="round"/>` },

  worm: { color: '#ff8fab', svg: `
    ${linG('__g', ['#ffc2d1', '#ff7aa0'], 1, 0)}
    <path d="M8 46c6-12 14-12 18-2s12 10 16-2 10-14 14-10" fill="none" stroke="#ffd6e2" stroke-width="11" stroke-linecap="round"/>
    <path d="M8 46c6-12 14-12 18-2s12 10 16-2 10-14 14-10" fill="none" stroke="url(#__g)" stroke-width="8" stroke-linecap="round"/>
    <g stroke="#d6487a" stroke-width="1.4" stroke-linecap="round" opacity=".7"><path d="M14 40l3 3M22 38l1 4M30 48l2-3M38 46l-1-4"/></g>
    ${eye(54, 31, 2.2)}
    ${spark(14, 16, 3)}` },

  snail: { color: '#c68b59', svg: `
    ${linG('__b', ['#d9ffc4', '#8fd6a0'])}
    <path d="M6 52c0-4 4-6 10-6h30c4 0 8-8 8-14 4 0 6 4 4 10s-6 12-14 12H10c-2 0-4 0-4-2z" fill="url(#__b)" stroke="#f0fff0" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M52 32l-2-10M57 34l2-10" stroke="#8fd6a0" stroke-width="2" stroke-linecap="round"/>
    <circle cx="50" cy="21" r="2" fill="#1a1240"/><circle cx="59" cy="23" r="2" fill="#1a1240"/>
    ${radG('__s', ['#ffe0b0', '#e09b5a', '#8a4a20'])}
    <circle cx="28" cy="32" r="16" fill="url(#__s)" stroke="#ffe0b0" stroke-width="2"/>
    <path d="M28 32c0-2 3-3 4-1s-1 6-5 6-7-4-6-8 6-8 11-7 10 6 9 12-7 12-14 12" fill="none" stroke="#7a3a10" stroke-width="2.2" stroke-linecap="round"/>` },

  fish: { color: '#4cc9ff', svg: `
    ${linG('__g', ['#ffd166', '#ff8fd1', '#9d7bff'], 1, 1)}
    <path d="M44 32 58 20v24z" fill="url(#__g)" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M6 32c6-12 18-16 28-14s14 8 14 14-4 12-14 14S12 44 6 32z" fill="url(#__g)" stroke="#fff" stroke-width="2"/>
    <path d="M24 18c4-6 10-8 14-6-2 4-6 6-10 6z" fill="#ff8fd1" stroke="#fff" stroke-width="1.4"/>
    <path d="M26 24c4 4 4 12 0 16" fill="none" stroke="#fff" stroke-width="1.6" opacity=".7"/>
    ${eye(16, 29, 3.4)}
    <g fill="none" stroke="#bfefff" stroke-width="1.4"><circle cx="8" cy="14" r="2.4"/><circle cx="14" cy="8" r="1.6"/></g>` },

  shark: { color: '#6ea8ff', svg: `
    ${linG('__g', ['#b8cfff', '#5a7bd8', '#2f3f8f'])}
    <path d="M30 22l6-14 6 16z" fill="url(#__g)" stroke="#e0e8ff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M48 34l10-12-2 14 2 12z" fill="url(#__g)" stroke="#e0e8ff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M4 36c8-10 22-14 34-12s14 6 14 10-6 8-16 8c-14 0-24-2-32-6z" fill="url(#__g)" stroke="#e0e8ff" stroke-width="2"/>
    <path d="M8 38c10 4 24 4 36 1" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity=".9"/>
    <path d="M18 30v6M22 29v6M26 29v6" stroke="#2f3f8f" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="12" cy="31" r="1.8" fill="#1a1240"/>
    <path d="M30 40l-4 8 8-6" fill="url(#__g)" stroke="#e0e8ff" stroke-width="1.4" stroke-linejoin="round"/>` },

  crab: { color: '#ff6b3d', svg: `
    <g stroke="#ff8f6b" stroke-width="2.6" stroke-linecap="round" fill="none">
      <path d="M18 40l-8 4-2 6M18 46l-6 6M46 40l8 4 2 6M46 46l6 6"/><path d="M24 30l-6-8M40 30l6-8"/><path d="M28 28v-8M36 28v-8"/>
    </g>
    ${radG('__g', ['#ffd1c2', '#ff6b3d', '#a4231f'])}
    <path d="M12 22c-6-4-6-12 0-14 2 4 6 4 8 2 2 6-2 12-8 12z" fill="url(#__g)" stroke="#ffd1c2" stroke-width="1.6"/>
    <path d="M52 22c6-4 6-12 0-14-2 4-6 4-8 2-2 6 2 12 8 12z" fill="url(#__g)" stroke="#ffd1c2" stroke-width="1.6"/>
    <ellipse cx="32" cy="38" rx="16" ry="11" fill="url(#__g)" stroke="#ffd1c2" stroke-width="2"/>
    ${eye(28, 19, 2.6)}${eye(36, 19, 2.6)}
    <path d="M27 42c3 3 7 3 10 0" fill="none" stroke="#7a0a1a" stroke-width="1.6" stroke-linecap="round"/>` },

  frog: { color: '#3ddc84', svg: `
    ${radG('__g', GREEN, .5, .35, .8)}
    <path d="M8 40c0-12 10-20 24-20s24 8 24 20c0 10-10 16-24 16S8 50 8 40z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="2"/>
    ${ball('__e1', 20, 22, 8, GREEN, '#d9ffc4', 1.8)}${ball('__e2', 44, 22, 8, GREEN, '#d9ffc4', 1.8)}
    ${eye(20, 22, 4.5)}${eye(44, 22, 4.5)}
    <path d="M18 42c8 6 20 6 28 0" fill="none" stroke="#0b5e3a" stroke-width="2.4" stroke-linecap="round"/>
    <g fill="#ff8fd1" opacity=".6"><ellipse cx="14" cy="40" rx="3" ry="2"/><ellipse cx="50" cy="40" rx="3" ry="2"/></g>` },

  blood: { color: '#ff4d6d', svg: `
    ${linG('__g', ['#ff8fab', '#e63946', '#8a0a24'])}
    <path d="M32 5C24 18 14 28 14 40a18 18 0 0 0 36 0C50 28 40 18 32 5z" fill="url(#__g)" stroke="#ffc2d1" stroke-width="2.4"/>
    <g fill="#ffb3c1" stroke="#ffd1dc" stroke-width="1">
      <ellipse cx="27" cy="40" rx="5" ry="3.4"/><ellipse cx="38" cy="45" rx="4.4" ry="3"/><ellipse cx="35" cy="34" rx="3.6" ry="2.4"/>
    </g>
    <g fill="#c1121f" opacity=".6"><ellipse cx="27" cy="40" rx="2" ry="1.2"/><ellipse cx="38" cy="45" rx="1.8" ry="1"/></g>
    ${shine(24, 28, 3, 1.8, .6)}${spark(51, 14, 3.5)}` },

  honey: { color: '#ffb347', svg: `
    ${linG('__g', ['#ffe08a', '#ffb347', '#d0700a'])}
    <g fill="url(#__g)" stroke="#fff3c4" stroke-width="1.8" stroke-linejoin="round">${[[22, 22], [42, 22], [32, 39], [12, 39], [52, 39]].map(([x, y]) =>
      `<path d="M${x} ${y - 10}l9 5v10l-9 5-9-5V${y - 5}z"/>`).join('')}</g>
    <path d="M32 49v6a3 3 0 0 0 6 0v-3" fill="none" stroke="#ffb347" stroke-width="4" stroke-linecap="round"/>
    ${shine(19, 18, 2.6, 1.4, .6)}${spark(54, 10, 3)}` },

  egg: { color: '#fff3c4', svg: `
    ${radG('__g', ['#ffffff', '#fff3dc', '#e0c9a0'], .4, .3, .8)}
    <path d="M32 6c-12 0-20 18-20 30a20 20 0 0 0 40 0C52 24 44 6 32 6z" fill="url(#__g)" stroke="#fff" stroke-width="2"/>
    <g fill="#c9a27a" opacity=".55"><circle cx="38" cy="30" r="1.8"/><circle cx="26" cy="40" r="1.4"/><circle cx="40" cy="44" r="1.2"/><circle cx="30" cy="22" r="1"/></g>
    ${shine(24, 22, 4, 2.2, .7)}${spark(54, 12, 3.5)}${spark(10, 50, 2.5, '#ffd6ff')}` },
});
