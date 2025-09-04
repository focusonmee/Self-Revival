import HeroBanner from "./components/banner-hero";
import BookContent from "./components/book-content";
import BookGenresSection from "./components/book-section";
import FooterSection from "./components/footer";
import Navbar from "./components/navbar";
import PromotionSection from "./components/promotion-section";
import RecoverySection from "./components/recovery-section";

export default function LandingPage() {
    return (
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20">
            {" "}
            {/* Section 1 */}
            <section className="relative bg-[url('/car.jpg')] bg-cover bg-center min-h-screen">
                <div className="absolute inset-0 bg-black/20"></div> {/* overlay nhẹ */}
                <Navbar />
                <HeroBanner />
            </section>
            {/* Section 2 */}
            <section className="relative bg-[url('/sunset.jpg')] bg-cover bg-center min-h-screen">
                <div className="absolute inset-0 bg-black/20"></div> {/* overlay */}
                <BookGenresSection />
                <RecoverySection />
            </section>
            {/* Section 3 */}
            <section className="relative bg-[url('/beachsunset.jpg')] bg-cover bg-center min-h-screen">
                <div className="absolute inset-0 bg-black/20"></div> {/* overlay */}
                <PromotionSection />
                <FooterSection />
            </section>
        </div>
    );
}
