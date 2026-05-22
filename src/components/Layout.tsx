import { Store, MessageCircle, Phone, Mail, Facebook, Instagram, Truck, Package, Menu, X, ChevronRight } from "lucide-react";
import { BeefIcon as Beef, CheeseIcon as Cheese } from "../icons";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn, generateWhatsAppLink } from "../utils";
import logoSrc from "../../img/logo.webp";

const NAV_LINKS = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/catalogo" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Distribución", path: "/distribucion" },
  { name: "Clientes", path: "/clientes" },
  { name: "Promociones", path: "/promociones" },
  { name: "Contacto", path: "/contacto" },
];

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize = size === "sm" ? "w-8 h-8" : "w-10 h-10";
  const textSize = size === "sm" ? "text-xl" : "text-2xl";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <motion.div
        className="bg-white rounded-xl p-1.5 shadow-md"
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <img src={logoSrc} alt="Distri-Jarca" className={cn(imgSize, "object-contain")} />
      </motion.div>
      <div>
        <div className={cn("flex font-nunito font-extrabold tracking-tighter", textSize)}>
          <span className="text-[#F5B52E]">DISTRI-</span>
          <span className="text-white">JARCA</span>
        </div>
        <div className="text-[#FF8A30] text-[9px] font-semibold uppercase tracking-[0.2em] -mt-0.5 font-sans">
          Quesos &amp; Embutidos
        </div>
      </div>
    </Link>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "shrink-0 h-[72px] sticky top-0 z-50 w-full flex flex-col justify-center transition-all duration-500",
        isScrolled
          ? "bg-[#0B3A66]/96 backdrop-blur-md shadow-xl shadow-[#051E36]/40 border-b-2 border-[#F5B52E]/90"
          : "bg-[#0B3A66] border-b-2 border-[#F5B52E]"
      )}
    >
      <div className="w-full px-4 xl:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 text-[#A0BDD8] font-medium text-sm">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "nav-link-item transition-colors duration-200 pb-1 text-sm font-medium",
                      isActive ? "text-white active-link" : "hover:text-white"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+593999999999"
                className="hidden xl:flex items-center gap-2 bg-[#FF8A30] hover:bg-[#E06A10] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-900/20"
              >
                <Phone className="w-4 h-4" />
                Llámanos
              </a>
              <a
                href={generateWhatsAppLink("Hola Distri-Jarca! Me gustaría hacer un pedido.")}
                target="_blank"
                rel="noreferrer"
                className="shimmer-btn flex items-center gap-2 bg-gradient-to-br from-[#E53935] to-[#C62828] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-200 shadow-lg shadow-red-900/25 hover:brightness-110 hover:scale-105"
              >
                <Store className="w-4 h-4" />
                HACER PEDIDO
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#F5B52E] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] bg-black/40 z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-[72px] right-0 bottom-0 w-[80vw] max-w-sm bg-[#0B3A66] z-40 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-1 flex-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "text-2xl font-nunito font-bold flex items-center justify-between py-4 border-b border-[#1A5A9A]",
                          isActive ? "text-[#F5B52E]" : "text-white"
                        )
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-6 h-6 opacity-40" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="p-6 pb-10 bg-[#0A2A50]">
                <a
                  href={generateWhatsAppLink("Hola Distri-Jarca! Me gustaría hacer un pedido.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E53935] to-[#C62828] text-white w-full py-4 rounded-xl text-lg font-bold shadow-xl shadow-red-900/30"
                >
                  <MessageCircle className="w-6 h-6" />
                  Hacer Pedido por WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B3A66] border-t-2 border-[#F5B52E] pt-16 pb-0 relative overflow-hidden">
      {/* Decorative diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-stripe" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M-6,6 l12,-12 M0,24 l24,-24 M18,30 l12,-12" stroke="white" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripe)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-[#A0BDD8] text-sm font-sans pr-4 pt-2 leading-relaxed">
              Calidad que se siente. Distribución que no falla. Tu proveedor de quesos y embutidos para negocios de comida en Ecuador.
            </p>
            <div className="flex items-center gap-2 text-sm text-white font-medium bg-[#0E4A80] w-max px-3 py-1.5 rounded-full border border-[#1A5A9A]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Ecuador · Distribución de alimentos
            </div>
          </div>

          <div>
            <h4 className="font-nunito font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#F5B52E]" /> Categorías
            </h4>
            <ul className="space-y-3 font-sans text-[#A0BDD8]">
              <li>
                <Link to="/catalogo?filter=quesos" className="hover:text-[#F5B52E] flex items-center gap-2 transition-colors duration-200 group">
                  <Cheese className="w-4 h-4 group-hover:scale-110 transition-transform" /> Quesos
                </Link>
              </li>
              <li>
                <Link to="/catalogo?filter=embutidos" className="hover:text-[#F5B52E] flex items-center gap-2 transition-colors duration-200 group">
                  <Beef className="w-4 h-4 group-hover:scale-110 transition-transform" /> Embutidos
                </Link>
              </li>
              <li>
                <Link to="/distribucion" className="hover:text-[#F5B52E] flex items-center gap-2 transition-colors duration-200 group">
                  <Truck className="w-4 h-4 group-hover:scale-110 transition-transform" /> Entregas
                </Link>
              </li>
              <li>
                <Link to="/catalogo?filter=combos" className="hover:text-[#F5B52E] flex items-center gap-2 transition-colors duration-200 group">
                  <Store className="w-4 h-4 group-hover:scale-110 transition-transform" /> Mayoreo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-nunito font-bold text-xl text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 font-sans text-[#A0BDD8]">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[#F5B52E] transition-colors duration-200 flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="font-nunito font-bold text-xl text-white">Atención al Cliente</h4>
            <a
              href={generateWhatsAppLink("Hola, necesito información sobre reventa de quesos y embutidos.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:brightness-110 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:-translate-y-1 w-full justify-center"
            >
              <MessageCircle className="w-7 h-7" />
              WhatsApp Directo
            </a>

            <div className="space-y-3 text-[#A0BDD8] font-sans">
              <a href="tel:+593999999999" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                <Phone className="w-5 h-5 text-[#F5B52E]" />
                +593 99 999 9999
              </a>
              <a href="mailto:ventas@distrijarca.ec" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5 text-[#F5B52E]" />
                ventas@distrijarca.ec
              </a>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0E4A80] border border-[#1A5A9A] text-[#F5B52E] flex items-center justify-center hover:bg-[#F5B52E] hover:text-[#0B3A66] transition-all duration-200 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0E4A80] border border-[#1A5A9A] text-[#F5B52E] flex items-center justify-center hover:bg-[#F5B52E] hover:text-[#0B3A66] transition-all duration-200 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1A5A9A] mt-2 bg-[#071F3A] h-12 flex items-center justify-between px-4 lg:px-12 relative z-10 shrink-0">
        <div className="text-[#A0BDD8] text-[10px] font-medium tracking-wide">
          © {new Date().getFullYear()} Distri-Jarca · Distribución de Alimentos · Ecuador
        </div>
        <div className="hidden md:flex gap-6">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-white text-[10px] font-bold">ATENDIENDO PEDIDOS</span>
          </div>
          <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase font-bold">
            <span>Facebook</span>
            <span>Instagram</span>
            <span className="text-[#F5B52E]">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 4, scale: 0.9 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        className="absolute -top-12 right-0 bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold text-[#0B3A66] border border-[#F5B52E] pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        ¿Necesitas ayuda? Escríbenos
      </motion.div>

      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/15 scale-125 animate-ping [animation-delay:600ms]" />

      <a
        href={generateWhatsAppLink("Hola! Necesito hacer un pedido.")}
        target="_blank"
        rel="noreferrer"
        className="relative flex w-16 h-16 bg-white border-[3px] border-[#F5B52E] rounded-full shadow-2xl shadow-black/20 items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-9 h-9 text-[#25D366]" fill="currentColor" />
      </a>
    </div>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] font-sans text-[#1A1A1A]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
