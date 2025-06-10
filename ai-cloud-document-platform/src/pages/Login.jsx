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
            </div>

        </div>
    )
}