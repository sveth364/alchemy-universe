/* Иконки эпохи «Человек». eye(), LEAF — из icons-life.js; head(), blush() — из icons-animals.js */

const SKIN = ['#ffe6d1', '#f5c39a', '#c98a5a'];
const WOOD = ['#e0a86a', '#a8703a', '#6b4020'];
// человечек по пояс: x, y — центр головы, s — масштаб
const person = (id, x, y, s, shirt, hair, hat = '') => `
  ${linG(id + 's', shirt)}
  <path d="M${x - 15 * s} ${y + 30 * s}c0-10 6-16 ${15 * s} ${-16 * s}s${15 * s} 6 ${15 * s} ${16 * s}z" fill="url(#${id}s)" stroke="#fff" stroke-width="${1.6 * s}" stroke-linejoin="round"/>
  ${radG(id + 'h', SKIN, .45, .35, .8)}
  <circle cx="${x}" cy="${y}" r="${10 * s}" fill="url(#${id}h)" stroke="#ffe6d1" stroke-width="${1.4 * s}"/>
  ${hair ? `<path d="M${x - 10 * s} ${y - 1 * s}c0-8 4-11 ${10 * s} ${-11 * s}s${10 * s} 3 ${10 * s} ${11 * s}c-4-4-8-5-${10 * s}-${5 * s}s-6 1-${10 * s} ${5 * s}z" fill="${hair}"/>` : ''}
  <circle cx="${x - 3.5 * s}" cy="${y + 1 * s}" r="${1.4 * s}" fill="#2a1f4a"/><circle cx="${x + 3.5 * s}" cy="${y + 1 * s}" r="${1.4 * s}" fill="#2a1f4a"/>
  <path d="M${x - 3 * s} ${y + 5 * s}q${3 * s} ${2.5 * s} ${6 * s} 0" fill="none" stroke="#a4336f" stroke-width="${1.2 * s}" stroke-linecap="round"/>
  ${hat}`;
const steamLines = (x, y) => `<g fill="none" stroke="#e6dcff" stroke-width="2" stroke-linecap="round" opacity=".85">
  <path d="M${x - 6} ${y}c-3-3 3-5 0-9"/><path d="M${x} ${y - 2}c-3-3 3-5 0-9"/><path d="M${x + 6} ${y}c-3-3 3-5 0-9"/></g>`;
const water = (y = 52) => `${linG('__wv', ['#6ee7ff', '#3a6fd8'])}<path d="M2 ${y}c8-3 14 3 22 0s14-3 22 0 12 2 16 0v${64 - y}H2z" fill="url(#__wv)" stroke="#d6f8ff" stroke-width="1.4"/>`;
const log = (x, y, w, rot = 0) => `<g transform="rotate(${rot} ${x} ${y})">
  <rect x="${x - w / 2}" y="${y - 5}" width="${w}" height="10" rx="5" fill="url(#__lg)" stroke="#f0c9a0" stroke-width="1.4"/>
  <ellipse cx="${x + w / 2 - 4}" cy="${y}" rx="4" ry="5" fill="#f0c9a0" stroke="#fff3dc" stroke-width="1"/>
  <ellipse cx="${x + w / 2 - 4}" cy="${y}" rx="1.8" ry="2.4" fill="none" stroke="#a8703a" stroke-width="1"/></g>`;
const flame = (x, y, s = 1) => `${linG('__fl', ['#fff59d', '#ffb347', '#ff3d5a'])}
  <path d="M${x} ${y - 22 * s}c3 7 10 10 10 ${18 * s}a10 10 0 0 1-20 0c0-6 3-8 5-11 0 4 2 5 3 5-1-6 0-10 2-${12 * s}z" fill="url(#__fl)" stroke="#ffd6a0" stroke-width="1.6" stroke-linejoin="round"/>`;

Object.assign(ICONS, {
  human: { color: '#9d7bff', svg: `${person('__p', 32, 24, 1.3, ['#c9b6ff', '#6c4fe0'], '#5a3420')}${spark(54, 10, 3.5)}` },

  love: { color: '#ff5fa2', svg: `
    ${radG('__g', ['#ffd1e8', '#ff5fa2', '#c2185b'], .4, .3, .8)}
    <path d="M32 54C10 40 6 28 10 20s16-10 22 0c6-10 18-8 22 0s0 20-22 34z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2.2" stroke-linejoin="round"/>
    ${shine(20, 22, 5, 2.6, .6)}
    <path d="M52 8c-2-3-6-1-4 2l4 4 4-4c2-3-2-5-4-2z" fill="#ff8fd1"/><path d="M10 46c-1.5-2-4.5-.7-3 1.4l3 3 3-3c1.5-2.1-1.5-3.4-3-1.4z" fill="#ffd6ef"/>` },

  child: { color: '#ffd166', svg: `
    ${head('__g', 32, 34, 20, 19, SKIN, '#ffe6d1')}
    <path d="M32 15c-2-6 4-9 6-6s-2 6-4 4" fill="none" stroke="#c68b59" stroke-width="2.4" stroke-linecap="round"/>
    ${eye(25, 34, 3)}${eye(39, 34, 3)}
    <circle cx="32" cy="44" r="4" fill="#6ee7ff" stroke="#fff" stroke-width="1.4"/><circle cx="32" cy="44" r="1.4" fill="#fff"/>
    ${blush(20, 44, 40)}${spark(54, 10, 3)}` },

  family: { color: '#ff8fd1', svg: `
    ${person('__a', 17, 22, .9, ['#8fd3ff', '#3a6fd8'], '#5a3420')}
    ${person('__b', 47, 22, .9, ['#ffb3d1', '#c2449b'], '#a8703a')}
    ${person('__c', 32, 36, .7, ['#ffe066', '#e09b00'], '#c68b59')}
    <path d="M30 8c-1-2-4-1-3 1l3 3 3-3c1-2-2-3-3-1z" fill="#ff5fa2"/>` },

  axe: { color: '#a9a4c8', svg: `
    ${linG('__h', WOOD, 1, 0)}
    <path d="M40 58 22 14" stroke="#f0c9a0" stroke-width="8" stroke-linecap="round"/>
    <path d="M40 58 22 14" stroke="url(#__h)" stroke-width="5" stroke-linecap="round"/>
    ${radG('__s', ['#f1effa', '#a9a4c8', '#5b5680'])}
    <path d="M24 12c-8-6-18-2-20 6 6-2 12 0 14 6 4-2 8-6 6-12z" fill="url(#__s)" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M20 22l8-4M22 26l8-4" stroke="#c68b59" stroke-width="2" stroke-linecap="round"/>
    ${spark(52, 12, 3)}` },

  wood: { color: '#c68b59', svg: `
    ${linG('__lg', WOOD)}
    ${log(26, 46, 40)}${log(38, 46, 40)}${log(32, 34, 40)}
    ${LEAF(46, 28, 40, .9)}` },

  campfire: { color: '#ff7a1a', svg: `
    ${halo('__h', 32, 36, 24, '#ff9f43', .45)}
    ${linG('__lg', WOOD)}
    ${log(32, 52, 44, 15)}${log(32, 52, 44, -15)}
    ${flame(32, 46, 1)}
    <g fill="#ffe066"><circle cx="20" cy="18" r="1.4"/><circle cx="44" cy="14" r="1.2"/><circle cx="40" cy="22" r="1"/></g>` },

  hut: { color: '#e0b48a', svg: `
    ${linG('__w', ['#e0b48a', '#9c6644'])}${linG('__r', ['#fff3c4', '#e0a800'])}
    <path d="M12 56V34h40v22z" fill="url(#__w)" stroke="#f0c9a0" stroke-width="1.8"/>
    <path d="M32 6 4 36h56z" fill="url(#__r)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <g stroke="#c48a00" stroke-width="1.2" opacity=".7"><path d="M32 6 20 36M32 6l12 30M32 6v30"/></g>
    <path d="M26 56V44a6 6 0 0 1 12 0v12z" fill="#4a2c18" stroke="#f0c9a0" stroke-width="1.6"/>` },

  wool: { color: '#ff8fd1', svg: `
    ${radG('__g', ['#ffe6f4', '#ff8fd1', '#c2449b'])}
    <circle cx="30" cy="34" r="20" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2"/>
    <g fill="none" stroke="#ffd6ef" stroke-width="1.6" opacity=".85">
      <path d="M14 26c10 4 22 4 32-2M12 36c12 4 26 4 36-4M16 46c10 2 22 0 30-8"/><path d="M24 15c-4 10-4 24 2 38M38 16c4 10 4 24-2 36"/>
    </g>
    <path d="M48 46c6 2 10 8 8 14" fill="none" stroke="#ff8fd1" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M44 4 56 26" stroke="#e6e9ff" stroke-width="2.4" stroke-linecap="round"/>` },

  clothes: { color: '#6ee7ff', svg: `
    ${linG('__g', ['#8fe8ff', '#3a8fd8'])}
    <path d="M22 8l-16 10 6 12 6-3v29h28V27l6 3 6-12-16-10c-2 4-6 6-10 6s-8-2-10-6z" fill="url(#__g)" stroke="#e0fbff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 34h16" stroke="#ffe066" stroke-width="3" stroke-linecap="round"/>
    ${spark(32, 44, 3)}` },

  rope: { color: '#e0b48a', svg: `
    <g fill="none" stroke-linecap="round">
      <ellipse cx="32" cy="34" rx="22" ry="18" stroke="#c99a6b" stroke-width="6"/><ellipse cx="32" cy="34" rx="14" ry="11" stroke="#e0b48a" stroke-width="6"/>
      <ellipse cx="32" cy="34" rx="22" ry="18" stroke="#fff3dc" stroke-width="1.2" stroke-dasharray="3 3"/><ellipse cx="32" cy="34" rx="14" ry="11" stroke="#fff3dc" stroke-width="1.2" stroke-dasharray="3 3"/>
      <path d="M50 46c6 4 8 8 6 12" stroke="#e0b48a" stroke-width="5"/>
    </g>` },

  bow: { color: '#c68b59', svg: `
    ${linG('__h', WOOD)}
    <path d="M18 6c18 8 18 44 0 52" fill="none" stroke="#f0c9a0" stroke-width="7" stroke-linecap="round"/>
    <path d="M18 6c18 8 18 44 0 52" fill="none" stroke="url(#__h)" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M18 6v52" stroke="#fff3dc" stroke-width="1.4"/>
    <path d="M8 32h46" stroke="#e0a86a" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M54 32l-8-5v10z" fill="#a9a4c8" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M8 32l-4-4M8 32l-4 4M12 32l-4-4M12 32l-4 4" stroke="#ff5fa2" stroke-width="2" stroke-linecap="round"/>` },

  meat: { color: '#ff7a5a', svg: `
    <path d="M40 40l14 14" stroke="#fff8ee" stroke-width="6" stroke-linecap="round"/>
    <g fill="#fff8ee" stroke="#e6d4c0" stroke-width="1.2"><circle cx="56" cy="52" r="4"/><circle cx="52" cy="57" r="4"/></g>
    ${radG('__g', ['#ffb3a0', '#e0503a', '#8a1a14'])}
    <path d="M10 26c0-12 10-20 22-18s18 14 14 26-12 14-22 12S10 38 10 26z" fill="url(#__g)" stroke="#ffd1c2" stroke-width="2"/>
    <path d="M18 22c4-6 12-8 18-4" fill="none" stroke="#ffd1c2" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>` },

  steak: { color: '#ff7a5a', svg: `
    <ellipse cx="32" cy="40" rx="28" ry="14" fill="#f1effa" stroke="#fff" stroke-width="2"/>
    ${radG('__g', ['#d27a5a', '#a0412a', '#5a1a10'])}
    <path d="M12 36c0-10 10-16 22-14s18 8 16 16-10 10-22 10-16-4-16-12z" fill="url(#__g)" stroke="#ffd1c2" stroke-width="1.8"/>
    <g stroke="#3a0f08" stroke-width="2.2" stroke-linecap="round" opacity=".7"><path d="M20 32l6 10M28 28l8 14M38 28l6 10"/></g>
    ${LEAF(48, 26, 30, .8)}${steamLines(32, 18)}` },

  farmer: { color: '#3ddc84', svg: `${person('__p', 32, 26, 1.25, ['#7dff9a', '#1fae5a'], '', `
    <ellipse cx="32" cy="16" rx="20" ry="4" fill="#ffd166" stroke="#fff3c4" stroke-width="1.6"/>
    <path d="M22 16c0-8 4-11 10-11s10 3 10 11z" fill="#ffd166" stroke="#fff3c4" stroke-width="1.6"/>
    <path d="M22 14h20" stroke="#ff5fa2" stroke-width="2.4"/>`)}
    <path d="M50 30l6-16" stroke="#e0a86a" stroke-width="2.6" stroke-linecap="round"/><path d="M53 14l3 0 3 2" fill="none" stroke="#e0a86a" stroke-width="2" stroke-linecap="round"/>` },

  farm: { color: '#ff5f5f', svg: `
    ${linG('__w', ['#ff8f8f', '#c1121f'])}
    <path d="M10 56V28l22-16 22 16v28z" fill="url(#__w)" stroke="#ffd1d1" stroke-width="2" stroke-linejoin="round"/>
    <path d="M6 30 32 10l26 20" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="22" y="36" width="20" height="20" fill="#7a0a1a" stroke="#fff" stroke-width="2"/>
    <path d="M22 36l20 20M42 36 22 56" stroke="#fff" stroke-width="2"/>
    <circle cx="32" cy="25" r="4" fill="#fff3c4" stroke="#fff" stroke-width="1.4"/>
    <path d="M2 58h60" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>` },

  bread: { color: '#e0a86a', svg: `
    ${radG('__g', ['#ffe0b0', '#e0a86a', '#a8602a'], .45, .3, .8)}
    <path d="M6 40c0-14 12-22 26-22s26 8 26 22c0 6-4 8-8 8H14c-4 0-8-2-8-8z" fill="url(#__g)" stroke="#fff3dc" stroke-width="2"/>
    <g stroke="#fff3dc" stroke-width="2.4" stroke-linecap="round"><path d="M18 28l6 8M28 24l6 10M40 25l6 9"/></g>
    ${shine(16, 30, 4, 2, .45)}${spark(54, 12, 3)}` },

  milk: { color: '#e0fbff', svg: `
    ${linG('__g', ['#ffffff', '#e6eeff'])}
    <path d="M24 8h16v8l6 10v30c0 2-2 4-4 4H22c-2 0-4-2-4-4V26l6-10z" fill="#bfefff" fill-opacity=".25" stroke="#e0fbff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M20 32h24v24c0 1-1 2-2 2H22c-1 0-2-1-2-2z" fill="url(#__g)"/>
    <path d="M20 32c4-2 8 2 12 0s8-2 12 0" fill="none" stroke="#fff" stroke-width="2"/>
    <rect x="22" y="5" width="20" height="5" rx="2" fill="#4cc9ff" stroke="#e0fbff" stroke-width="1.4"/>
    <path d="M23 22v30" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>` },

  cheese: { color: '#ffd166', svg: `
    ${linG('__t', ['#fff3c4', '#ffe066'])}${linG('__f', ['#ffd166', '#e09b00'])}
    <path d="M6 30 46 14l12 16z" fill="url(#__t)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M6 30h52v20H6z" fill="url(#__f)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#c48a00" opacity=".75"><circle cx="18" cy="38" r="3"/><circle cx="34" cy="44" r="4"/><circle cx="48" cy="37" r="2.4"/><circle cx="28" cy="24" r="2"/><ellipse cx="42" cy="22" rx="2.6" ry="1.4"/></g>` },

  friedegg: { color: '#ffd166', svg: `
    <path d="M8 34c0-10 10-18 22-16 8-6 22-2 24 8s-2 20-14 22-14 4-22 0-10-6-10-14z" fill="#ffffff" stroke="#e6e9ff" stroke-width="2"/>
    ${ball('__y', 32, 33, 9, ['#fff59d', '#ffc93c', '#ff9f1c'], '#fff3c4')}
    ${spark(54, 10, 3)}` },

  soup: { color: '#ff9f43', svg: `
    ${steamLines(32, 22)}
    <ellipse cx="32" cy="32" rx="24" ry="6" fill="#ff9f43" stroke="#ffe0b0" stroke-width="1.6"/>
    <g fill="#3ddc84"><circle cx="24" cy="31" r="1.8"/><circle cx="38" cy="33" r="1.6"/></g><g fill="#ff5f5f"><circle cx="31" cy="30" r="1.8"/></g>
    ${linG('__b', ['#8fd3ff', '#3a6fd8'])}
    <path d="M8 32c0 14 10 24 24 24s24-10 24-24c-4 4-14 6-24 6S12 36 8 32z" fill="url(#__b)" stroke="#e0fbff" stroke-width="2"/>
    <path d="M14 40c2 6 8 10 14 11" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/>` },

  wine: { color: '#c2185b', svg: `
    <path d="M18 8h28c0 16-4 26-14 26S18 24 18 8z" fill="#bfefff" fill-opacity=".2" stroke="#e6dcff" stroke-width="2"/>
    ${linG('__g', ['#ff5f8a', '#8a0a3a'])}
    <path d="M19 18h26c-1 9-5 14-13 14s-12-5-13-14z" fill="url(#__g)"/>
    <path d="M32 34v16M22 56h20" stroke="#e6dcff" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M23 12c0 6 1 10 3 13" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
    ${spark(52, 14, 3)}` },

  beer: { color: '#ffb347', svg: `
    <path d="M44 24h6a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-6" fill="none" stroke="#e0fbff" stroke-width="3.5"/>
    ${linG('__g', ['#ffd166', '#e0800a'])}
    <rect x="12" y="18" width="32" height="40" rx="4" fill="url(#__g)" stroke="#fff3c4" stroke-width="2"/>
    <path d="M10 20c0-6 4-10 8-8 2-4 8-4 10 0 2-3 8-3 10 0 4-2 8 2 8 8z" fill="#ffffff" stroke="#fff3dc" stroke-width="1.6"/>
    <path d="M18 26v26M26 26v26" stroke="#fff3c4" stroke-width="2" stroke-linecap="round" opacity=".5"/>
    <g fill="#fff3c4" opacity=".8"><circle cx="34" cy="44" r="1.4"/><circle cx="36" cy="36" r="1"/></g>` },

  tea: { color: '#3ddc84', svg: `
    ${steamLines(28, 18)}
    <path d="M44 28h4a6 6 0 0 1 0 12h-4" fill="none" stroke="#e0fbff" stroke-width="3"/>
    ${linG('__g', ['#ffffff', '#c9cde6'])}
    <path d="M10 24h36v10c0 10-8 16-18 16S10 44 10 34z" fill="url(#__g)" stroke="#fff" stroke-width="2"/>
    <ellipse cx="28" cy="24" rx="18" ry="3" fill="#7ae37a" stroke="#fff" stroke-width="1.4"/>
    <ellipse cx="28" cy="54" rx="24" ry="4" fill="#c9cde6" stroke="#fff" stroke-width="1.6"/>
    ${LEAF(22, 40, -30, .7)}` },

  pottery: { color: '#e07a4f', svg: `
    ${linG('__g', ['#ffb38a', '#c8643b', '#7a3010'], 1, 0)}
    <path d="M24 6h16v4c-2 2-3 4-2 6 10 4 16 12 16 22 0 10-8 18-22 18S10 48 10 38c0-10 6-18 16-22 1-2 0-4-2-6z" fill="url(#__g)" stroke="#ffd0b5" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12 34h40M14 44h36" stroke="#2a1f4a" stroke-width="2" opacity=".55"/>
    <path d="M18 39l4-4 4 4 4-4 4 4 4-4 4 4 4-4" fill="none" stroke="#fff3dc" stroke-width="1.6"/>
    ${shine(18, 28, 3, 1.6, .5)}` },

  brick: { color: '#e0503a', svg: `
    ${linG('__g', ['#ff8f6b', '#c1351f'])}
    <g fill="url(#__g)" stroke="#ffd1c2" stroke-width="1.6">
      <rect x="6" y="40" width="24" height="12" rx="2"/><rect x="34" y="40" width="24" height="12" rx="2"/>
      <rect x="18" y="26" width="24" height="12" rx="2"/><rect x="2" y="26" width="13" height="12" rx="2"/><rect x="45" y="26" width="13" height="12" rx="2"/>
      <rect x="6" y="12" width="24" height="12" rx="2"/><rect x="34" y="12" width="24" height="12" rx="2"/>
    </g>
    <g fill="#fff" opacity=".35"><rect x="9" y="14" width="10" height="2" rx="1"/><rect x="21" y="28" width="10" height="2" rx="1"/></g>` },

  house: { color: '#ffb347', svg: `
    ${linG('__w', ['#fff3dc', '#e0c9a0'])}${linG('__r', ['#ff8f6b', '#c1351f'])}
    <rect x="40" y="10" width="7" height="12" fill="#a8703a" stroke="#f0c9a0" stroke-width="1.4"/>
    <path d="M12 56V30h40v26z" fill="url(#__w)" stroke="#fff" stroke-width="2"/>
    <path d="M6 32 32 10l26 22z" fill="url(#__r)" stroke="#ffd1c2" stroke-width="2" stroke-linejoin="round"/>
    <rect x="17" y="36" width="12" height="10" rx="1.5" fill="#ffe066" stroke="#fff" stroke-width="1.6"/>
    <path d="M23 36v10M17 41h12" stroke="#fff" stroke-width="1.2"/>
    <path d="M35 56V40h10v16z" fill="#8a5a36" stroke="#f0c9a0" stroke-width="1.6"/>
    <circle cx="43" cy="49" r="1" fill="#ffe066"/>` },

  village: { color: '#ffb347', svg: `
    ${linG('__w', ['#fff3dc', '#e0c9a0'])}
    ${[[44, 22, '#c77dff', 1], [18, 26, '#4cc9ff', .95], [32, 36, '#ff8f6b', 1.05]].map(([x, y, roof, s]) => `
      <path d="M${x - 10 * s} ${y + 20 * s}V${y + 6 * s}h${20 * s}v${14 * s}z" fill="url(#__w)" stroke="#fff" stroke-width="1.6"/>
      <path d="M${x - 13 * s} ${y + 7 * s}l${13 * s}-${11 * s} ${13 * s} ${11 * s}z" fill="${roof}" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
      <rect x="${x - 3 * s}" y="${y + 12 * s}" width="${6 * s}" height="${8 * s}" fill="#8a5a36"/>`).join('')}
    <path d="M2 58h60" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>` },

  boat: { color: '#4cc9ff', svg: `
    <path d="M32 6v36" stroke="#e0a86a" stroke-width="2.6" stroke-linecap="round"/>
    ${linG('__s', ['#ffffff', '#e6dcff'])}
    <path d="M34 8c10 8 16 20 16 30H34z" fill="url(#__s)" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M30 14c-6 8-10 16-10 24h10z" fill="#ff8fd1" stroke="#ffd6ef" stroke-width="1.8" stroke-linejoin="round"/>
    ${linG('__h', WOOD)}
    <path d="M8 42h48l-6 10H14z" fill="url(#__h)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    ${water(52)}` },

  wheel: { color: '#c68b59', svg: `
    <circle cx="32" cy="32" r="24" fill="none" stroke="#f0c9a0" stroke-width="9"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#a8703a" stroke-width="6"/>
    <g stroke="#c68b59" stroke-width="3.5" stroke-linecap="round">${[0, 45, 90, 135].map(a =>
      `<path d="M32 10v44" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    ${ball('__c', 32, 32, 6, ['#f0d8b8', '#c68b59', '#6b4020'], '#f0c9a0', 1.6)}
    <path d="M14 22a20 20 0 0 1 10-10" fill="none" stroke="#fff3dc" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>` },

  cart: { color: '#c68b59', svg: `
    ${linG('__h', WOOD)}
    <path d="M6 22h40l-4 18H10z" fill="url(#__h)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M10 28h34M10 34h32" stroke="#6b4020" stroke-width="1.4" opacity=".6"/>
    <path d="M44 36l16-6" stroke="#a8703a" stroke-width="3" stroke-linecap="round"/>
    <g fill="#ffd166" stroke="#fff3c4" stroke-width="1"><ellipse cx="16" cy="20" rx="5" ry="3"/><ellipse cx="26" cy="19" rx="5" ry="3"/><ellipse cx="36" cy="20" rx="5" ry="3"/></g>
    ${[16, 38].map(x => `<circle cx="${x}" cy="46" r="9" fill="#4a2c18" stroke="#f0c9a0" stroke-width="2.4"/>
      <path d="M${x - 9} 46h18M${x} 37v18" stroke="#c68b59" stroke-width="2"/><circle cx="${x}" cy="46" r="2.4" fill="#c68b59"/>`).join('')}` },

  music: { color: '#c77dff', svg: `
    ${linG('__g', ['#ff8fd1', '#9d7bff'], 1, 1)}
    <path d="M24 46V14l28-6v32" fill="none" stroke="url(#__g)" stroke-width="4" stroke-linejoin="round"/>
    <path d="M24 20l28-6" stroke="url(#__g)" stroke-width="6"/>
    <ellipse cx="17" cy="47" rx="8" ry="6" fill="url(#__g)" stroke="#ffd6ef" stroke-width="1.8" transform="rotate(-20 17 47)"/>
    <ellipse cx="45" cy="41" rx="8" ry="6" fill="url(#__g)" stroke="#ffd6ef" stroke-width="1.8" transform="rotate(-20 45 41)"/>
    ${spark(8, 14, 3)}${spark(56, 56, 2.5, '#9ff')}` },

  art: { color: '#ffd166', svg: `
    ${linG('__p', ['#fff3dc', '#e0c9a0'])}
    <path d="M32 6C16 6 4 18 4 32s10 26 24 26c6 0 6-6 4-10s0-8 6-8h8c10 0 14-6 14-12C60 14 48 6 32 6z" fill="url(#__p)" stroke="#fff" stroke-width="2"/>
    <g stroke="#fff" stroke-width="1.2"><circle cx="18" cy="24" r="5" fill="#ff4d6d"/><circle cx="32" cy="16" r="5" fill="#ffd166"/><circle cx="46" cy="22" r="5" fill="#3ddc84"/><circle cx="16" cy="40" r="5" fill="#4cc9ff"/></g>
    <path d="M58 6 38 34" stroke="#a8703a" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M38 34c-3 1-5 4-4 8 4 0 7-2 8-5z" fill="#c77dff" stroke="#fff" stroke-width="1.2"/>` },

  fishing: { color: '#4cc9ff', svg: `
    <path d="M6 58C14 30 30 12 50 6" fill="none" stroke="#e0a86a" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 6c4 14 4 26 0 36" fill="none" stroke="#e6e9ff" stroke-width="1.2"/>
    <circle cx="50" cy="38" r="3.6" fill="#ff4d6d" stroke="#fff" stroke-width="1.2"/><path d="M46.4 38h7.2" stroke="#fff" stroke-width="1.6"/>
    <circle cx="14" cy="50" r="3" fill="#a8703a" stroke="#f0c9a0" stroke-width="1.2"/>
    ${water(44)}
    <path d="M30 56c3-4 9-4 12 0-3 4-9 4-12 0zM42 56l4-3v6z" fill="#ffd166" stroke="#fff3c4" stroke-width="1"/>` },

  tent: { color: '#ff8fd1', svg: `
    <path d="M32 6v8" stroke="#e0a86a" stroke-width="2" stroke-linecap="round"/><path d="M32 6l10 3-10 3z" fill="#ffd166"/>
    ${linG('__g', ['#ff8fd1', '#c2449b'])}
    <path d="M32 12 4 56h56z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 12 18 56M32 12l14 44" stroke="#fff" stroke-width="2" opacity=".55"/>
    <path d="M32 30 24 56h16z" fill="#4a2c5c" stroke="#ffd6ef" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M2 58h60" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>` },
});
