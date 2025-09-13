'use client'
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase configuration from environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Custom Icons
const EmailIcon = () => (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LockIcon = () => (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export default function DeleteAccount() {
    // States
    const [currentStep, setCurrentStep] = useState('credentials'); // 'credentials', 'confirmation', 'success'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Initialize Firebase Auth and Firestore
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle credentials submission
    const handleCredentialsSubmit = async () => {
        if (!email.trim() || !password.trim()) {
            setError('Please enter both email and password');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Sign in with email and password to verify credentials
            await signInWithEmailAndPassword(auth, email, password);
            
            // If successful, move to confirmation step
            setCurrentStep('confirmation');
        } catch (error) {
            console.error('Error signing in:', error);
            
            switch (error.code) {
                case 'auth/user-not-found':
                    setError('No account found with this email address.');
                    break;
                case 'auth/wrong-password':
                    setError('Incorrect password. Please try again.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email address format.');
                    break;
                case 'auth/user-disabled':
                    setError('This account has been disabled.');
                    break;
                case 'auth/too-many-requests':
                    setError('Too many failed attempts. Please try again later.');
                    break;
                case 'auth/invalid-credential':
                    setError('Invalid email or password. Please check your credentials.');
                    break;
                default:
                    setError('Failed to verify credentials. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Delete account after confirmation
    const deleteAccount = async () => {
        setIsLoading(true);
        setError('');

        try {
            const user = auth.currentUser;
            
            if (!user) {
                throw new Error('User not authenticated');
            }
            
            console.log('Deleting account for user:', user.uid);
            
            // Find and delete user data from Firestore using email
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('email', '==', email));
            const querySnapshot = await getDocs(q);
            
            console.log('Found documents:', querySnapshot.size);
            
            // Delete all user documents with this email
            const deletePromises = [];
            querySnapshot.forEach((doc) => {
                console.log('Deleting document:', doc.id);
                deletePromises.push(deleteDoc(doc.ref));
            });
            
            if (deletePromises.length > 0) {
                await Promise.all(deletePromises);
                console.log('Firestore documents deleted');
            } else {
                console.log('No Firestore documents found to delete');
            }
            
            // Delete the Firebase Auth user
            console.log('Deleting auth user...');
            await user.delete();
            console.log('Auth user deleted successfully');
            
            setCurrentStep('success');
            
        } catch (error) {
            console.error('Error deleting account:', error);
            
            switch (error.code) {
                case 'auth/requires-recent-login':
                    setError('Session expired. Please try logging in again.');
                    setCurrentStep('credentials');
                    break;
                default:
                    setError(`Failed to delete account: ${error.message}`);
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Reset to credentials step
    const goBackToCredentials = () => {
        setCurrentStep('credentials');
        setError('');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800 py-12">
            <div className="max-w-md mx-auto px-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-red-200 dark:border-red-800">
                        <h1 className="text-xl font-semibold text-red-800 dark:text-red-300 text-center">
                            Delete Account
                        </h1>
                    </div>

                    <div className="p-6">
                        {/* Step 1: Email and Password Entry */}
                        {currentStep === 'credentials' && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="mx-auto text-blue-500 mb-4">
                                        <EmailIcon />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Verify Your Identity
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Enter your email and password to verify your identity before deleting your account
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                            className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#7DAE81] focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                                className="w-full py-3 px-4 pr-12 border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#7DAE81] focus:border-transparent"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                            >
                                                {showPassword ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                                        <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <button
                                        onClick={handleCredentialsSubmit}
                                        disabled={isLoading || !email.trim() || !password.trim()}
                                        className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-md transition duration-300 flex items-center justify-center font-medium"
                                    >
                                        {isLoading ? (
                                            <>
                                                <LoadingSpinner />
                                                Verifying...
                                            </>
                                        ) : (
                                            'Verify Credentials'
                                        )}
                                    </button>
                                    
                                    <button
                                        onClick={() => {
                                            if (typeof window !== 'undefined') {
                                                window.location.href = '/';
                                            }
                                        }}
                                        className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition duration-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Confirmation */}
                        {currentStep === 'confirmation' && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="mx-auto text-red-500 mb-4">
                                        <LockIcon />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Confirm Account Deletion
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        This action cannot be undone. All your data will be permanently deleted.
                                    </p>
                                </div>

                                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                                        What will be deleted:
                                    </h3>
                                    <ul className="text-red-700 dark:text-red-400 text-sm space-y-1">
                                        <li>• Your account and login credentials</li>
                                        <li>• All personal data and preferences</li>
                                        <li>• Account history and activity</li>
                                        <li>• Any stored files or documents</li>
                                    </ul>
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Account: <span className="font-medium text-gray-900 dark:text-white">{email}</span>
                                    </p>
                                </div>

                                {error && (
                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                                        <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <button
                                        onClick={deleteAccount}
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-md transition duration-300 flex items-center justify-center font-medium"
                                    >
                                        {isLoading ? (
                                            <>
                                                <LoadingSpinner />
                                                Deleting Account...
                                            </>
                                        ) : (
                                            'Yes, Delete My Account Permanently'
                                        )}
                                    </button>
                                    
                                    <button
                                        onClick={goBackToCredentials}
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition duration-300 disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Success */}
                        {currentStep === 'success' && (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="mx-auto text-green-500 mb-4">
                                        <CheckCircleIcon />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Account Deleted Successfully
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Your account and all associated data have been permanently deleted.
                                    </p>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                    <p className="text-green-800 dark:text-green-300 text-center">
                                        Thank you for using Fasti. We&apos;re sorry to see you go.
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        if (typeof window !== 'undefined') {
                                            window.location.href = '/';
                                        }
                                    }}
                                    className="w-full py-3 px-4 bg-[#7DAE81] hover:bg-[#6A9E73] text-white rounded-md transition duration-300 font-medium"
                                >
                                    Return to Home
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Back to Home Link */}
                {currentStep !== 'success' && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => {
                                if (typeof window !== 'undefined') {
                                    window.location.href = '/';
                                }
                            }}
                            className="text-[#7DAE81] hover:text-[#6A9E73] font-medium transition duration-300"
                        >
                            ← Back to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}