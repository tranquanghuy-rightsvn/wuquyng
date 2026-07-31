import { useState, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Star from "../ui/Star";

// Gọi component showcase
import CJJShowcase from "../showcases/CJJShowcase";
import PhucShowcase from "../showcases/PhucShowcase";
import PersonalShowcase from "../showcases/PersonalShowcase";
import FoxyShowcase from "../showcases/FoxyShowcase";

// 1. TẠO CONTEXT ĐỂ KẾT NỐI VỚI CÁC BỨC ẢNH BÊN TRONG
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

export default function ProjectDetail({ project, onClose }) {
  // Biến theo dõi xem có ảnh nào đang phóng to không
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) return null;

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
      case "Personal Projects":
        return <PersonalShowcase />;
      case "Foxy":
        return <FoxyShowcase />;
      default:
        return <DefaultShowcase />;
    }
  };

  return (
    // 2. GÓI TOÀN BỘ BẰNG PROVIDER ĐỂ BÁO TÍN HIỆU XUỐNG DƯỚI
    <LightboxContext.Provider value={setIsLightboxOpen}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[100] w-full h-full bg-brand-cream overflow-y-auto overflow-x-hidden"
      >
        {/* NÚT TẮT DẤU TRỪ CHÍNH */}
        <AnimatePresence>
          {!isLightboxOpen && ( // Chỉ hiện ra khi KHÔNG CÓ ảnh nào đang mở
            <motion.div
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }} // Hiệu ứng thu nhỏ biến mất khi mở ảnh
              transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
              onClick={onClose}
              className="fixed top-8 right-8 md:top-12 md:right-12 cursor-pointer z-50 hover:scale-110 transition-transform"
            >
              <Star className="w-16 h-16 md:w-20 md:h-20 text-brand-blue drop-shadow-lg">
                <div className="w-5 h-1.5 md:w-6 md:h-2 bg-brand-yellow rounded-full"></div>
              </Star>
            </motion.div>
          )}
        </AnimatePresence>

        {/* NỬA TRÊN: GIỚI THIỆU */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 w-full min-h-[90vh] max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 pt-24 md:pt-32 flex flex-col md:flex-row items-center"
        >
          <div className="w-full md:w-[45%] flex flex-col relative justify-center items-center md:items-start md:pl-10 lg:pl-20">
            <div className="flex flex-col items-center">
              <motion.div
                variants={slideUpVariants}
                whileHover={{ scale: 1.05, rotate: 15 }}
                className="w-40 h-40 md:w-56 md:h-56 bg-brand-yellow rounded-full shrink-0 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-pointer"
              ></motion.div>
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

        {/* NỬA DƯỚI: KHỐI VÀNG CHỨA ẢNH */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.1, duration: 1, delay: 0.3 }}
          className="relative w-full bg-brand-yellow rounded-t-[3rem] md:rounded-t-[4rem] z-20 mt-12 pb-32 border-t-4 border-black shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.2)]"
        >
          <div className="max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-12">
            <h3 className="text-3xl md:text-4xl font-display font-black text-black uppercase tracking-widest border-b-4 border-black inline-block pb-2 mb-10">
              Showcase
            </h3>
            {renderShowcase()}
          </div>
        </motion.div>
      </motion.div>
    </LightboxContext.Provider>
  );
}
