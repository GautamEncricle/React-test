import React, {useState, useEffect} from 'react';

import image1 from '../assets/images/Subscription/Ellipse 4.png'
import image2 from '../assets/images/Subscription/Ellipse 5.png'
import image3 from '../assets/images/Subscription/Ellipse 6.png'
import image4 from '../assets/images/Subscription/Ellipse 7.png'

// Data for the member avatars
const members = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
];

import backgroundImage from '../assets/images/Subscription/newsletter-img-1-1-2048x853.webp.png';
const SignupSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            className={`relative flex w-full items-start justify-center ${isMobile ? '' : 'h-screen bg-cover bg-center bg-no-repeat'
                }`}
            style={{
                backgroundImage: isMobile ? 'none' : `url(${backgroundImage})`,
            }}
        >


            <div className="relative z-10 flex flex-col items-center p-4 text-center mt-5">
                {/* Sub-heading */}
                <p className="font-poppins text-sm font-semibold uppercase tracking-widest text-[#a39c88]">
                    JOIN NOW
                </p>

                {/* Main Heading */}
                <h2 className="mt-4 font-unbounded text-2xl md:text-4xl font-bold text-brand-dark">
                    Signup To Transform Your Space
                </h2>

                {/* Social Proof - Members */}
                <div className="mt-6 flex items-center">
                    <div className="flex -space-x-4">
                        {members.map(member => (
                            <img
                                key={member.id}
                                src={member.src}
                                alt="Member"
                                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                            />
                        ))}
                    </div>
                    <p className="ml-6 font-semibold text-gray-800">
                        1,800+ <span className="font-normal text-gray-600">Members</span>
                    </p>
                </div>

                {/* Signup Form */}
                <form className="mt-8 w-full max-w-lg">
                    <div className="flex flex-col items-center rounded-lg bg-white/80 p-2 shadow-lg backdrop-blur-sm sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter mail ID"
                            className="w-full flex-grow bg-transparent p-3 text-gray-800 placeholder-gray-500 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="mt-2 w-full shrink-0 rounded-md bg-[#796f51] px-8 py-3 font-semibold text-white transition hover:bg-opacity-90 sm:mt-0 sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>

                {/* Privacy Policy */}
                <div className="mt-4 flex items-center text-xs text-gray-700">
                    <input type="checkbox" id="privacy" defaultChecked className="mr-2 h-4 w-4 rounded border-gray-300 text-brand-brown focus:ring-brand-brown" />
                    <label htmlFor="privacy">
                        Your email is safe with us, we don't spam.{" "}
                        <a href="#" className="font-semibold text-brand-dark hover:underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default SignupSection;