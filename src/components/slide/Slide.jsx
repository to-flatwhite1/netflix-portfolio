'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SlideSwiper from '../swiper/Swiper';

const Slide = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_SLIDE_API_KEY}&language=ko-KR&page=1`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results); // API에서 가져온 데이터 확인
                setSlide(data.results); // 결과 데이터를 상태에 저장
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <>
            <section>
                {slide.map((movie, index) => (
                    <div key={index} className="relative w-full h-[60vh] sm:h-[80vh]">
                        <Image
                            className="w-full h-full"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`Slide ${index}`}
                            width={300}
                            height={700}
                            objectFit="cover" // 이미지가 부모 요소를 꽉 채우도록 비율을 유지하며 크기 조정
                        />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Slide;
