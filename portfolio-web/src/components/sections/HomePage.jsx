import { motion } from "framer-motion";
import Star from "../ui/Star";
import Sunburst from "../ui/Sunburst";
import Sparkle from "../ui/Sparkle";
import logoQuyhn from "../../assets/images/me/Logo.png";
import dogoutBanner from "../../assets/images/dog/videodog.mp4";

export default function HomePage({ onNavigate }) {
  const spinOnHover =
    "cursor-pointer hover:rotate-[180deg] transition-transform duration-500";

  return (
    <div className="min-h-screen w-full bg-[#f8f6f0] font-display selection:bg-brand-yellow selection:text-brand-blue overflow-x-hidden">
      {/* ================= HEADER FULL WIDTH ================= */}
      <header className="w-full flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 relative z-50">
        <div
          onClick={() => onNavigate && onNavigate("home")}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img
            src={logoQuyhn}
            alt="Quyhn Logo"
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
          />
        </div>

        {/* ĐÃ FIX: Bọc Star bằng thẻ div, gắn onClick và z-50 vào div */}
        <div
          onClick={() => onNavigate("menu")}
          className="cursor-pointer hover:scale-110 transition-transform duration-500 relative z-50"
        >
          <Star className="w-12 h-12 md:w-16 md:h-16 text-brand-blue flex items-center justify-center">
            <div className="w-4 h-1.5 bg-brand-yellow rounded-full"></div>
          </Star>
        </div>
      </header>

      {/* ================= BODY NỀN XANH FULL WIDTH ================= */}
      <main className="w-full bg-[#1e14cc] rounded-t-[2.5rem] md:rounded-t-[3.5rem] flex flex-col items-center pt-20 pb-24 relative overflow-hidden">
        {/* Hình khối trắng lấp ló ở 2 góc trên cùng */}
        <Sunburst className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-64 md:h-64 text-[#f8f6f0] rotate-45 z-0" />
        <Star className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-32 h-32 md:w-56 md:h-56 text-[#f8f6f0] -rotate-12 z-0" />

        {/* ================= HERO TEXT + SPARKLES (CHỈ TẬP TRUNG QUANH CHỮ) ================= */}
        <div className="relative text-center z-10 w-full max-w-4xl mt-12 px-4">
          <Sparkle className="absolute -top-6 left-[10%] md:left-[15%] w-8 h-8 md:w-12 md:h-12 text-white z-10 animate-pulse" />
          <Sparkle className="absolute top-[20%] -left-2 md:left-[5%] w-5 h-5 md:w-8 md:h-8 text-white z-10" />
          <Sparkle className="absolute bottom-[20%] left-[8%] md:left-[18%] w-4 h-4 md:w-6 md:h-6 text-white z-10" />

          <Sparkle className="absolute -top-10 right-[15%] md:right-[20%] w-6 h-6 md:w-10 md:h-10 text-white z-10 animate-pulse" />
          <Sparkle className="absolute top-[40%] right-0 md:right-[5%] w-7 h-7 md:w-10 md:h-10 text-white z-10" />
          <Sparkle className="absolute -bottom-6 right-[12%] md:right-[22%] w-5 h-5 md:w-8 md:h-8 text-white z-10" />

          <h1 className="text-[2.25rem] md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.2] tracking-wide relative z-20">
            Hallo!!
            <br />
            I'm <span className="text-[#ffc107]">Quyhn</span>
            <br />
            Graphic Designer
            <br />
            who loves <span className="text-[#ffc107]">creating playful</span>
            <br />
            visual stories.
          </h1>
        </div>

        {/* DẢI NGÔI SAO TRANG TRÍ TRÀN VIỀN */}
        <div className="relative w-full h-[15rem] md:h-[26rem] mt-12 mb-16 flex justify-center items-center">
          <Sunburst
            className={`absolute -left-10 md:-left-24 w-40 h-40 md:w-[26rem] md:h-[26rem] text-[#eedd3b] ${spinOnHover}`}
          />
          <Star
            className={`absolute left-[15%] md:left-[18%] top-[55%] md:top-[50%] w-20 h-20 md:w-40 md:h-40 text-[#ffc107] rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute left-[30%] md:left-[28%] top-[30%] md:top-[50%] w-36 h-36 md:w-72 md:h-72 text-[#f8f6f0] z-10 ${spinOnHover}`}
          />
          <Sunburst
            className={`absolute left-[52%] md:left-[47%] top-[60%] md:top-[65%] w-24 h-24 md:w-44 md:h-44 text-[#eedd3b] rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute left-[68%] md:left-[58%] top-[50%] md:top-[60%] w-14 h-14 md:w-28 md:h-28 text-[#ffc107] -rotate-12 ${spinOnHover}`}
          />
          <Sunburst
            className={`absolute left-[52%] md:left-[65%] top-[70%] md:top-[72%] w-24 h-24 md:w-27 md:h-27 text-[#eedd3b] rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute right-[18%] md:right-[20%] top-[65%] md:top-[50%] w-16 h-16 md:w-32 md:h-32 text-[#f8f6f0] rotate-12 z-10 ${spinOnHover}`}
          />
          <Star
            className={`absolute -right-10 md:-right-20 w-44 h-44 md:w-[28rem] md:h-[28rem] text-[#ffc107] ${spinOnHover}`}
          />
        </div>

        <div className="w-full max-w-[105rem] mx-auto px-6 md:px-12 lg:px-20">
          {/* TIÊU ĐỀ: FEATURED WORKS */}
          <div className="flex flex-col items-start mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              <h2 className="text-[1.75rem] md:text-5xl font-black text-[#f8f6f0] tracking-wide">
                Featured Works
              </h2>
              <div className="flex flex-col -space-y-3 md:-space-y-4 mt-1 md:mt-2">
                <svg
                  className="w-7 h-7 md:w-12 md:h-12 text-[#ffc107]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <svg
                  className="w-7 h-7 md:w-12 md:h-12 text-[#ffc107]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* DANH SÁCH PROJECT CARDS */}
          <div className="space-y-12 md:space-y-20">
            {/* ================= CARD 1: FOXY (ẢNH) ================= */}
            <div
              className="relative w-full bg-[#dbe4ff] rounded-[1.5rem] md:rounded-[2.5rem] aspect-[4/3] md:aspect-[21/9] overflow-hidden cursor-pointer group shadow-lg"
              // Đã sửa 2: Truyền ID cụ thể của project
              onClick={() => onNavigate("works", "foxy")}
            >
              <img
                src="https://via.placeholder.com/1200x500/dbe4ff/1e14cc?text=Foxy+Banner"
                alt="Foxy Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 right-0 flex items-center justify-end">
                <div className="relative bg-[#ffc107] text-[#1e14cc] font-black text-sm md:text-2xl px-6 md:px-12 py-4 md:py-8 rounded-xl md:rounded-3xl z-20 -mr-15 md:-mr-35 mb-10 md:mb-16 group-hover:-translate-x-6 transition-transform duration-500 shadow-xl whitespace-nowrap">
                  Take a look at FOXY
                  <div className="absolute top-1/2 -right-[12px] md:-right-[18px] -translate-y-1/2 w-0 h-0 border-y-[8px] md:border-y-[12px] border-y-transparent border-l-[12px] md:border-l-[18px] border-l-[#ffc107]"></div>
                </div>

                <Sunburst className="w-44 h-44 md:w-[22rem] md:h-[22rem] text-[#ffc107] translate-x-[32%] translate-y-[32%] group-hover:scale-110 transition-transform duration-500 drop-shadow-md z-10 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 md:w-16 md:h-16 text-[#1e14cc] -translate-x-3 -translate-y-3 md:-translate-x-8 md:-translate-y-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Sunburst>
              </div>
            </div>

            {/* ================= CARD 2: DOG OUT (VIDEO) ================= */}
            <div
              className="relative w-full bg-[#c8d4c9] rounded-[1.5rem] md:rounded-[2.5rem] aspect-[16/9] overflow-hidden cursor-pointer group shadow-lg"
              // Đã sửa 2: Truyền ID cụ thể của project và gắn onClick vào khung ngoài cùng
              onClick={() => onNavigate("works", "dogout")}
            >
              {/* Đã sửa 3: Tắt hoàn toàn controls và các sự kiện gây xung đột */}
              <video
                src={dogoutBanner}
                autoPlay
                loop
                muted
                playsInline
                alt="Dog Out Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              />

              {/* Lớp Overlay */}
              <div className="absolute bottom-0 right-0 flex items-center justify-end">
                <div className="relative bg-[#ffc107] text-[#1e14cc] font-black text-sm md:text-2xl px-6 md:px-12 py-4 md:py-8 rounded-xl md:rounded-3xl z-20 -mr-15 md:-mr-35 mb-10 md:mb-16 group-hover:-translate-x-6 transition-transform duration-500 shadow-xl whitespace-nowrap">
                  Take a look at DOG OUT!
                  <div className="absolute top-1/2 -right-[12px] md:-right-[18px] -translate-y-1/2 w-0 h-0 border-y-[8px] md:border-y-[12px] border-y-transparent border-l-[12px] md:border-l-[18px] border-l-[#ffc107]"></div>
                </div>

                <Sunburst className="w-44 h-44 md:w-[22rem] md:h-[22rem] text-[#f8f6f0] translate-x-[32%] translate-y-[32%] group-hover:scale-110 transition-transform duration-500 drop-shadow-md z-10 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 md:w-16 md:h-16 text-[#ffc107] -translate-x-3 -translate-y-3 md:-translate-x-8 md:-translate-y-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Sunburst>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="w-full py-6 md:py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-[#1e14cc] font-black text-[0.65rem] md:text-sm tracking-wider z-20 relative bg-[#eedd3b]">
        <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-0">
          <div
            onClick={() => onNavigate("contact")}
            className="relative group cursor-pointer flex items-center justify-center w-12 h-12 md:w-16 md:h-16 hover:scale-105 transition-transform"
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full text-[#1e14cc] group-hover:rotate-90 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M50 5 L56.9 33.4 L81.8 18.2 L66.6 43.1 L95 50 L66.6 56.9 L81.8 81.8 L56.9 66.6 L50 95 L43.1 66.6 L18.2 81.8 L33.4 56.9 L5 50 L33.4 43.1 L18.2 18.2 L43.1 33.4 Z"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-center leading-[1.1] text-[0.55rem] md:text-[0.65rem] uppercase">
              Contact
              <br />
              Me
            </span>
          </div>
          <span className="cursor-pointer hover:scale-110 transition-transform text-2xl md:text-4xl font-bold tracking-tighter">
            in
          </span>
          <span className="cursor-pointer hover:scale-110 transition-transform text-2xl md:text-4xl font-bold tracking-tighter">
            Bē
          </span>
          <div className="relative group cursor-pointer flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full text-[#1e14cc] group-hover:rotate-90 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M50 5 L56.9 33.4 L81.8 18.2 L66.6 43.1 L95 50 L66.6 56.9 L81.8 81.8 L56.9 66.6 L50 95 L43.1 66.6 L18.2 81.8 L33.4 56.9 L5 50 L33.4 43.1 L18.2 18.2 L43.1 33.4 Z"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-center leading-[1.1] text-[0.55rem] md:text-[0.65rem] uppercase">
              MY CV
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:w-auto gap-4 md:gap-12 opacity-90">
          <span className="cursor-pointer hover:underline lowercase">
            quyhnvt1523@gmail.com
          </span>
          <span>Call me: (+84) 353 125 243</span>
        </div>
      </footer>
    </div>
  );
}
