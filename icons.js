/* =====================================================================
   ИКОНКИ ЭЛЕМЕНТОВ (SVG, стиль «неоновый космос» по аватарке бота)
   Ключ — id элемента. Если иконки нет, показывается эмодзи из elements.js.
   В шаблоне «__» заменяется на уникальный префикс, чтобы id градиентов
   не пересекались, когда одна иконка встречается на экране много раз.
   color — цвет свечения вокруг иконки.
   ===================================================================== */

// маленькая четырёхлучевая искорка
const spark = (x, y, r, c = '#fff') =>
  `<path d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z" fill="${c}"/>`;

const ICONS = {
  energy: { color: '#ffb347', svg: `
    <defs><linearGradient id="__g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff59d"/><stop offset=".5" stop-color="#ffc93c"/><stop offset="1" stop-color="#ff7a1a"/>
    </linearGradient></defs>
    <path d="M37 4 15 36h15l-4 24 24-34H34z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M34 9 21 32h6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>
    ${spark(52, 12, 5)}${spark(11, 50, 4, '#ffe08a')}` },

  space: { color: '#8b7bff', svg: `
    <defs><radialGradient id="__g" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#1a1240"/><stop offset=".65" stop-color="#3b2a8f"/><stop offset="1" stop-color="#7b5cff"/>
    </radialGradient></defs>
    <circle cx="32" cy="32" r="25" fill="url(#__g)" stroke="#b9a8ff" stroke-width="2.5"/>
    <path d="M18 34c4 8 18 11 25 3s1-19-8-17-11 10-5 13 9-3 6-6" fill="none" stroke="#6ee7ff" stroke-width="2.5" stroke-linecap="round" opacity=".9"/>
    ${spark(24, 22, 3)}${spark(43, 44, 2.5, '#ffd6ff')}${spark(41, 20, 2, '#9ff')}${spark(53, 9, 4)}` },

  time: { color: '#ffd166', svg: `
    <defs><linearGradient id="__g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c9b6ff"/><stop offset="1" stop-color="#7a5cff"/>
    </linearGradient><linearGradient id="__s" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#ff9f43"/>
    </linearGradient></defs>
    <path d="M20 11h24c0 12-9 15-9 21s9 9 9 21H20c0-12 9-15 9-21s-9-9-9-21z" fill="url(#__g)" fill-opacity=".55" stroke="#e6dcff" stroke-width="2.2"/>
    <path d="M24 17h16c-2 6-8 8-8 11-1-3-6-5-8-11z" fill="url(#__s)"/>
    <path d="M23 50c2-6 7-8 9-8s7 2 9 8z" fill="url(#__s)"/>
    <path d="M32 31v10" stroke="#ffd166" stroke-width="1.6" stroke-dasharray="1.5 2.5"/>
    <rect x="15" y="6" width="34" height="6" rx="3" fill="#ffcf5a" stroke="#fff1b8" stroke-width="1.5"/>
    <rect x="15" y="52" width="34" height="6" rx="3" fill="#ffcf5a" stroke="#fff1b8" stroke-width="1.5"/>
    <path d="M25 16c0 4 2 6 3 7" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7" fill="none"/>
    ${spark(54, 30, 4)}` },

  quark: { color: '#ff5fa2', svg: `
    <defs><radialGradient id="__g" cx=".35" cy=".3" r=".75">
      <stop offset="0" stop-color="#ffd1e8"/><stop offset=".45" stop-color="#ff5fa2"/><stop offset="1" stop-color="#b3135f"/>
    </radialGradient></defs>
    <ellipse cx="32" cy="33" rx="27" ry="10" fill="none" stroke="#6ee7ff" stroke-width="2" opacity=".75" transform="rotate(-20 32 33)"/>
    <circle cx="32" cy="32" r="15" fill="url(#__g)" stroke="#ffc2df" stroke-width="2.2"/>
    <ellipse cx="26" cy="26" rx="5" ry="3" fill="#fff" opacity=".7" transform="rotate(-30 26 26)"/>
    <circle cx="55" cy="24" r="3.2" fill="#6ee7ff"/><circle cx="9" cy="42" r="2.5" fill="#ffd166"/>
    ${spark(50, 50, 4)}` },

  water: { color: '#4cc9ff', svg: `
    <defs><linearGradient id="__g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b8f3ff"/><stop offset=".55" stop-color="#3fb6ff"/><stop offset="1" stop-color="#4b4bff"/>
    </linearGradient></defs>
    <path d="M32 5C24 18 14 28 14 40a18 18 0 0 0 36 0C50 28 40 18 32 5z" fill="url(#__g)" stroke="#d6f8ff" stroke-width="2.5"/>
    <path d="M23 40c0 5 3 9 8 10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
    <circle cx="25" cy="31" r="2.3" fill="#fff" opacity=".8"/>
    ${spark(51, 14, 4)}${spark(38, 40, 2.5, '#e0fbff')}` },

  fire: { color: '#ff7a1a', svg: `
    <defs><linearGradient id="__g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffb347"/><stop offset=".6" stop-color="#ff5e3a"/><stop offset="1" stop-color="#ff2d75"/>
    </linearGradient><linearGradient id="__i" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff59d"/><stop offset="1" stop-color="#ffb347"/>
    </linearGradient></defs>
    <path d="M32 4c3 10 15 15 15 31a15 15 0 0 1-30 0c0-8 4-12 7-16 0 6 3 8 5 8-2-9 0-16 3-23z" fill="url(#__g)" stroke="#ffd6a0" stroke-width="2.3" stroke-linejoin="round"/>
    <path d="M32 30c2 6 8 8 8 15a8 8 0 0 1-16 0c0-4 2-6 4-8 0 3 2 4 3 4-1-4 0-8 1-11z" fill="url(#__i)"/>
    ${spark(51, 15, 4, '#ffe08a')}${spark(13, 20, 3)}` },

  planet: { color: '#ff9f43', svg: `
    <defs><linearGradient id="__g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffd166"/><stop offset=".5" stop-color="#ff8a3d"/><stop offset="1" stop-color="#ff3d7f"/>
    </linearGradient><clipPath id="__c"><circle cx="32" cy="32" r="17"/></clipPath></defs>
    <circle cx="32" cy="32" r="17" fill="url(#__g)"/>
    <g clip-path="url(#__c)" fill="#fff" opacity=".28"><rect x="10" y="22" width="44" height="4"/><rect x="10" y="33" width="44" height="5"/><rect x="10" y="43" width="44" height="3"/></g>
    <circle cx="32" cy="32" r="17" fill="none" stroke="#ffe0b0" stroke-width="2"/>
    <ellipse cx="32" cy="34" rx="29" ry="8" fill="none" stroke="#6ee7ff" stroke-width="2.6" transform="rotate(-15 32 34)"/>
    <ellipse cx="25" cy="24" rx="5" ry="3" fill="#fff" opacity=".6" transform="rotate(-30 25 24)"/>
    ${spark(53, 10, 4)}${spark(9, 52, 3, '#ffd6ff')}` },

  star: { color: '#ffd166', svg: `
    <defs><radialGradient id="__g" cx=".5" cy=".45" r=".6">
      <stop offset="0" stop-color="#fffbe0"/><stop offset=".5" stop-color="#ffd84d"/><stop offset="1" stop-color="#ff9f1c"/>
    </radialGradient></defs>
    <path d="M32 6l7.5 16 17.5 2-13 12 3.5 17.5L32 45l-15.5 8.5L20 36 7 24l17.5-2z" fill="url(#__g)" stroke="#fff3c4" stroke-width="2.4" stroke-linejoin="round"/>
    <ellipse cx="27" cy="25" rx="4" ry="2.5" fill="#fff" opacity=".75" transform="rotate(-25 27 25)"/>
    ${spark(54, 50, 4, '#ffd6ff')}${spark(10, 50, 3)}` },
};

let __iconSeq = 0;
/* html иконки: SVG, если нарисована, иначе эмодзи */
function iconHtml(id, emoji) {
  const ic = ICONS[id];
  if (!ic) return emoji;
  const p = 'i' + (++__iconSeq) + '_';
  return `<svg class="svg-ico" viewBox="0 0 64 64" style="color:${ic.color}" xmlns="http://www.w3.org/2000/svg">${ic.svg.replace(/__/g, p)}</svg>`;
}
