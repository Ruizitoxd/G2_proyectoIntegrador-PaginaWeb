import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/Carrusel.css';

import imagen1 from '../Images/carrusel0.png';
import imagen2 from '../Images/carrusel1.png';
import imagen3 from '../Images/carrusel3.png';
import imagen4 from '../Images/carrusel4.png';

const slides = [
    {
        subtitle: 'Bienvenido al IDEAM 2025',
        text: 'Descubre los ecosistemas estratégicos de Colombia a través de nuestro sistema de monitoreo. Desde los bosques húmedos tropicales hasta los páramos andinos, conoce cómo protegemos estas áreas. Si eres parte de nuestro equipo de campo, inicia sesión para acceder a mapas interactivos, protocolos de muestreo y el sistema de reporte de datos ambientales.',
        image: imagen1,
    },
    {
        subtitle: 'Esta es la agenda programática del Ideam en la COP16',
        text: 'Con la charla “Generación y manejo de residuos peligrosos 2018 - 2022 y posibles efectos en la biodiversidad”, el Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam) abrirá mañana lunes el primero de los 14 eventos que organiza en la agenda programática de la COP16 repartidos entre charlas magistrales, paneles, lanzamientos y talleres.',
        image: imagen2,
    },
    {
        subtitle:
            'Información del IDEAM es de ¿excelente calidad?, según docente de la Universidad Central',
        text: 'La visita de la profesora y varios estudiantes de la institución educativa, es muestra del creciente interés de la comunidad académica por los procesos que adelanta el Instituto de Hidrología, Meteorología y Estudios Ambientales IDEAM.',
        image: imagen3,
    },
    {
        subtitle:
            'Estudiantes de la Universidad del Cauca destacan información del IDEAM',
        text: 'Durante el recorrido de los estudiantes, Alberto Pardo, funcionario de la Oficina de Pronósticos y Alertas del Instituto, les explicó la forma como se monitorea el clima en el territorio nacional y las diferentes tecnologías que se utilizan para este propósito, mientras que Patricia León de la Subdirección de Ecosistemas, les mostro el trabajo que se viene desarrollando en la captura, análisis de información y servicios geográficos que ofrece la plataforma de Geomática del IDEAM.',
        image: imagen4,
    },
];

const Carrusel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
        setIsAnimating(true);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(true);
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? '100%' : '-100%',
            opacity: 1,
            position: 'absolute',
        }),
        center: {
            x: 0,
            opacity: 1,
            position: 'absolute',
        },
        exit: (dir) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 1,
            position: 'absolute',
        }),
    };

    return (
        <div className="carousel-container">
            <button
                className="arrow left"
                onClick={prevSlide}
                disabled={isAnimating}
            >
                ❮
            </button>

            <div className="carousel-slide-wrapper">
                <AnimatePresence custom={direction}>
                    <motion.div
                        key={index}
                        className="carousel-slide-container"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                        }}
                        onAnimationComplete={() => setIsAnimating(false)}
                    >
                        <div className="carousel-text">
                            <div>
                                <h2 className="carousel-subtitle">
                                    {slides[index].subtitle}
                                </h2>
                                <p>{slides[index].text}</p>
                            </div>
                        </div>
                        <div className="carousel-image">
                            <img
                                src={slides[index].image}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <button
                className="arrow right"
                onClick={nextSlide}
                disabled={isAnimating}
            >
                ❯
            </button>
        </div>
    );
};

export default Carrusel;
