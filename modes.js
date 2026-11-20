/* =====================================================================
   РЕЖИМЫ ИГРЫ
   cosmos  — «Космос»: от кварков до Вселенной (все рецепты из elements.js).
   classic — «Классика»: от четырёх стихий. Берёт рецепты «Космоса», у которых
             ингредиенты доступны в классике, плюс свои простые рецепты (extra,
             они перекрывают рецепт «Космоса» с той же парой). Элементы из
             exclude в классике не встречаются.
   После правок запусти:  node validate.js
   ===================================================================== */

const MODES = {
  classic: {
    name: 'Классика',
    short: 'От четырёх стихий',
    desc: 'Огонь, вода, земля и воздух — как в классических играх-алхимиях. Понятные рецепты, хороший старт для всех.',
    icon: 'fire',
    starters: ['fire', 'water', 'land', 'air'],
    goal: 'universe',
    extra: [
      'land+fire=lava', 'land+water=mud', 'land+land=pressure', 'land+air=dust',
      'fire+air=energy', 'fire+fire=heat', 'fire+energy=light', 'air+heat=gas',
      'mountain+air=cold', 'ocean+land=planet', 'planet+energy=gravity',
      'stone+pressure=iron', 'iron+lightning=electricity', 'energy+air=space',
      'sand+glass=time', 'fire+space=sun', 'sun+space=star', 'iron+sun=gold',
      'sand+electricity=chip', 'campfire+time=carbon', 'mud+energy=life', 'cell+evolution=dna',
    ],
    exclude: ['quark', 'photon', 'gluon', 'higgs', 'antimatter', 'electron', 'proton', 'neutron', 'nucleus', 'atom',
      'ion', 'hydrogen', 'helium', 'molecule', 'matter', 'mass', 'radiation', 'neutrino', 'annihilation',
      'oxygen', 'nitrogen', 'silicon'],
  },
  cosmos: {
    name: 'Космос',
    short: 'От кварков до Вселенной',
    desc: 'Расширенный режим: старт с энергии, пространства, времени и кварков. Настоящая физика — для любознательных.',
    icon: 'galaxy',
    starters: ['energy', 'space', 'time', 'quark'],
    goal: 'universe',
    extra: [],
    exclude: [],
  },
};

const parseRecipe = (r) => { const [ab, res] = r.split('='), [a, b] = ab.split('+'); return [a, b, res]; };
const pairKey = (a, b) => [a, b].sort().join('+');

/* Собирает данные режима: какие элементы в нём есть и какие рецепты работают */
function buildMode(id) {
  const m = MODES[id];
  const all = new Map();                                 // пара → [a, b, результат]
  RECIPES.map(parseRecipe).forEach(r => all.set(pairKey(r[0], r[1]), r));
  m.extra.map(parseRecipe).forEach(r => all.set(pairKey(r[0], r[1]), r));
  const exclude = new Set(m.exclude);
  const set = new Set(m.starters);
  let changed = true;
  while (changed) {
    changed = false;
    for (const [a, b, res] of all.values())
      if (set.has(a) && set.has(b) && !set.has(res) && !exclude.has(res)) { set.add(res); changed = true; }
  }
  const recipes = {}, producers = {}, uses = {};
  for (const [k, [a, b, res]] of all) {
    if (!set.has(a) || !set.has(b) || !set.has(res)) continue;
    recipes[k] = res;
    (producers[res] = producers[res] || []).push([a, b]);
    (uses[a] = uses[a] || []).push(res);
    if (a !== b) (uses[b] = uses[b] || []).push(res);
  }
  return { id, ...m, set, recipes, producers, uses };
}

if (typeof module !== 'undefined') module.exports = { MODES, buildMode, parseRecipe, pairKey };
