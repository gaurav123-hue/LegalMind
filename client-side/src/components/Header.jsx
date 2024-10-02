import React from 'react'

export default function Header({ scrollToSection, section1Ref, section2Ref, section3Ref, section4Ref }) {
    return (
        <div className="flex justify-between items-center mx-auto animate-top-slide-in px-8 ">
            <div>
                <p className="font-bold text-customGreen lg:text-3xl text-2xl cursor-pointer flex h-10 w-10 gap-x-2 items-center"   onClick={() => scrollToSection(section1Ref)}><img
                                src='/images/lmLogo.png'/>LegalMind</p>
            </div>
            <div className="sm:block hidden ">
                <ul className="flex lg:gap-5 gap-x-2 items-center cursor-pointer">
                    <li   onClick={() => scrollToSection(section2Ref)}>Features</li>
                    <li onClick={() => scrollToSection(section3Ref)}>About Us</li>
                    <li onClick={() => scrollToSection(section4Ref)}>Contact</li>
                </ul>
            </div>
            <div className="flex items-center sm:text-normal text-sm py-4">
                <button className="bg-customGreen px-3 py-1 text-white rounded-md">Try Now</button>
            </div>
        </div>
    )
}
