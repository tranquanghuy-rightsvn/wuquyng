import { useState, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Star from "../ui/Star";
import Sunburst from "../ui/Sunburst";

// Gọi component showcase
import CJJShowcase from "../showcases/CJJShowcase";
import PhucShowcase from "../showcases/PhucShowcase";
import PersonalShowcase from "../showcases/PersonalShowcase";
import FoxyShowcase from "../showcases/FoxyShowcase";
import DRPShowcase from "../showcases/DRPShowcase";
import DogoutShowcase from "../showcases/DogoutShowcase";
import logoQuyhn from "../../assets/images/me/Logo.png";

export const LightboxContext = createContext(null);

const DefaultShowcase = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <h4 className="text-3xl font-display font-black text-black/50 mb-4">
      Coming Soon
    </h4>
    <p className="font-black text-black/40">
      Layout gallery for this project is being updated.
    </p>
  </div>
);

export default function ProjectDetail({
  project,
  onClose,
  onNavigate,
  onNextProject,
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLogoZoomed, setIsLogoZoomed] = useState(false);

  if (!project) return null;

  // =========================================================================
  // XỬ LÝ NGOẠI LỆ CHO PERSONAL PROJECTS:
  // Trả về component Showcase dưới dạng trang độc lập, bỏ qua layout chung.
  // =========================================================================
  if (project.title === "Personal Projects") {
    return (
      <PersonalShowcase
        onClose={onClose}
        onNavigate={onNavigate}
        onNextProject={onNextProject}
      />
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const renderShowcase = () => {
    switch (project.title) {
      case "CJJ":
        return <CJJShowcase />;
      case "Phuc Long":
        return <PhucShowcase />;
      case "Foxy":
        return <FoxyShowcase />;
      case "DRP":
        return <DRPShowcase />;
      case "Dog Out!":
        return <DogoutShowcase />;
      default:
        return <DefaultShowcase />;
    }
  };

  const openLogoZoom = () => {
    setIsLogoZoomed(true);
    setIsLightboxOpen(true);
  };

  const closeLogoZoom = () => {
    setIsLogoZoomed(false);
    setIsLightboxOpen(false);
  };

  return (
    <LightboxContext.Provider value={setIsLightboxOpen}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[100] w-full h-full bg-brand-cream overflow-y-auto overflow-x-hidden"
      >
        {/* MODAL PHÓNG TO LOGO */}
        <AnimatePresence>
          {isLogoZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLogoZoom}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-8 backdrop-blur-sm cursor-zoom-out"
            >
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src={project.logo}
                alt={project.title}
                className="w-full h-full max-w-5xl max-h-[85vh] object-contain drop-shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= HEADER TƯƠNG TỰ HOME ================= */}
        {/* Dùng absolute top-0 w-full để nằm ngay trên cùng như bản thiết kế */}
        <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 z-50">
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

          <AnimatePresence>
            {!isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0, rotate: -180, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
                // Khi bấm thì gọi onClose để thoát chế độ xem chi tiết
                onClick={onClose}
                className="cursor-pointer hover:scale-110 transition-transform duration-500 relative z-50"
              >
                <Star className="w-12 h-12 md:w-16 md:h-16 text-brand-blue flex items-center justify-center">
                  <div className="w-4 h-1.5 bg-brand-yellow rounded-full"></div>
                </Star>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* NỬA TRÊN: GIỚI THIỆU */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 w-full min-h-[85vh] max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 pt-24 md:pt-32 flex flex-col md:flex-row items-center"
        >
          <div className="w-full md:w-[45%] flex flex-col relative justify-center items-center md:items-start md:pl-10 lg:pl-20">
            <div className="flex flex-col items-center">
              {project.logo ? (
                <motion.img
                  src={project.logo}
                  alt={project.title}
                  variants={slideUpVariants}
                  whileHover={{ scale: 1.05, rotate: 15 }}
                  onClick={openLogoZoom}
                  className="w-40 h-40 md:w-56 md:h-56 shrink-0 cursor-zoom-in object-contain"
                />
              ) : (
                <motion.div
                  variants={slideUpVariants}
                  className="w-40 h-40 md:w-56 md:h-56 shrink-0"
                />
              )}

              <motion.h2
                variants={slideUpVariants}
                className="text-[2.5rem] md:text-5xl font-display font-black text-black mt-8 text-center tracking-wide"
              >
                {project.title}
              </motion.h2>
            </div>
            <motion.div
              variants={slideUpVariants}
              className="mt-12 md:mt-24 w-full flex flex-col md:flex-row justify-center md:justify-start md:gap-16 text-xs md:text-sm font-black uppercase tracking-wider text-black px-4 md:px-0"
            >
              <span className="mb-2 md:mb-0">
                Project name: {project.projectName}
              </span>
              <span>Date: {project.date}</span>
            </motion.div>
          </div>

          <div className="w-full md:w-[55%] flex flex-col mt-12 md:mt-0 px-4 md:px-0 md:pr-20">
            <div className="space-y-6 md:space-y-8 text-sm md:text-base lg:text-lg font-black leading-snug text-black max-w-2xl">
              {project.descriptions.map((desc, idx) => (
                <motion.p key={idx} variants={slideUpVariants}>
                  {desc}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* NỬA DƯỚI: KHU VỰC SHOWCASE */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.1, duration: 1, delay: 0.3 }}
          className="relative w-full z-20 mt-12"
        >
          <div className="max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 pt-10 pb-12">
            <h3 className="text-3xl md:text-4xl font-display font-black text-black uppercase tracking-widest border-b-4 border-black inline-block pb-2 mb-10">
              Showcase
            </h3>
            {renderShowcase()}
          </div>
        </motion.div>

        {/* WRAPPER ĐỂ CHẶN PHẦN THỪA CỦA NGÔI SAO GÂY DƯ KHOẢNG TRẮNG Ở BOTTOM */}
        <div className="relative w-full overflow-hidden">
          {/* ĐIỀU HƯỚNG: NEXT PROJECT CTA */}
          <div className="w-full relative h-28 md:h-57 max-w-[100rem] mx-auto z-10 flex justify-end items-end">
            <div
              onClick={onNextProject}
              className="absolute bottom-0 right-0 flex items-end justify-end cursor-pointer group"
            >
              {/* Bong bóng chat vàng nhạt */}
              <div className="relative bg-[#eedd3b] text-black font-black text-sm md:text-xl px-8 md:px-12 py-5 md:py-8 rounded-xl md:rounded-2xl z-30 mr-12 md:mr-40 mb-10 md:mb-16 group-hover:-translate-x-4 transition-transform duration-500 shadow-md whitespace-nowrap">
                Go to the next project :3
                <div className="absolute top-[65%] -right-[10px] md:-right-[16px] -translate-y-1/2 w-0 h-0 border-y-[8px] md:border-y-[12px] border-y-transparent border-l-[12px] md:border-l-[20px] border-l-[#eedd3b] rotate-[15deg]"></div>
              </div>

              {/* Ngôi sao cam vàng đậm */}
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

          {/* FOOTER */}
          <footer className="w-full py-6 md:py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-[#1e14cc] font-black text-[0.65rem] md:text-sm tracking-wider z-20 relative bg-[#eedd3b]">
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
        </div>
      </motion.div>
    </LightboxContext.Provider>
  );
}
