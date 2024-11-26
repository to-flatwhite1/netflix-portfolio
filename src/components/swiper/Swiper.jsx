import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';

export default function SlideSwiper() {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {' '}
                {slide.map((movie, index) => (
                    <SwiperSlide key={index} className="relative w-full h-[60vh] sm:h-[80vh]">
                        <Image
                            className="w-full h-full"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`Slide ${index}`}
                            width={300}
                            height={700}
                            objectFit="cover" // 이미지가 부모 요소를 꽉 채우도록 비율을 유지하며 크기 조정
                        />
                    </SwiperSlide>
                ))}
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}
