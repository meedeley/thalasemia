import { Card } from "app/components/ui/card";
import { HeartHandshake, Users, Hospital, Heart } from "lucide-react";

export default function SupportSection() {
  const dukunganItems = [
    {
      icon: Users,
      title: "Nutrisi Yang Optimal",
      description:
        "Berikan anak pola makan seimbang, hindari makanan yang mengandung tambahan zat besi, dan konsultasikan penggunaan suplemen seperti kalsium, vitamin D, dan asam folat sesuai anjuran dokter.",
    },
    {
      icon: Hospital,
      title: "Dukungan Psikososial",
      description:
        "Bantu anak menghadapi kondisi kronisnya dengan tenang. Konseling dapat membantu mengelola kecemasan, stres, dan meningkatkan kepercayaan diri.",
    },
    {
      icon: Heart,
      title: "Peran Sekolah Serta Teman Teman",
      description:
        "Sampaikan kepada pihak sekolah tentang kebutuhan khusus anak, seperti waktu istirahat tambahan atau jadwal medis, agar anak tetap merasa diterima dan dapat beraktivitas dengan nyaman.",
    },
  ];

  return (
    <section id="dukungan" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex text-sm items-center gap-2 bg-pink-100 text-pink-600 border-2 border-pink-100 px-6 py-3 rounded-full mb-4">
            <HeartHandshake className="w-4 h-4" />
            <span className="text-sm font-semibold">Peran Keluarga</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Membangun Kualitas Hidup yang Positif
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Kekuatan terbesar datang dari kebersamaan. Temukan berbagai sumber
            dukungan yang siap membantu Anda dan keluarga.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {dukunganItems.map((item, i) => {
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
