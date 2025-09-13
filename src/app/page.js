'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
 
const NavbarSmallLight = dynamic(()=>import('./components/navbar-small-light'));
const Footer = dynamic(()=>import('./components/footer')); 
const About = dynamic(()=>import('./components/about'));
const OurServices = dynamic(()=>import('./components/our-services'));
const GetInTouch = dynamic(()=>import('./components/get-in-touch'));
 
import * as Unicons from '@iconscout/react-unicons';

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function Index() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavbarSmallLight />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            <section className="py-36 lg:py-56 w-full table relative bg-[url('/images/bg/aloulou-hero-bg.jpg')] bg-top bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-gradient-to-t to-slate-950/50 via-slate-950/75 from-slate-950"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        
                        <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white font-lexend">Your AI Companion That Speaks Tunisian</h3>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-inter">Experience natural conversations with Aloulou - the first AI assistant designed specifically for Tunisians, speaking your dialect fluently.</p>
                        
                        {/* CTA Buttons */}
                        <div className="mt-8 space-x-4">
                            <Link href="/download" className="py-3 px-8 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#FF6F61] hover:bg-[#E55A4F] border-[#FF6F61] hover:border-[#E55A4F] text-white rounded-md">
                                Try Aloulou Free
                            </Link>
                            <Link href="/pricing" className="py-3 px-8 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center border-white/20 hover:bg-white/10 text-white rounded-md">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <About />
            
            <OurServices title="Aloulou Features" desc="Discover the powerful AI capabilities designed specifically for Tunisian users, from natural dialect conversations to premium file processing."/>
            
            {/* Features Highlight Section */}
            <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            
                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                                            <div>
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 font-lexend">Made for Tunisia</h6>
                                                    <h3 className="md:text-2xl text-xl font-medium text-white mt-2 font-lexend">AI that understands <br /> your culture & dialect.</h3>
                                                </div>
                                            </div>

                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Aloulou combines advanced AI technology with deep understanding of Tunisian culture, expressions, and dialect. Chat naturally, upload files, analyze images - all in your native language.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-[#FF6F61]"></div>
            </section>

            {/* Subscription Benefits Section */}
            <section className="relative md:py-24 py-16" id="pricing">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">Why Choose Aloulou Premium?</h3>
                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
                            Unlock the full potential of AI conversations in Tunisian dialect with our premium subscription features.
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FF6F61]/10">
                                <Unicons.UilUpload className="w-8 h-8 text-[#FF6F61]" />
                            </div>
                            <h5 className="text-lg font-semibold mb-2">File Upload & Analysis</h5>
                            <p className="text-slate-400">Upload documents, PDFs, and images for AI-powered analysis and insights in Tunisian dialect.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FF6F61]/10">
                                <Unicons.UilChatBubbleUser className="w-8 h-8 text-[#FF6F61]" />
                            </div>
                            <h5 className="text-lg font-semibold mb-2">Unlimited Conversations</h5>
                            <p className="text-slate-400">Enjoy unlimited AI conversations without daily limits or restrictions.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FF6F61]/10">
                                <Unicons.UilRocket className="w-8 h-8 text-[#FF6F61]" />
                            </div>
                            <h5 className="text-lg font-semibold mb-2">Priority Support</h5>
                            <p className="text-slate-400">Get faster response times and priority access to new features as they launch.</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <Link href="/pricing" className="py-3 px-8 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#FF6F61] hover:bg-[#E55A4F] border-[#FF6F61] hover:border-[#E55A4F] text-white rounded-md">
                            View Pricing Plans
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial Preview */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testimonials">
                <div className="container">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">Tunisians Love Aloulou</h3>
                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto mb-8">
                            See what users across Tunisia are saying about their experience with Aloulou AI.
                        </p>
                        
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center">
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                                    "Finally, an AI that understands when I say 'برشا' or 'زعمة'! Aloulou feels like chatting with a smart Tunisian friend."
                                </p>
                                <div className="flex items-center justify-center space-x-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Unicons.UilStar key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400">- Amira from Tunis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <GetInTouch />
            <Footer />
        </>
    )
}