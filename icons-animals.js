/* Иконки эпохи «Жизнь», часть 2: рептилии, птицы, млекопитающие.
   eye(), LEAF — из icons-life.js; ball, radG… — из icons.js */

const LIZ = ['#d4ff9a', '#5fd36a', '#1f7a3a'];
const GREY = ['#f1effa', '#a9a4c8', '#5b5680'];
const BROWN = ['#f0c9a0', '#b07a4a', '#5a3420'];
const ORANGE = ['#ffe0b0', '#ff9f43', '#c4560b'];
// голова-мордочка анфас
const head = (id, cx, cy, rx, ry, arr, stroke) =>
  radG(id, arr, .45, .35, .8) + `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${id})" stroke="${stroke}" stroke-width="2"/>`;
const blush = (x1, x2, y) => `<g fill="#ff8fd1" opacity=".55"><ellipse cx="${x1}" cy="${y}" rx="3" ry="1.8"/><ellipse cx="${x2}" cy="${y}" rx="3" ry="1.8"/></g>`;
const nose = (x, y, w = 4, c = '#2a1f4a') => `<path d="M${x - w} ${y}h${w * 2}l-${w} ${w * .8}z" fill="${c}" stroke-linejoin="round"/>`;
const whiskers = (x, y, c = '#fff') => `<g stroke="${c}" stroke-width="1.1" stroke-linecap="round" opacity=".8">
  <path d="M${x - 6} ${y}l-10-2M${x - 6} ${y + 3}l-10 2M${x + 6} ${y}l10-2M${x + 6} ${y + 3}l10 2"/></g>`;

Object.assign(ICONS, {
  // ───── рептилии ─────
  lizard: { color: '#5fd36a', svg: `
    ${linG('__g', ['#a6ff8a', '#1f9d4a'], 1, 0)}
    <g stroke="#1f7a3a" stroke-width="3" stroke-linecap="round"><path d="M20 38l-4 8M30 34l2-8M38 38l-2 8M46 32l4-6"/></g>
    <path d="M8 46c-4-2-4-8 2-8 8 0 12-8 22-6s14 4 22-4" fill="none" stroke="url(#__g)" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="54" cy="26" rx="7" ry="5" fill="#7ae37a" stroke="#d9ffc4" stroke-width="1.6"/>
    <g fill="#ffe066" opacity=".8"><circle cx="24" cy="35" r="1.4"/><circle cx="34" cy="34" r="1.4"/><circle cx="43" cy="31" r="1.4"/></g>
    ${eye(55, 24, 2)}` },

  snake: { color: '#ffb347', svg: `
    ${linG('__g', ['#ffd166', '#ff7a1a'], 1, 1)}
    <path d="M30 52c-14 0-20-6-20-12s8-10 22-10 20-4 20-10-6-10-14-10" fill="none" stroke="#fff3c4" stroke-width="11" stroke-linecap="round"/>
    <path d="M30 52c-14 0-20-6-20-12s8-10 22-10 20-4 20-10-6-10-14-10" fill="none" stroke="url(#__g)" stroke-width="8" stroke-linecap="round"/>
    <g fill="#c4560b" opacity=".7"><circle cx="16" cy="44" r="1.6"/><circle cx="26" cy="31" r="1.6"/><circle cx="40" cy="29" r="1.6"/><circle cx="50" cy="20" r="1.6"/></g>
    <ellipse cx="34" cy="10" rx="7" ry="5" fill="#ffc35c" stroke="#fff3c4" stroke-width="1.6"/>
    ${eye(33, 8, 2)}
    <path d="M27 11h-5l-2-2M22 11l-2 2" fill="none" stroke="#ff4d6d" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M30 52h24" stroke="url(#__g)" stroke-width="8" stroke-linecap="round"/>` },

  turtle: { color: '#3ddc84', svg: `
    <g fill="#9be37a" stroke="#d9ffc4" stroke-width="1.6"><ellipse cx="16" cy="48" rx="5" ry="4"/><ellipse cx="44" cy="48" rx="5" ry="4"/>
    <ellipse cx="52" cy="38" rx="8" ry="6"/></g>
    ${eye(55, 36, 2)}
    ${radG('__s', ['#d4ff9a', '#3ddc84', '#0b5e3a'], .45, .3, .8)}
    <path d="M6 44c0-14 10-24 24-24s22 10 22 24z" fill="url(#__s)" stroke="#d9ffc4" stroke-width="2"/>
    <path d="M22 26l-4 9 6 9h12l6-9-4-9zM18 35H8M42 35h9M24 44v-2M36 44v-2" fill="none" stroke="#0b5e3a" stroke-width="1.6" opacity=".7"/>
    ${shine(18, 30, 4, 2, .5)}` },

  crocodile: { color: '#5fd36a', svg: `
    ${linG('__g', ['#9be37a', '#2f8f4a'])}
    <path d="M4 40c0-8 8-14 18-14h8l28 6c4 1 4 5 0 6l-28 4H12c-5 0-8-1-8-2z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12 42h18l26-4" fill="none" stroke="#1f5a2f" stroke-width="1.6"/>
    <g fill="#fff"><path d="M30 38l2 4 2-4zM38 37l2 4 2-4zM46 36l2 3 2-3z"/><path d="M34 43l2-4 2 4zM42 42l2-3 2 3z"/></g>
    <ellipse cx="22" cy="24" rx="6" ry="5" fill="#7ae37a" stroke="#d9ffc4" stroke-width="1.6"/>
    ${eye(22, 23, 2.6)}
    <g fill="#1f5a2f"><circle cx="54" cy="33" r="1"/></g>
    ${linG('__w', ['#6ee7ff', '#3a6fd8'])}<path d="M2 50c8-3 14 3 22 0s14-3 22 0 12 2 16 0v8H2z" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.4"/>` },

  dinosaur: { color: '#5fd36a', svg: `
    ${linG('__g', ['#a6ff8a', '#2f9d4a'], 1, 1)}
    <path d="M14 50c0-12 6-20 16-22l2-12c0-6 6-8 14-8s12 4 12 10c0 4-4 6-8 6h-6c-2 6-2 10 2 16l2 14h-6l-2-8c-4 2-8 2-12 2l-2 6h-6v-6c-6 4-12 8-16 10 4-6 8-6 10-8z"
      fill="url(#__g)" stroke="#d9ffc4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M44 32l5 3" stroke="#1f7a3a" stroke-width="2.6" stroke-linecap="round"/>
    <g fill="#fff"><path d="M46 24l1.5 3 1.5-3zM51 24l1.5 3 1.5-3z"/></g>
    <g fill="#ffe066" opacity=".7"><circle cx="26" cy="36" r="2"/><circle cx="20" cy="44" r="1.6"/><circle cx="32" cy="42" r="1.6"/></g>
    ${eye(47, 14, 2.4)}` },

  sauropod: { color: '#4cc9ff', svg: `
    ${linG('__g', ['#9fe8ff', '#3a8fd8'], 1, 1)}
    <path d="M10 44c2-8 10-12 20-12 6 0 10-6 12-14 1-6 4-10 9-10 4 0 6 3 4 5-2 1-5 1-6 3-2 8-4 18-8 22 6 2 10 6 10 12h-6l-2-5h-14l-2 5h-6v-5c-4 2-10 3-16 2 3-1 5-2 5-3z"
      fill="url(#__g)" stroke="#d6f8ff" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#c8f1ff" opacity=".8"><circle cx="24" cy="38" r="2"/><circle cx="32" cy="36" r="1.6"/></g>
    ${eye(51, 10, 1.8)}
    ${spark(14, 16, 3)}` },

  extinction: { color: '#ff7a1a', svg: `
    ${linG('__f', ['rgba(255,209,102,0)', '#ffd166', '#ff5e3a'], 1, 1)}
    <path d="M58 4 30 30l6 6z" fill="url(#__f)"/><path d="M50 4 28 26M60 14 38 34" stroke="#ffb347" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    ${ball('__r', 30, 34, 8, ['#c9b6a0', '#7a5a3a', '#3a2414'], '#ff9f43')}
    ${halo('__h', 30, 34, 14, '#ff7a1a', .5)}
    ${linG('__g', ['#9a7bb8', '#3a2a4a'])}
    <path d="M2 52c10-4 20-2 30 0s20 2 30-2v14H2z" fill="url(#__g)" stroke="#e6dcff" stroke-width="1.6"/>
    <path d="M12 50l2-6 4 6M44 50l3-5 3 5" fill="none" stroke="#e6dcff" stroke-width="1.6" stroke-linejoin="round" opacity=".7"/>` },

  // ───── птицы ─────
  bird: { color: '#4cc9ff', svg: `
    ${radG('__g', ['#d0f4ff', '#4cc9ff', '#1d4ed8'], .45, .35, .8)}
    <path d="M8 30l-4-6 10 2z" fill="#4cc9ff" stroke="#c8f1ff" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M10 32c0-12 10-20 22-20 10 0 18 6 18 16 0 14-10 22-22 22-10 0-18-8-18-18z" fill="url(#__g)" stroke="#c8f1ff" stroke-width="2"/>
    <path d="M18 32c6-2 12 2 14 8-8 2-14-2-14-8z" fill="#1d4ed8" stroke="#c8f1ff" stroke-width="1.4"/>
    <path d="M48 24l10 3-10 4z" fill="#ffd166" stroke="#fff3c4" stroke-width="1.2" stroke-linejoin="round"/>
    ${eye(40, 22, 3)}
    <path d="M26 50v6M32 50v6" stroke="#ff9f43" stroke-width="2.2" stroke-linecap="round"/>` },

  eagle: { color: '#c68b59', svg: `
    ${linG('__b', BROWN)}
    <path d="M6 58c2-14 10-22 22-24l20 2c6 4 10 12 10 22z" fill="url(#__b)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    ${radG('__h', ['#ffffff', '#f1effa', '#b9b2e0'])}
    <path d="M18 38c-2-14 6-26 20-26 10 0 16 8 16 16l-4 10z" fill="url(#__h)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M44 22c8 0 14 4 14 10 0 3-2 5-4 4-1-4-4-6-10-6z" fill="#ffd166" stroke="#fff3c4" stroke-width="1.6" stroke-linejoin="round"/>
    ${eye(38, 22, 2.6)}
    <path d="M33 18l8 2" stroke="#5b5680" stroke-width="2" stroke-linecap="round"/>` },

  owl: { color: '#c68b59', svg: `
    ${radG('__g', BROWN, .45, .3, .8)}
    <path d="M14 16l4 8M50 16l-4 8" stroke="#b07a4a" stroke-width="4" stroke-linecap="round"/>
    <path d="M12 36c0-12 8-18 20-18s20 6 20 18-6 22-20 22-20-10-20-22z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2"/>
    <path d="M22 44c4 4 16 4 20 0" fill="none" stroke="#f0c9a0" stroke-width="1.4" opacity=".7"/><path d="M24 50c3 2 13 2 16 0" fill="none" stroke="#f0c9a0" stroke-width="1.4" opacity=".7"/>
    <g fill="#fff3dc" stroke="#ffd166" stroke-width="1.8"><circle cx="24" cy="32" r="7"/><circle cx="40" cy="32" r="7"/></g>
    ${eye(24, 32, 4)}${eye(40, 32, 4)}
    <path d="M30 37h4l-2 4z" fill="#ffb347"/>
    ${spark(54, 8, 3)}` },

  penguin: { color: '#bfefff', svg: `
    ${radG('__g', ['#6a6699', '#2a2650', '#12102a'], .45, .3, .8)}
    <path d="M32 6c-12 0-18 12-18 26 0 14 6 24 18 24s18-10 18-24C50 18 44 6 32 6z" fill="url(#__g)" stroke="#c9c3ec" stroke-width="2"/>
    <path d="M32 18c-7 0-10 8-10 18s4 16 10 16 10-6 10-16-3-18-10-18z" fill="#ffffff"/>
    <path d="M14 30c-4 6-4 14-2 18M50 30c4 6 4 14 2 18" fill="none" stroke="#2a2650" stroke-width="4" stroke-linecap="round"/>
    ${eye(27, 16, 2.4)}${eye(37, 16, 2.4)}
    <path d="M29 21h6l-3 4z" fill="#ff9f43"/>
    <path d="M24 56h7M33 56h7" stroke="#ff9f43" stroke-width="3" stroke-linecap="round"/>
    ${blush(23, 41, 24)}` },

  duck: { color: '#ffd166', svg: `
    ${radG('__g', ['#fffbe0', '#ffd166', '#e09b00'], .45, .35, .8)}
    <path d="M8 40c0-6 6-10 14-10h8c4-4 2-12 8-16 6-4 16 0 16 8 0 6-4 8-4 12 6 0 10 4 10 8 0 8-10 12-26 12S8 48 8 40z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M18 40c6 4 14 4 18-2" fill="none" stroke="#e09b00" stroke-width="2" stroke-linecap="round"/>
    <path d="M52 22l10 2-10 4z" fill="#ff9f43" stroke="#ffe0b0" stroke-width="1.4" stroke-linejoin="round"/>
    ${eye(46, 18, 2.6)}
    ${linG('__w', ['#6ee7ff', '#3a6fd8'])}<path d="M2 54c8-3 14 3 22 0s14-3 22 0 12 2 16 0v8H2z" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.4"/>` },

  parrot: { color: '#ff4d6d', svg: `
    ${linG('__t', ['#6ee7ff', '#3a6fd8'])}
    <path d="M24 44l-6 16 10-6 4 8 2-14z" fill="url(#__t)" stroke="#c8f1ff" stroke-width="1.4" stroke-linejoin="round"/>
    ${radG('__g', ['#ffb3c1', '#ff4d6d', '#a4133c'], .45, .3, .8)}
    <path d="M20 46c-4-14 0-30 14-34 10-2 18 4 18 14 0 12-12 22-32 20z" fill="url(#__g)" stroke="#ffc2d1" stroke-width="2"/>
    <path d="M24 40c4-8 12-10 16-6-4 6-10 8-16 6z" fill="#3ddc84" stroke="#d9ffc4" stroke-width="1.4"/>
    <path d="M28 30c4-2 8-2 10 2" fill="none" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <path d="M46 18c8 0 12 6 10 12-2 2-4 2-6 0 0-4-2-6-6-6z" fill="#fff3dc" stroke="#ffffff" stroke-width="1.4"/>
    <circle cx="40" cy="20" r="5" fill="#fff"/>${eye(40, 20, 2.6)}` },

  chicken: { color: '#fff3dc', svg: `
    <path d="M30 10c0-4 4-6 6-4 2-3 6-2 6 2 3 0 4 4 1 6z" fill="#ff4d6d" stroke="#ffc2d1" stroke-width="1.2" stroke-linejoin="round"/>
    ${radG('__g', ['#ffffff', '#fff3dc', '#e0c9a0'], .45, .35, .8)}
    <path d="M10 30l-4-10 8 4 0-8 6 10c4-2 10-2 12 0 0-8 4-14 12-14s12 6 12 12c0 4-2 8-6 10 2 12-6 22-20 22-12 0-20-8-20-16z" fill="url(#__g)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 38c6-2 12 2 12 8-8 2-12-2-12-8z" fill="#e0c9a0" stroke="#fff" stroke-width="1.2"/>
    <path d="M56 22l6 3-6 3z" fill="#ffb347"/>
    <path d="M54 30c2 2 2 6-1 6" fill="#ff4d6d"/>
    ${eye(48, 20, 2.4)}
    <path d="M28 56v4M36 56v4" stroke="#ff9f43" stroke-width="2.2" stroke-linecap="round"/>` },

  // ───── млекопитающие ─────
  mammal: { color: '#b9b2e0', svg: `
    ${ball('__e1', 16, 20, 10, ['#ffe6f4', '#d9c8f0', '#8a83b8'], '#f1effa')}${ball('__e2', 48, 20, 10, ['#ffe6f4', '#d9c8f0', '#8a83b8'], '#f1effa')}
    <g fill="#ffb3d1" opacity=".8"><circle cx="16" cy="20" r="5.5"/><circle cx="48" cy="20" r="5.5"/></g>
    ${head('__g', 32, 38, 18, 16, GREY, '#f1effa')}
    ${eye(25, 34, 3)}${eye(39, 34, 3)}
    <circle cx="32" cy="43" r="2.6" fill="#ff8fd1"/>
    ${whiskers(32, 44, '#fff')}${blush(21, 43, 42)}` },

  bat: { color: '#9d7bff', svg: `
    ${linG('__w', ['#9d7bff', '#3a2a7a'])}
    <path d="M32 26C24 18 12 16 2 22c4 2 6 6 4 10 4-2 8 0 8 4 4-2 8 0 10 4 2-4 6-6 8-6zM32 26c8-8 20-10 30-4-4 2-6 6-4 10-4-2-8 0-8 4-4-2-8 0-10 4-2-4-6-6-8-6z"
      fill="url(#__w)" stroke="#d9ccff" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M26 20l-1-8 5 5M38 20l1-8-5 5" fill="#5b3fd6" stroke="#d9ccff" stroke-width="1.4" stroke-linejoin="round"/>
    ${head('__h', 32, 27, 8, 9, ['#c9b6ff', '#6c4fe0', '#2a1670'], '#d9ccff')}
    ${eye(29, 26, 2)}${eye(35, 26, 2)}
    <path d="M30 31l1 2 1-2M32 31l1 2 1-2" fill="#fff"/>
    ${radG('__m', ['#ffffff', '#fff3c4', '#ffd166'])}<circle cx="52" cy="50" r="6" fill="url(#__m)" opacity=".9"/>` },

  whale: { color: '#4cc9ff', svg: `
    <path d="M22 14c-2-4 0-8 4-8M22 14c2-4 6-6 10-4M22 14v-4" fill="none" stroke="#bfefff" stroke-width="2.2" stroke-linecap="round"/>
    ${linG('__g', ['#8fd3ff', '#2f6fd8', '#1d3fa0'])}
    <path d="M4 34c0-10 10-16 24-16 14 0 22 8 26 16l6-8v18l-6-6c-4 8-14 12-26 12C14 50 4 44 4 34z" fill="url(#__g)" stroke="#d6f8ff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M6 38c8 6 26 8 42 2" fill="none" stroke="#e0fbff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
    <path d="M30 42c2 4 0 8-4 8" fill="none" stroke="#d6f8ff" stroke-width="2" stroke-linecap="round"/>
    ${eye(14, 32, 2.4)}
    ${blush(19, 19, 37)}` },

  dolphin: { color: '#6ea8ff', svg: `
    ${linG('__g', ['#b8cfff', '#5a7bd8', '#2f3f8f'], 1, 1)}
    <path d="M8 46c6-20 22-32 40-30l4-8 2 9c4 2 6 6 6 10-4 0-6-2-8-2-4 0-6 4-8 8l-6-4 2 6c-8 2-12 6-14 12l-4-6-6 2z" fill="url(#__g)" stroke="#e0e8ff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14 44c8-12 20-20 32-20" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>
    ${eye(46, 20, 2)}
    ${linG('__w', ['#6ee7ff', '#3a6fd8'])}<path d="M2 56c8-3 14 3 22 0s14-3 22 0 12 2 16 0v6H2z" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.4"/>
    <g fill="#bfefff"><circle cx="12" cy="52" r="1.6"/><circle cx="18" cy="48" r="1.2"/></g>` },

  cow: { color: '#f1effa', svg: `
    <path d="M18 18c-6-2-8-8-6-12 2 4 6 6 10 6M46 18c6-2 8-8 6-12-2 4-6 6-10 6" fill="#fff3c4" stroke="#ffd166" stroke-width="1.4"/>
    <g fill="#f1effa" stroke="#fff" stroke-width="1.6"><ellipse cx="10" cy="26" rx="7" ry="4" transform="rotate(-20 10 26)"/><ellipse cx="54" cy="26" rx="7" ry="4" transform="rotate(20 54 26)"/></g>
    ${head('__g', 32, 30, 16, 18, ['#ffffff', '#f1effa', '#b9b2e0'], '#fff')}
    <g fill="#2a1f4a" opacity=".85"><path d="M20 20c4-2 8 2 6 6s-8 2-6-6z"/><path d="M40 30c4 0 6 4 4 6s-6 0-4-6z"/></g>
    ${eye(26, 28, 2.6)}${eye(38, 28, 2.6)}
    <ellipse cx="32" cy="44" rx="12" ry="8" fill="#ffb3d1" stroke="#ffd6ef" stroke-width="1.6"/>
    <g fill="#c2449b"><ellipse cx="28" cy="44" rx="1.8" ry="2.4"/><ellipse cx="36" cy="44" rx="1.8" ry="2.4"/></g>` },

  horse: { color: '#c68b59', svg: `
    ${linG('__g', BROWN, 1, 1)}
    <path d="M18 58l2-20c0-14 8-24 18-28l2-6 4 6c8 4 12 12 10 20l4 12c1 6-5 8-9 4l-7-7-4 19z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M36 10c-6 4-12 12-14 24M40 14c-6 4-10 12-12 22" fill="none" stroke="#5a3420" stroke-width="3.5" stroke-linecap="round"/>
    ${eye(44, 22, 2.4)}
    <circle cx="53" cy="41" r="1.4" fill="#5a3420"/>
    <path d="M30 26c2 6 6 8 10 8" fill="none" stroke="#f0c9a0" stroke-width="1.4" opacity=".6"/>` },

  camel: { color: '#e0b48a', svg: `
    ${linG('__g', ['#ffe0b0', '#e0a86a', '#a8703a'], 1, 1)}
    <path d="M6 34c0-6 4-8 8-8 4-10 12-10 14-2 2-8 10-8 14 0 4 0 6-2 8-8 1-4 4-6 8-6 3 0 4 3 3 5l-4 2c0 8-4 14-10 16v20h-5V40H22v13h-5V40c-6 0-11-2-11-6z"
      fill="url(#__g)" stroke="#fff3dc" stroke-width="2" stroke-linejoin="round"/>
    ${eye(55, 12, 1.8)}
    <path d="M2 58h60" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    ${spark(14, 12, 3)}` },

  wolf: { color: '#a9a4c8', svg: `
    <path d="M14 26 12 6l14 12zM50 26l2-20-14 12z" fill="#8a83b8" stroke="#f1effa" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M15 22l-1-10 6 6zM49 22l1-10-6 6z" fill="#ffb3d1"/>
    ${radG('__g', GREY, .45, .3, .8)}
    <path d="M10 30c0-10 10-16 22-16s22 6 22 16c0 10-10 26-22 26S10 40 10 30z" fill="url(#__g)" stroke="#f1effa" stroke-width="2"/>
    <path d="M22 38c2-6 6-8 10-8s8 2 10 8c-2 8-6 14-10 14s-8-6-10-14z" fill="#ffffff"/>
    ${eye(24, 30, 2.8)}${eye(40, 30, 2.8)}
    ${nose(32, 40, 4)}
    <path d="M32 44v3M28 48c2 2 6 2 8 0" fill="none" stroke="#2a1f4a" stroke-width="1.4" stroke-linecap="round"/>` },

  dog: { color: '#e0a86a', svg: `
    ${radG('__e', ['#c68b59', '#8a5a36'])}
    <path d="M14 18c-8 2-10 14-6 24 6 0 10-8 10-14zM50 18c8 2 10 14 6 24-6 0-10-8-10-14z" fill="url(#__e)" stroke="#f0c9a0" stroke-width="1.8"/>
    ${head('__g', 32, 32, 18, 18, ['#fff3dc', '#e0a86a', '#a8703a'], '#fff3dc')}
    <ellipse cx="32" cy="42" rx="10" ry="8" fill="#fff3dc"/>
    ${eye(25, 30, 3)}${eye(39, 30, 3)}
    <ellipse cx="32" cy="38" rx="4" ry="3" fill="#2a1f4a"/>
    <path d="M32 41v3M28 45c2 2 6 2 8 0" fill="none" stroke="#2a1f4a" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M30 46c0 5 4 5 4 0z" fill="#ff8fab"/>
    ${blush(20, 44, 38)}` },

  cat: { color: '#ff9f43', svg: `
    <path d="M12 28 14 8l14 12zM52 28 50 8 36 20z" fill="#ff9f43" stroke="#ffe0b0" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M15 22l1-9 6 6zM49 22l-1-9-6 6z" fill="#ffb3d1"/>
    ${head('__g', 32, 36, 21, 18, ORANGE, '#ffe0b0')}
    <path d="M32 20v6M26 21l1 5M38 21l-1 5" stroke="#c4560b" stroke-width="2" stroke-linecap="round"/>
    ${eye(24, 34, 3.2)}${eye(40, 34, 3.2)}
    <path d="M30 41h4l-2 2.4z" fill="#ff5fa2"/>
    <path d="M32 43.5c0 2-2 3-4 2M32 43.5c0 2 2 3 4 2" fill="none" stroke="#7a3a10" stroke-width="1.3" stroke-linecap="round"/>
    ${whiskers(32, 42, '#fff')}` },

  lion: { color: '#ffb347', svg: `
    ${radG('__m', ['#ffb347', '#c4560b', '#7a3010'], .5, .5, .55)}
    <path d="${burst(32, 33, 14, 28, 20)}" fill="url(#__m)" stroke="#ffd6a0" stroke-width="1.6" stroke-linejoin="round"/>
    <g fill="#ffd166" stroke="#fff3c4" stroke-width="1.4"><circle cx="18" cy="20" r="4"/><circle cx="46" cy="20" r="4"/></g>
    ${head('__g', 32, 34, 15, 14, ['#fff3c4', '#ffd166', '#e09b00'], '#fff3c4')}
    ${eye(26, 31, 2.6)}${eye(38, 31, 2.6)}
    <ellipse cx="32" cy="40" rx="6" ry="4.5" fill="#fff3dc"/>
    ${nose(32, 37, 3, '#7a3010')}
    <path d="M32 40v2M29 43c1.5 1.5 4.5 1.5 6 0" fill="none" stroke="#7a3010" stroke-width="1.3" stroke-linecap="round"/>` },

  sheep: { color: '#f1effa', svg: `
    ${cloudShape([[18, 22, 9], [32, 16, 10], [46, 22, 9], [14, 36, 9], [50, 36, 9], [22, 48, 9], [42, 48, 9], [32, 50, 9]], '#ffffff', '#e6dcff', 2.4)}
    <g fill="#4d4775"><ellipse cx="14" cy="32" rx="6" ry="3" transform="rotate(-25 14 32)"/><ellipse cx="50" cy="32" rx="6" ry="3" transform="rotate(25 50 32)"/></g>
    ${head('__g', 32, 36, 11, 13, ['#8a83b8', '#4d4775', '#2a2650'], '#c9c3ec')}
    ${eye(28, 34, 2.4)}${eye(36, 34, 2.4)}
    <path d="M30 42c1 1.5 3 1.5 4 0" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
    ${cloudShape([[27, 23, 4], [32, 21, 4.5], [37, 23, 4]], '#ffffff', '#ffffff', 1)}` },

  pig: { color: '#ff8fd1', svg: `
    <path d="M14 22 10 8l14 8zM50 22l4-14-14 8z" fill="#ff8fd1" stroke="#ffd6ef" stroke-width="1.8" stroke-linejoin="round"/>
    ${head('__g', 32, 34, 21, 19, ['#ffe6f4', '#ffaad8', '#d65a9c'], '#ffd6ef')}
    ${eye(23, 28, 2.8)}${eye(41, 28, 2.8)}
    <ellipse cx="32" cy="40" rx="10" ry="7" fill="#ff8fd1" stroke="#ffd6ef" stroke-width="1.8"/>
    <g fill="#a4336f"><ellipse cx="28.5" cy="40" rx="2" ry="3"/><ellipse cx="35.5" cy="40" rx="2" ry="3"/></g>
    ${blush(16, 48, 38)}` },

  bear: { color: '#b07a4a', svg: `
    ${ball('__e1', 15, 18, 8, BROWN, '#f0c9a0')}${ball('__e2', 49, 18, 8, BROWN, '#f0c9a0')}
    <g fill="#e0b48a"><circle cx="15" cy="18" r="4"/><circle cx="49" cy="18" r="4"/></g>
    ${head('__g', 32, 35, 21, 20, BROWN, '#f0c9a0')}
    <ellipse cx="32" cy="43" rx="10" ry="8" fill="#f0d8b8"/>
    ${eye(24, 32, 2.8)}${eye(40, 32, 2.8)}
    <ellipse cx="32" cy="39" rx="4" ry="3" fill="#2a1f4a"/>
    <path d="M32 42v3M28 46c2 2 6 2 8 0" fill="none" stroke="#2a1f4a" stroke-width="1.4" stroke-linecap="round"/>
    ${blush(18, 46, 40)}` },

  elephant: { color: '#a9a4c8', svg: `
    ${radG('__e', ['#e6e3f5', '#a9a4c8', '#6a6599'])}
    <path d="M18 18C6 14 2 26 4 36s10 12 16 8zM46 18c12-4 16 8 14 18s-10 12-16 8z" fill="url(#__e)" stroke="#f1effa" stroke-width="1.8"/>
    <g fill="#ffb3d1" opacity=".6"><path d="M16 22c-6-1-9 6-8 12s6 7 10 5z"/><path d="M48 22c6-1 9 6 8 12s-6 7-10 5z"/></g>
    ${head('__g', 32, 30, 16, 17, GREY, '#f1effa')}
    <path d="M28 40c0 8 0 14 4 16s8 0 8-4" fill="none" stroke="#f1effa" stroke-width="9" stroke-linecap="round"/>
    <path d="M28 40c0 8 0 14 4 16s8 0 8-4" fill="none" stroke="#a9a4c8" stroke-width="6" stroke-linecap="round"/>
    <g stroke="#6a6599" stroke-width="1.2" stroke-linecap="round" opacity=".7"><path d="M27 46h3M27 50h3"/></g>
    ${eye(25, 28, 2.6)}${eye(39, 28, 2.6)}
    <path d="M22 40l-3 5M42 40l3 5" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>` },

  ape: { color: '#b07a4a', svg: `
    ${ball('__e1', 11, 32, 7, ['#f0d8b8', '#e0b48a', '#a8703a'], '#f0c9a0')}${ball('__e2', 53, 32, 7, ['#f0d8b8', '#e0b48a', '#a8703a'], '#f0c9a0')}
    ${head('__g', 32, 32, 21, 22, BROWN, '#f0c9a0')}
    <path d="M18 34c0-10 6-14 14-14s14 4 14 14c0 10-6 16-14 16s-14-6-14-16z" fill="#f0d8b8"/>
    <path d="M22 28c4-4 8-4 10 0 2-4 6-4 10 0" fill="#e0b48a"/>
    ${eye(26, 31, 2.8)}${eye(38, 31, 2.8)}
    <g fill="#5a3420"><ellipse cx="30" cy="39" rx="1.4" ry="1"/><ellipse cx="34" cy="39" rx="1.4" ry="1"/></g>
    <path d="M26 44c3 3 9 3 12 0" fill="none" stroke="#5a3420" stroke-width="1.6" stroke-linecap="round"/>` },
});
