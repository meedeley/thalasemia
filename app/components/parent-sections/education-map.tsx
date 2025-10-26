import { Card } from "app/components/ui/card";
import { Mountain, X } from "lucide-react";
import { useState, useEffect } from "react";

interface JourneyStep {
  id: string;
  label: string;
  icon: any;
  color: string;
}

export default function EducationMap({
  steps,
  onScrollToSection,
}: {
  steps: JourneyStep[];
  onScrollToSection: (id: string) => void;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const journeySection = document.getElementById("journey-map");
      if (journeySection) {
        const rect = journeySection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(!isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStepClick = (id: string) => {
    onScrollToSection(id);
    setShowPopup(false);
  };

  return (
    <>
      <section
        id="journey-map"
        className="py-40 bg-pink-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 antialiased">
              Memahami Thalasemia: Petunjuk Panduan
            </h2>
            <p className="text-lg text-gray-600 antialiased max-w-2xl mx-auto">
              Setiap langkah adalah pengetahuan baru. Mulai jelajahi dan belajar
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 600"
                preserveAspectRatio="none"
              >
                <path
                  d="M 200 550 Q 100 450, 200 350 Q 300 250, 200 150 Q 100 50, 200 0"
                  stroke="#ec4899"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="relative grid gap-8 py-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={step.id}
                    className={`flex items-center gap-4 ${
                      isEven ? "justify-start" : "justify-end"
                    } relative z-10`}
                  >
                    <Card
                      onClick={() => handleStepClick(step.id)}
                      className={`group cursor-pointer bg-slate-50 border-2 border-pink-50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-pink-200 transition-all duration-300 hover:-translate-y-2 max-w-sm ${
                        isEven ? "" : "text-right"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 ${
                          isEven ? "" : "flex-row-reverse"
                        }`}
                      >
                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Mountain className="w-5 h-5 text-pink-500" />
                            <span className="text-sm font-semibold text-pink-500 antialiased">
                              Langkah {index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-600 antialiased">
                            {step.label}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation Button - Only show when not in journey-map section */}
      {isVisible && (
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 z-50 animate-bounce"
        >
          <Mountain className="w-5 h-5" />
          <span className="font-semibold antialiased">Peta Edukasi</span>
        </button>
      )}

      {/* Popup Navigation */}
      {showPopup && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowPopup(false)}
            className="fixed inset-0 bg-opacity-50 z-[60] transition-opacity duration-300 animate-fadeIn"
          />

          {/* Popup Content */}
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl border-2 border-pink-100 p-6 z-[70] w-11/12 max-w-2xl transition-all duration-300 animate-slideUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 antialiased">
                <Mountain className="w-6 h-6 text-pink-500" />
                Pilih Topik
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-pink-500" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className="group bg-white border-2  rounded-xl p-4 hover:bg-pink-50 hover:shadow-lg transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-pink-500 block mb-1 antialiased">
                          Langkah {index + 1}
                        </span>
                        <h4 className="text-sm font-medium text-gray-800 antialiased">
                          {step.label}
                        </h4>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
