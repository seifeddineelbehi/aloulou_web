'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function About() {
    return (
        <>
            <section className="relative md:py-24 py-16" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <Image src="/images/about.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}}/>
                                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                </div>  
                            </div> 
                        </div>
                        <div className="lg:col-span-7">
                            <div className="lg:ms-7">
                                <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">About Aloulou: Your Tunisian AI Companion</h3>

                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-inter mx-auto">
                                    Aloulou is Tunisia&apos;s first AI assistant that truly understands and speaks your language. Designed specifically for Tunisian culture and dialect, 
                                    Aloulou communicates with you in authentic Tunisian Arabic, making AI technology accessible and natural for every Tunisian. 
                                    Whether you need help with daily tasks, creative projects, or professional work, Aloulou understands your unique expressions, 
                                    cultural references, and local context. With premium subscription options, you can unlock advanced features including 
                                    file uploads, image analysis, and extended conversations - all while chatting naturally in your mother tongue.
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};