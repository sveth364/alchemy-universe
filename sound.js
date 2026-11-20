/* =====================================================================
   ЗВУКИ — синтезируются через Web Audio прямо в браузере, без аудиофайлов.
   Sound.play('discover')   — проиграть звук
   Sound.toggle()           — вкл/выкл (запоминается на устройстве)
   Браузеры разрешают звук только после касания экрана, поэтому
   AudioContext создаётся при первом касании.
   ===================================================================== */
const Sound = (() => {
  const KEY = 'au_sound';
  let ctx = null, master = null, on = true;
  try { on = localStorage.getItem(KEY) !== '0'; } catch (e) {}

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.55;
      const comp = ctx.createDynamicsCompressor();          // чтобы аккорды не «хрипели»
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3500;  // срезаем резкие верха
      master.connect(lp); lp.connect(comp); comp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  ['pointerdown', 'touchend', 'keydown'].forEach(ev =>
    window.addEventListener(ev, () => { if (on) ensure(); }, { capture: true, passive: true }));
  // свёрнутая игра не держит звуковой поток
  document.addEventListener('visibilitychange', () => { if (ctx && document.hidden) ctx.suspend(); });

  // нота: частота, задержка (с), длительность (с)
  function tone(freq, delay, dur, { type = 'sine', vol = 0.2, attack = 0.006, glide = 0 } = {}) {
    const t0 = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  // мягкий шум через фильтр нижних частот — короткий «вжух» без шипения
  function noise(delay, dur, { vol = 0.05, from = 1200, to = 300 } = {}) {
    const t0 = ctx.currentTime + delay, len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 0.7;
    f.frequency.setValueAtTime(from, t0); f.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(master); src.start(t0); src.stop(t0 + dur);
  }

  const arp = (notes, step, dur, opt) => notes.forEach((n, i) => tone(n, i * step, dur, opt));

  // ноты (малая и первая октавы — ниже и мягче)
  const G3 = 196, C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392, A4 = 440, C5 = 523.25, E5 = 659.25, G5 = 783.99;

  /* Успех — короткий «блуп» ВВЕРХ, неудача — мягкие две ноты ВНИЗ: на слух их не спутать */
  const SOUNDS = {
    tap: () => tone(440, 0, 0.045, { vol: 0.06, glide: 400 }),                    // все кнопки интерфейса
    pick: () => tone(F4, 0, 0.06, { vol: 0.05, glide: A4 }),
    pop: () => tone(260, 0, 0.09, { vol: 0.12, glide: 390 }),
    fail: () => { tone(F4, 0, 0.1, { vol: 0.09 }); tone(D4, 0.09, 0.16, { vol: 0.08 }); },
    combine: () => tone(G4 * 0.9, 0, 0.11, { vol: 0.11, glide: A4 }),
    recipe: () => { tone(G4, 0, 0.1, { vol: 0.1, glide: A4 }); tone(C5, 0.08, 0.16, { vol: 0.08 }); },
    discover: () => { tone(D4, 0, 0.14, { vol: 0.15, glide: G4 * 1.1 }); tone(A4, 0.1, 0.22, { vol: 0.07 }); },
    era: () => {
      tone(D4, 0, 0.14, { vol: 0.15, glide: G4 * 1.1 }); tone(A4, 0.1, 0.3, { vol: 0.07 });
      tone(G3, 0.08, 0.8, { vol: 0.06, attack: 0.12 }); tone(D4, 0.08, 0.8, { vol: 0.04, attack: 0.12 });
      tone(E5, 0.22, 0.4, { vol: 0.03 });
    },
    trash: () => { tone(420, 0, 0.16, { vol: 0.06, glide: 170 }); noise(0, 0.16, { vol: 0.04, from: 1400, to: 300 }); },
    clear: () => { tone(200, 0, 0.22, { vol: 0.06, glide: 480 }); noise(0, 0.22, { vol: 0.035, from: 500, to: 1600 }); },
    hint: () => { tone(C5, 0, 0.35, { vol: 0.08 }); tone(E5, 0.1, 0.4, { vol: 0.06 }); },
    win: () => {
      arp([C4, E4, G4, C5], 0.12, 0.45, { vol: 0.12 });
      [C4, E4, G4].forEach(n => tone(n, 0.55, 1.5, { vol: 0.06, attack: 0.2 }));
      [G5, E5].forEach((n, i) => tone(n, 0.7 + i * 0.15, 0.5, { vol: 0.03 }));
    },
  };

  // единый звук для всех кнопок интерфейса, кроме «Очистки» и «Корзины» (у них свои)
  document.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (b && b.id !== 'btnClear' && b.id !== 'btnTrash') SOUNDS.tap && on && ensure() && SOUNDS.tap();
  });

  return {
    get on() { return on; },
    play(name) {
      if (!on || !SOUNDS[name]) return;
      try { if (ensure()) SOUNDS[name](); } catch (e) {}
    },
    toggle() {
      on = !on;
      try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
      if (!on && ctx) ctx.suspend();                     // звук кнопки даёт общий обработчик
      return on;
    },
  };
})();
