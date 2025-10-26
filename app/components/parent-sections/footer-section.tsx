import { ArrowUp, Heart } from "lucide-react";
import { Button } from "../ui/button";

export default function FooterSection() {
  return (
    <footer className="relative py-20 bg-pink-500 text-white overflow-hidden">
      {/* Subtle Yellow Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-yellow-300/5"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Heart Icon Container */}
        <div className="relative inline-block mb-6">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-yellow-200/20 rounded-2xl blur-xl scale-110"></div>
          <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl lowercase md:text-4xl font-semibold italic mb-4 antialiased">
          "PENTINGNYA PERANG ORANG TUA UNTUK ANAK"
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-pink-50 mb-8 leading-relaxed max-w-2xl mx-auto">
          Peran Anda sebagai orang tua adalah cahaya penuntun dan sumber
          kekuatan terbesar dalam perjalanan hidup anak dengan thalasemia.
          Setiap langkah Anda berarti.
        </p>

        {/* Button */}
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white text-pink-500 hover:bg-pink-50 border-2 border-white shadow-lg hover:shadow-xl transition-all"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Kembali ke Atas
        </Button>
      </div>
    </footer>
  );
}
