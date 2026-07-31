import BentoItem from "./BentoItem";

// 1. IMPORT TOÀN BỘ ẢNH TỪ THƯ MỤC ASSETS VÀO ĐÂY
// Đổi lại tên file cho đúng với tên file bạn vừa lưu nhé!
import img1 from "../../assets/images/cjj/img-1.jpg";
import img2 from "../../assets/images/cjj/img-2.jpg";
import img3 from "../../assets/images/cjj/img-3.jpg";
import img4 from "../../assets/images/cjj/img-4.jpg";
import banner from "../../assets/images/cjj/banner.png";
import img5 from "../../assets/images/cjj/img-5.jpg";
import img6 from "../../assets/images/cjj/img-6.jpg";
import img7 from "../../assets/images/cjj/img-7.jpeg";
import img8 from "../../assets/images/cjj/img-8.jpg";
import cjjGif from "../../assets/images/cjj/motion.gif";

export default function CJJShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* 2. TRUYỀN ẢNH VÀO TỪNG COMPONENT BẰNG THUỘC TÍNH imgSrc */}

      {/* Hàng 1: 4 ảnh tĩnh */}
      <BentoItem
        index={0}
        imgSrc={img1}
        title="CJJ Image 1"
        spanClass="col-span-1 aspect-[4/3]"
      />
      <BentoItem
        index={1}
        imgSrc={img2}
        title="CJJ Image 2"
        spanClass="col-span-1 aspect-[4/3]"
      />
      <BentoItem
        index={2}
        imgSrc={img3}
        title="CJJ Image 3"
        spanClass="col-span-1 aspect-[4/3]"
      />
      <BentoItem
        index={3}
        imgSrc={img4}
        title="CJJ Image 4"
        spanClass="col-span-1 aspect-[4/3]"
      />

      {/* Hàng 2: Banner ngang siêu dài */}
      <BentoItem
        index={4}
        imgSrc={banner}
        title="CJJ Long Banner"
        spanClass="col-span-1 md:col-span-2 lg:col-span-4 aspect-[3250/420]"
      />

      {/* Hàng 3: 4 ảnh tĩnh tiếp theo */}
      <BentoItem
        index={5}
        imgSrc={img5}
        title="CJJ Image 5"
        spanClass="col-span-1 aspect-[4/3]"
      />
      <BentoItem
        index={6}
        imgSrc={img6}
        title="CJJ Image 6"
        spanClass="col-span-1 aspect-[4/3]"
      />
      <BentoItem
        index={7}
        imgSrc={img7}
        title="CJJ Image 7"
        spanClass="col-span-1 aspect-[4/3]"
      />
      <BentoItem
        index={8}
        imgSrc={img8}
        title="CJJ Image 8"
        spanClass="col-span-1 aspect-[4/3]"
      />

      {/* Hàng 4: Hình GIF động */}
      <BentoItem
        index={9}
        imgSrc={cjjGif}
        title="CJJ Motion Logo"
        isGif={true}
        spanClass="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-2 aspect-video mt-4"
      />
    </div>
  );
}
