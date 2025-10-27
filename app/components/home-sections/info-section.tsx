import { useState } from "react";
import { Card } from "app/components/ui/card";
import {
  BadgeQuestionMark,
  ArrowRight,
  X,
} from "lucide-react";

export default function ThalasemiaInfoSection() {
  const infoCards = [
    {
      icon: <img src="/assets/images/hero-section/info/pig-face.png" alt="Darah Istimewa" className="w-16 h-16 object-contain" />,
      title: "Darah Istimewa",
      short: "Sel darah merahnya unik tapi tetap keren!",
      long: "Pada penderita thalasemia, hemoglobin yang membawa oksigen sedikit berbeda bentuknya. Ini membuat sel darah merahnya lebih cepat rusak, sehingga perlu perawatan agar tubuh tetap kuat.",
    },
    {
      icon: <img src="/assets/images/hero-section/info/singa.png" alt="Datang dari Papa Mama" className="w-16 h-16 object-contain" />,
      title: "Datang dari Papa Mama",
      short: "Bukan penyakit menular, tapi diwariskan.",
      long: "Thalasemia diturunkan dari orang tua ke anak melalui gen. Jadi, pemeriksaan darah sebelum menikah sangat penting untuk mencegah anak lahir dengan kondisi ini.",
    },
    {
      icon: <img src="/assets/images/hero-section/info/farmer.png" alt="Perawatan Pahlawan" className="w-16 h-16 object-contain" />,
      title: "Perawatan Pahlawan",
      short: "Perawatan rutin membuat tetap sehat.",
      long: "Anak dengan thalasemia bisa hidup normal dengan transfusi darah rutin dan asupan gizi yang cukup. Mereka tetap bisa bersekolah dan mengejar cita-cita seperti anak lainnya.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background dekorasi */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 px-4">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm inline-flex gap-2 items-center font-semibold text-pink-600 bg-pink-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <BadgeQuestionMark className="w-4 h-4 sm:w-5 sm:h-5" />
              Apa Itu Thalasemia
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Teman Kecil di Dalam Tubuh Kita!
          </h2>
          <p className="text-gray-500 pt-2 italic text-sm sm:text-base px-4 sm:px-8 md:px-16 lg:px-32">
            "Thalasemia adalah kondisi genetik yang membuat sel darah merah
            bekerja sedikit berbeda — tapi tetap bisa hidup sehat dengan
            perawatan yang tepat."
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {infoCards.map((card, index) => (
            <div key={index} className="group">
              <Card className="relative bg-white h-auto sm:min-h-80 sm:h-[400px] w-full max-w-sm mx-auto md:max-w-none border-2 border-pink-100 rounded-2xl p-6 pb-16 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-3 cursor-pointer">
                {/* Dekorasi */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-pink-400 rounded-full blur-3xl opacity-30 -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-pink-600 rounded-full blur-3xl opacity-20 translate-y-16 -translate-x-16 sm:translate-y-20 sm:-translate-x-20" />
                <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-[60%] w-10 sm:w-12 h-1 bg-linear-to-r from-pink-400 to-pink-600 rounded-full" />

                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
                    {card.icon}
                  </div>
                </div>

                {/* Isi */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {card.title}
                  </h3>

                  {/* Desktop hover */}
                  <div className="relative h-16 sm:h-20 md:h-auto hidden md:block">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed absolute inset-0 transition-opacity duration-500
                                group-hover:opacity-0 opacity-100 group-hover:invisible">
                      {card.short}
                    </p>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center absolute inset-0 transition-all duration-500
                                group-hover:opacity-100 opacity-0 group-hover:visible">
                      {card.long}
                    </p>
                  </div>

                  {/* Mobile expand */}
                  <div className="md:hidden space-y-2">
                    <p className={`text-base text-gray-600 leading-relaxed transition-all duration-300
                      ${expandedIndex === index ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                      {card.short}
                    </p>

                    <p className={`text-base text-gray-700 leading-relaxed transition-all duration-300
                      ${expandedIndex === index ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                      {card.long}
                    </p>
                  </div>
                </div>

                {/* Tombol Mobile */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center md:hidden">
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-2 text-[13px] font-semibold text-white rounded-full shadow-lg transition-colors duration-200 ${
                      expandedIndex === index
                        ? 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 min-w-[120px]'
                        : 'bg-pink-500 hover:bg-pink-600 active:bg-pink-700 min-w-[180px]'
                    }`}
                  >
                    {expandedIndex === index ? (
                      <>
                        <X className="w-5 h-5" /> Tutup
                      </>
                    ) : (
                      <>
                        Baca Selengkapnya <ArrowRight className="w-2 h-2" />
                      </>
                    )}
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
