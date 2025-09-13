'use client'
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#FF6F61] px-6 py-8">
                        <h1 className="text-3xl font-bold text-white text-center">
                            Privacy Policy
                        </h1>
                        <p className="text-red-100 text-center mt-2">
                            Last updated: January 2025
                        </p>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Introduction
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                This Privacy Policy explains how Aloulou AI collects, uses, and protects your personal 
                                information when you use our AI assistant services. We are committed to protecting your 
                                privacy while providing you with the best AI experience in Tunisian dialect.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Information We Collect
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                        Account Information
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        We collect your email address, password, and subscription preferences when you create an account.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                        Conversation Data
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        We process and temporarily store your messages to Aloulou to provide AI responses. 
                                        This includes text messages, voice recordings, and any files you upload.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                        Uploaded Content
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Premium subscribers can upload images, documents, and files for AI analysis. 
                                        We process this content to provide you with insights and responses.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Your Information */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                How We Use Your Information
                            </h2>
                            <div className="space-y-3">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>AI Response Generation:</strong> We use your messages to generate personalized responses in Tunisian dialect.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Service Improvement:</strong> We analyze usage patterns to improve our AI models and user experience.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Account Management:</strong> We use your information to manage subscriptions, process payments, and provide customer support.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Security:</strong> We monitor for abuse, fraud, and violations of our terms of service.
                                </p>
                            </div>
                        </section>

                        {/* AI Training and Content Usage */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                AI Training and Content Usage
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Your conversations may be used to improve Aloulou's understanding of Tunisian dialect 
                                and cultural context. Personal identifiers are removed before any training data usage. 
                                Premium subscribers can opt out of having their conversations used for training purposes.
                            </p>
                        </section>

                        {/* Data Sharing and Third Parties */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Data Sharing and Third Parties
                            </h2>
                            <div className="space-y-3">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>AI Service Providers:</strong> We use trusted AI infrastructure providers to process your requests.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Payment Processors:</strong> We share billing information with secure payment processors for subscription management.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our users' safety.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <strong>No Content Sales:</strong> We never sell your conversations or personal content to third parties for marketing purposes.
                                </p>
                            </div>
                        </section>

                        {/* File Upload and Processing */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                File Upload and Processing
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Premium subscribers can upload images and documents for AI analysis. Uploaded files are:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Processed securely using encrypted connections</li>
                                <li>Automatically deleted after 30 days unless saved to your account</li>
                                <li>Never shared with other users or third parties</li>
                                <li>Scanned for malicious content before processing</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Data Security
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                We implement industry-standard security measures including end-to-end encryption for 
                                conversations, secure cloud storage, regular security audits, and two-factor authentication 
                                options. All data transmission is encrypted using TLS protocols.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Data Retention
                            </h2>
                            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                <p><strong>Conversations:</strong> Stored for up to 12 months to provide conversation history and improve responses</p>
                                <p><strong>Account Data:</strong> Retained while your account is active and for 2 years after deletion</p>
                                <p><strong>Uploaded Files:</strong> Automatically deleted after 30 days (premium users can save files longer)</p>
                                <p><strong>Payment Data:</strong> Retained as required by financial regulations</p>
                            </div>
                        </section>

                        {/* Your Rights and Controls */}
                        <section>
                            <h2 className="text-2xl font-semibent text-[#FF6F61] mb-4">
                                Your Rights and Controls
                            </h2>
                            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                <p><strong>Delete Conversations:</strong> You can delete individual conversations or your entire chat history</p>
                                <p><strong>Account Deletion:</strong> Request complete account deletion through our app settings</p>
                                <p><strong>Data Export:</strong> Download your conversation history and account data</p>
                                <p><strong>Opt-out Training:</strong> Premium users can opt out of having conversations used for AI training</p>
                                <p><strong>Subscription Control:</strong> Cancel or modify your subscription at any time</p>
                            </div>
                        </section>

                        {/* Age Requirements */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Age Requirements
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Aloulou is intended for users 16 years and older in Tunisia. Users under 18 should have 
                                parental consent before using our services. We do not knowingly collect personal information 
                                from children under 16.
                            </p>
                        </section>

                        {/* International Data Transfers */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                International Data Transfers
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Your data may be processed in secure data centers outside Tunisia to provide AI services. 
                                We ensure all international transfers comply with applicable data protection laws and use 
                                appropriate safeguards to protect your information.
                            </p>
                        </section>

                        {/* Changes to Privacy Policy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Changes to Privacy Policy
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                We may update this Privacy Policy to reflect changes in our practices, technology, or 
                                legal requirements. We will notify users of significant changes through the app and email. 
                                Continued use of Aloulou after changes indicates acceptance of the updated policy.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-[#FF6F61] mb-4">
                                Contact Information
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                For questions about this Privacy Policy, data requests, or privacy concerns, please contact us at:
                            </p>
                            <div className="space-y-2">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Email:</strong> privacy@aloulou.tn
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Support:</strong> contact@aloulou.tn
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Phone:</strong> +216 12 345 678
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Location:</strong> Tunis, Tunisia
                                </p>
                            </div>
                        </section>

                        {/* Back to Home */}
                        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        window.location.href = '/';
                                    }
                                }}
                                className="inline-flex items-center px-6 py-3 bg-[#FF6F61] hover:bg-[#E55A4F] text-white rounded-md transition duration-300 font-medium"
                            >
                                ← Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}