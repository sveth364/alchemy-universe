// Проверка данных игры: node validate.js
const { ERAS, ELEMENTS, RECIPES, GOAL } = require('./elements.js');
const errors = [];
const ids = new Set(), eraIds = new Set(ERAS.map(e => e[0]));
const icons = {};
for (const [id, name, icon, era] of ELEMENTS) {
  if (ids.has(id)) errors.push('Повтор id: ' + id);
  ids.add(id);
  if (!eraIds.has(era)) errors.push(`Неизвестная эпоха у ${id}: ${era}`);
  (icons[icon] = icons[icon] || []).push(id);
}
const pairs = {}, producers = {};
for (const r of RECIPES) {
  const m = r.match(/^(\w+)\+(\w+)=(\w+)$/);
  if (!m) { errors.push('Плохой формат: ' + r); continue; }
  const [, a, b, res] = m;
  for (const x of [a, b, res]) if (!ids.has(x)) errors.push(`Нет элемента «${x}» в ${r}`);
  const k = [a, b].sort().join('+');
  if (pairs[k]) errors.push(`Пара ${k} уже даёт ${pairs[k]}, а в ${r} — ${res}`);
  pairs[k] = res;
  (producers[res] = producers[res] || []).push([a, b]);
}
const starters = [...ids].filter(id => !producers[id]);
// достижимость + глубина (минимальное число шагов)
const depth = {}; starters.forEach(s => depth[s] = 0);
let changed = true;
while (changed) {
  changed = false;
  for (const [res, list] of Object.entries(producers))
    for (const [a, b] of list)
      if (a in depth && b in depth) {
        const d = Math.max(depth[a], depth[b]) + 1;
        if (!(res in depth) || d < depth[res]) { depth[res] = d; changed = true; }
      }
}
const unreachable = [...ids].filter(id => !(id in depth));
if (unreachable.length) errors.push('Недостижимы: ' + unreachable.join(', '));
// использование
const usage = {};
for (const k of Object.keys(pairs)) for (const x of k.split('+')) usage[x] = (usage[x] || 0) + 1;
const deadEnds = [...ids].filter(id => !usage[id] && id !== GOAL);

console.log(`Элементов: ${ids.size}, рецептов: ${RECIPES.length}`);
console.log('Стартовые:', starters.map(s => `${s} (в ${usage[s] || 0} рецептах)`).join(', '));
console.log(`Глубина «${GOAL}»: ${depth[GOAL]} шагов`);
console.log('По эпохам:', ERAS.map(([e, n]) => `${n} ${ELEMENTS.filter(x => x[3] === e).length}`).join(', '));
const dupIcons = Object.entries(icons).filter(([, l]) => l.length > 1);
if (dupIcons.length) console.log('Повтор иконок:', dupIcons.map(([i, l]) => `${i} ${l.join('/')}`).join('; '));
console.log(`Тупиковые (ни во что не входят): ${deadEnds.length}`);
if (errors.length) { console.log('\nОШИБКИ:\n' + errors.join('\n')); process.exit(1); }
console.log('\nOK');
