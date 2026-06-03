import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Аудит", desc: "Диагностика матрицы личности — где застрял и почему" },
  { num: "02", title: "Деконструкция", desc: "Разбор программ и убеждений, удерживающих в старом сценарии" },
  { num: "03", title: "Программирование", desc: "Встройка новой нейронной модели реальности на квантовом уровне" },
  { num: "04", title: "Активация", desc: "Запуск тебя — Творца, который проектирует жизнь осознанно" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", backgroundColor: "#0D0B1A" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full opacity-20">
        <motion.div style={{ y }} className="relative w-full h-full">
          <div
            className="w-full h-full"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, rgba(0,240,255,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.2) 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-24">
        <p
          className="uppercase tracking-[0.4em] text-xs mb-4"
          style={{ color: "#00F0FF" }}
        >
          Процесс трансформации
        </p>
        <h2
          className="text-4xl md:text-6xl font-light mb-20 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "white", fontWeight: 300 }}
        >
          Четыре шага из матрицы<br />
          <span style={{ color: "#D4AF37", fontStyle: "italic" }}>в свою Галактику</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ borderColor: "rgba(0,240,255,0.1)" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="p-8"
              style={{ border: "1px solid rgba(0,240,255,0.08)" }}
            >
              <span
                className="text-xs tracking-[0.3em] mb-4 block"
                style={{ color: "#00F0FF" }}
              >
                {step.num}
              </span>
              <h3
                className="text-2xl md:text-3xl mb-3 font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
