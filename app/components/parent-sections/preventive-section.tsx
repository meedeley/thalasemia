import { Card } from "app/components/ui/card";
import { TestTube, Check, Users } from "lucide-react";

export default function PreventiveSection() {
  return (
    <section
      id="pencegahan"
      className="py-20 bg-pink-50 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-40 after:bg-gradient-to-t after:from-pink-50 after:to-transparent after:z-20"
    >
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/30 z-0"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-100 border-pink-100 px-6 py-4 rounded-full mb-4">
              <TestTube className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-semibold text-pink-500">
                Pencegahan
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mulai dari Sini: Tes Kesehatan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Langkah penting untuk mencegah Thalasemia adalah melakukan tes
              darah sebelum menikah. Tes ini membantu mengetahui apakah calon
              suami atau istri memiliki sifat pembawa Thalasemia, sehingga
              risiko menurunkan penyakit ini pada anak bisa dicegah.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-8 bg-white/60 backdrop-blur-lg border border-pink-100 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tes Darah Wajib
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pasangan yang ingin punya anak sebaiknya menjalani tes Hb
                elektroforesis untuk mengetahui apakah mereka membawa sifat
                Thalasemia. Tes ini penting untuk mencegah penularan Thalasemia
                pada anak.
              </p>
            </Card>

            <Card className="p-8 bg-white/60 backdrop-blur-lg border border-pink-100 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">25%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hitungan Risiko
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jika kedua pasangan membawa sifat Thalasemia, anak mereka
                memiliki risiko 25% terlahir dengan Thalasemia Mayor. Konseling
                genetik membantu pasangan memahami risiko dan membuat keputusan
                yang tepat.
              </p>
            </Card>

            <Card className="relative col-span-2 p-8 backdrop-blur-2xl border border-pink-100 rounded-2xl hover:shadow-xl transition-all overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-30 -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-600 rounded-full blur-3xl opacity-20 translate-y-20 -translate-x-20"></div>
              <div className="relative w-14 h-14 bg-transparent rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="relative text-xl font-semibold text-gray-800 mb-3">
                Konseling Genetik
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                Konsultasi dengan dokter spesialis genetik atau hematologi
                sangat penting untuk memahami hasil tes serta membantu pasangan
                dalam merencanakan keluarga secara aman dan tepat.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
