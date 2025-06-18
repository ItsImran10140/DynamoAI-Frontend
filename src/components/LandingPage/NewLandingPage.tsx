/* eslint-disable @typescript-eslint/no-unused-vars */

import { NewLandingPageComponent } from "./NLPC";
import {
  HeaderSection,
  HeroSection,
  TrustedBySection,
  APIIntegrationSection,
  ContentCreationSection,
  TestimonialsSection,
  FeaturesGridSection,
  FAQSection,
  FooterSection,
} from "./NewLandingPage/index";

const NewLandingPage = () => {
  return (
    <>
      <NewLandingPageComponent image1={"/glow4.webp"} image2={"/glow1.webp"} />

      <div className="text-white absolute top-0 border-x border-neutral-500/40 h-full w-[85%] mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-28">
        <HeaderSection />
        <HeroSection />
        <TrustedBySection />
        <APIIntegrationSection />
        <ContentCreationSection />
        <TestimonialsSection />
        <FeaturesGridSection />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  );
};

export default NewLandingPage;
