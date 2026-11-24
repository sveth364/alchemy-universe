/* Иконки эпохи «Планета». Детали (ball, halo, rays…) — в icons.js */

const ROCK = ['#e6e3f5', '#9a93c0', '#4d4775'];
const SAND = ['#fff3c4', '#ffd166', '#d99a2b'];
const EARTHC = ['#e0b48a', '#9c6644', '#5a3420'];

Object.assign(ICONS, {
  stone: { color: '#b9b2e0', svg: `
    ${radG('__g', ROCK)}
    <path d="M11 42l5-16 14-10 16 4 8 14-4 12-16 6-17-3z" fill="url(#__g)" stroke="#eeeaff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M30 16l2 14-16-4M32 30l14 4M32 30l-2 22" fill="none" stroke="#eeeaff" stroke-width="1.2" opacity=".5"/>
    ${shine(22, 27, 4, 2, .55)}
    ${spark(54, 12, 3.5)}` },

  moon: { color: '#d9dcef', svg: `
    ${halo('__h', 32, 32, 29, '#d9dcef', .4)}
    ${ball('__m', 32, 32, 18, ['#ffffff', '#d9dcef', '#7f86a8'], '#fff')}
    <g fill="#7f86a8" opacity=".45"><circle cx="38" cy="38" r="4.5"/><circle cx="26" cy="40" r="2.6"/><circle cx="40" cy="25" r="2.4"/><circle cx="29" cy="30" r="1.6"/></g>
    ${spark(54, 10, 3.5)}${spark(9, 52, 2.5, '#9ff')}` },

  mountain: { color: '#9d7bff', svg: `
    ${linG('__b', ['#c9b6ff', '#5b3fd6'])}${linG('__f', ['#9fd8ff', '#3a6fd8'])}
    <path d="M30 54 44 18l16 36z" fill="url(#__b)" stroke="#e6dcff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M4 54 22 14l22 40z" fill="url(#__f)" stroke="#d6f8ff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 14l-6 13 4-2 3 4 3-4 4 2z" fill="#fff"/><path d="M44 18l-4 10 3-1 2 3 2-3 3 1z" fill="#fff"/>
    ${spark(54, 8, 3.5)}` },

  lava: { color: '#ff7a1a', svg: `
    ${radG('__g', ['#fff59d', '#ff9f43', '#e63946', '#7a0a1a'], .45, .4, .7)}
    <path d="M8 44c0-8 8-10 12-16s6-14 14-12 6 10 12 12 12 6 10 14-10 10-24 10S8 52 8 44z" fill="url(#__g)" stroke="#ffd6a0" stroke-width="2"/>
    <path d="M20 42c4-2 6 2 10 0s6-6 10-4M28 50c4-1 8 1 12-2" fill="none" stroke="#fff59d" stroke-width="2.2" stroke-linecap="round"/>
    <g fill="#fff59d"><circle cx="36" cy="22" r="2"/><circle cx="46" cy="32" r="1.6"/></g>
    ${spark(54, 10, 3.5, '#ffe08a')}` },

  volcano: { color: '#ff7a1a', svg: `
    ${linG('__c', ['#9a7bb8', '#4a2f5c'])}
    <path d="M4 58 22 26h20l18 32z" fill="url(#__c)" stroke="#e6dcff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 26h20l-3 6c-3-2-5 4-7 0s-5 2-7-1z" fill="#ff7a1a" stroke="#ffd6a0" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M28 32c-1 6-4 8-3 14M36 31c1 5 4 7 2 12" fill="none" stroke="#ff9f43" stroke-width="2.6" stroke-linecap="round"/>
    <g fill="#ffb347"><circle cx="24" cy="14" r="2.4"/><circle cx="32" cy="8" r="3"/><circle cx="41" cy="13" r="2.2"/><circle cx="36" cy="18" r="1.6"/></g>
    <g fill="#ffe066"><circle cx="28" cy="19" r="1.4"/><circle cx="46" cy="6" r="1.4"/></g>` },

  earthquake: { color: '#ff9f43', svg: `
    ${linG('__g', EARTHC)}
    <path d="M6 30h22l-4 6 5 6-3 8H6z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round" transform="rotate(-6 16 40)"/>
    <path d="M58 32H34l-4 6 5 6-3 8h26z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round" transform="rotate(6 46 42)"/>
    <path d="M6 30h22M34 32h24" stroke="#3ddc84" stroke-width="3" stroke-linecap="round"/>
    <g fill="none" stroke="#ffd166" stroke-width="2.2" stroke-linecap="round"><path d="M10 20l4-4M18 18l2-5M46 18l-2-5M54 20l-4-4"/></g>
    ${spark(32, 14, 3)}` },

  sand: { color: '#ffd166', svg: `
    ${linG('__g', SAND)}
    <path d="M6 52c4-14 14-24 26-24s22 10 26 24z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <g fill="#b8860b" opacity=".6">${[[20, 44], [28, 38], [36, 46], [42, 40], [32, 50], [48, 48], [16, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2"/>`).join('')}</g>
    <g fill="#ffe066"><circle cx="30" cy="16" r="1.5"/><circle cx="36" cy="10" r="1.2"/><circle cx="33" cy="22" r="1"/></g>
    ${shine(24, 36, 4, 2, .5)}${spark(52, 14, 3.5)}` },

  desert: { color: '#ffb347', svg: `
    ${ball('__s', 46, 18, 8, ['#fffbe0', '#ffd166', '#ff9f1c'], '#fff3c4')}
    ${linG('__a', ['#ffd166', '#e09b3a'])}${linG('__b', ['#ffb347', '#c46a2a'])}
    <path d="M2 46c10-10 22-12 34-6s20 4 26 0v18H2z" fill="url(#__a)" stroke="#fff3c4" stroke-width="1.8"/>
    <path d="M2 54c12-6 22-6 32-2s20 2 28-2v10H2z" fill="url(#__b)" stroke="#ffe0b0" stroke-width="1.6"/>
    ${spark(14, 16, 3)}` },

  island: { color: '#4cc9ff', svg: `
    ${linG('__w', ['#6ee7ff', '#3a6fd8'])}
    <ellipse cx="32" cy="50" rx="28" ry="8" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.8"/>
    <path d="M14 48c4-8 12-11 18-11s14 3 18 11z" fill="#ffd166" stroke="#fff3c4" stroke-width="1.6"/>
    <path d="M33 41c0-10 2-18 6-24" fill="none" stroke="#c68b59" stroke-width="3" stroke-linecap="round"/>
    <g fill="#3ddc84" stroke="#d9ffc4" stroke-width="1.2" stroke-linejoin="round">
      <path d="M39 17c-6-4-14-2-16 4 5-3 10-3 16-4z"/><path d="M39 17c4-6 12-6 15-1-6-1-10-1-15 1z"/><path d="M39 17c1 6-2 11-6 13 3-4 4-8 6-13z"/><path d="M39 17c6 1 10 6 10 11-3-4-6-7-10-11z"/>
    </g>
    ${spark(12, 14, 3)}` },

  soil: { color: '#c68b59', svg: `
    ${linG('__g', EARTHC)}
    <path d="M6 30c8-6 18-8 26-8s18 2 26 8v22H6z" fill="url(#__g)" stroke="#f0c9a0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M6 40c10 3 18-2 26 0s16 3 26 0" fill="none" stroke="#5a3420" stroke-width="2" opacity=".6"/>
    <g fill="#e6dcff" opacity=".6"><circle cx="16" cy="46" r="2"/><circle cx="44" cy="47" r="1.6"/><circle cx="30" cy="34" r="1.4"/></g>
    <path d="M32 23v-9" stroke="#3ddc84" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M32 16c-6-1-8-6-7-8 4 0 7 3 7 8zM32 14c4-3 9-2 10 0-3 3-7 3-10 0z" fill="#3ddc84" stroke="#d9ffc4" stroke-width="1"/>` },

  mud: { color: '#a0714a', svg: `
    ${radG('__g', ['#c99a6b', '#8a5a36', '#4a2c18'])}
    <path d="M8 44c0-6 8-8 14-7 4-6 14-6 18-1 8-2 16 2 16 8s-8 10-24 10S8 50 8 44z" fill="url(#__g)" stroke="#e0b48a" stroke-width="2"/>
    <g fill="none" stroke="#e0b48a" stroke-width="1.6" opacity=".7"><circle cx="24" cy="44" r="3"/><circle cx="40" cy="46" r="2.2"/></g>
    <g fill="#8a5a36"><circle cx="16" cy="28" r="2.6"/><circle cx="48" cy="26" r="2.2"/><circle cx="30" cy="22" r="1.8"/></g>
    ${shine(20, 40, 4, 1.8, .45)}` },

  salt: { color: '#ffe0ef', svg: `
    ${linG('__t', ['#ffffff', '#ffe0ef'])}${linG('__s', ['#f5dcff', '#b9a8e8'])}
    ${[[20, 34, 9], [40, 38, 8], [30, 22, 7]].map(([x, y, s]) => `
      <path d="M${x} ${y - s}l${s} ${s / 2}-${s} ${s / 2}-${s}-${s / 2}z" fill="url(#__t)" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M${x - s} ${y - s / 2}l${s} ${s / 2}v${s * 1.1}l-${s}-${s / 2}z" fill="#e6d4ff" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>
      <path d="M${x + s} ${y - s / 2}l-${s} ${s / 2}v${s * 1.1}l${s}-${s / 2}z" fill="url(#__s)" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>`).join('')}
    ${spark(53, 14, 3.5)}${spark(10, 52, 2.5, '#ffd6ff')}` },

  // стекло — два прозрачных листа в перспективе с бликами (не похоже на «файл»)
  glass: { color: '#bfefff', svg: `
    ${linG('__a', ['#e8fbff', '#6ee7ff', '#7b5cff'], 1, 1)}${linG('__b', ['#ffffff', '#bfefff', '#4cc9ff'], 1, 1)}
    <path d="M22 8L50 16L44 50L16 42Z" fill="url(#__a)" fill-opacity=".35" stroke="#bfefff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12 18L40 24L36 58L8 52Z" fill="url(#__b)" fill-opacity=".42" stroke="#e8fbff" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M12 18L40 24L39.4 29L11.4 23Z" fill="#fff" opacity=".35"/>
    <g stroke="#fff" stroke-linecap="round"><path d="M17 34L27 27" stroke-width="2.6" opacity=".85"/><path d="M15 43L31 32" stroke-width="1.6" opacity=".7"/><path d="M27 50L35 44" stroke-width="2" opacity=".6"/></g>
    ${spark(54, 50, 3.5)}${spark(52, 8, 2.8, '#9ff')}${spark(8, 10, 2.2)}` },

  // пепел — серая горка с тлеющими угольками и струйкой дыма
  ash: { color: '#c9c3e6', svg: `
    ${linG('__s', ['#b9b4d6', '#5d5878'])}${radG('__e', ['#fff59d', '#ff9f43', '#d9480f'], .5, .5, .5)}
    <path d="M30 34c-5-5 3-9-1-15s2-10 0-14" fill="none" stroke="#d9d4f5" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
    <path d="M37 32c-3-4 2-7-1-11" fill="none" stroke="#d9d4f5" stroke-width="1.8" stroke-linecap="round" opacity=".4"/>
    <path d="M5 55C8 49 12 46 17 45C19 40 24 37 29 38C33 34 40 35 43 40C49 40 54 46 59 55Z" fill="url(#__s)" stroke="#e6e1ff" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M20 43c3-3 7-4 11-3" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".45"/>
    <g fill="url(#__e)"><circle cx="24" cy="48" r="3"/><circle cx="38" cy="45" r="2.4"/><circle cx="46" cy="50" r="2"/><circle cx="31" cy="52" r="1.6"/></g>
    <g fill="#9a95b8"><circle cx="12" cy="58" r="1.2"/><circle cx="52" cy="58" r="1"/><circle cx="20" cy="59" r="1"/></g>
    ${spark(53, 14, 3.5)}${spark(14, 22, 2.4, '#ffe08a')}` },

  diamond: { color: '#6ee7ff', svg: `
    ${linG('__t', ['#ffffff', '#bfefff'])}${linG('__b', ['#6ee7ff', '#7b5cff'])}
    <path d="M16 14h32l10 12-26 30L6 26z" fill="url(#__b)" stroke="#e0fbff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M6 26h52M16 14l8 12 8-12 8 12 8-12M24 26l8 30 8-30" fill="none" stroke="#e0fbff" stroke-width="1.4" stroke-linejoin="round" opacity=".8"/>
    <path d="M16 14h32l-8 12H24z" fill="url(#__t)" opacity=".7"/>
    ${spark(50, 8, 4)}${spark(12, 46, 3, '#ffd6ff')}` },

  earth: { color: '#4cc9ff', svg: `
    ${halo('__h', 32, 32, 30, '#6ee7ff', .45)}
    ${radG('__o', ['#b8f3ff', '#3fb6ff', '#1d3fa0'])}
    <clipPath id="__c"><circle cx="32" cy="32" r="19"/></clipPath>
    <circle cx="32" cy="32" r="19" fill="url(#__o)"/>
    <g clip-path="url(#__c)" fill="#3ddc84" stroke="#d9ffc4" stroke-width="1">
      <path d="M14 22c6-4 12-2 14 2s-2 8-6 8-4 6-8 6-6-12 0-16z"/><path d="M34 16c6 0 10 4 12 2s6 6 4 10-8 2-10 6-6 8-8 4 2-8-2-12 0-10 4-10z"/><path d="M28 46c4-2 10 0 10 4s-6 4-10 2z"/>
    </g>
    <circle cx="32" cy="32" r="19" fill="none" stroke="#d6f8ff" stroke-width="2"/>
    ${shine(25, 23, 5, 2.6, .5)}
    ${spark(55, 9, 3.5)}` },

  fossil: { color: '#e0b48a', svg: `
    ${radG('__g', ['#f3e0c8', '#c9a27a', '#7a5a3a'])}
    <circle cx="32" cy="33" r="21" fill="url(#__g)" stroke="#fff1dc" stroke-width="2"/>
    <path d="M32 33c0-2 3-3 4-1s-1 6-5 6-7-4-6-8 6-8 11-7 10 6 9 12-7 12-14 12-14-7-14-14 6-16 15-17" fill="none" stroke="#5a3a1e" stroke-width="2.4" stroke-linecap="round"/>
    <g stroke="#5a3a1e" stroke-width="1.2" opacity=".6"><path d="M43 28l4-1M44 36l4 2M38 45l2 4M26 45l-2 4"/></g>
    ${shine(22, 22, 4, 2, .45)}${spark(55, 10, 3)}` },

  oil: { color: '#9d7bff', svg: `
    ${radG('__g', ['#5b4f99', '#2a1f4a', '#0d0a1c'])}
    ${linG('__s', ['#ff8fd1', '#ffe066', '#6ee7ff', '#9d7bff'], 1, 1)}
    <path d="M32 6C24 19 14 29 14 41a18 18 0 0 0 36 0C50 29 40 19 32 6z" fill="url(#__g)" stroke="url(#__s)" stroke-width="2.6"/>
    <path d="M22 40c0 5 3 9 8 10" fill="none" stroke="url(#__s)" stroke-width="3" stroke-linecap="round" opacity=".9"/>
    <ellipse cx="25" cy="31" rx="2.6" ry="1.6" fill="#fff" opacity=".7"/>
    ${spark(52, 14, 3.5)}` },

  glacier: { color: '#bfefff', svg: `
    ${linG('__g', ['#ffffff', '#9fdcff', '#4b8fe0'])}
    <path d="M4 50l12-26 8 6 10-18 12 16 6-4 8 26z" fill="url(#__g)" stroke="#e0fbff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 30l2 10M34 12l-2 16 4 8M46 28l-2 12" fill="none" stroke="#ffffff" stroke-width="1.4" opacity=".7"/>
    ${linG('__w', ['#6ee7ff', '#3a6fd8'])}
    <path d="M2 52c6-3 12 3 18 0s12-3 18 0 12 3 18 0 6 0 6 0v8H2z" fill="url(#__w)" stroke="#d6f8ff" stroke-width="1.5"/>
    ${spark(54, 10, 3.5)}` },

  rings: { color: '#ff8fd1', svg: `
    ${arcHalf(32, 32, 28, 8, -18, '#6ee7ff', 3, false, .55)}${arcHalf(32, 32, 23, 6.5, -18, '#ffd166', 2.5, false, .55)}${arcHalf(32, 32, 18, 5, -18, '#ff8fd1', 2.2, false, .55)}
    ${ball('__p', 32, 32, 9, ['#e6dcff', '#9d7bff', '#4b2bb0'], '#d9ccff', 1.6)}
    ${arcHalf(32, 32, 28, 8, -18, '#6ee7ff', 3.2, true)}${arcHalf(32, 32, 23, 6.5, -18, '#ffd166', 2.6, true)}${arcHalf(32, 32, 18, 5, -18, '#ff8fd1', 2.3, true)}
    ${spark(54, 10, 3.5)}${spark(10, 52, 2.5, '#9ff')}` },

  eclipse: { color: '#ffd166', svg: `
    ${halo('__h', 32, 32, 30, '#ffd166', .6)}
    ${rays(32, 32, 16, 18, 26, 1.6, '#fff3c4', 0, .8)}
    <circle cx="32" cy="32" r="18" fill="none" stroke="#fff3c4" stroke-width="2.5"/>
    ${radG('__m', ['#2a1f4a', '#120c26'], .45, .45, .6)}
    <circle cx="32" cy="32" r="17" fill="url(#__m)"/>
    ${spark(46, 20, 5)}` },

  day: { color: '#ffb347', svg: `
    <clipPath id="__c"><rect x="0" y="0" width="64" height="44"/></clipPath>
    <g clip-path="url(#__c)">
      ${rays(32, 44, 9, 16, 28, 2.2, '#ffd166', -80, .9)}
      ${ball('__s', 32, 44, 13, ['#fffbe0', '#ffd166', '#ff7a1a'], '#fff3c4')}
    </g>
    ${linG('__g', ['#3ddc84', '#128a52'])}
    <path d="M2 46c10-6 18-4 26-1s16 2 34-3v16H2z" fill="url(#__g)" stroke="#d9ffc4" stroke-width="1.8"/>
    <path d="M2 44h60" stroke="#ff8fd1" stroke-width="1" opacity=".4"/>` },

  night: { color: '#c9b6ff', svg: `
    ${radG('__m', ['#ffffff', '#fff3c4', '#ffd166'])}
    <path d="M38 8a18 18 0 1 0 14 30A15 15 0 0 1 38 8z" fill="url(#__m)" stroke="#fff3c4" stroke-width="1.8" transform="translate(-8 0)"/>
    ${linG('__g', ['#4b2bb0', '#1a1240'])}
    <path d="M2 52c10-6 20-6 30-2s20 2 30-2v14H2z" fill="url(#__g)" stroke="#9d7bff" stroke-width="1.6"/>
    ${spark(48, 12, 3.5)}${spark(54, 30, 2.5, '#9ff')}${spark(40, 24, 2)}${spark(10, 40, 2.5, '#ffd6ff')}` },

  // ── расширение «Космоса» ──
  // уголь — чёрные гранёные куски с фиолетовыми бликами
  coal: { color: '#9d7bff', svg: `
    ${linG('__c', ['#6d6890', '#2a2650', '#12101f'], 1, 1)}
    <path d="M8 48L14 34L26 30L32 40L28 54L14 56Z" fill="url(#__c)" stroke="#c9c3ec" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M28 34L38 18L52 20L58 36L50 50L34 50Z" fill="url(#__c)" stroke="#d9ccff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M38 18L42 32L58 36M42 32L34 50" fill="none" stroke="#9d7bff" stroke-width="1.2" opacity=".8"/>
    <path d="M26 30L22 42L28 54M22 42L8 48" fill="none" stroke="#9d7bff" stroke-width="1.1" opacity=".7"/>
    <path d="M40 22l8 1-2 6z" fill="#fff" opacity=".35"/>
    ${spark(50, 8, 3.5)}${spark(10, 20, 2.5, '#9ff')}` },

  // ржавчина — гайка с рыжими пятнами ржавчины
  rust: { color: '#ff9a6b', svg: `
    ${linG('__m', ['#ffffff', '#c9cde6', '#6a6f99'], 1, 1)}
    <path d="M32 6L54 19V45L32 58L10 45V19Z" fill="url(#__m)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="32" cy="32" r="10" fill="#2a2650" stroke="#c9cde6" stroke-width="2"/>
    <g fill="#c4572e" stroke="#ff9a6b" stroke-width="1"><path d="M12 22c6-1 9 3 7 8s-6 4-7 1z"/><path d="M40 46c5-3 11-1 12 1l-8 5c-3 0-5-3-4-6z"/>
      <path d="M38 10c4 0 7 3 5 6s-6 1-5-6z"/></g>
    <g fill="#e07a45"><circle cx="20" cy="44" r="2"/><circle cx="50" cy="28" r="1.6"/><circle cx="26" cy="14" r="1.3"/></g>
    ${shine(24, 18, 3.5, 2, .5)}${spark(56, 8, 3.2)}${spark(8, 56, 2.4, '#ffe08a')}` },

  // ── расширение «Космоса», этап 2 ──
  // кристалл — друза из шестигранных призм
  crystal: { color: '#c9b6ff', svg: `
    ${linG('__a', ['#ffffff', '#c9b6ff', '#7b5cff'], 1, 1)}${linG('__b', ['#e0fbff', '#6ee7ff', '#3a4bff'], 1, 1)}
    <path d="M14 56L10 30L17 20L24 30L22 56Z" fill="url(#__b)" stroke="#e0fbff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M42 56L42 26L50 16L57 26L52 56Z" fill="url(#__b)" stroke="#e0fbff" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M22 58L23 20L32 6L41 20L42 58Z" fill="url(#__a)" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
    <path d="M32 6V58M23 20L32 28L41 20" fill="none" stroke="#fff" stroke-width="1.2" opacity=".6"/>
    <path d="M26 24L30 30V48L26 44Z" fill="#fff" opacity=".35"/>
    ${spark(52, 8, 3.5)}${spark(8, 14, 2.4, '#ffd6ff')}` },

  // кратер — чаша в лунном грунте и падающий камень
  crater: { color: '#c9c3ec', svg: `
    ${linG('__g', ROCK)}${linG('__f', ['rgba(255,159,67,0)', '#ffb347'], 1, 1)}
    <path d="M4 10L30 30L33 27Z" fill="url(#__f)"/>
    ${ball('__m', 33, 27, 4, ['#fff3c4', '#ffb347', '#b8562a'], '#fff3c4', 1)}
    <path d="M2 44C14 40 22 42 32 41S52 40 62 43V62H2Z" fill="url(#__g)" stroke="#e6e3f5" stroke-width="1.8"/>
    <ellipse cx="34" cy="49" rx="17" ry="6" fill="#3a3560" stroke="#fff" stroke-width="1.8"/>
    <path d="M18 49C22 54 46 54 50 49C46 52 22 52 18 49Z" fill="#9a93c0"/>
    <g fill="#6d6890"><ellipse cx="10" cy="54" rx="4" ry="1.6"/><ellipse cx="56" cy="56" rx="3" ry="1.2"/></g>
    ${spark(54, 12, 3.4)}${spark(44, 30, 2.2, '#ffe08a')}` },

  // газовый гигант — полосатая планета с большим вихрем
  gasgiant: { color: '#ffb347', svg: `
    ${halo('__h', 32, 32, 31, '#ffb347', .35)}
    <defs><clipPath id="__c"><circle cx="32" cy="32" r="24"/></clipPath></defs>
    <g clip-path="url(#__c)">
      <rect x="0" y="0" width="64" height="64" fill="#ffd9a8"/>
      <path d="M0 14C20 18 40 10 64 15V22C40 18 20 26 0 21Z" fill="#c97a4a"/>
      <path d="M0 28C22 32 42 25 64 30V36C42 31 22 38 0 34Z" fill="#e8a36b"/>
      <path d="M0 42C20 46 44 40 64 44V50C44 46 20 52 0 48Z" fill="#b85f3a"/>
      <ellipse cx="42" cy="39" rx="7" ry="4" fill="#d9480f" stroke="#ffe0b0" stroke-width="1.2"/>
    </g>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#fff3dc" stroke-width="2.2"/>
    ${shine(22, 19, 6, 3, .45)}${spark(56, 8, 3.5)}${spark(8, 56, 2.5, '#ffd6ff')}` },

  // ── расширение «Космоса», этап 3 ──
  // ледяной гигант — голубая планета с почти вертикальным тонким кольцом
  icegiant: { color: '#6ee7ff', svg: `
    ${arcHalf(32, 32, 9, 28, -15, '#bff6ff', 1.8, false, .5)}
    ${ball('__p', 32, 32, 19, ['#e0fbff', '#6ee7ff', '#2a5bd8'], '#e0fbff', 2)}
    <g fill="none" stroke="#bff6ff" stroke-width="2" opacity=".4"><path d="M15 26c10 3 24 3 34 0M14 36c10 3 26 3 36 0"/></g>
    <ellipse cx="40" cy="40" rx="4" ry="2" fill="#2a5bd8" opacity=".7"/>
    <path d="M32.3 5A9 28 0 0 1 32.3 59" fill="none" stroke="#e0fbff" stroke-width="2.2" stroke-linecap="round" transform="rotate(-15 32 32)"/>
    ${spark(56, 10, 3.4)}${spark(8, 54, 2.4, '#ffd6ff')}` },

  // ледяная луна — белая луна с трещинами и фонтаном воды из-подо льда
  icemoon: { color: '#bff6ff', svg: `
    <path d="M40 18C38 10 44 4 42 0M44 18C46 12 52 10 52 4" fill="none" stroke="#bff6ff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <g fill="#e0fbff"><circle cx="42" cy="6" r="1.4"/><circle cx="50" cy="8" r="1.2"/><circle cx="46" cy="2" r="1"/></g>
    ${ball('__m', 32, 38, 21, ['#ffffff', '#dff4ff', '#8fb3d9'], '#fff', 2.2)}
    <g fill="none" stroke="#c4572e" stroke-width="1.6" stroke-linecap="round" opacity=".7">
      <path d="M14 34c8 2 12 8 22 6s12 4 16 8"/><path d="M20 50c6-4 12-2 16-8"/><path d="M26 22c4 4 4 10 12 12"/></g>
    ${spark(10, 10, 3.2)}${spark(58, 30, 2.4, '#9ff')}` },
});
