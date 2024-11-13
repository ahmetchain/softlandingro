import FAQSection from "./Components/FAQSection";
import FeatureCards from "./Components/FeatureCard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import InvestmentSection from "./Components/InvestmentSection";
import QuoteSection from "./Components/QuoteSection";
import ServicesSection from "./Components/ServicesSection";
import StepsSection from "./Components/StepsSection";
import TitleSection from "./Components/TitleSection";
import content from "../content.json"
function App() {
  return (
    <div className="h-screen ">
      <Header />
      <HeroSection />
      <InvestmentSection />
      <QuoteSection />
      <TitleSection title={content.softLandingHeading} />
      <FeatureCards />
      <TitleSection title={content.servicesHeading} />
      <ServicesSection />
      <TitleSection title={content.howToStartHeading} />
      <StepsSection />
      <TitleSection title={content.knowledgeBaseHeading} />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
