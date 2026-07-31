import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/sections/Preloader";
import Hero from "./components/sections/Hero";
import MenuSection from "./components/sections/MenuSection";
import WorksSection from "./components/sections/WorksSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // State quản lý màn hình hiện tại: "hero" | "menu" | "works"
  const [currentScreen, setCurrentScreen] = useState("hero");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen font-sans text-black overflow-hidden bg-brand-yellow">
      {isLoading ? (
        <Preloader />
      ) : (
        // AnimatePresence giúp tạo hiệu ứng chuyển cảnh mượt mà giữa các component
        <AnimatePresence mode="wait">
          {currentScreen === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onNext={() => setCurrentScreen("menu")} />
            </motion.div>
          )}

          {currentScreen === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MenuSection
                onNavigate={(screen) => setCurrentScreen(screen)}
                onClose={() => setCurrentScreen("hero")}
              />
            </motion.div>
          )}

          {currentScreen === "works" && (
            <motion.div
              key="works"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WorksSection onClose={() => setCurrentScreen("menu")} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </main>
  );
}

export default App;
