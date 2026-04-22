import FeaturesSection from "./FeaturesSection";
import ProductiveSection from "./ProductiveSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";

function MainSection() {
  return (
    <main className="flex flex-col gap-37.5 tablet:gap-20 desktop:gap-30 pb-81.5 tablet:pb-46 relative">
      <div className="px-1.25 tablet:px-0 flex flex-col gap-40 tablet:gap-30 desktop:gap-36.5">
        <FeaturesSection />
        <ProductiveSection />
      </div>

      <TestimonialSection />

      <CTASection />
    </main>
  )
}

export default MainSection;