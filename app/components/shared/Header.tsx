import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "app/components/ui/button";
import { Menu, Heart, Phone, MessageCircle, Youtube } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "app/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (id: string, routePath?: string) => {
    setIsOpen(false);

    if (routePath) {
      navigate(routePath);
    } else if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Beranda", id: "hero", path: "/" },
    { label: "Panduan Orang Tua", id: "about", path: "/parent" },
    { label: "Dongeng Ceria", id: "cheerful-story", path: "/children" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-4 px-4 lg:px-8 transition-all duration-500 ${isScrollingDown ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}`}
    >
      <div
        className={`container mx-auto rounded-xl transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md border border-pink-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] max-w-4xl"
            : "backdrop-blur-sm border border-pink-100 max-w-7xl"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-4 lg:px-6 ${isScrolled ? "h-14" : "h-16 lg:h-20"}`}
        >
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("hero")}
          >
            <div
              className={`${isScrolled ? "w-24 h-24" : "w-32 h-32 lg:w-48 lg:h-48"} flex items-center justify-center`}
            >
              <img
                src="/logo.png"
                alt="Logo Thalasemia"
                className="w-full h-full object-contain transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav (Center) */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-2 transition-all duration-500">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() =>
                  handleNavigation(
                    link.id,
                    link.path === "" ? undefined : link.path,
                  )
                }
                className={`text-gray-700 hover:text-pink-600 hover:bg-white/70 transition-all font-medium ${isScrolled ? "text-xs px-2 h-8" : ""}`}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div
            className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "gap-1" : "gap-2"}`}
          >
            <Button
              className={`bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all ${isScrolled ? "text-xs h-8 px-2.5" : ""}`}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=_jLhccf79sc",
                  "_blank",
                )
              }
            >
              <Youtube
                className={`mr-1.5 transition-all ${isScrolled ? "h-3 w-3" : "h-4 w-4"}`}
              />
              {isScrolled ? "Video" : "Video Edukasi"}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-50 transition-all"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white/90 backdrop-blur-xl border-l border-pink-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-0"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-pink-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-lg font-bold text-pink-600">Menu</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 p-6">
                {navLinks.map((link, index) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() =>
                      handleNavigation(
                        link.id,
                        link.path === "" ? undefined : link.path,
                      )
                    }
                    className="justify-start text-base text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all h-12 rounded-lg"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen
                        ? "slideIn 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    <span className="w-1 h-6 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm">
                <div className="flex flex-col gap-3">
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all h-12"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=_jLhccf79sc",
                        "_blank",
                      )
                    }
                  >
                    <Youtube className="h-4 w-4 mr-2" />
                    Video Edukasi
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
