'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SlideSwiper() {
    const [slide, setSlide] = useState([]);

    const mySwiper = {
        modules: [Autoplay, Pagination],
        autoplay: {
            delay: 2500, // 자동 재생 딜레이 설정
            disableOnInteraction: false, // 사용자가 상호작용해도 자동 재생 유지
        },

        speed: 800, // 슬라이드 전환 속도 설정
        slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
        spaceBetween: 0, // 슬라이드 간 간격
        loop: true,
        pagination: {
            clickable: true,
        },
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_SLIDE_API_KEY}&language=ko-KR&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                setSlide(data.results); // API에서 가져온 데이터 상태에 저장
                console.log(data);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <Swiper
            {...mySwiper}
            style={{
                height: '33rem',
                width: 'calc(100% - 40px)', // 양옆 패딩을 고려한 너비
            }}
            className="rounded-3xl tablet:w-full"
        >
            {slide.map((movie) => (
                <SwiperSlide key={movie.id} className="w-full h-full relative">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={`Slide ${movie.title}`}
                        fill
                        className="tablet:object-cover tablet:object-center tablet:h-fit"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
