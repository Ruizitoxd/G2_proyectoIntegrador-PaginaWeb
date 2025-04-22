import React, { useState, useEffect, useRef } from 'react';
import '../styles/SliderFilter.css';

export default function SliderFilter() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(200);
    const rangeMin = 0;
    const rangeMax = 200;
    const step = 1;
    const minGap = 10;

    const progressRef = useRef(null);
    const minLabelRef = useRef(null);
    const maxLabelRef = useRef(null);

    useEffect(() => {
        updateSliderUI();
    }, [min, max]);

    const updateSliderUI = () => {
        const minPercent = (min / rangeMax) * 100;
        const maxPercent = (max / rangeMax) * 100;

        progressRef.current.style.left = `${minPercent}%`;
        progressRef.current.style.right = `${100 - maxPercent}%`;

        minLabelRef.current.style.left = `${minPercent}%`;
        maxLabelRef.current.style.left = `${maxPercent}%`;
    };

    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (max - value >= minGap) {
            setMin(value);
        } else {
            setMin(max - minGap);
        }
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (value - min >= minGap && value <= rangeMax) {
            setMax(value);
        } else {
            setMax(min + minGap);
        }
    };

    return (
        <div className="slider-wrapper">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                ID Conglomerados
            </h5>
            <br />
            <div className="slider">
                <div className="progress" ref={progressRef}></div>
                <span className="thumb-label" ref={minLabelRef}>
                    {min}
                </span>
                <span className="thumb-label" ref={maxLabelRef}>
                    {max}
                </span>
            </div>

            <div className="range">
                <input
                    type="range"
                    className="min-range"
                    min={rangeMin}
                    max={rangeMax}
                    value={min}
                    step={step}
                    onChange={handleMinChange}
                />
                <input
                    type="range"
                    className="max-range"
                    min={rangeMin}
                    max={rangeMax}
                    value={max}
                    step={step}
                    onChange={handleMaxChange}
                />
            </div>
        </div>
    );
}
