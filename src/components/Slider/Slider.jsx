import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import images from '../../constants/images';
function Slider() {
    const slides = [
        {
            url:"https://file.hstatic.net/1000075078/file/banner_web_moi_-_desktop_abaa97f766434aff8576cbe098ebab6a.jpg",
        },
        {
            url: "https://file.hstatic.net/1000075078/file/desktop__e1f1e4a7032a4546aea4e2a028cf12aa.jpg",
        },
        {
            url: "https://file.hstatic.net/1000075078/file/desktop_21008bc22cde49ff89c8e89f205c23c5.jpg",
        },
        {
            url: "https://file.hstatic.net/1000075078/file/banner_web_moi_-_desktop_b1d1e0592dad4036a5bb41a349570cd7.jpg",
        },
        {
            url: "https://file.hstatic.net/1000075078/file/desktop_bb03b299edc74f1f9abd7abc030fc422.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='w-full h-[464px] m-auto pb-16 group overflow-hidden -z-10'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='z-50 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='z-50 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider