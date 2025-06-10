import React, { useState } from "react";

export default function LoginForm() {
    const [isLoginForm, setLoginForm] = useState(true);

    return (
        <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-4">
                <h2 className="text-3xl font-semibold text-center">
                    {isLoginForm ? "Login" : "Sign Up"}
                </h2>
            </div>

            {/* Tab Controls */}
            <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden"></div>

        </div>
    )
}