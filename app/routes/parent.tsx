import { useState } from "react";
import EducationMap from "~/components/parent-sections/education-map";
import PreventiveSection from "~/components/parent-sections/preventive-section";
import DetectionSection from "~/components/parent-sections/detection-section";
import ProtocolSection from "~/components/parent-sections/protocol-section";
import SupportSection from "~/components/parent-sections/support-section";
import { TestTube, Stethoscope, Syringe, Users } from "lucide-react";
import FooterSection from "~/components/parent-sections/footer-section";

export default function ParentEducationPage() {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const journeySteps = [
    {
      id: "pencegahan",
      label: "Pencegahan Genetik",
      icon: TestTube,
      color: "pink-500",
    },
    {
      id: "deteksi",
      label: "Deteksi Klinis",
      icon: Stethoscope,
      color: "pink-600",
    },
    {
      id: "protokol",
      label: "Protokol Perawatan",
      icon: Syringe,
      color: "pink-700",
    },
    {
      id: "dukungan",
      label: "Dukungan Holistik",
      icon: Users,
      color: "pink-800",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <EducationMap steps={journeySteps} onScrollToSection={scrollToSection} />
      <PreventiveSection />
      <DetectionSection />
      <ProtocolSection />
      <SupportSection />
      <FooterSection />
    </div>
  );
}
