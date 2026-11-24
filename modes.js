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
    desc: 'Огонь, вода, земля и воздух. Из четырёх стихий шаг за шагом рождается весь мир — до самой Вселенной.',
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
      // простые рецепты, которые в «Космосе» заменены длинными цепочками
      'ocean+carbon=life', 'ocean+lightning=life', 'plane+space=rocket', 'rocket+radio=satellite',
      'galaxy+science=darkmatter', 'cluster+darkmatter=web',
    ],
    exclude: ['quark', 'photon', 'gluon', 'higgs', 'antimatter', 'electron', 'proton', 'neutron', 'nucleus', 'atom',
      'ion', 'hydrogen', 'helium', 'molecule', 'matter', 'mass', 'radiation', 'neutrino', 'annihilation',
      'oxygen', 'nitrogen', 'silicon',
      // расширение «Космоса»
      'methane', 'ammonia', 'aminoacid', 'protein', 'rna', 'engine', 'rocketfuel', 'orbit', 'spacetelescope',
      'spacestation', 'smoke', 'coal', 'soap', 'rust', 'mars', 'rover',
      'laser', 'uranium', 'reactor', 'solarpanel', 'crystal', 'meteorite', 'crater', 'tide', 'pulsar', 'gravwave', 'virus', 'bacteria', 'antibiotic', 'algae',
      'observatory', 'moonbase', 'colony', 'terraforming', 'probe', 'radiotelescope', 'contact', 'quantum', 'fusion', 'ozone', 'collider', 'asteroidbelt', 'gasgiant',
      'cosmodrome', 'gravlens', 'supercomputer', 'simulation', 'supercluster', 'cmb', 'inflation', 'magnetar', 'protodisk', 'icegiant', 'greenhouse', 'venus', 'saturn',
      'icemoon', 'kuiperbelt', 'dwarfplanet', 'sunspot', 'solarflare', 'spacesuit', 'shuttle', 'debris', 'starship', 'dysonsphere', 'bigcrunch', 'heatdeath', 'hologram'],
  },
  cosmos: {
    name: 'Космос',
    short: 'От кварков до Вселенной',
    desc: 'Энергия, пространство, время и кварки. Путь от первых частиц до Вселенной — для тех, кто любит физику.',
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
