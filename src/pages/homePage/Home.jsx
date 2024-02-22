import Media from "./components/HomeGallary";
import Gallry from "./components/HomeMedia";
import PlaceOrderSection from "./components/HomeOrder";
import HomeIntroSection from "./components/HomeIntro";
import HomeHeroSection from "./components/HomeHero";
import HomeBannerSection from "./components/HomeBanner";
import HomeValuesSection from "./components/HomeValues";
import HomeAuthorSection from "./components/HomeAuthor";
import HomeBookChapter from "./components/HomeBookChapter";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="isolate">
        
        {/* Hero section */}
        <HomeHeroSection />

        {/* Introduction Section */}
        <HomeIntroSection />

        {/* Banner section */}
        <HomeBannerSection />

        {/* PlaceOrder Section */}
        <PlaceOrderSection />

        {/* Book Chapter Section */}
        <HomeBookChapter />

        {/* Values section */}
        <HomeValuesSection />

        {/* Gallary */}
        <Gallry />
        {/* Author section */}
        <HomeAuthorSection />

        {/* Media section */}
        <Media />

      </main>
    </div>
  );
}
