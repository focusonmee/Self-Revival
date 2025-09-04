import React from "react";

const FooterSection = () => {
    const navLinks = [
        { name: "Giới Thiệu", href: "#" },
        { name: "Chính Sách Bảo Mật", href: "#" },
        { name: "Điều Khoản Dịch Vụ", href: "#" },
        { name: "Hỗ Trợ", href: "#" },
    ];

    const socialLinks = [
        { name: "Facebook", href: "#", icon: "fab fa-facebook-f" },
        { name: "Twitter", href: "#", icon: "fab fa-twitter" },
        { name: "Instagram", href: "#", icon: "fab fa-instagram" },
    ];

    return (
        <footer className="relative  ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo & Tagline */}
                    {/* <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
                            GalaxyHub
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Đọc sách mỗi ngày, tìm lại ý nghĩa cuộc sống. Hành trình trở lại làm
                            người bắt đầu từ đây.
                        </p>
                    </div> */}

                    {/* Navigation Links */}
                    {/* <div className="text-center">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                            Liên Kết Hữu Ích
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-indigo-300 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Social Media & Contact */}
                    {/* <div className="text-center md:text-right">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-4">
                            Kết Nối Với Chúng Tôi
                        </h4>
                        <div className="flex justify-center md:justify-end space-x-4 mb-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-300 hover:text-indigo-300 transition-colors duration-300"
                                >
                                    <i className={social.icon + " text-xl"}></i>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-300 text-sm">
                            Email:{" "}
                            <a
                                href="mailto:support@galaxyhub.com"
                                className="hover:text-indigo-300 transition-colors duration-300"
                            >
                                support@galaxyhub.com
                            </a>
                        </p>
                        <p className="text-gray-300 text-sm">Hotline: 0123-456-789</p>
                    </div> */}
                </div>

                {/* Final Message */}
                <div className="mt-8 text-center border-t border-indigo-500/30 pt-6">
                    <p className="text-gray-300 text-sm italic">
                        "Mỗi cuốn sách là một vì sao, dẫn bạn đến với ánh sáng của tri thức và con
                        người thật sự."
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                        © 2025 GalaxyHub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
