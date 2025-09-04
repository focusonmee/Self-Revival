const BookGenresSection = () => {
    const genres = [
        {
            title: "Tiểu Thuyết",
            description:
                "Đắm mình trong những câu chuyện sâu sắc, khám phá cảm xúc và cuộc sống qua từng trang sách.",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4ebf0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
        {
            title: "Phát Triển Bản Thân",
            description:
                "Tìm lại chính mình với những cuốn sách truyền cảm hứng, giúp bạn trưởng thành và sống ý nghĩa hơn.",
            image: "https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
        {
            title: "Khoa Học Viễn Tưởng",
            description:
                "Khám phá những thế giới mới, vượt qua giới hạn không gian và thời gian với các tác phẩm sci-fi.",
            image: "https://images.unsplash.com/photo-1516979187457-6378b514c43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
        {
            title: "Lịch Sử & Văn Hóa",
            description:
                "Hiểu về quá khứ, kết nối với cội nguồn qua những cuốn sách kể về lịch sử và văn hóa nhân loại.",
            image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        },
    ];

    return (
        <section className="relative text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-12">
                    Khám Phá Các Thể Loại Sách
                </h2>

                {/* Genres Carousel/Grid */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent pb-4">
                    {genres.map((genre, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] md:min-w-0 bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 snap-center"
                        >
                            <img
                                src={genre.image}
                                alt={genre.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                                {genre.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{genre.description}</p>
                            <a
                                href="#"
                                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                            >
                                Khám Phá
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookGenresSection;
