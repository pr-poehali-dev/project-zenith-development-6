import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/e89ee932-9e7d-4f1f-b848-085e2afebef8/files/70cc8d2e-419e-4fc0-9173-b281f5c6d2c1.jpg"
          alt="Квантовое пространство"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,11,26,0.3) 0%, rgba(13,11,26,0.1) 50%, rgba(13,11,26,0.7) 100%)" }} />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="uppercase tracking-[0.4em] text-xs mb-8"
          style={{ color: "#00F0FF" }}
        >
          Квантовый психолог · Архитектор Реальности
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-white leading-[0.95]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Архитектура твоей<br />
          <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Новой Реальности</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)", fontWeight: 300, letterSpacing: "0.02em" }}
        >
          Разорви цикл повторяющихся сценариев. Перейди из состояния жертвы обстоятельств
          в состояние Творца — туда, где ты сам задаёшь законы своей Галактики.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="px-10 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-500 cursor-pointer"
          style={{
            background: "transparent",
            border: "1px solid #00F0FF",
            color: "#00F0FF",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#00F0FF";
            (e.currentTarget as HTMLButtonElement).style.color = "#0D0B1A";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#00F0FF";
          }}
        >
          Начать Квантовый Аудит
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, #00F0FF)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "#00F0FF", opacity: 0.5 }}>Scroll</span>
      </motion.div>
    </div>
  );
}
