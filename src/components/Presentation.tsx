import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { SLIDES, PRESENTATION, type Slide } from "@/data/presentation";

// --- Scaled slide wrapper --------------------------------------------------
function useScale(ref: React.RefObject<HTMLDivElement | null>) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / 1920, height / 1080));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return scale;
}

function SlideFrame({ slide, index, total }: { slide: Slide; index: number; total: number }) {
  return (
    <div className="slide-content bg-paper text-ink">
      {/* Decorative borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 right-16 bottom-16 border border-[var(--gold)]/30" />
        <div className="absolute top-20 left-20 right-20 bottom-20 border border-[var(--gold)]/15" />
      </div>

      {/* Header strip */}
      <div className="absolute top-24 left-32 right-32 flex items-center justify-between slide-chrome text-[color:var(--muted-foreground)]">
        <span className="tracking-[0.3em] uppercase">{PRESENTATION.bookTitle} · {PRESENTATION.bookAuthor}</span>
        <span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>

      {/* Body */}
      <div className="absolute inset-x-32 top-48 bottom-40 flex flex-col">
        {slide.kicker && (
          <div className="slide-kicker text-[color:var(--gold)] mb-10">{slide.kicker}</div>
        )}

        {slide.id === "cover" ? (
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="slide-kicker text-[color:var(--muted-foreground)] mb-12">Buchpräsentation</div>
            <h1 className="slide-title-lg mb-8" style={{ fontStyle: "italic" }}>{slide.title}</h1>
            <div className="w-32 h-px bg-[var(--gold)] my-10" />
            {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
          </div>
        ) : (
          <>
            <h2 className="slide-title mb-6">{slide.title}</h2>
            {slide.subtitle && (
              <p className="slide-subtitle text-[color:var(--muted-foreground)] mb-12 max-w-[1500px]">
                {slide.subtitle}
              </p>
            )}
            {slide.body && (
              <ul className="space-y-5 max-w-[1500px] mt-4">
                {slide.body.map((line, i) =>
                  line === "" ? (
                    <li key={i} className="h-4" />
                  ) : (
                    <li key={i} className="slide-body-lg flex gap-6">
                      <span className="text-[color:var(--gold)] mt-2 flex-shrink-0">◆</span>
                      <span>{line}</span>
                    </li>
                  ),
                )}
              </ul>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-24 left-32 right-32 flex items-center justify-between slide-chrome text-[color:var(--muted-foreground)]">
        <span className="italic">{slide.section}</span>
        <span>{PRESENTATION.bookYear}</span>
      </div>
    </div>
  );
}

function ScaledSlide({ slide, index, total }: { slide: Slide; index: number; total: number }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const scale = useScale(stageRef);
  return (
    <div ref={stageRef} className="relative w-full h-full overflow-hidden bg-[#1a1410]">
      <div
        className="absolute"
        style={{
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
        }}
      >
        <SlideFrame slide={slide} index={index} total={total} />
      </div>
    </div>
  );
}

// --- TTS hook -------------------------------------------------------------
function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const pick = () => {
      const voices = window.speechSynthesis.getVoices();
      const de =
        voices.find((v) => v.lang.toLowerCase().startsWith("de") && /google|natural|premium/i.test(v.name)) ||
        voices.find((v) => v.lang.toLowerCase().startsWith("de"));
      if (de) setVoice(de);
    };
    pick();
    window.speechSynthesis.onvoiceschanged = pick;
  }, []);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "de-DE";
      if (voice) u.voice = voice;
      u.rate = 0.95;
      u.pitch = 1;
      u.onend = () => {
        setSpeaking(false);
        onEnd?.();
      };
      u.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(u);
    },
    [voice],
  );

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  return { speak, stop, speaking };
}

// --- Main app -------------------------------------------------------------
export default function Presentation() {
  const [idx, setIdx] = useState(0);
  const [showNotes, setShowNotes] = useState(true);
  const [autoMode, setAutoMode] = useState(false);
  const [printing, setPrinting] = useState(false);
  const { speak, stop, speaking } = useTTS();

  const total = SLIDES.length;
  const slide = SLIDES[idx];

  const go = useCallback(
    (delta: number) => {
      stop();
      setIdx((i) => Math.max(0, Math.min(total - 1, i + delta)));
    },
    [stop, total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "n") setShowNotes((v) => !v);
      else if (e.key === "f") document.documentElement.requestFullscreen?.();
      else if (e.key === "Escape") {
        stop();
        setAutoMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, stop]);

  // Auto-mode: speak then advance
  useEffect(() => {
    if (!autoMode) return;
    const text = slide.speech;
    speak(text, () => {
      setTimeout(() => {
        setIdx((i) => {
          if (i + 1 >= total) {
            setAutoMode(false);
            return i;
          }
          return i + 1;
        });
      }, 800);
    });
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoMode, idx]);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setPrinting(false), 500);
    }, 100);
  };

  const sectionProgress = useMemo(() => {
    const seen = new Set<string>();
    return SLIDES.map((s, i) => {
      const first = !seen.has(s.section);
      seen.add(s.section);
      return { idx: i, label: s.section, first };
    }).filter((s) => s.first);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* PRINT VIEW */}
      {printing && (
        <div className="print-only">
          {SLIDES.map((s, i) => (
            <div key={s.id} className="print-slide">
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2">
                {s.kicker || s.section} · Folie {i + 1}/{total}
              </div>
              <h1 className="text-3xl font-serif font-semibold mb-2">{s.title}</h1>
              {s.subtitle && <p className="italic text-neutral-700 mb-4">{s.subtitle}</p>}
              {s.body && (
                <ul className="text-sm space-y-1 mb-4">
                  {s.body.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              <div className="mt-auto pt-4 border-t border-neutral-300">
                <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Sprechertext</div>
                <p className="text-sm leading-relaxed">{s.speech}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TOP BAR */}
      <header className="no-print border-b border-border bg-card/70 backdrop-blur">
        <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-xl">{PRESENTATION.bookTitle}</span>
            <span className="text-muted-foreground text-sm">· {PRESENTATION.bookAuthor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => (autoMode ? (setAutoMode(false), stop()) : setAutoMode(true))}
              className={`px-4 py-2 rounded-md border transition ${
                autoMode
                  ? "bg-[var(--gold)] text-white border-[var(--gold)]"
                  : "border-border hover:bg-muted"
              }`}
            >
              {autoMode ? "■ Auto-Vortrag stoppen" : "▶ Auto-Vortrag starten"}
            </button>
            <button
              onClick={() => (speaking ? stop() : speak(slide.speech))}
              className="px-3 py-2 rounded-md border border-border hover:bg-muted"
              title="Nur aktuelle Folie vorlesen"
            >
              {speaking ? "🔇" : "🔊"}
            </button>
            <button
              onClick={() => setShowNotes((v) => !v)}
              className="px-3 py-2 rounded-md border border-border hover:bg-muted"
            >
              {showNotes ? "Notizen ausblenden" : "Notizen einblenden"}
            </button>
            <button
              onClick={() => document.documentElement.requestFullscreen?.()}
              className="px-3 py-2 rounded-md border border-border hover:bg-muted"
            >
              Vollbild
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-md border border-border hover:bg-muted"
            >
              PDF / Drucken
            </button>
          </div>
        </div>
        {/* section markers */}
        <div className="max-w-[1600px] mx-auto px-6 pb-3 flex gap-1">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stop();
                setIdx(i);
              }}
              className={`flex-1 h-1.5 rounded-full transition ${
                i === idx ? "bg-[var(--gold)]" : i < idx ? "bg-foreground/30" : "bg-border"
              }`}
              title={SLIDES[i].title}
            />
          ))}
        </div>
      </header>

      {/* STAGE */}
      <main className="no-print flex-1 flex flex-col lg:flex-row gap-4 p-4 min-h-0">
        <div className="flex-1 min-h-[400px] lg:min-h-0 rounded-lg overflow-hidden shadow-xl">
          <ScaledSlide slide={slide} index={idx} total={total} />
        </div>

        {showNotes && (
          <aside className="lg:w-[420px] flex flex-col bg-card border border-border rounded-lg p-5 overflow-y-auto max-h-[40vh] lg:max-h-none">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] mb-2">
              Sprechertext
            </div>
            <h3 className="font-serif text-2xl mb-3">{slide.title}</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90 whitespace-pre-line">
              {slide.speech}
            </p>
            <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground space-y-1">
              <div><kbd className="px-1.5 py-0.5 bg-muted rounded">→</kbd> nächste Folie</div>
              <div><kbd className="px-1.5 py-0.5 bg-muted rounded">←</kbd> zurück</div>
              <div><kbd className="px-1.5 py-0.5 bg-muted rounded">n</kbd> Notizen umschalten</div>
              <div><kbd className="px-1.5 py-0.5 bg-muted rounded">f</kbd> Vollbild</div>
              <div><kbd className="px-1.5 py-0.5 bg-muted rounded">Esc</kbd> Auto-Vortrag stoppen</div>
            </div>
          </aside>
        )}
      </main>

      {/* BOTTOM NAV */}
      <footer className="no-print border-t border-border bg-card/70 backdrop-blur">
        <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => go(-1)}
            disabled={idx === 0}
            className="px-4 py-2 rounded-md border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Zurück
          </button>
          <div className="text-sm text-muted-foreground">
            <span className="font-serif italic">{slide.section}</span>
            <span className="mx-3">·</span>
            <span>{idx + 1} / {total}</span>
          </div>
          <button
            onClick={() => go(1)}
            disabled={idx === total - 1}
            className="px-4 py-2 rounded-md border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Weiter →
          </button>
        </div>
        {/* section quick nav */}
        <div className="max-w-[1600px] mx-auto px-6 pb-3 flex flex-wrap gap-2 text-xs">
          {sectionProgress.map((s) => (
            <button
              key={s.idx}
              onClick={() => {
                stop();
                setIdx(s.idx);
              }}
              className={`px-3 py-1 rounded-full border transition ${
                slide.section === s.label
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:bg-muted"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </footer>

      <style>{`
        .print-only { display: none; }
        @media print {
          .print-only { display: block; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
