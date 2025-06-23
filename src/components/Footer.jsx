import React from 'react';

import backgroundImage from '../assets/images/footer/background.png';

import previewImage1 from '../assets/images/workShowcase/Figure1.png';
import previewImage2 from '../assets/images/workShowcase/Figure.png';
import previewImage3 from '../assets/images/workShowcase/Figure3.png';

import logoImage from '../assets/icons/Logo.svg';
import EmailImage from '../assets/icons/email.svg';
import CallingImage from '../assets/icons/calling.svg';
import linkedinImage from '../assets/icons/linkedin.png'
import twitterImage from '../assets/icons/twitter.svg'
import instagramImage from '../assets/icons/instagram.png'
import facebookImage from '../assets/icons/facebook.png'
import uppImg from '../assets/icons/upp.png'
import diamond from '../assets/icons/diamondIcon.png';

const previewImages = [previewImage1, previewImage2, previewImage3];

const footerLinks = {
    information: [
        { text: 'About Us', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Portfolio', href: '#' },
        { text: 'Our Team', href: '#' },
        { text: 'Recent Projects', href: '#' },
    ],
    policies: [
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' },
        { text: 'Cookie Policy', href: '#' },
        { text: 'Accessibility', href: '#' },
        { text: 'Style Guide', href: '#' },
    ],
    portfolio: [
        { text: 'Virtual Consultations', href: '#' },
        { text: 'Custom Furniture', href: '#' },
        { text: 'Before & After', href: '#' },
        { text: 'Residential Projects', href: '#' },
        { text: 'Commercial Projects', href: '#' },
    ],
};

const FooterLinkColumn = ({ title, links }) => (
    <div>
        <h3 className="mb-6 font-heading text-lg font-unbounded">{title}</h3>
        <ul className="space-y-4">
            {links.map((link, index) => (
                <li key={index} className="flex items-center">
                    <img src={diamond} alt="icon" className="mr-3 h-4 w-4" />
                    <a href={link.href} className="text-gray-300 transition-colors hover:text-white">
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialIcons = [
        { icon: facebookImage, href: '#' },
        { icon: instagramImage, href: '#' },
        { icon: twitterImage, href: '#' },
        { icon: linkedinImage, href: '#' },
    ];

    return (
        <footer
            className="bg-brand-dark bg-cover bg-center w-full overflow-hidden text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8">

                {/* Top CTA Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
                    <h2 className="text-center md:text-left md:max-w-[60vw] font-heading text-3xl md:text-4xl font-bold sm:text-5xl">
                        Partner with Us on Your Next Project.
                        <span className="mt-4 rounded-lg bg-[#796f51] px-4 py-2 text-brand-dark inline-block">
                            Start Now
                        </span>
                    </h2>

                    {/* Image Scroll Area */}
                    <div className="flex justify-start gap-4 md:w-[60vw] overflow-x-auto md:justify-end">
                        {previewImages.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Project preview ${index + 1}`}
                                className="h-32 min-w-[150px] rounded-xl object-cover shadow-lg"
                            />
                        ))}
                    </div>
                </div>

                <hr className="my-16 border-gray-100" />

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 font-light mt-10">
                    {/* Column 1: Company Info */}
                    <div className="space-y-4 col-span-2 max-w-120">
                        <img src={logoImage} alt="RVA Logo" className="h-12" />
                        <p className="text-gray-300 font-light">
                            We are a lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec, pulvinar dapibus.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-6">
                            <div className="flex items-center gap-4">
                                <div className='h-12 w-12 rounded-full flex justify-center items-center bg-gray-300/30'>
                                    <img src={CallingImage} alt="calling" className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="font-unbounded">Call Us</p>
                                    <a href="tel:000-123-456789" className="text-white text-sm font-light hover:text-[#4c4738]">000-123-456789</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className='h-12 w-12 rounded-full flex justify-center items-center bg-gray-300/30'>
                                    <img src={EmailImage} alt="email" className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="font-unbounded">Email Us</p>
                                    <a href="mailto:Info@Example.Com" className="text-white font-light hover:text-[#4c4738]">Info@Example.Com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <FooterLinkColumn title="Information" links={footerLinks.information} />
                    <FooterLinkColumn title="Policies" links={footerLinks.policies} />
                    <FooterLinkColumn title="Portfolio" links={footerLinks.portfolio} />
                </div>
                {/* Other Columns */}

                <hr className="my-16 border-gray-100" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left pb-8">
                    <div className="flex items-center gap-4">
                        <p className="font-bold">Follow Us On:</p>
                        <div className="flex gap-2">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#796f51] text-gray-300 transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                                    aria-label="Social"
                                >
                                    <img src={social.icon} alt="social icon" className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <p className="text-lg font-light text-gray-400">
                        © {new Date().getFullYear()} RVA Rushikesh Vagadia & Associates. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex h-10 w-10 items-center justify-center rounded-md cursor-pointer bg-brand-accent text-brand-dark transition hover:-translate-y-1 rounded-lg border border-[#796f51] text-gray-300 transition hover:border-brand-accent hover:bg-brand-accent hover:text-white bg-[#796f51]"
                        aria-label="Scroll to top"
                    >
                        <img src={uppImg} alt="Scroll to top" className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
