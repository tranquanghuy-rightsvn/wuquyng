import BentoItem from "./BentoItem";

import bgRect from "../../assets/images/phuc/bg-rect.jpg";
import sq1 from "../../assets/images/phuc/sq-1.png";
import sq2 from "../../assets/images/phuc/sq-2.png";
import sq3 from "../../assets/images/phuc/sq-3.png";
import sq4 from "../../assets/images/phuc/sq-4.png";
import rect1 from "../../assets/images/phuc/rect-1.png";
import rect2 from "../../assets/images/phuc/rect-2.png";
import rect3 from "../../assets/images/phuc/rect-3.png";
import rect4 from "../../assets/images/phuc/rect-4.png";
import rect5 from "../../assets/images/phuc/rect-5.png";

export default function PhucShowcase() {
  const customAspect = "aspect-[2120/1600]";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* =========================================
          BLOCK 1: KHỐI LIÊN KẾT KHÔNG KẼ HỞ
          Ghép 1 ảnh to (bên trái) xuyên 2 hàng + 4 ảnh vuông (bên phải)
          ========================================= */}

      {/* Thêm md:row-span-2 để ảnh này cao bằng đúng 2 hàng hình vuông cộng lại */}
      <BentoItem
        index={0}
        imgSrc={bgRect}
        title="Phuc Long Hero"
        spanClass="col-span-1 md:col-span-2 md:row-span-2 w-full h-full min-h-[300px]"
      />

      {/* 4 Hình vuông sẽ tự động rớt vào vị trí lấp đầy 2 hàng bên phải */}
      <BentoItem
        index={1}
        imgSrc={sq1}
        title="Square 1"
        spanClass="col-span-1 aspect-square"
        isTransparent={true}
      />
      <BentoItem
        index={2}
        imgSrc={sq2}
        title="Square 2"
        spanClass="col-span-1 aspect-square"
        isTransparent={true}
      />
      <BentoItem
        index={3}
        imgSrc={sq3}
        title="Square 3"
        spanClass="col-span-1 aspect-square"
        isTransparent={true}
      />
      <BentoItem
        index={4}
        imgSrc={sq4}
        title="Square 4"
        spanClass="col-span-1 aspect-square"
        isTransparent={true}
      />

      {/* =========================================
          BLOCK 2: 5 HÌNH CHỮ NHẬT XẾP BÊN DƯỚI
          ========================================= */}

      {/* Hàng tiếp theo */}
      <BentoItem
        index={5}
        imgSrc={rect1}
        title="Rect 1"
        spanClass={`col-span-1 md:col-span-2 ${customAspect}`}
        isTransparent={true}
      />
      <BentoItem
        index={6}
        imgSrc={rect2}
        title="Rect 2"
        spanClass={`col-span-1 md:col-span-2 ${customAspect}`}
        isTransparent={true}
      />

      {/* Hàng tiếp theo */}
      <BentoItem
        index={7}
        imgSrc={rect3}
        title="Rect 3"
        spanClass={`col-span-1 md:col-span-2 ${customAspect}`}
        isTransparent={true}
      />
      <BentoItem
        index={8}
        imgSrc={rect4}
        title="Rect 4"
        spanClass={`col-span-1 md:col-span-2 ${customAspect}`}
        isTransparent={true}
      />

      {/* Hàng cuối: Hình lẻ loi chốt sổ nằm ở giữa */}
      <BentoItem
        index={9}
        imgSrc={rect5}
        title="Rect 5"
        spanClass={`col-span-1 md:col-span-2 lg:col-start-2 ${customAspect}`}
        isTransparent={true}
      />
    </div>
  );
}
