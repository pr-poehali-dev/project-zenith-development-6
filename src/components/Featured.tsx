import { motion } from "framer-motion";

const painWords = ["БЕЗДЕЛЬЕ", "ОБРЕЧЕННОСТЬ", "ЗАВИСИМОСТЬ", "ВЫГОРАНИЕ", "ПУСТОТА"];

export default function Featured() {
  return (
    <div
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-8 lg:px-16 py-16 lg:py-0"
      style={{ backgroundColor: "#0D0B1A" }}
    >
      <div className="flex-1 h-[400px] lg:h-[700px] mb-12 lg:mb-0 lg:order-2 relative overflow-hidden">
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-6"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,240,255,0.05) 0%, transparent 70%)",
            border: "1px solid rgba(0,240,255,0.1)",
          }}
        >
          {painWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0.7, x: 0 }}
              animate={{ opacity: [0.7, 0.15, 0.7], x: [0, (i % 2 === 0 ? 10 : -10), 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] uppercase"
              style={{
                color: i % 2 === 0 ? "rgba(0,240,255,0.4)" : "rgba(212,175,55,0.3)",
                fontFamily: "'Cormorant Garamond', serif",
                textDecoration: "line-through",
                textDecorationColor: "rgba(0,240,255,0.2)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="flex-1 text-left lg:h-[700px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <p
          className="uppercase mb-6 text-xs tracking-[0.4em]"
          style={{ color: "#00F0FF" }}
        >
          Ты узнаёшь это?
        </p>
        <h2
          className="text-3xl lg:text-5xl mb-8 leading-tight font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.95)", fontWeight: 300 }}
        >
          Когда всё есть,<br />
          но ощущение —<br />
          <span style={{ color: "#D4AF37", fontStyle: "italic" }}>что ты в чужой жизни</span>
        </h2>
        <p
          className="text-base mb-10 leading-relaxed max-w-md"
          style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
        >
          Успех есть, а смысла нет. Ты тянешь вперёд других, но сам застрял в одном и том же сценарии.
          Банальные инструменты не работают — потому что проблема не в поведении. Она глубже.
          На уровне матрицы личности.
        </p>
        <button
          className="px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all duration-500 cursor-pointer w-fit"
          style={{
            background: "transparent",
            border: "1px solid rgba(212,175,55,0.5)",
            color: "#D4AF37",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.1)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          }}
        >
          Узнать о методологии
        </button>
      </div>
    </div>
  );
}
