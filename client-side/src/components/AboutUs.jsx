import React from 'react'
import ConsumerImage from '/src/assets/guilty-rafiki.svg';
import LawyerImage from '/src/assets/law_firm.svg';
import LawFirmImage from '/src/assets/Questions.svg';

export default function AboutUs() {
    return (
        <div>
            <div
                className="flex items-center flex-col mb-4">
                <div>
                    <h4
                        className='text-2xl font-semibold'>
                        What is LegalMind for?
                    </h4>
                </div>
                <p className="lg:w-1/2 text-center">
                    Our goal is simple: to make justice widely available. Whether you're a consumer, practicing law, or studying it, we're here for you.
                </p>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    {/* AI for Consumers */}
                    <div className="flex-1 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
                        <img
                            src={ConsumerImage}
                            alt="AI for Consumers"
                            className="w-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI For Consumers</h3>
                        <p className="text-gray-600">From deciphering complex terms to understanding rights, we've got you covered.</p>
                    </div>

                    {/* AI for Lawyers */}
                    <div className="flex-1 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
                        <img
                            src={LawyerImage}
                            alt="AI for Lawyers"
                            className="w-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI For Lawyers</h3>
                        <p className="text-gray-600">Let us handle the research and paperwork while you elevate client relationships.</p>
                    </div>

                    {/* AI for Law Firms */}
                    <div className="flex-1 border border-gray-200 rounded-lg p-6 text-center shadow-lg">
                        <img
                            src={LawFirmImage}
                            alt="AI for Law Firms"
                            className="w-24 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI For Law Firms</h3>
                        <p className="text-gray-600">Streamlining processes and boosting efficiency, we're revolutionizing the way law firms operate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
