import React from "react";

const BookContent = () => {
    return (
        <section className="relative text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                            Duy Trì Streak Đọc Sách
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Tạo thói quen đọc sách mỗi ngày với hệ thống streak thông minh. Theo dõi
                            tiến trình và nhận phần thưởng khi duy trì chuỗi đọc liên tục!
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                        >
                            Bắt Đầu Streak
                        </a>
                    </div>

                    {/* Feature 2 */}
                    <div className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                            Sách Chọn Lọc Cho Bạn
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Khám phá những cuốn sách phù hợp với tâm trạng và sở thích của bạn. Từ
                            tiểu thuyết cảm hứng đến sách phát triển bản thân, chúng tôi có tất cả.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                        >
                            Khám Phá Sách
                        </a>
                    </div>

                    {/* Feature 3 */}
                    <div className="relative bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                            Cộng Đồng Người Đọc
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Kết nối với những người yêu sách khác, chia sẻ cảm nhận và tìm động lực
                            để "trở lại làm người" qua những câu chuyện đầy cảm hứng.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                        >
                            Tham Gia Cộng Đồng
                        </a>
                    </div>
                </div>

                {/* Motivational Quote */}
                <div className="mt-12 text-center">
                    <p className="text-lg md:text-xl text-gray-300 italic max-w-3xl mx-auto">
                        "Mỗi cuốn sách là một hành trình, và mỗi trang sách là một bước để bạn tìm
                        lại chính mình."
                    </p>
                    <p className="text-sm text-indigo-300 mt-2">— GalaxyHub</p>
                </div>
            </div>
        </section>
    );
};

export default BookContent;
