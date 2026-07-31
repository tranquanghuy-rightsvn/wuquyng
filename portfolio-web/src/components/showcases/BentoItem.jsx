import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LightboxContext } from "../sections/ProjectDetail";

// THÊM PROP: videoSrc
export default function BentoItem({
  title,
  spanClass,
  isGif,
  index,
  imgSrc,
  isTransparent,
  videoSrc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const setGlobalLightbox = useContext(LightboxContext);

  const openLightbox = () => {
    setIsOpen(true);
    if (setGlobalLightbox) setGlobalLightbox(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    if (setGlobalLightbox) setGlobalLightbox(false);
  };

  useEffect(() => {
    return () => {
      if (isOpen && setGlobalLightbox) setGlobalLightbox(false);
    };
  }, [isOpen, setGlobalLightbox]);

  return (
    <>
      {/* 1. KHỐI TRÊN GRID */}
      <motion.div
        onClick={openLightbox}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className={`group relative border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-xl overflow-hidden cursor-zoom-in will-change-transform ${isTransparent ? "bg-transparent" : "bg-white"} ${spanClass}`}
      >
        <div
          className={`w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 will-change-transform ${!imgSrc && !videoSrc ? (isGif ? "bg-brand-orange/20" : isTransparent ? "bg-transparent" : "bg-gray-200") : ""}`}
        >
          {/* LÔGIC HIỂN THỊ: VIDEO -> ẢNH -> PLACEHOLDER TEXT */}
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover bg-black"
            />
          ) : imgSrc ? (
            <img
              src={imgSrc}
              alt={title}
              loading="lazy"
              decoding="async"
              className={`w-full h-full ${isTransparent ? "object-contain p-4" : "object-cover"}`}
            />
          ) : (
            <span className="font-display font-black text-2xl md:text-3xl text-black/40 text-center p-8">
              {title} {isGif && <br />}
              {isGif && (
                <span className="text-brand-orange text-lg">▶ (GIF)</span>
              )}
            </span>
          )}
        </div>

        <div className="absolute inset-0 bg-brand-blue/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <span className="text-white font-black text-xl tracking-wider uppercase border-2 border-white px-6 py-2 rounded-full shadow-[4px_4px_0px_rgba(255,255,255,0.3)]">
            View {videoSrc ? "Video" : isGif ? "GIF" : "Image"}
          </span>
        </div>
      </motion.div>

      {/* 2. MÀN HÌNH LIGHTBOX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-blue/95 p-4 md:p-12 cursor-zoom-out"
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50 flex items-center gap-2 text-brand-yellow font-display font-black text-xl md:text-2xl uppercase tracking-widest hover:scale-110 transition-transform cursor-pointer drop-shadow-md">
              <span>Close</span>
              <div className="w-8 h-8 rounded-full border-4 border-brand-yellow flex items-center justify-center pb-1">
                x
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[85vw] h-full max-h-[80vh] mt-12 md:mt-8 flex items-center justify-center"
            >
              {videoSrc ? (
                // Nếu là Video thì hiện thanh controls để người dùng bật tiếng
                <video
                  src={videoSrc}
                  autoPlay
                  controls
                  playsInline
                  className="max-w-full max-h-full drop-shadow-[10px_15px_0px_rgba(0,0,0,0.4)] border-4 border-black bg-black"
                />
              ) : imgSrc ? (
                <img
                  src={imgSrc}
                  alt={title}
                  className={`max-w-full max-h-full object-contain drop-shadow-[10px_15px_0px_rgba(0,0,0,0.4)] ${isTransparent ? "" : "border-4 border-black bg-white"}`}
                />
              ) : (
                <div
                  className={`border-4 border-black w-full h-full min-h-[50vh] flex items-center justify-center text-3xl font-display font-black text-black/40 ${isTransparent ? "bg-brand-cream" : "bg-gray-200"}`}
                >
                  {title} (Full Size)
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
