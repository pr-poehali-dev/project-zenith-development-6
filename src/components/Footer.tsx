export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-10 px-6 sm:px-10 h-full w-full flex flex-col justify-between"
            style={{ backgroundColor: "#080613" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="mb-2 uppercase text-xs tracking-[0.3em]"
                  style={{ color: "#00F0FF" }}
                >
                  Навигация
                </h3>
                {["Методология", "О Августине", "Кому подходит", "Процесс"].map(item => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors duration-300 text-sm sm:text-base"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "white")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="mb-2 uppercase text-xs tracking-[0.3em]"
                  style={{ color: "#D4AF37" }}
                >
                  Контакт
                </h3>
                {["Telegram", "Instagram", "Квантовый Аудит"].map(item => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors duration-300 text-sm sm:text-base"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div>
                <h1
                  className="text-[14vw] sm:text-[12vw] lg:text-[11vw] leading-[0.85] font-light tracking-tight text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.08)" }}
                >
                  АВГУСТИНА
                </h1>
                <p
                  className="text-xs uppercase tracking-[0.4em] mt-2"
                  style={{ color: "#D4AF37" }}
                >
                  Архитектор Реальности
                </p>
              </div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                {new Date().getFullYear()} · Августина Рай · Все права защищены
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
