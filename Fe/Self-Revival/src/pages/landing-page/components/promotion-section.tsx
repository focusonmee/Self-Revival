import React from "react";

const PromotionSection = () => {
    const promotions = [
        {
            title: "Giảm 50% Gói Thành Viên 1 Năm",
            description:
                "Đăng ký gói thành viên 1 năm với giá ưu đãi 50%. Mở khóa hàng ngàn cuốn sách và theo dõi streak đọc sách để trở thành phiên bản tốt nhất của bạn.",
            cta: "Đăng Ký Ngay",
            href: "#",
        },
        {
            title: "Phần Thưởng Streak Reading",
            description:
                "Duy trì streak đọc sách 30 ngày liên tiếp để nhận phần quà đặc biệt: sách miễn phí, huy hiệu độc quyền, và hơn thế nữa!",
            cta: "Bắt Đầu Streak",
            href: "#",
        },
    ];

    return (
        <section className="relative text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-8">
                    Ưu Đãi Đặc Biệt Cho Hành Trình Đọc Sách
                </h2>
                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
                    Tham gia ngay để nhận những ưu đãi độc quyền, giúp bạn duy trì thói quen đọc
                    sách và tìm lại ý nghĩa cuộc sống.
                </p>

                {/* Promotions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {promotions.map((promo, index) => (
                        <div
                            key={index}
                            className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                                {promo.title}
                            </h3>
                            <p className="text-gray-300 mb-6">{promo.description}</p>
                            <a
                                href={promo.href}
                                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                            >
                                {promo.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Additional CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Khám Phá Tất Cả Ưu Đãi
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PromotionSection;
