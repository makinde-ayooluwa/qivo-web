import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack, MdHome, MdSearch } from "react-icons/md";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-5 py-12">
            <div className="w-full max-w-2xl text-center">

                {/* Logo */}
                <div className="mb-10">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            width={180}
                            className="mx-auto"
                            alt="Sphera"
                        />
                    </Link>
                </div>

                {/* Error illustration */}
                <div className="relative mb-6">
                    <h1 className="text-[120px] sm:text-[170px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-900">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm sm:text-base font-semibold tracking-[0.4em] text-green-400 bg-[var(--not-found)] px-4">
                            PAGE NOT FOUND
                        </span>
                    </div>
                </div>

                {/* Error message */}
                <div className="space-y-4 mb-9">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Oops! You've lost your way.
                    </h2>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                        The page you're looking for doesn't exist, may have
                        been moved, or is temporarily unavailable. Don't worry,
                        there's plenty more to explore on Sphera.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition-all duration-200"
                    >
                        <MdHome className="text-xl" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-[#333] hover:bg-white/5 font-medium transition-all duration-200"
                    >
                        <MdArrowBack className="text-xl" />
                        Go Back
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-6 border-t border-[#222]">
                    <p className="text-sm text-gray-500">
                        Lost in the Sphera? There's always another way around.
                    </p>
                    <p className="text-xs text-gray-600 mt-3">
                        © {new Date().getFullYear()} Sphera. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
}