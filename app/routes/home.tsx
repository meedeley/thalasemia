import CTASection from "~/components/home-sections/cta-section";
import HeroSection from "~/components/home-sections/hero-section";
import ThalasemiaInfoSection from "~/components/home-sections/info-section";

export function meta() {
  return [
    { title: "Edukasi Thalasemia - Sehati Bersama" },
    {
      name: "description",
      content:
        "Pelajari tentang Thalasemia, penyebab, gejala, dan pencegahannya untuk hidup lebih sehat.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ThalasemiaInfoSection />
      <CTASection />
    </div>
  );
}
