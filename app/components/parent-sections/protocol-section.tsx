import { Card } from "app/components/ui/card";
import { ClipboardList, Shield, Droplets, Apple } from "lucide-react";

export default function ProtocolSection() {
  const protokolItems = [
    {
      icon: Shield,
      title: "Benteng dari Infeksi",
      description:
        "Menjaga kebersihan diri dan lingkungan adalah cara ampuh untuk melindungi anak dari infeksi yang rentan menyerang.",
    },
    {
      icon: Droplets,
      title: "Transfusi Darah Teratur",
      description:
        "Transfusi rutin di bawah pengawasan medis adalah penopang hidup. Pastikan prosesnya selalu aman dan terstandar.",
    },
    {
      icon: Apple,
      title: "Asupan Gizi yang Tepat",
      description:
        "Nutrisi yang baik adalah fondasi kekuatan tubuh. Fokus pada makanan kaya gizi, namun rendah zat besi sesuai anjuran dokter.",
    },
  ];

  return (
    <section id="protokol" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex text-sm items-center gap-2 bg-pink-100 text-pink-600 border-2 border-pink-100 px-6 py-3 rounded-full mb-4">
            <ClipboardList className="w-4 h-4" />
            <span className="text-sm font-semibold">Perawatan Harian</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Panduan Perawatan Harian
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Menjaga kesehatan dan kebugaran anak dengan thalasemia adalah
            prioritas. Berikut adalah beberapa pilar perawatan harian.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {protokolItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="relative overflow-hidden p-8 text-center bg-white border-2 border-pink-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
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
