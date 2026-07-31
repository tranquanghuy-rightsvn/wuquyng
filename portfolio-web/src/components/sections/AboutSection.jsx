import { motion } from "framer-motion";
import Star from "../ui/Star";

export default function AboutSection({ onClose }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative min-h-screen bg-brand-cream pt-32 px-8 md:px-16 lg:px-24 pb-20"
    >
      {/* NÚT ĐÓNG (Ngôi sao dấu trừ) */}
      <motion.div
        initial={{ opacity: 0, rotate: -180, scale: 0 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
        onClick={onClose}
        className="fixed top-8 right-8 md:top-12 md:right-12 cursor-pointer z-50 hover:scale-110 transition-transform"
      >
        <Star className="w-16 h-16 md:w-20 md:h-20 text-brand-blue drop-shadow-lg">
          <div className="w-5 h-1.5 md:w-6 md:h-2 bg-brand-yellow rounded-full"></div>
        </Star>
      </motion.div>

      <h2 className="text-5xl md:text-7xl font-display font-black text-black uppercase mb-12 border-b-8 border-black inline-block pb-2">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20 mt-12">
        {/* CỘT TRÁI: AVATAR & INFO BOX */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          {/* Khung ảnh Avatar của Quỳnh */}
          <div className="w-full aspect-square bg-brand-yellow border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] rounded-2xl overflow-hidden relative group">
            {/* Đặt ảnh của Quỳnh ở đây */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-black/30 font-black text-2xl group-hover:scale-110 transition-transform duration-500">
              [QUYNH'S PHOTO]
            </div>
          </div>

          {/* Khung thông tin nhanh */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] p-6 rounded-xl font-black text-lg">
            <ul className="space-y-4">
              <li className="border-b-2 border-black/20 pb-2">
                👋 Name: Vu Thuy Quynh
              </li>
              <li className="border-b-2 border-black/20 pb-2">
                📍 Based in: Da Nang, Vietnam
              </li>
              <li>🎨 Focus: Graphic & UI/UX Design</li>
            </ul>
          </div>
        </div>

        {/* CỘT PHẢI: CHI TIẾT (Dành riêng cho Designer) */}
        <div className="w-full md:w-2/3 space-y-8 text-lg md:text-2xl font-black leading-relaxed text-black">
          <p className="bg-brand-blue text-white inline-block px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Hi there! I'm Vu Thuy Quynh ✨
          </p>
          <p>
            I am a passionate Design student who loves turning bold ideas into
            visually striking and meaningful digital experiences.
          </p>
          <p>
            My creative journey revolves around Graphic Design, Branding, and
            UI/UX. I believe that good design is not just about making things
            look pretty, but about solving problems and telling compelling
            stories through typography, colors, and layout.
          </p>
          <p>
            Always eager to learn and experiment, I'm constantly pushing my
            boundaries to create unique concepts that leave a lasting
            impression. Let's create something awesome together!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
