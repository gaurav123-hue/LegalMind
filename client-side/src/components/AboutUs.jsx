import React from "react";
import ConsumerImage from "../assets/guilty-rafiki.svg";
import LawyerImage from "../assets/law_firm.svg";
import LawFirmImage from "../assets/Questions-rafiki.svg";

export default function AboutUs() {
    return (
        <div>
            <div className="flex items-center flex-col mb-4">
                <div>
                    <h4 className="text-2xl font-semibold">
                        What is LegalMind for?
                    </h4>
                </div>
                <p className="lg:w-1/2 text-center">
                    Our goal is simple: to make justice widely available. Whether you're a consumer, practicing law, or studying it, we're here for you.
                </p>
            </div>
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* AI for Consumers */}
                    <div className="flex-1 border border-gray-200 bg-white rounded-lg p-4 text-center shadow-lg max-w-xs mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI For Consumers</h3>
                        <p className="text-gray-600">From deciphering complex terms to understanding rights, we've got you covered.</p>
                        <img
                            src={ConsumerImage}
                            alt="AI for Consumers"
                            className="w-1/2 md:w-auto mx-auto p-4"
                        />
                    </div>

                    {/* AI for Lawyers */}
                    <div className="flex-1 border border-gray-200 bg-white rounded-lg p-4 text-center shadow-lg max-w-xs mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI For Lawyers</h3>
                        <p className="text-gray-600">Let us handle the research and paperwork while you elevate client relationships.</p>
                        <img
                            src={LawyerImage}
                            alt="AI for Lawyers"
                            className="w-1/2 md:w-auto mx-auto p-4"
                        />
                    </div>

                    {/* AI for Law Firms */}
                    <div className="flex-1 border border-gray-200 bg-white rounded-lg p-4 text-center shadow-lg max-w-xs mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI For Law Firms</h3>
                        <p className="text-gray-600">Streamlining processes and boosting efficiency, we're revolutionizing the way law firms operate.</p>
                        <img
                            src={LawFirmImage}
                            alt="AI for Law Firms"
                            className="w-1/2 md:w-auto mx-auto p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
