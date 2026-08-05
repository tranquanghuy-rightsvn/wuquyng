import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/sections/Preloader";
import Hero from "./components/sections/Hero";
import MenuSection from "./components/sections/MenuSection";
import WorksSection from "./components/sections/WorksSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HomePage from "./components/sections/HomePage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Quản lý màn hình hiện tại
  const [currentScreen, setCurrentScreen] = useState("hero");

  // THÊM MỚI: State lưu ID của project muốn mở thẳng vào Detail (ví dụ: "foxy", "dogout")
  const [targetProject, setTargetProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen font-sans text-black overflow-x-hidden bg-brand-yellow">
      {isLoading ? (
        <Preloader />
      ) : (
        <AnimatePresence mode="wait">
          {currentScreen === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* ĐÃ SỬA: Nhận tham số thứ 2 (projectId) và lưu vào state */}
              <HomePage
                onNavigate={(screen, projectId) => {
                  setCurrentScreen(screen);
                  if (projectId) setTargetProject(projectId);
                }}
              />
            </motion.div>
          )}

          {currentScreen === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onNavigate={(screen) => setCurrentScreen(screen)} />
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
              {/* ĐÃ SỬA: Truyền targetProject vào cho WorksSection */}
              <WorksSection
                initialProject={targetProject}
                onClose={() => {
                  setCurrentScreen("menu");
                  setTargetProject(null); // Reset lại khi thoát ra menu
                }}
                onNavigate={(screen) => setCurrentScreen(screen)}
              />
            </motion.div>
          )}
          {currentScreen === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutSection onClose={() => setCurrentScreen("menu")} />
            </motion.div>
          )}
          {currentScreen === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactSection onClose={() => setCurrentScreen("menu")} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </main>
  );
}

export default App;
