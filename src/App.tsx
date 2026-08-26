import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { VirtualAvatarSection } from './components/VirtualAvatarSection';
import { ContactSection } from './components/ContactSection';
import { FloatingChatWidget } from './components/FloatingChatWidget';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0305] text-white selection:bg-white selection:text-black overflow-hidden">
      {/* Dynamic Ambient Glow Orbs matching Hero Video Colors */}
      <div className="fixed top-[20vh] -right-[10vw] w-[600px] h-[600px] bg-[#e03c28]/20 rounded-full blur-[160px] pointer-events-none z-0 animate-float-glow" />
      <div className="fixed top-[55vh] -left-[10vw] w-[650px] h-[650px] bg-[#b91c1c]/20 rounded-full blur-[170px] pointer-events-none z-0 animate-float-glow" style={{ animationDelay: '-4s' }} />
      <div className="fixed top-[85vh] right-[5vw] w-[550px] h-[550px] bg-[#ea580c]/20 rounded-full blur-[150px] pointer-events-none z-0 animate-float-glow" style={{ animationDelay: '-7s' }} />

      <Navbar />

      <main className="relative z-10">
        {/* Untouched Hero Section */}
        <HeroSection />

        {/* Graceful Seamless Blend Separator 1 */}
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        <AboutSection />

        {/* Graceful Seamless Blend Separator 2 */}
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />
        </div>

        <ProjectsSection />

        {/* Graceful Seamless Blend Separator 3 */}
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        <ExperienceSection />

        {/* Graceful Seamless Blend Separator 4 */}
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>

        <VirtualAvatarSection />

        {/* Graceful Seamless Blend Separator 5 */}
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        </div>

        <ContactSection />
      </main>

      <FloatingChatWidget />
      <Footer />
    </div>
  );
};

export default App;
