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
      master.connect(comp); comp.connect(ctx.destination);
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
  // шум через полосовой фильтр — шорохи и «вжух»
  function noise(delay, dur, { vol = 0.2, from = 2000, to = 400, q = 1.2 } = {}) {
    const t0 = ctx.currentTime + delay, len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = q;
    f.frequency.setValueAtTime(from, t0); f.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(master); src.start(t0); src.stop(t0 + dur);
  }
  const arp = (notes, step, dur, opt) => notes.forEach((n, i) => tone(n, i * step, dur, opt));

  // ноты
  const C5 = 523.25, D5 = 587.33, E5 = 659.25, G5 = 783.99, A5 = 880, C6 = 1046.5, E6 = 1318.5, G6 = 1568, C7 = 2093;

  const SOUNDS = {
    tap: () => tone(1200, 0, 0.04, { type: 'triangle', vol: 0.05 }),
    pick: () => tone(700, 0, 0.07, { type: 'triangle', vol: 0.07, glide: 950 }),
    pop: () => tone(480, 0, 0.1, { vol: 0.16, glide: 760 }),
    fail: () => { tone(190, 0, 0.2, { type: 'triangle', vol: 0.22, glide: 120 }); tone(196, 0, 0.16, { vol: 0.1, glide: 125 }); },
    combine: () => { tone(G5, 0, 0.14, { vol: 0.15 }); tone(C6, 0.06, 0.2, { vol: 0.13 }); },
    recipe: () => { arp([E5, G5, C6], 0.06, 0.26, { vol: 0.13 }); tone(E6, 0.18, 0.3, { vol: 0.05 }); },
    discover: () => {
      arp([C5, E5, G5, C6], 0.07, 0.42, { type: 'triangle', vol: 0.14 });
      tone(C7, 0.3, 0.35, { vol: 0.04 }); tone(G6, 0.36, 0.3, { vol: 0.03 });
    },
    era: () => {
      arp([C5, E5, G5, C6, E6], 0.08, 0.6, { type: 'triangle', vol: 0.13 });
      [C5, E5, G5].forEach(n => tone(n / 2, 0.4, 1.1, { vol: 0.06, attack: 0.15 }));
      tone(C7, 0.5, 0.5, { vol: 0.04 });
    },
    trash: () => noise(0, 0.28, { vol: 0.22, from: 3200, to: 300 }),
    clear: () => { noise(0, 0.4, { vol: 0.16, from: 500, to: 5000, q: 0.8 }); tone(900, 0.05, 0.3, { vol: 0.04, glide: 1800 }); },
    hint: () => { tone(E6, 0, 0.5, { vol: 0.1 }); tone(A5 * 2, 0.12, 0.6, { vol: 0.08 }); },
    win: () => {
      arp([C5, E5, G5, C6], 0.12, 0.5, { type: 'triangle', vol: 0.14 });
      [C5, E5, G5, C6].forEach(n => tone(n, 0.6, 1.6, { vol: 0.07, attack: 0.2 }));
      [C7, G6, E6].forEach((n, i) => tone(n, 0.7 + i * 0.15, 0.6, { vol: 0.035 }));
    },
  };

  return {
    get on() { return on; },
    play(name) {
      if (!on || !SOUNDS[name]) return;
      try { if (ensure()) SOUNDS[name](); } catch (e) {}
    },
    toggle() {
      on = !on;
      try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
      if (on) this.play('tap'); else if (ctx) ctx.suspend();
      return on;
    },
  };
})();
