/* Иконки интерфейса (кнопки, окна). Ключи начинаются с «ui_», чтобы не путать с элементами. */

// эпоха → элемент, чья иконка её обозначает
const ERA_ICON = { micro: 'atom', stars: 'star', planet: 'planet', weather: 'storm', life: 'plant',
  human: 'human', civ: 'civ', tech: 'computer', cosmos: 'galaxy' };

Object.assign(ICONS, {
  // «Список» — книга заклинаний алхимика с золотой оправой
  ui_list: { color: '#c77dff', svg: `
    ${linG('__c', ['#c77dff', '#5b1f9a'])}
    <rect x="12" y="6" width="40" height="52" rx="5" fill="url(#__c)" stroke="#f0d8ff" stroke-width="2.4"/>
    <rect x="12" y="6" width="9" height="52" rx="3" fill="#3d1a7a"/>
    <path d="M52 12h4v40h-4" fill="#fffaf0" stroke="#f0d8ff" stroke-width="1.6"/>
    <circle cx="36" cy="30" r="10" fill="none" stroke="#ffcf5a" stroke-width="2.2"/>
    <path d="${burst(36, 30, 4, 7, 2.4)}" fill="#ffcf5a"/>
    <path d="M26 46h20" stroke="#ffcf5a" stroke-width="2.2" stroke-linecap="round"/>
    <g fill="#ffcf5a"><circle cx="16.5" cy="14" r="1.6"/><circle cx="16.5" cy="50" r="1.6"/></g>` },

  // «Подсказка» — лампочка со знаком вопроса
  ui_hint: { color: '#ffe066', svg: `
    ${radG('__g', ['#ffffff', '#fff59d', '#ffc93c'], .4, .3, .8)}
    <path d="M32 4a18 18 0 0 0-11 32c2 2 3 4 3 7h16c0-3 1-5 3-7A18 18 0 0 0 32 4z" fill="url(#__g)" stroke="#fff" stroke-width="2.2"/>
    <path d="M26 18c0-4 3-6 6-6s6 2 6 6c0 5-6 5-6 10" fill="none" stroke="#c4560b" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="32" cy="34" r="2.2" fill="#c4560b"/>
    <rect x="24" y="44" width="16" height="10" rx="2.5" fill="#c9cde6" stroke="#fff" stroke-width="1.6"/>
    <path d="M24 49h16" stroke="#7f86a8" stroke-width="1.4"/><path d="M28 54h8l-1 4h-6z" fill="#5b5680"/>
    ${spark(54, 10, 3.5)}${spark(10, 10, 2.5, '#fff')}` },

  // «Очистка» — метла с искорками
  ui_clear: { color: '#ffb347', svg: `
    <path d="M50 4 34 34" stroke="#f0c9a0" stroke-width="7" stroke-linecap="round"/>
    <path d="M50 4 34 34" stroke="#a8703a" stroke-width="4" stroke-linecap="round"/>
    ${linG('__g', ['#fff3c4', '#ffb347', '#c4560b'])}
    <path d="M30 30l10 6c-2 10-8 18-18 22-6 2-14 0-16-2 6-4 8-10 10-18 4-6 10-8 14-8z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2" stroke-linejoin="round"/>
    <path d="M30 32l10 6" stroke="#ff5fa2" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M18 50c4-4 8-10 10-16M24 54c4-4 8-10 10-18" fill="none" stroke="#c4560b" stroke-width="1.4" opacity=".6"/>
    ${spark(10, 30, 3.5)}${spark(18, 18, 2.5, '#9ff')}${spark(56, 40, 3, '#ffd6ff')}` },

  // «Корзина» — урна с крышкой
  ui_trash: { color: '#ff5f8a', svg: `
    ${linG('__g', ['#ff8fab', '#c2185b'])}
    <path d="M26 8h12" stroke="#ffd6ef" stroke-width="3" stroke-linecap="round"/>
    <rect x="8" y="12" width="48" height="8" rx="3" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2"/>
    <path d="M13 22h38l-3 32c0 3-2 4-5 4H21c-3 0-5-1-5-4z" fill="url(#__g)" stroke="#ffd6ef" stroke-width="2" stroke-linejoin="round"/>
    <g stroke="#ffd6ef" stroke-width="2.4" stroke-linecap="round" opacity=".85"><path d="M24 28v22M32 28v22M40 28v22"/></g>` },

  ui_warn: { color: '#ffb347', svg: `
    ${linG('__g', ['#ffe08a', '#ff9f43'])}
    <path d="M32 6 60 54H4z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M32 22v16" stroke="#7a3010" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="46" r="3" fill="#7a3010"/>` },

  ui_trophy: { color: '#ffcf5a', svg: `
    ${linG('__g', ['#fff1b8', '#ffcf5a', '#b8860b'], 1, 1)}
    <path d="M18 12H8c0 10 4 16 12 16M46 12h10c0 10-4 16-12 16" fill="none" stroke="#ffcf5a" stroke-width="3.2"/>
    <path d="M18 6h28v14c0 10-6 16-14 16S18 30 18 20z" fill="url(#__g)" stroke="#fff1b8" stroke-width="2"/>
    <path d="M28 36h8v8h-8z" fill="#b8860b"/><rect x="18" y="44" width="28" height="10" rx="2" fill="url(#__g)" stroke="#fff1b8" stroke-width="2"/>
    <path d="${burst(32, 18, 5, 6, 2.6)}" fill="#fff6cc"/>${spark(56, 40, 3)}${spark(8, 40, 2.5, '#9ff')}` },

  ui_lock: { color: '#c9b6ff', svg: `
    <path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke="#c9cde6" stroke-width="5"/>
    ${linG('__g', ['#c9b6ff', '#5b3fd6'])}
    <rect x="12" y="28" width="40" height="30" rx="6" fill="url(#__g)" stroke="#e6dcff" stroke-width="2"/>
    <circle cx="32" cy="40" r="4" fill="#2a1670"/><path d="M32 42v8" stroke="#2a1670" stroke-width="3.4" stroke-linecap="round"/>` },

  ui_search: { color: '#6ee7ff', svg: `
    <path d="M40 40l14 14" stroke="#c9b6ff" stroke-width="7" stroke-linecap="round"/>
    <circle cx="26" cy="26" r="16" fill="#bfefff" fill-opacity=".2" stroke="#6ee7ff" stroke-width="4"/>
    <path d="M17 21a10 10 0 0 1 6-6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>` },

  ui_close: { color: '#e6dcff', svg: `
    <path d="M18 18l28 28M46 18 18 46" stroke="#e6dcff" stroke-width="6" stroke-linecap="round"/>` },

  // «Статистика» — светящиеся столбики с линией роста
  ui_stats: { color: '#8b7bff', svg: `
    ${linG('__a', ['#bfefff', '#3aa9d6'])}${linG('__b', ['#e6dcff', '#6a4fe0'])}${linG('__c', ['#ffd6ff', '#d1479b'])}
    <rect x="9" y="36" width="12" height="20" rx="3" fill="url(#__a)" stroke="#eaffff" stroke-width="2"/>
    <rect x="26" y="26" width="12" height="30" rx="3" fill="url(#__b)" stroke="#f3eeff" stroke-width="2"/>
    <rect x="43" y="14" width="12" height="42" rx="3" fill="url(#__c)" stroke="#fff0fb" stroke-width="2"/>
    <path d="M8 30 26 18l10 4L54 6" fill="none" stroke="#ffcf5a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 58h52" stroke="#8a93c9" stroke-width="2.4" stroke-linecap="round"/>
    ${spark(54, 6, 3.5, '#fff')}` },

  // звук включён — динамик с волнами
  ui_sound: { color: '#6ee7ff', svg: `
    ${linG('__g', ['#e6dcff', '#8b7bff'])}
    <path d="M8 24h10l14-12v40L18 40H8z" fill="url(#__g)" stroke="#f3eeff" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M40 24a10 10 0 0 1 0 16" fill="none" stroke="#6ee7ff" stroke-width="4" stroke-linecap="round"/>
    <path d="M46 16a20 20 0 0 1 0 32" fill="none" stroke="#6ee7ff" stroke-width="4" stroke-linecap="round" opacity=".7"/>` },

  // звук выключен — динамик с крестиком
  ui_mute: { color: '#8a93c9', svg: `
    <path d="M8 24h10l14-12v40L18 40H8z" fill="#5b5f80" stroke="#c9cde6" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M42 24l14 16M56 24 42 40" stroke="#ff5f8a" stroke-width="4.4" stroke-linecap="round"/>` },
});

// иконка эпохи (мини)
const eraIcon = (era, cls = 'mini') => iconHtml(ERA_ICON[era], (ERAS.find(e => e[0] === era) || [])[2], cls);
