import FeaturesSection from "./FeaturesSection";
import ProductiveSection from "./ProductiveSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";

function MainSection() {
  return (
    <main className="flex flex-col gap-37.5 pb-81.5 relative">
      <div className="px-1.25 flex flex-col gap-40">
        <FeaturesSection />
        <ProductiveSection />
      </div>

      <TestimonialSection />

      <CTASection />
    </main>
  )
}

export default MainSection;