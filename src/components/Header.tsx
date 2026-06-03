interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div
          className="text-sm tracking-[0.3em] uppercase"
          style={{ color: "#D4AF37", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", letterSpacing: "0.25em" }}
        >
          Августина Рай
        </div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white/70 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest"
          >
            Методология
          </a>
          <a
            href="#contact"
            className="transition-colors duration-300 uppercase text-xs tracking-widest"
            style={{ color: "#00F0FF" }}
          >
            Квантовый Аудит
          </a>
        </nav>
      </div>
    </header>
  );
}
