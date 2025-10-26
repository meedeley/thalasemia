import { useEffect, useRef } from "react";
import { Card } from "app/components/ui/card";
import { Button } from "app/components/ui/button";
import { BookOpen, Users, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const href = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="choose-path"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-linear-to-b from-pink-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16 fade-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-semibold text-pink-700">
              Edukasi Thalasemia
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
            Kalau Mamah dan Papah ingin tahu lebih banyak tentang cara{" "}
            <span className="text-gradient">merawat anak</span> dengan
            Thalasemia
          </h2>
          <p className="text-lg lg:text-2xl text-pink-600 font-semibold mb-4">
            Yuk Edukasi Kamu Tentang Thalasemia!
          </p>
          <p className="text-base lg:text-lg text-gray-600">
            Bisa dibuka kapan saja dan di mana saja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Parent Guide CTA */}
          <Card
            onClick={() => href("/parent")}
            id="parent-guide"
            className="p-8 lg:p-10 bg-linear-to-br from-white to-pink-50 rounded-3xl shadow-2xl border-2 border-pink-100 card-hover fade-up"
          >
            <div className="flex flex-col items-center text-center">
              <div className="py-8">
                <Users className="w-10 h-10 lg:w-12 lg:h-12 text-pink-500" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 lg:mb-6">
                Panduan Orang Tua
              </h3>
              <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed">
                Informasi lengkap tentang pengelolaan thalasemia, pilihan
                perawatan, dan cara mendukung anak Anda.
              </p>
              <ul className="text-left mb-6 lg:mb-8 space-y-3 text-gray-700 w-full">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Panduan perawatan dan pengobatan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Tips nutrisi dan gaya hidup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Sumber dukungan dan komunitas</span>
                </li>
              </ul>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-2xl py-6 text-lg shadow-lg">
                Pelajari Panduan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Children Story CTA */}
          <Card
            onClick={() => href("/children")}
            id="cheerful-story"
            className="p-8 lg:p-10 bg-linear-to-br from-white to-pink-50 rounded-3xl shadow-2xl border-2 border-pink-100 card-hover fade-up"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="py-8">
                <BookOpen className="w-10 h-10 lg:w-12 lg:h-12 text-pink-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 lg:mb-6">
                Cerita Ceria
              </h3>
              <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed">
                Temukan cerita-cerita menarik dan aktivitas menyenangkan yang
                membantu kamu memahami apasih thalasemia itu.
              </p>
              <ul className="text-left mb-6 lg:mb-8 space-y-3 text-gray-700 w-full">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Cerita edukatif interaktif</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Aktivitas dan permainan seru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Membangun pola pikir positif</span>
                </li>
              </ul>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-2xl py-6 text-lg shadow-lg">
                Baca Cerita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
