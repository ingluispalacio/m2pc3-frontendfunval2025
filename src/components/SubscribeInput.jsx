import { useState } from "react";
import { EnvelopeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function SubscribeInput() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return alert("Por favor ingresa tu correo electrónico.");
        console.log("Correo suscrito:", email);
        setEmail("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between p-[2px] 
                 rounded-full bg-white max-w-md"
        >
            
            <div className="flex items-center bg-[#e6eaf4] backdrop-blur-md/90 flex-1  rounded-full  px-3">              
                <EnvelopeIcon className="w-3 h-3 lg:w-5 lg:h-5 text-gray-700 mr-2" />             
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 py-2 bg-transparent text-gray-700 text-xs md:text-[14px] lg:text-lg
                     placeholder-[#acb4fa] outline-none focus:ring-0"
                    required
                />
                <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#C381DB] to-[#4E92F9]">
                    
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#C381DB" />
                                <stop offset="100%" stopColor="#4E92F9" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <button
                        type="submit"
                        className="p-1 rounded-full bg-[#e6eaf4] flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="url(#gradient)"
                            className="w-3 h-3 lg:w-5 lg:h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
}
export default SubscribeInput;
