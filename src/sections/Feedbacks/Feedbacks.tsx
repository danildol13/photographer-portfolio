import "swiper/css/pagination";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import globalCSS from "@/styles/global.module.css";
import { feedbacks } from "../../constants/feedbacks";
import type { Swiper as SwiperType } from "swiper";
import css from "./Feedbacks.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Navigation } from "swiper/modules";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

export default function Feedbacks() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);
  return (
    <section>
      <div className={`${globalCSS.container} ${css.container}`}>
        <div className={css.quote}>
          <RiDoubleQuotesL />
        </div>
        <div className={css.content}>
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={(swiper) => {
              setCanPrev(!swiper.isBeginning);
              setCanNext(!swiper.isEnd);
            }}
            slidesPerView={1}
            modules={[Navigation]}
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <p className={css.text}>{feedback.text}</p>
                <p className={css.name}>{feedback.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={css.navigation}>
            <button
              className={css.backArrow}
              onClick={() => swiper?.slidePrev()}
              disabled={!canPrev}
            >
              <IoMdArrowBack size={32} />
            </button>
            <button
              className={css.forwardArrow}
              onClick={() => swiper?.slideNext()}
              disabled={!canNext}
            >
              <IoMdArrowForward size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
