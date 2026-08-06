import { motion } from "framer-motion";
import Star from "../ui/Star";
import logoQuyhn from "../../assets/images/me/Logo.png";

import sofiaWide from "../../assets/images/personal/Sofia_1.png";
import sofiaPortrait from "../../assets/images/personal/Sofia_2.png";
import plantiaryVideo from "../../assets/videos/my-video.mp4";
import Sunburst from "../ui/Sunburst";

export default function PersonalShowcase({
  onClose,
  onNavigate,
  onNextProject,
}) {
  const spinOnHover =
    "cursor-pointer hover:rotate-[180deg] transition-transform duration-500";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] w-full h-full bg-[#f8f6f0] font-display selection:bg-brand-yellow selection:text-brand-blue overflow-y-auto overflow-x-hidden text-black"
    >
      {/* ================= 1. HEADER FULL WIDTH (Y HỆT HOME PAGE) ================= */}
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

        <div
          onClick={onClose}
          className="cursor-pointer hover:scale-110 transition-transform duration-500 relative z-50"
        >
          <Star className="w-12 h-12 md:w-16 md:h-16 text-[#1e14cc] flex items-center justify-center">
            <div className="w-4 h-1.5 bg-[#ffc107] rounded-full"></div>
          </Star>
        </div>
      </header>

      {/* ================= 2. INTRO TEXT + DẢI NGÔI SAO POSITION Y HỆT HOME ================= */}
      <div className="relative w-full flex flex-col items-center pt-8 md:pt-16 pb-12 md:pb-20">
        {/* Đoạn Văn Giới Thiệu */}
        <div className="relative z-20 w-full max-w-4xl px-6 md:px-12 text-center">
          <p className="font-black text-sm md:text-xl lg:text-2xl leading-relaxed text-black">
            Beyond academic and professional work, these side projects were
            created to meet the unique needs of individual clients. Each project
            explores a different visual direction, allowing me to adapt my
            design approach while delivering tailored creative solutions.
          </p>
        </div>

        {/* DẢI NGÔI SAO TRANG TRÍ DƯỚI TEXT (LAYOUT & VỊ TRÍ TƯƠNG TỰ HOME) */}
        <div className="relative w-full h-[12rem] md:h-[20rem] mt-6 flex justify-center items-center">
          <Star
            className={`absolute -left-10 md:-left-20 w-36 h-36 md:w-[22rem] md:h-[22rem] text-[#eedd3b] -rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute left-[15%] md:left-[22%] top-[30%] md:top-[40%] w-16 h-16 md:w-28 md:h-28 text-[#ffc107] rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute left-[32%] md:left-[35%] top-[10%] md:top-[20%] w-28 h-28 md:w-48 md:h-48 text-[#f1b916] z-10 ${spinOnHover}`}
          />
          <Star
            className={`absolute left-[50%] md:left-[52%] top-[40%] md:top-[45%] w-20 h-20 md:w-36 md:h-36 text-[#eedd3b] -rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute right-[20%] md:right-[25%] top-[20%] md:top-[30%] w-16 h-16 md:w-28 md:h-28 text-[#ffc107] rotate-12 ${spinOnHover}`}
          />
          <Star
            className={`absolute -right-12 md:-right-24 w-44 h-44 md:w-[26rem] md:h-[26rem] text-[#f1b916] ${spinOnHover}`}
          />
        </div>
      </div>

      {/* ================= 3. NỘI DUNG CHÍNH (NỚI RỘNG RÃI MAX-W-6XL / MAX-W-7XL) ================= */}
      <main className="w-full max-w-[85rem] mx-auto px-6 md:px-12 lg:px-20 space-y-20 md:space-y-28 pb-16">
        {/* SECTION 1: MODEL PROFILE */}
        <section className="w-full">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 md:mb-12 tracking-wide">
            Model Profile
          </h2>

          <div className="flex flex-col gap-8 md:gap-12">
            {/* Ảnh Ngang Bự */}
            <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-black/5 shadow-2xl bg-[#2b1810]">
              <img
                src={sofiaWide}
                alt="Sofia Nguyen Model Profile"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Khối Ảnh Dọc + Mô Tả Bên Phải */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Ảnh Dọc Bên Trái (Chiếm 5 Cột) */}
              <div className="md:col-span-5 w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 border-black/5 shadow-xl">
                <img
                  src={sofiaPortrait}
                  alt="Sofia Nguyen Portrait"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Mô Tả Bên Phải (Chiếm 7 Cột) */}
              <div className="md:col-span-7 pt-2 md:pt-12">
                <p className="font-black text-base md:text-xl leading-relaxed text-black/90">
                  Designed a personalized model profile for a client applying to
                  modeling opportunities. The project explores two distinct
                  visual directions - Angelic and Edgy - allowing the client to
                  present different personal images while maintaining a
                  consistent identity through layout, typography, and photo
                  composition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TVC PLANTIARY */}
        <section className="w-full">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 md:mb-8 tracking-wide">
            TVC Plantiary
          </h2>

          <div className="mb-10 space-y-4 max-w-4xl font-black text-base md:text-xl leading-relaxed text-black/90">
            <p>
              Plantiary is a remote plant care application that helps users
              monitor, manage, and care for their plants anytime, anywhere. With
              a simple and intuitive experience, the app makes plant care more
              accessible and enjoyable.
            </p>
            <p>
              This TVC reflects Plantiary's friendly and nature-inspired
              identity through soft blue tones, gentle visuals, and calming
              storytelling. The overall direction emphasizes how technology can
              seamlessly support plant care while strengthening the connection
              between people and nature.
            </p>
          </div>

          {/* Khối Video / Banner Vàng Chanh Chiếm Full Độ Rộng */}
          <div className="relative w-full aspect-video rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-[#eede45] border-4 border-black/10 shadow-2xl flex items-center justify-center">
            {plantiaryVideo ? (
              <video
                src={plantiaryVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl md:text-6xl font-black text-black tracking-wide">
                TVC Plantiary
              </span>
            )}
          </div>
        </section>
      </main>

      {/* ================= 4. NEXT PROJECT CTA (NÚT HMM, THAT'S ALL?) ================= */}
      <div className="w-full relative h-32 md:h-60 max-w-[100rem] mx-auto z-10 flex justify-end items-end overflow-hidden">
        <div
          onClick={onNextProject}
          className="absolute bottom-0 right-0 flex items-end justify-end cursor-pointer group"
        >
          {/* Bong bóng chat vàng chanh */}
          <div className="relative bg-[#eedd3b] text-black font-black text-sm md:text-xl px-8 md:px-12 py-5 md:py-8 rounded-xl md:rounded-2xl z-30 mr-12 md:mr-40 mb-10 md:mb-16 group-hover:-translate-x-4 transition-transform duration-500 shadow-md whitespace-nowrap">
            Go to the next project :3
            <div className="absolute top-[65%] -right-[10px] md:-right-[16px] -translate-y-1/2 w-0 h-0 border-y-[8px] md:border-y-[12px] border-y-transparent border-l-[12px] md:border-l-[20px] border-l-[#eedd3b] rotate-[15deg]"></div>
          </div>

          {/* Ngôi sao lớn phía sau */}
          <Sunburst className="absolute bottom-0 right-0 w-30 h-30 md:w-[15rem] md:h-[15rem] text-[#f1b916] translate-x-[30%] translate-y-[35%] group-hover:scale-110 transition-transform duration-500 flex items-center justify-center -z-10">
            <svg
              className="w-10 h-10 md:w-13 md:h-13 text-[#eedd3b] -translate-x-4 md:-translate-x-8 -translate-y-4 md:-translate-y-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
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

      {/* ================= 5. FOOTER VÀNG CHANH Y HỆT HOME ================= */}
      <footer className="w-full py-6 md:py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-[#1e14cc] font-black text-[0.65rem] md:text-sm tracking-wider z-20 relative bg-[#eede45]">
        <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-0">
          <div
            onClick={() => onNavigate && onNavigate("contact")}
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

          <a
            href="https://www.behance.net/quynhvu26"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-transform text-2xl md:text-4xl font-bold tracking-tighter"
          >
            in
          </a>
          <a
            href="https://www.behance.net/quynhvu"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-transform text-2xl md:text-4xl font-bold tracking-tighter"
          >
            Bē
          </a>

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
    </motion.div>
  );
}
