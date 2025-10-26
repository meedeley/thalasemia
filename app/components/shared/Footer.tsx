import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 py-8 lg:py-12 border-t border-pink-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            <span className="text-lg font-semibold text-gray-800">
              Dibuat dengan penuh kasih sayang
            </span>
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
          </div>
          <p className="text-gray-600 text-sm lg:text-base">
            Poltekkes Kemenkes Jakarta III
          </p>
          <div className="mt-6 pt-6 border-t border-pink-100">
            <p className="text-gray-500 text-sm">
              Created by Profesi Ners 2025 Poltekkes Kemenkes Jakarta III
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
