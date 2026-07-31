import { motion } from "framer-motion";
import Star from "../ui/Star";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center mb-6">
          {/* Ngôi sao lơ lửng (bay lên xuống) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star className="w-36 h-36 text-brand-blue z-10" />
          </motion.div>

          {/* Bóng đổ (phóng to thu nhỏ theo nhịp ngôi sao) */}
          <motion.div
            animate={{
              scale: [1, 0.6, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-4 bg-[rgba(100,100,20,0.5)] rounded-[100%] mt-3 blur-[1px]"
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
