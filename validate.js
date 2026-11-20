// Проверка данных игры: node validate.js
const { ERAS, ELEMENTS, RECIPES } = require('./elements.js');
global.RECIPES = RECIPES;
const { MODES, buildMode, parseRecipe, pairKey } = require('./modes.js');

const errors = [];
const ids = new Set(), eraIds = new Set(ERAS.map(e => e[0]));
for (const [id, , , era] of ELEMENTS) {
  if (ids.has(id)) errors.push('Повтор id: ' + id);
  ids.add(id);
  if (!eraIds.has(era)) errors.push(`Неизвестная эпоха у ${id}: ${era}`);
}
// общие рецепты: формат, существование элементов, одна пара — один результат
const pairs = {};
for (const r of RECIPES) {
  if (!/^\w+\+\w+=\w+$/.test(r)) { errors.push('Плохой формат: ' + r); continue; }
  const [a, b, res] = parseRecipe(r);
  for (const x of [a, b, res]) if (!ids.has(x)) errors.push(`Нет элемента «${x}» в ${r}`);
  const k = pairKey(a, b);
  if (pairs[k]) errors.push(`Пара ${k} уже даёт ${pairs[k]}, а в ${r} — ${res}`);
  pairs[k] = res;
}

for (const modeId of Object.keys(MODES)) {
  const m = MODES[modeId];
  console.log(`\n=== Режим «${m.name}» ===`);
  for (const r of m.extra) {
    const [a, b, res] = parseRecipe(r);
    for (const x of [a, b, res]) if (!ids.has(x)) errors.push(`[${m.name}] нет элемента «${x}» в ${r}`);
    const k = pairKey(a, b);
    if (pairs[k] && pairs[k] !== res) console.log(`  перекрывает: ${k} = ${pairs[k]} → ${res}`);
  }
  const extraKeys = m.extra.map(r => { const [a, b] = parseRecipe(r); return pairKey(a, b); });
  extraKeys.forEach((k, i) => { if (extraKeys.indexOf(k) !== i) errors.push(`[${m.name}] пара ${k} дважды в extra`); });

  const M = buildMode(modeId);
  if (!M.set.has(m.goal)) errors.push(`[${m.name}] цель «${m.goal}» недостижима`);
  // глубина: минимальное число шагов до каждого элемента
  const depth = {}; m.starters.forEach(s => depth[s] = 0);
  let changed = true;
  while (changed) {
    changed = false;
    for (const [res, list] of Object.entries(M.producers))
      for (const [a, b] of list)
        if (a in depth && b in depth) {
          const d = Math.max(depth[a], depth[b]) + 1;
          if (!(res in depth) || d < depth[res]) { depth[res] = d; changed = true; }
        }
  }
  const usage = {};
  for (const k of Object.keys(M.recipes)) for (const x of k.split('+')) usage[x] = (usage[x] || 0) + 1;
  console.log(`  Элементов: ${M.set.size}, рецептов: ${Object.keys(M.recipes).length}`);
  console.log('  Стартовые:', m.starters.map(s => `${s} (в ${usage[s] || 0})`).join(', '));
  console.log(`  Глубина цели «${m.goal}»: ${depth[m.goal]} шагов`);
  console.log('  По эпохам:', ERAS.map(([e, n]) => `${n} ${ELEMENTS.filter(x => x[3] === e && M.set.has(x[0])).length}`).join(', '));
  const missing = ELEMENTS.map(e => e[0]).filter(id => !M.set.has(id));
  console.log(`  Нет в режиме (${missing.length}): ${missing.join(', ')}`);
}

if (errors.length) { console.log('\nОШИБКИ:\n' + errors.join('\n')); process.exit(1); }
console.log('\nOK');
