import Sparkle from "../ui/Sparkle";
import BlobStar from "../ui/BlobStar";

export default function Hero({ onNext }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-10 md:px-24 py-10">
      {/* Các khối Cam trang trí – nhỏ hơn trên mobile */}
      <BlobStar className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] -top-20 -left-20 md:-top-24 md:-left-32 transform -rotate-12" />
      <BlobStar className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] -bottom-24 -right-20 md:-bottom-48 md:-right-32 transform rotate-12" />

      {/* Rắc tia sáng */}
      <Sparkle className="w-8 h-8 sm:w-12 sm:h-12 top-4 left-10 sm:top-10 sm:left-64" />
      <Sparkle className="w-12 h-12 sm:w-20 sm:h-20 top-12 left-1/2 transform -translate-x-1/2 sm:top-24" />
      <Sparkle className="w-6 h-6 sm:w-10 sm:h-10 top-1/4 right-4 sm:right-8 md:right-32" />
      <Sparkle className="w-8 h-8 sm:w-14 sm:h-14 bottom-1/4 right-4 sm:right-8 md:right-1/3" />
      <Sparkle className="w-5 h-5 sm:w-8 sm:h-8 bottom-16 left-4 sm:left-8 md:left-16" />
      <Sparkle className="w-10 h-10 sm:w-16 sm:h-16 bottom-8 left-8 sm:left-12 md:left-32" />

      {/* Header Top Right */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 flex flex-col sm:flex-row gap-2 sm:gap-12 text-xs sm:text-sm font-black uppercase tracking-widest z-10 text-right sm:text-left">
        <span>Personal Portfolio</span>
        <span>2026</span>
      </div>

      {/* Nội dung chính */}
      <div className="relative z-10 max-w-4xl mt-8 sm:mt-12">
        <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider mb-1 sm:mb-2">
          Hallo! My name is
        </h3>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.9] font-display font-black text-brand-blue uppercase">
          QUYNG
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.9] font-display font-black text-black uppercase mb-4 sm:mb-8">
          VU THUY
        </h1>

        <div className="md:ml-4 max-w-xs">
          <p className="text-base sm:text-lg md:text-xl font-black leading-tight">
            A Graphic Designer
            <br />
            based in Hanoi,
            <br />
            <span className="text-brand-blue">Viet Nam</span>
          </p>
        </div>
      </div>

      {/* Nút "Let's get started!" */}
      <div
        className="absolute bottom-6 right-4 sm:bottom-10 sm:right-6 md:bottom-26 md:right-8 z-10 cursor-pointer hover:scale-105 transition-transform
                   max-md:static max-md:mt-8 max-md:w-full max-md:text-center"
        onClick={onNext}
      >
        <h2
          className="text-xl sm:text-2xl md:text-4xl font-display font-black text-black tracking-wide text-right
                     max-md:inline-block max-md:border-b-4 max-md:border-amber-500 max-md:pb-1 max-md:text-center"
        >
          Let's get started!
        </h2>
      </div>
    </section>
  );
}
