const HeroBanner = () => {
    return (
        <div className="relative text-center px-4 py-20 z-10">
            <div className="container mx-auto text-center px-4 mt-20">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-6">
                    Explore the Cosmic Frontier
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Embark on a journey through the stars with GalaxyHub. Discover new worlds,
                    connect with the universe, and beyond.
                </p>
                <a
                    href="#"
                    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Start Your Adventure
                </a>
            </div>
        </div>
    );
};

export default HeroBanner;
