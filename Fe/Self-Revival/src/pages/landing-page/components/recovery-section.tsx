import React from "react";

const RecoverySection = () => {
    return (
        <section className="relative text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-8">
                    Trở Lại Làm Người
                </h2>

                {/* Subheadline */}

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Step 1 */}
                    <div className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                            Bước 1: Nhận Thức
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Hiểu tác hại của nội dung tiêu cực đối với tâm trí và cảm xúc. Đọc sách
                            giúp bạn làm chủ suy nghĩ và xây dựng tư duy tích cực.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                        >
                            Tìm Hiểu Thêm
                        </a>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                            Bước 2: Thay Thế Thói Quen
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Thay thời gian tiêu thụ nội dung không lành mạnh bằng việc đọc sách. Bắt
                            đầu với những cuốn sách truyền cảm hứng hoặc thể loại bạn yêu thích.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                        >
                            Chọn Sách Ngay
                        </a>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                            Bước 3: Duy Trì Streak
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Xây dựng thói quen đọc sách mỗi ngày với hệ thống streak của chúng tôi.
                            Mỗi trang sách là một bước tiến gần hơn đến phiên bản tốt nhất của bạn.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                        >
                            Bắt Đầu Streak
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecoverySection;
