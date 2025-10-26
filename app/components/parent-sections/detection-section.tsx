import { Card } from "app/components/ui/card";
import { FileSearch, Stethoscope, Dna, Baby } from "lucide-react";

export default function DetectionSection() {
  const deteksiItems = [
    {
      icon: Stethoscope,
      title: "Pemeriksaan Darah Lengkap",
      description:
        "Melalui tes darah sederhana, kemungkinan adanya thalasemia dapat diidentifikasi lebih awal.",
    },
    {
      icon: Dna,
      title: "Analisis DNA",
      description:
        "Tes ini memastikan secara akurat apakah seseorang merupakan pembawa sifat atau penderita thalasemia.",
    },
    {
      icon: Baby,
      title: "Skrining pada Bayi",
      description:
        "Skrining saat lahir atau beberapa bulan setelahnya sangat penting untuk intervensi cepat dan perawatan yang efektif.",
    },
  ];

  return (
    <section id="deteksi" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="absolute h-full w-full bg-transparent">
            <div className=" bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
          <div className="inline-flex text-sm items-center gap-2 bg-pink-100 text-pink-600 border-2 border-pink-100 px-6 py-3 rounded-full mb-4">
            <FileSearch className="w-4 h-4" />
            <span className="text-sm font-semibold">Deteksi Dini</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengenali Thalasemia Sejak Dini
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Deteksi dini adalah langkah pertama untuk memberikan kualitas hidup
            terbaik bagi anak Anda. Kenali beberapa metode utamanya.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {deteksiItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="relative overflow-hidden p-8 text-center border-pink-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 z-9 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-pink-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
