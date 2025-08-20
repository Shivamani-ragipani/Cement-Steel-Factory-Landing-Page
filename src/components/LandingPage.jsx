import Header from './Header';
import HeroSection from './HeroSection';
import NetworkSection from './NetworkSection';
import EmployersSection from './EmployersSection';
import JobsSection from './JobsSection';
import CareerCentersSection from './CareerCentersSection';
import EventsSection from './EventsSection';
import CombinedSection from './CombinedSection';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <NetworkSection />
      <EmployersSection />
      <JobsSection />
      <CareerCentersSection />
      <EventsSection />
      <CombinedSection />
      <Footer />
    </div>
  );
};

export default LandingPage;