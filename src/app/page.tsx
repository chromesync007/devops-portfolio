'use client';

import { ThemeProvider } from 'next-themes';
import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { SkillsSection } from '@/components/sections/Skills';
import { ExperienceSection } from '@/components/sections/Experience';
import { ProjectsSection } from '@/components/sections/Projects';
import { CertificationsSection } from '@/components/sections/Certifications';
import { EducationSection } from '@/components/sections/Education';
import { ContactSection } from '@/components/sections/Contact';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </ThemeProvider>
  );
}
