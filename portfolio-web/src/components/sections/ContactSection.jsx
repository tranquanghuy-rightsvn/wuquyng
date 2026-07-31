import { motion } from "framer-motion";
import Star from "../ui/Star"; // Nhớ import Star

export default function ContactSection({ onClose }) {
  // Thêm prop onClose
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

      <div className="max-w-4xl mx-auto mt-12 md:mt-0">
        <h2 className="text-5xl md:text-7xl font-display font-black text-black uppercase mb-6 text-center">
          Let's Talk
        </h2>
        <p className="text-center font-black text-xl mb-12 text-black/60">
          Got a project in mind? Drop me a message!
        </p>

        <form className="bg-brand-yellow border-8 border-black shadow-[16px_16px_0px_rgba(0,0,0,1)] rounded-3xl p-8 md:p-12 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-display font-black uppercase tracking-wider text-lg">
              Your Name
            </label>
            <input
              type="text"
              placeholder="What should I call you?"
              className="w-full bg-white border-4 border-black p-4 font-black text-lg outline-none focus:ring-4 focus:ring-brand-blue transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-display font-black uppercase tracking-wider text-lg">
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full bg-white border-4 border-black p-4 font-black text-lg outline-none focus:ring-4 focus:ring-brand-blue transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-display font-black uppercase tracking-wider text-lg">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell me about your idea..."
              className="w-full bg-white border-4 border-black p-4 font-black text-lg outline-none focus:ring-4 focus:ring-brand-blue transition-all resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ y: -5, boxShadow: "12px 12px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,1)" }}
            className="mt-4 bg-brand-blue text-white font-display font-black uppercase text-2xl py-5 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
