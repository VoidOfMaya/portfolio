import style from './carousel.module.css';
import { useState, useEffect } from 'react';
//import { Link } from "react-router"

const Carousel = ({pages = []}) =>{
    const [currentIndex, setCurrentIndex] = useState(0);

    /*
    useEffect(()=>{
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 20000);
        return () => clearInterval(interval);
    },[]);
    */
    const prevPage = () => {
        setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
    };

    const nextPage = () => {
        setCurrentIndex((prev) => (prev + 1) % pages.length);
    };

    const goToPage = (index) => {
        setCurrentIndex(index);
    };

    return(
        <div className={style.carousel}>
            <div
                className={style.track}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {pages.map((Component, index) => (
                <Component key={index} />
                ))}
            </div>
            {/* Arrows */}
            <button onClick={prevPage}>previous page</button>
            <button onClick={nextPage}>next page</button>
        </div>
        
    )
}
export {
    Carousel
}