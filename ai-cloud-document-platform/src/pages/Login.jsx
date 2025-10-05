import React, { useState } from "react";

export default function LoginForm() {
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-4">
                <h2 className="text-3xl font-semibold text-center">
                    {isLoginMode ? "Login" : "Sign Up"}
                </h2>
            </div>

            {/* Tab Controls */}
            <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
                <button
                className={`w-1/2 text-lg font-medium transition-all z-10 ${
                    isLoginMode ? "text-white" : "text-black"}`}
                onClick={() => setIsLoginMode(true)} 
                >
                    Login
                </button>
                <button
                className={`w-1/2 text-lg font-medium transition-all z-10 ${
                    !isLoginMode ? "text-white" : "text-black"
                }`}
                onClick={() => setIsLoginMode(false)}
                >
                Sign Up
                </button>
                <div className={`absolute top-0 h-full w-1/2 rounded bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all
                    ${isLoginMode ? "left-0" : "left-1/2"}`}>
                </div>
            </div>

            {/* Form Section */}
            <form className="space-y-4">
            {/* sign-sp only Field */}
            {!isLoginMode && (
             <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
             />
            )}
            {/* Shared Fields */}
            <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
            <input type="password"
            placeholder="Password"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500"
            />

            </form>

        </div>
    );
}