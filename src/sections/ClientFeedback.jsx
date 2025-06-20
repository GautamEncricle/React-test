import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import quoteIcon from '../assets/icons/quote.svg'

const feedbacks = [
    {
        id: 1,
        text: "Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Blandit aliquam etiam erat velit scelerisque. Mauris ultrices eros in cursus turpis massa. Imperdiet dui accumsan sit amet.",
    },
    {
        id: 2,
        text: "A different testimonial to show the slider functionality. We are extremely pleased with the results. The team was professional, timely, and the final product exceeded our expectations. Highly recommended!",
    },
    {
        id: 3,
        text: "Working with them was a game-changer for our brand. Their attention to detail and creative approach helped us achieve our goals. The communication throughout the project was outstanding.",
    },
];

const ClientFeedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + feedbacks.length) % feedbacks.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % feedbacks.length
        );
    };

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                {/* Section Header */}
                <p className="font-semibold uppercase tracking-widest text-[#6B624E]">
                    CLIENT REVIEWS
                </p>
                <h2 className="mt-2 text-4xl font-bold text-gray-800 md:text-5xl">
                    Feedback From Clients
                </h2>

                {/* Testimonial Card Wrapper */}
                <div className="relative mt-12 min-h-[250px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full"
                        >
                            {/* The background shadow layer */}
                            <div className="absolute inset-0 z-0 rounded-lg bg-[#e4e2dc] scale-[1.01] translate-x-4 translate-y-4"></div>

                            {/* The main content card */}
                            <div className="relative z-10 flex flex-col items-start rounded-xl bg-[#796f51] p-8 text-left text-white md:flex-row md:p-15">
                                <p className="text-lg md:text-xl relative w-[50vw] md:w-[52vw] overflow-hidden">
                                    {feedbacks[currentIndex].text}
                                </p>
                                <img src={quoteIcon} alt="quotes" className='h-15 w-20 absolute top-10 right-5 md:right-12' />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous feedback"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-gray-800 transition hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next feedback"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;