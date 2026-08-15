import BootSequence from '@/components/boot-sequence';
import HeroSection from '@/components/hero-section';
import IntroVideoSection from '@/components/intro-video-section';
import ExpertiseSection from '@/components/about-section';
import WorkSection from '@/components/projects-section';
import SecuritySection from '@/components/security-section';
import ExperienceSection from '@/components/experience-section';

import EducationSection from '@/components/education-section';
import CertificatesSection from '@/components/certificates-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <BootSequence />
      <HeroSection />
      <IntroVideoSection />
      <ExpertiseSection />
      <WorkSection />
      <SecuritySection />
      <ExperienceSection />

      <EducationSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

