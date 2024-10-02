import React from 'react'

export default function Header({ scrollToSection, section1Ref, section2Ref, section3Ref }) {
    return (
        <div className="flex justify-between items-center mx-auto animate-top-slide-in px-4 md:px-0">
            <div>
                <p className="font-bold text-customGreen text-3xl cursor-pointer"   onClick={() => scrollToSection(section1Ref)}>LegalMind</p>
            </div>
            <div>
                <ul className="flex gap-5 items-center cursor-pointer">
                    <li   onClick={() => scrollToSection(section2Ref)}>Features</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex items-center">
                <button className="bg-customGreen px-3 py-1 text-white rounded-md">Try Now</button>
            </div>
        </div>
    )
}
