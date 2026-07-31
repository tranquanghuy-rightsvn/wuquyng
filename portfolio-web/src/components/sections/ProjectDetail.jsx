import { motion } from "framer-motion";
import Star from "../ui/Star";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  // 1. Hiệu ứng cho container bọc ngoài (Đợi các con chạy xong mới đóng)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // 2. Hiệu ứng bay từ dưới lên cho các khối chữ
  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 z-50 w-full h-full bg-brand-cream overflow-hidden"
    >
      {/* Nút Đóng: Xoay 180 độ và nảy to ra */}
      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.6, stiffness: 200 }}
        onClick={onClose}
        className="absolute top-8 right-8 md:top-12 md:right-12 cursor-pointer z-50 hover:scale-110 transition-transform"
      >
        <Star className="w-16 h-16 md:w-20 md:h-20 text-brand-blue drop-shadow-lg">
          <div className="w-5 h-1.5 md:w-6 md:h-2 bg-brand-yellow rounded-full"></div>
        </Star>
      </motion.div>

      {/* Nội dung chính chia 2 cột */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 w-full h-full max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 pt-24 md:pt-0 flex flex-col md:flex-row items-center"
      >
        {/* ================= CỘT TRÁI ================= */}
        <div className="w-full md:w-[45%] h-full flex flex-col relative justify-center items-center md:items-start md:pl-10 lg:pl-20">
          <div className="flex flex-col items-center -mt-20 md:-mt-32">
            {/* Hình tròn: Nảy lên và tương tác khi hover */}
            <motion.div
              variants={slideUpVariants}
              whileHover={{ scale: 1.05, rotate: 15 }}
              className="w-48 h-48 md:w-56 md:h-56 bg-brand-yellow rounded-full shrink-0 shadow-xl cursor-pointer"
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
            className="absolute bottom-[22vh] md:bottom-[28vh] left-0 w-full flex justify-center md:justify-start md:gap-16 text-xs md:text-sm font-black uppercase tracking-wider text-black px-4 md:px-0"
          >
            <span>Project name: {project.projectName}</span>
            <span>Date: {project.date}</span>
          </motion.div>
        </div>

        {/* ================= CỘT PHẢI (Text mô tả) ================= */}
        <div className="w-full md:w-[55%] flex flex-col justify-center mt-8 md:mt-0 md:-mt-32 px-4 md:px-0 md:pr-20">
          <div className="space-y-6 md:space-y-8 text-sm md:text-base lg:text-lg font-black leading-snug text-black max-w-2xl">
            {project.descriptions.map((desc, idx) => (
              <motion.p key={idx} variants={slideUpVariants}>
                {desc}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= KHỐI VÀNG KHỔNG LỒ Ở ĐÁY ================= */}
      {/* Hiệu ứng: Trồi lên từ lòng đất (y: "100%") cực kỳ êm ái */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.2 }}
        className="absolute bottom-[-5%] left-[4%] right-[4%] h-[20vh] md:h-[28vh] bg-brand-yellow rounded-[3rem] md:rounded-[4rem] z-0 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)]"
      ></motion.div>
    </motion.div>
  );
}
