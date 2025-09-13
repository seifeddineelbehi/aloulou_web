'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {

    return (
        <>
            <footer className="footer bg-slate-950 relative text-gray-200 dark:text-gray-200">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <Image src="/images/logo.png" className="block mx-auto" alt="Aloulou Logo" width={64} height={64} />
                                        <p className="max-w-xl mx-auto text-slate-400 mt-8">
                                            Your intelligent AI companion that speaks Tunisian. Experience natural conversations 
                                            in your native dialect with advanced AI capabilities designed for Tunisians.
                                        </p>
                                        
                                        {/* Account Management Links */}
                                        <div className="mt-6 space-x-4">
                                            <Link href="/delete_account" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                                                Delete Account
                                            </Link>
                                            <span className="text-slate-600">|</span>
                                            <Link href="/privacy_policy" className="text-slate-400 hover:text-[#FF6F61] transition-colors duration-300">
                                                Privacy Policy
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container text-center">
                        <div className="grid grid-cols-1 items-center justify-center">
                            <div className="text-center">
                                <p className="text-gray-400">©
                                    {new Date().getFullYear()} Aloulou AI. Made with <i
                                        className="mdi mdi-heart text-[#FF6F61]"></i> for Tunisia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}