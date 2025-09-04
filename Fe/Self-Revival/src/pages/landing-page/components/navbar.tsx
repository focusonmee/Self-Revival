import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div
                    className="text-3xl font-extrabold bg-clip-text  cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    ✦ Galaxy
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {["Home", "Explore", "Missions", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative text-white font-semibold text-lg hover:text-indigo-400 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 hover:after:w-full after:transition-all after:duration-300"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => navigate("/login")}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-700/40 text-white font-semibold transition-all duration-300"
                    >
                        Login
                    </button>
                </div>

                {/* Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col space-y-1.5 focus:outline-none"
                    >
                        <span
                            className={`block h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                                isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                                isOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                                isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col px-6 py-4 space-y-4 rounded-b-2xl">
                    {["Home", "Explore", "Missions", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="text-white text-lg font-semibold hover:text-indigo-400 transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => navigate("/login")}
                        className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-700/40 text-white font-semibold transition-all duration-300"
                    >
                        Login
                    </button>
                </div>
            </div>

            <style>{`
        .animate-textGlow {
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.7),
                       0 0 20px rgba(236, 72, 153, 0.5),
                       0 0 30px rgba(139, 92, 246, 0.3);
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
