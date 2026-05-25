import { CustomCursor } from "./components/CustomCursor";
import { PageShell } from "./components/layout/PageShell";
import { SiteHeader } from "./components/layout/SiteHeader";
import { AudienceSection } from "./components/sections/AudienceSection";
import { CapabilitiesSection } from "./components/sections/CapabilitiesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FaqSection } from "./components/sections/FaqSection";
import { HeroSection } from "./components/sections/HeroSection";
import { MaterialsSection } from "./components/sections/MaterialsSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SeoTextSection } from "./components/sections/SeoTextSection";
import { TrustSection } from "./components/sections/TrustSection";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

function App() {
  return (
    <SmoothScrollProvider>
      <PageShell>
        <CustomCursor />
        <SiteHeader />
        <main>
          <HeroSection />
          <AudienceSection />
          <CapabilitiesSection />
          <ProjectsSection />
          <MaterialsSection />
          <ProcessSection />
          <TrustSection />
          <SeoTextSection />
          <FaqSection />
          <ContactSection />
        </main>
      </PageShell>
    </SmoothScrollProvider>
  );
}

export default App;
