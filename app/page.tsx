import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CodePreview } from "@/components/code-preview"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { StructureSection } from "@/components/structure-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <CodePreview />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <StructureSection />
      <TestimonialsSection />
      <WaitlistSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
