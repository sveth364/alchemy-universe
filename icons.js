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

/* ---------- общие детали, из которых собираются иконки ---------- */
const stops = (arr) => arr.map((c, i) => `<stop offset="${(i / (arr.length - 1)).toFixed(2)}" stop-color="${c}"/>`).join('');
// радиальный / линейный градиент (id всегда начинайте с «__»)
const radG = (id, arr, cx = .38, cy = .32, r = .75) => `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops(arr)}</radialGradient>`;
const linG = (id, arr, x2 = 0, y2 = 1) => `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops(arr)}</linearGradient>`;
// блик
const shine = (cx, cy, rx, ry, o = .6) =>
  `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="#fff" opacity="${o}" transform="rotate(-35 ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`;
// объёмный шар с бликом
const ball = (id, cx, cy, r, arr, stroke = '#fff', sw = 2) =>
  radG(id, arr) + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})" stroke="${stroke}" stroke-width="${sw}"/>` +
  shine(cx - r * .35, cy - r * .4, r * .32, r * .18);
// мягкое свечение
const halo = (id, cx, cy, r, color, o = .55) =>
  `<radialGradient id="${id}" cx=".5" cy=".5" r=".5"><stop offset=".3" stop-color="${color}" stop-opacity="${o}"/>` +
  `<stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})"/>`;
// половина орбиты: front=false — задняя (верхняя, тусклая), true — передняя
const arcHalf = (cx, cy, rx, ry, rot, color, w, front, o = 1) =>
  `<path d="M${cx - rx} ${cy}A${rx} ${ry} 0 0 ${front ? 0 : 1} ${cx + rx} ${cy}" fill="none" stroke="${color}" stroke-width="${w}" ` +
  `opacity="${o}" stroke-linecap="round" transform="rotate(${rot} ${cx} ${cy})"/>`;
// звёздчатая вспышка (path d)
const burst = (cx, cy, n, r1, r2, rot = 0) => {
  let d = '';
  for (let i = 0; i < n * 2; i++) {
    const a = i * Math.PI / n + rot, r = i % 2 ? r2 : r1;
    d += (i ? 'L' : 'M') + (cx + r * Math.sin(a)).toFixed(1) + ' ' + (cy - r * Math.cos(a)).toFixed(1);
  }
  return d + 'Z';
};
// сужающиеся лучи
const rays = (cx, cy, n, r1, r2, w, color, off = 0, o = 1) =>
  `<g fill="${color}" opacity="${o}">` + Array.from({ length: n }, (_, i) =>
    `<path d="M${cx} ${cy - r2}L${cx + w} ${cy - r1}H${cx - w}Z" transform="rotate(${off + i * 360 / n} ${cx} ${cy})"/>`).join('') + '</g>';
// символ/текст на иконке
const sym = (t, x = 32, y = 32, size = 16, color = '#fff') =>
  `<text x="${x}" y="${(y + size * .36).toFixed(1)}" text-anchor="middle" font-family="system-ui,-apple-system,'Segoe UI',Roboto,sans-serif" ` +
  `font-weight="800" font-size="${size}" fill="${color}" stroke="rgba(30,10,60,.45)" stroke-width="1.2" paint-order="stroke">${t}</text>`;
// химический элемент: шар с символом и орбитой электрона
const token = (s, arr, stroke, orbit) =>
  arcHalf(32, 33, 27, 8, -20, orbit, 2, false, .55) + ball('__b', 32, 32, 16, arr, stroke) +
  sym(s, 32, 32, s.length > 1 ? 14 : 18) + arcHalf(32, 33, 27, 8, -20, orbit, 2.2, true) +
  `<circle cx="56.8" cy="26.8" r="2.8" fill="${orbit}"/>`;

const ICONS = {
  // энергия — плазменный шар с разрядами (а не молния из эмодзи)
  energy: { color: '#ffb347', svg: `
    <defs><radialGradient id="__o" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#2a1670"/><stop offset=".8" stop-color="#4b2bb0"/><stop offset="1" stop-color="#8b6cff"/>
    </radialGradient><radialGradient id="__c" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#fff59d"/><stop offset="1" stop-color="#ff9f43"/>
    </radialGradient></defs>
    <circle cx="32" cy="32" r="25" fill="url(#__o)" stroke="#c9b6ff" stroke-width="2.3"/>
    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2">
      <path d="M32 32l6-5-2-4 7-6 1-4" stroke="#ffe066"/>
      <path d="M32 32l-7-3 2-4-8-1-3-4" stroke="#6ee7ff"/>
      <path d="M32 32l-4 7 4 3-5 7-1 5" stroke="#ff8fd1"/>
      <path d="M32 32l7 4-1 5 8 3 2 4" stroke="#ffe066"/>
    </g>
    <circle cx="32" cy="32" r="7.5" fill="url(#__c)"/>
    <ellipse cx="22" cy="19" rx="6" ry="3" fill="#fff" opacity=".35" transform="rotate(-35 22 19)"/>
    ${spark(54, 9, 4)}${spark(9, 54, 3, '#ffe08a')}` },

  space: { color: '#8b7bff', svg: `
    <defs><radialGradient id="__g" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#1a1240"/><stop offset=".65" stop-color="#3b2a8f"/><stop offset="1" stop-color="#7b5cff"/>
    </radialGradient></defs>
    <circle cx="32" cy="32" r="25" fill="url(#__g)" stroke="#b9a8ff" stroke-width="2.5"/>
    <path d="M18 34c4 8 18 11 25 3s1-19-8-17-11 10-5 13 9-3 6-6" fill="none" stroke="#6ee7ff" stroke-width="2.5" stroke-linecap="round" opacity=".9"/>
    ${spark(24, 22, 3)}${spark(43, 44, 2.5, '#ffd6ff')}${spark(41, 20, 2, '#9ff')}${spark(53, 9, 4)}` },

  // время — космический циферблат в золотой оправе с потоком-стрелкой вокруг
  time: { color: '#ffd166', svg: `
    <defs><radialGradient id="__f" cx=".4" cy=".35" r=".7">
      <stop offset="0" stop-color="#d9ccff"/><stop offset=".6" stop-color="#7b5cff"/><stop offset="1" stop-color="#3b2a8f"/>
    </radialGradient></defs>
    <path d="M11.2 46A24 24 0 1 1 52.8 46" fill="none" stroke="#6ee7ff" stroke-width="3" stroke-linecap="round" stroke-dasharray="7 4"/>
    <path d="M50.3 50.3l6-3.4-6-3.5z" fill="#6ee7ff"/>
    <circle cx="32" cy="34" r="17" fill="url(#__f)" stroke="#ffcf5a" stroke-width="3"/>
    <g stroke="#fff1b8" stroke-width="2" stroke-linecap="round"><path d="M32 19.5v2.5M46.5 34H44M32 48.5V46M17.5 34H20"/></g>
    <path d="M32 34V24" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M32 34l7 4" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="34" r="2.3" fill="#ffcf5a"/>
    <ellipse cx="25" cy="26" rx="4.5" ry="2.5" fill="#fff" opacity=".45" transform="rotate(-35 25 26)"/>
    ${spark(10, 12, 3.5)}${spark(32, 10, 2.5, '#9ff')}` },

  quark: { color: '#ff5fa2', svg: `
    <defs><radialGradient id="__g" cx=".35" cy=".3" r=".75">
      <stop offset="0" stop-color="#ffd1e8"/><stop offset=".45" stop-color="#ff5fa2"/><stop offset="1" stop-color="#b3135f"/>
    </radialGradient></defs>
    <path d="M5 33A27 10 0 0 1 59 33" fill="none" stroke="#6ee7ff" stroke-width="2" opacity=".6" transform="rotate(-20 32 33)"/>
    <circle cx="32" cy="32" r="15" fill="url(#__g)" stroke="#ffc2df" stroke-width="2.2"/>
    <ellipse cx="26" cy="26" rx="5" ry="3" fill="#fff" opacity=".7" transform="rotate(-30 26 26)"/>
    <path d="M5 33A27 10 0 0 0 59 33" fill="none" stroke="#6ee7ff" stroke-width="2.2" transform="rotate(-20 32 33)"/>
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
    <path d="M3 34A29 8 0 0 1 61 34" fill="none" stroke="#6ee7ff" stroke-width="2.4" opacity=".6" transform="rotate(-15 32 34)"/>
    <circle cx="32" cy="32" r="17" fill="url(#__g)"/>
    <g clip-path="url(#__c)" fill="#fff" opacity=".28"><rect x="10" y="22" width="44" height="4"/><rect x="10" y="33" width="44" height="5"/><rect x="10" y="43" width="44" height="3"/></g>
    <circle cx="32" cy="32" r="17" fill="none" stroke="#ffe0b0" stroke-width="2"/>
    <ellipse cx="25" cy="24" rx="5" ry="3" fill="#fff" opacity=".6" transform="rotate(-30 25 24)"/>
    <path d="M3 34A29 8 0 0 0 61 34" fill="none" stroke="#6ee7ff" stroke-width="2.8" transform="rotate(-15 32 34)"/>
    ${spark(53, 10, 4)}${spark(9, 52, 3, '#ffd6ff')}` },

  // звезда — раскалённый шар с короной и лучами + блик-искра (узнаваемо как «звезда»)
  star: { color: '#ffb347', svg: `
    <defs><radialGradient id="__h" cx=".5" cy=".5" r=".5">
      <stop offset=".55" stop-color="#ffd166" stop-opacity=".55"/><stop offset="1" stop-color="#ff7a1a" stop-opacity="0"/>
    </radialGradient><radialGradient id="__s" cx=".4" cy=".38" r=".65">
      <stop offset="0" stop-color="#fffbe0"/><stop offset=".35" stop-color="#ffe066"/><stop offset=".75" stop-color="#ff9f1c"/><stop offset="1" stop-color="#ff5e3a"/>
    </radialGradient></defs>
    <circle cx="32" cy="32" r="29" fill="url(#__h)"/>
    <g fill="#ffb347" opacity=".9">${[0, 45, 90, 135, 180, 225, 270, 315]
      .map(a => `<path d="M32 4l2.6 9h-5.2z" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    <circle cx="32" cy="32" r="17" fill="url(#__s)" stroke="#fff3c4" stroke-width="1.8"/>
    <ellipse cx="38" cy="39" rx="4" ry="2.4" fill="#ff7a1a" opacity=".35"/>
    <ellipse cx="27" cy="41" rx="3" ry="1.8" fill="#ff7a1a" opacity=".3"/>
    <path d="M43 20q10-6 6 8" fill="none" stroke="#ff5e3a" stroke-width="2.4" stroke-linecap="round"/>
    ${spark(25, 24, 6)}` },

  photon: { color: '#6ee7ff', svg: `
    <defs><linearGradient id="__w" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6ee7ff" stop-opacity=".2"/><stop offset=".6" stop-color="#8b7bff"/><stop offset="1" stop-color="#ff5fa2"/>
    </linearGradient><radialGradient id="__p" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#fff59d"/><stop offset="1" stop-color="#ffb347"/>
    </radialGradient></defs>
    <path d="M5 36C11 22 17 22 21 36S31 50 35 36 45 24 48 31" fill="none" stroke="url(#__w)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="51" cy="30" r="7.5" fill="url(#__p)" stroke="#fff3c4" stroke-width="1.8"/>
    <path d="M51 18v-5M60 23l3-2M60 37l3 2" stroke="#fff59d" stroke-width="2" stroke-linecap="round"/>
    ${spark(14, 14, 3.5)}` },

  atom: { color: '#6ee7ff', svg: `
    <defs><radialGradient id="__r" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffc2d1"/><stop offset="1" stop-color="#e63946"/></radialGradient>
    <radialGradient id="__b" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#c8f1ff"/><stop offset="1" stop-color="#3a86ff"/></radialGradient></defs>
    <g fill="none" stroke="#6ee7ff" stroke-width="2" opacity=".9">
      <ellipse cx="32" cy="32" rx="26" ry="9"/>
      <ellipse cx="32" cy="32" rx="26" ry="9" transform="rotate(60 32 32)"/>
      <ellipse cx="32" cy="32" rx="26" ry="9" transform="rotate(120 32 32)"/>
    </g>
    <circle cx="29" cy="30" r="5" fill="url(#__r)"/><circle cx="35.5" cy="30.5" r="5" fill="url(#__b)"/>
    <circle cx="32" cy="35.5" r="5" fill="url(#__r)"/>
    <g fill="#fff59d"><circle cx="58" cy="32" r="3"/><circle cx="19" cy="9.5" r="3"/><circle cx="19" cy="54.5" r="3"/></g>
    ${spark(53, 52, 3.5)}` },

  // галактика — 4 закрученных рукава, сужающихся к концам
  galaxy: { color: '#c77dff', svg: `
    <defs><radialGradient id="__a" gradientUnits="userSpaceOnUse" cx="32" cy="32" r="26">
      <stop offset="0" stop-color="#ffe066"/><stop offset=".35" stop-color="#ff5fa2"/><stop offset="1" stop-color="#7b5cff"/>
    </radialGradient><radialGradient id="__c" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#ffe066"/><stop offset="1" stop-color="#ff5fa2" stop-opacity="0"/>
    </radialGradient></defs>
    <g fill="url(#__a)">${[0, 90, 180, 270].map(a =>
      `<path d="M29 27C40 18 56 25 55 41 50 31 41 28 32 34z" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    <g fill="none" stroke="#ffd6ff" stroke-width="1.2" stroke-linecap="round" opacity=".6">${[0, 90, 180, 270].map(a =>
      `<path d="M33 29c8-4 16 0 18 7" transform="rotate(${a} 32 32)"/>`).join('')}</g>
    <circle cx="32" cy="32" r="11" fill="url(#__c)"/>
    <g fill="#9ff"><circle cx="50" cy="17" r="1.4"/><circle cx="13" cy="46" r="1.4"/><circle cx="46" cy="52" r="1.1"/><circle cx="17" cy="13" r="1.1"/></g>
    ${spark(55, 8, 3.5)}` },

  blackhole: { color: '#ff9f43', svg: `
    <defs><linearGradient id="__d" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ff5fa2"/><stop offset=".5" stop-color="#ffd166"/><stop offset="1" stop-color="#ff7a1a"/>
    </linearGradient><radialGradient id="__h" cx=".5" cy=".5" r=".5"><stop offset=".6" stop-color="#05030f"/><stop offset="1" stop-color="#2a1670"/></radialGradient></defs>
    <g transform="rotate(-12 32 32)">
      <path d="M4 32A28 9 0 0 1 60 32" fill="none" stroke="url(#__d)" stroke-width="5" opacity=".75"/>
      <circle cx="32" cy="32" r="17" fill="none" stroke="#ffd166" stroke-width="1.5" opacity=".55"/>
      <circle cx="32" cy="32" r="13" fill="url(#__h)" stroke="#ffb347" stroke-width="2.2"/>
      <path d="M4 32A28 9 0 0 0 60 32" fill="none" stroke="url(#__d)" stroke-width="5"/>
      <path d="M12 34.5A26 6 0 0 0 52 34.5" fill="none" stroke="#fff3c4" stroke-width="1.3" opacity=".8"/>
    </g>
    ${spark(53, 11, 4)}${spark(11, 52, 3, '#ffd6ff')}` },

  life: { color: '#2ee6a6', svg: `
    <defs><radialGradient id="__g" cx=".4" cy=".35" r=".7">
      <stop offset="0" stop-color="#d4ffe9"/><stop offset=".5" stop-color="#2ee6a6"/><stop offset="1" stop-color="#0f8f72"/>
    </radialGradient></defs>
    <g stroke="#8ff5cf" stroke-width="2" stroke-linecap="round">
      <path d="M32 10V5M50 19l4-4M53 36l5 2M40 53l2 5M22 52l-3 5M11 36l-5 2M15 18l-4-4"/>
    </g>
    <path d="M32 10c14 0 22 10 20 22s-10 22-22 21-20-9-19-22 9-21 21-21z" fill="url(#__g)" stroke="#d6fff0" stroke-width="2.2"/>
    <circle cx="35" cy="30" r="7" fill="#7b5cff" fill-opacity=".85" stroke="#c9b6ff" stroke-width="1.6"/>
    <circle cx="33" cy="28" r="2" fill="#e6dcff"/>
    <circle cx="24" cy="40" r="3" fill="#ffd166"/><circle cx="40" cy="43" r="2.5" fill="#ff5fa2"/>
    <ellipse cx="23" cy="20" rx="4.5" ry="2.5" fill="#fff" opacity=".6" transform="rotate(-35 23 20)"/>
    ${spark(55, 50, 3.5)}` },

  tree: { color: '#3ddc84', svg: `
    <defs><radialGradient id="__g" cx=".4" cy=".3" r=".8">
      <stop offset="0" stop-color="#d4ff9a"/><stop offset=".5" stop-color="#3ddc84"/><stop offset="1" stop-color="#128a52"/>
    </radialGradient><linearGradient id="__t" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#d9a06a"/><stop offset="1" stop-color="#7a4a2a"/>
    </linearGradient></defs>
    <path d="M29 59l1.5-20h3L35 59z" fill="url(#__t)" stroke="#f0c9a0" stroke-width="1.5" stroke-linejoin="round"/>
    <g stroke="#d9ffc4" stroke-width="4.5"><circle cx="22" cy="31" r="12"/><circle cx="42" cy="31" r="12"/><circle cx="32" cy="20" r="13"/></g>
    <g fill="url(#__g)"><circle cx="22" cy="31" r="12"/><circle cx="42" cy="31" r="12"/><circle cx="32" cy="20" r="13"/></g>
    <circle cx="20" cy="32" r="2.6" fill="#ff5fa2"/><circle cx="43" cy="27" r="2.6" fill="#ffd166"/><circle cx="33" cy="35" r="2.2" fill="#6ee7ff"/>
    <ellipse cx="27" cy="14" rx="5" ry="2.6" fill="#fff" opacity=".55" transform="rotate(-25 27 14)"/>
    ${spark(55, 10, 4)}` },
};

let __iconSeq = 0;
/* html иконки: SVG, если нарисована, иначе эмодзи */
function iconHtml(id, emoji) {
  const ic = ICONS[id];
  if (!ic) return emoji;
  const p = 'i' + (++__iconSeq) + '_';
  return `<svg class="svg-ico" viewBox="0 0 64 64" style="color:${ic.color}" xmlns="http://www.w3.org/2000/svg">${ic.svg.replace(/__/g, p)}</svg>`;
}
