import HeroSection from './components/HeroSection';
import ServicesBar from './components/ServicesBar';
import SolutionsSection from './components/SolutionsSection';
import Navigation from './components/Navigation';
import heroField from "/assets/hero-field.jpg";
import WhoWeAre from './components/WhoWeAre';
import HowItWorks from './components/HowItWorks';
import FaqSection from './components/FaqSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ReferencesSection from './components/ReferencesSection';


function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className='relative'>

        {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroField}
          alt="Green energy fields with wind turbines"
          className="w-full h-full object-cover object-center"
        />
        {/* subtle top white wash and center vignette to match design */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
        <Navigation />
      <HeroSection />
      </div>
      <ServicesBar />
      <SolutionsSection />
      <ReferencesSection />
      <HowItWorks />
      <WhoWeAre />
      <FaqSection />
      <CTASection />  
      <Footer />
     
    </div>
  );
}

export default App;
