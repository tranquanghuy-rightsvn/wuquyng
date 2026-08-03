import { motion } from "framer-motion";
import Star from "../ui/Star";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center mb-6">
          {/* Ngôi sao lơ lửng: đi lên một chút -> xoay 1 vòng -> đáp xuống giữ nguyên */}
          <motion.div
            animate={{
              y: [0, -20, -20, 0],
              rotate: [0, 0, 360, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.85, 1], // y lên nhanh ở 0-0.25, giữ nguyên độ cao 0.25-0.85 để xoay, rồi đáp xuống 0.85-1
            }}
          >
            <Star className="w-36 h-36 text-brand-blue z-10" />
          </motion.div>

          {/* Bóng đổ */}
          <motion.div
            animate={{
              scale: [1, 0.6, 0.6, 1],
              opacity: [0.5, 0.2, 0.2, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.85, 1],
            }}
            className="w-16 h-4 bg-[rgba(100,100,20,0.5)] rounded-[100%] -mt-2 blur-[1px]"
          />
        </div>

        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-black tracking-wide font-display">
          Wait a second...
        </h1>
      </div>
    </section>
  );
}
