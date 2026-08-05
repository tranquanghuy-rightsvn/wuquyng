import { useContext } from "react";
import { motion } from "framer-motion";
import { LightboxContext } from "../sections/ProjectDetail";
import BentoItem from "./BentoItem"; // Import Component có sẵn hiệu ứng View

import dogoutImg1 from "../../assets/images/dog/Start.jpg";
import dogoutImg2 from "../../assets/images/dog/Select.jpg"; // 1060x770
import dogoutImg3 from "../../assets/images/dog/Game Over.jpg"; // 707x761

// Import video (Chỉnh lại đường dẫn nếu file video của bạn tên khác nhé)
import dogoutVideo from "../../assets/images/dog/videodog.mp4";

export default function DogoutShowcase() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
      {/* =========================================
          ẢNH 1: Full chiều ngang (1830x1055)
          ========================================= */}
      <BentoItem
        index={0}
        imgSrc={dogoutImg1}
        title="Dog Out Start"
        spanClass="w-full aspect-[1830/1055]"
      />

      {/* =========================================
          HAI ẢNH DƯỚI: Ép chung chiều cao và giữ nguyên ảnh
          ========================================= */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
        {/* ẢNH 2: 1060x770 (Chiếm 3 cột trên Desktop) */}
        <BentoItem
          index={1}
          imgSrc={dogoutImg2}
          title="Dog Out Select"
          // Dùng h-full và xoá aspect cứng trên desktop để ảnh tự co giãn bằng nhau
          spanClass="md:col-span-3 w-full h-full max-md:aspect-[1060/770]"
        />

        {/* ẢNH 3: 707x761 (Chiếm 2 cột trên Desktop) */}
        <BentoItem
          index={2}
          imgSrc={dogoutImg3}
          title="Dog Out Game Over"
          // Tương tự ảnh 2
          spanClass="md:col-span-2 w-full h-full max-md:aspect-[707/761]"
        />
      </div>

      {/* =========================================
          VIDEO PLAYPLAY 
          ========================================= */}
      {/* Thẻ Video không cần hiệu ứng phóng to (BentoItem sẽ tự xử lý nếu là videoSrc) */}
      <BentoItem
        index={3}
        videoSrc={dogoutVideo}
        title="Dog Out Gameplay"
        spanClass="w-full aspect-video"
      />

      {/* =========================================
          LINK ĐIỀU HƯỚNG CHƠI GAME
          ========================================= */}
      <motion.div
        variants={itemVariants}
        className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-8 pb-10"
      >
        <span className="font-display font-black text-sm md:text-base text-black whitespace-nowrap">
          Click this link to play Dog Out!
        </span>

        {/* Dải 9 dấu mũi tên chuyển màu */}
        <div className="flex items-center gap-1 md:gap-2">
          {[...Array(9)].map((_, i) => (
            <svg
              key={i}
              // Màu cam xen kẽ màu vàng chanh sáng giống hình thiết kế
              className={`w-4 h-4 md:w-8 md:h-8 ${
                i % 2 === 0 ? "text-[#eab308]" : "text-[#fef08a]"
              }`}
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
          ))}
        </div>

        <a
          href="https://gd.games/thienthach/dogout-"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-bold text-sm md:text-base tracking-tight text-black hover:opacity-70 transition-opacity whitespace-nowrap truncate max-w-full"
        >
          https://gd.games/thienthach/dogout-
        </a>
      </motion.div>
    </div>
  );
}
