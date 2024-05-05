import { Swiper, SwiperSlide,} from 'swiper/react';
import { EffectCube, EffectCoverflow, EffectFlip, EffectCards} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';


interface swiperProps {
  effect: string,
  images: string[],
}
const SwiperComp = (props: swiperProps) => {
    return (
        <Swiper
            className='cursor-grab w-1/2 mt-14'
            spaceBetween={100}
            slidesPerView={1}
            modules={[EffectCube, EffectCoverflow, EffectFlip, EffectCards]}
            effect={props.effect}
        >
            <SwiperSlide><img src={props.images[0]}  alt="" /></SwiperSlide>
            <SwiperSlide><img src={props.images[1]}  alt="" /></SwiperSlide>
            <SwiperSlide><img src={props.images[2]}  alt="" /></SwiperSlide>
            <SwiperSlide><img src={props.images[3]}  alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default SwiperComp;