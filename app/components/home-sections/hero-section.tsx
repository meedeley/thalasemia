import { useEffect, useState } from "react";
import { Card } from "app/components/ui/card";
import { Users, BookHeart, ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const href = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white z-10"
    >
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>{" "}
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="">
            <div className="inline-flex items-center mt-0 xl:mt-16 md:mt-0 gap-2 bg-pink-50 px-6 py-3 rounded-full mb-6 border border-pink-100">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
              <span className="text-sm font-medium text-pink-700">
                Panduan Edukasi Thalasemia
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mama dan Papa, sudah tahu belum apa itu{" "}
              <span className="text-pink-600">Thalasemia?</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700">
                Yuk, kenalan lebih dekat!
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
              Thalasemia adalah penyakit turun-temurun yang membuat tubuh kesulitan memproduksi hemoglobin, sehingga anak mudah lelah, pucat, dan kadang perlu transfusi darah. Sekitar 7% populasi dunia dan 3–10% orang Indonesia membawa sifat thalasemia beta. Untuk informasi perawatan anak dengan thalasemia, kunjungi Situs Edukasi Thalasemia kapan saja!
            </p>

            {/* Buttons */}
            <div className="grid gap-4">
              <Card
                className="group relative p-6 bg-white border border-pink-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => href("/parent")}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-pink-500"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Untuk Orang Tua
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pelajari cara merawat anak dengan Thalasemia
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-pink-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>

              <Card
                className="group relative p-6 bg-white border border-pink-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => href("/children")}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-pink-400"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookHeart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Untuk Anak
                      </h3>
                      <p className="text-sm text-gray-600">
                        Cerita ceria dan edukasi tentang Thalasemia
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full transition-all duration-500">
              <img
                src="/assets/images/hero.png"
                alt="Keluarga bahagia memahami thalasemia bersama"
                className="w-full h-auto rounded-3xl object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
