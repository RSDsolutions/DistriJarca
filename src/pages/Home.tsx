import { ArrowRight, CheckCircle2, ChevronRight, MessageCircle, ShoppingCart, Truck, Package, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { promos, testimonials } from "../data";
import { formatPrice, generateWhatsAppLink } from "../utils";

// ─── Animation helpers ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

// ─── Animated counter ─────────────────────────────────────────────────────────

function StatCounter({ value, label, color }: { value: string; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const match = value.match(/^([+]?)(\d+)([+%h]?)$/);
  const prefix = match?.[1] ?? "";
  const num    = match ? parseInt(match[2]) : 0;
  const suffix = match?.[3] ?? "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = Date.now();
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, num]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-nunito font-extrabold text-4xl ${color}`}>
        {prefix}{isInView ? count : 0}{suffix}
      </div>
      <div className="text-[10px] text-[#6B6B6B] font-semibold uppercase tracking-widest mt-1">{label}</div>
    </motion.div>
  );
}

// ─── Floating particle dots (hero bg) ────────────────────────────────────────

function HeroParticles() {
  const particles = [
    { left: "8%",  top: "20%", size: 8,  delay: 0 },
    { left: "20%", top: "65%", size: 5,  delay: 1.2 },
    { left: "35%", top: "30%", size: 10, delay: 0.6 },
    { left: "55%", top: "15%", size: 6,  delay: 2 },
    { left: "70%", top: "55%", size: 8,  delay: 0.3 },
    { left: "85%", top: "25%", size: 5,  delay: 1.5 },
    { left: "92%", top: "70%", size: 7,  delay: 0.8 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F5B52E]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0.12 }}
          animate={{ y: [0, -22, 0], x: [0, 8, -8, 0], opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 5 + i * 1.2, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[380px] shrink-0 animate-gradient-hero flex flex-col lg:flex-row items-center px-6 lg:px-16 py-16 lg:py-20 overflow-hidden">
        <HeroParticles />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #F5B52E 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* Left copy */}
        <div className="w-full lg:w-1/2 z-10 space-y-5 mb-14 lg:mb-0">
          <motion.div {...fadeIn(0.1)} className="inline-block">
            <span className="bg-[#FF8A30]/20 border border-[#FF8A30]/40 text-[#FF8A30] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              🚚 Entregas a domicilio para negocios
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.18)}
            className="font-nunito font-extrabold text-[42px] lg:text-[54px] leading-[1.04] text-white"
          >
            El proveedor que tu{" "}
            <br className="hidden lg:block" />
            <span className="text-gradient-yellow">negocio</span> de comida necesita.
          </motion.h1>

          <motion.p {...fadeUp(0.28)} className="text-[#A0BDD8] text-base leading-relaxed max-w-md">
            Quesos, embutidos y productos de calidad con distribución rápida para restaurantes, frigoríficos y locales de comida rápida.
          </motion.p>

          <motion.div {...fadeUp(0.36)} className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/catalogo"
              className="shimmer-btn bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-red-900/30 transition-all duration-200 hover:scale-105 hover:shadow-red-900/40 flex items-center justify-center gap-2"
            >
              📦 Hacer mi Pedido
            </Link>
            <Link
              to="/catalogo"
              className="border-2 border-[#F5B52E]/70 text-[#F5B52E] px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#F5B52E] hover:text-[#0B3A66] hover:border-[#F5B52E] transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Ver Catálogo <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fadeIn(0.5)} className="flex items-center gap-4 pt-2">
            {["500+ clientes", "Entrega 48h", "15+ años"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-[#A0BDD8] text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right card */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full max-w-[380px] shadow-2xl">
            <div className="text-[#A0BDD8] text-xs font-bold uppercase tracking-widest mb-4">Nuestros Productos</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🧀", title: "Quesos Frescos",  to: "/catalogo?filter=quesos" },
                { icon: "🥩", title: "Embutidos",       to: "/catalogo?filter=embutidos" },
                { icon: "🫙", title: "Queso Crema",     to: "/catalogo?filter=untables" },
                { icon: "🌭", title: "Salchichas",      to: "/catalogo?filter=salchichas" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.35, type: "spring" }}
                >
                  <Link
                    to={item.to}
                    className="bg-white/10 hover:bg-[#F5B52E]/20 border border-white/10 hover:border-[#F5B52E]/40 p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-105 group"
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                    <span className="text-white font-bold text-[10px] uppercase tracking-tight text-center">{item.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <a
              href={generateWhatsAppLink("Busco proveedor urgente. Necesito productos.")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block w-full bg-[#F5B52E] hover:bg-[#D4940A] text-[#0B3A66] font-bold py-2.5 px-4 rounded-xl text-center text-xs transition-all duration-200 hover:scale-[1.02]"
            >
              ¿Pedido urgente? Escríbenos ahora →
            </a>
          </div>
        </motion.div>

        {/* Wave divider */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-full leading-none z-0">
          <svg className="w-full h-14 fill-[#F7F7F7]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.33,121.2,145.24,117.85,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────── */}
      <div className="py-10 bg-gradient-to-r from-[#FFF0CC] to-[#FFF8E7] border-b border-[#F5B52E]/30 shrink-0">
        <div className="max-w-4xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#F5B52E]/30">
          <StatCounter value="+500"  label="Negocios Abastecidos" color="text-[#0B3A66]" />
          <StatCounter value="15+"   label="Años distribuyendo"   color="text-[#0B3A66]" />
          <StatCounter value="48h"   label="Entrega Máxima"       color="text-[#FF8A30]" />
          <StatCounter value="100%"  label="Satisfacción"         color="text-[#E53935]" />
        </div>
      </div>

      {/* ── Categories ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#FF8A30] text-xs font-bold uppercase tracking-widest">Lo que distribuimos</span>
            <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] mt-2">Categorías principales</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              { title: "Quesos Frescos", border: "border-t-4 border-[#F5B52E]", bg: "bg-[#FFF8E7]", icon: "🧀", desc: "Frescos, maduros y procesados para todo tipo de negocio.", badge: "Más Pedido", badgeColor: "bg-[#F5B52E] text-[#0B3A66]", btnColor: "bg-[#F5B52E] hover:bg-[#D4940A] text-[#0B3A66]", link: "/catalogo?filter=quesos" },
              { title: "Embutidos",      border: "border-t-4 border-[#E53935]", bg: "bg-[#FFF0EE]", icon: "🥩", desc: "Jamones, salchichas, mortadelas y chorizos premium.", badge: "", badgeColor: "", btnColor: "bg-[#E53935] hover:bg-[#C62828] text-white", link: "/catalogo?filter=embutidos" },
              { title: "Untables",       border: "border-t-4 border-[#FF8A30]", bg: "bg-orange-50",  icon: "🫙", desc: "Quesos crema, ricottas y salsas para tu cocina.", badge: "", badgeColor: "", btnColor: "bg-[#FF8A30] hover:bg-[#E06A10] text-white", link: "/catalogo?filter=untables" },
              { title: "Combos Negocio", border: "border-t-4 border-[#0B3A66]", bg: "bg-blue-50",   icon: "📦", desc: "Precios mayoristas especiales desde el primer pedido.", badge: "", badgeColor: "", btnColor: "bg-[#0B3A66] hover:bg-[#0E4A80] text-white", link: "/catalogo?filter=combos" },
            ].map((cat) => (
              <motion.div
                key={cat.title}
                variants={cardVariant}
                className={`flex flex-col ${cat.border} ${cat.bg} rounded-2xl overflow-hidden shadow-sm card-glow-hover`}
              >
                <div className="h-32 flex items-center justify-center relative">
                  {cat.badge && (
                    <span className={`absolute top-3 left-3 ${cat.badgeColor} text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide`}>
                      {cat.badge}
                    </span>
                  )}
                  <motion.span
                    className="text-6xl"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cat.icon}
                  </motion.span>
                </div>
                <div className="px-5 py-4 flex-1 flex flex-col">
                  <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-1">{cat.title}</h3>
                  <p className="text-xs text-[#6B6B6B] mb-4 leading-relaxed">{cat.desc}</p>
                  <Link
                    to={cat.link}
                    className={`mt-auto w-full py-2.5 rounded-xl text-xs font-bold text-center block transition-all duration-200 hover:scale-[1.02] ${cat.btnColor}`}
                  >
                    Ver {cat.title}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Marquee trust strip ───────────────────────────── */}
      <div className="py-4 bg-[#F5B52E] overflow-hidden">
        <div className="flex gap-0 animate-marquee whitespace-nowrap select-none">
          {Array(2).fill(null).map((_, outer) => (
            <div key={outer} className="flex gap-12 pr-12">
              {["🧀 Queso Fresco", "🍕 Mozzarella Block", "🥩 Embutidos Premium", "🌭 Salchichas", "📦 Combos Mayorista", "🚚 Entrega 48h", "💼 +500 Negocios", "✅ Calidad Garantizada"].map((item) => (
                <span key={item} className="text-[#0B3A66] font-bold text-sm">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Promos ────────────────────────────────────────── */}
      <section className="py-20 bg-promo-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-yellow-400 text-[#0B3A66] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                🔥 PROMOCIONES DE LA SEMANA
              </span>
              <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-white">Imperdibles</h2>
            </div>
            <Link to="/promociones" className="text-white hover:text-yellow-200 font-bold flex items-center gap-1 group transition-colors duration-200">
              Ver todas <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {promos.slice(0, 3).map((promo) => (
              <motion.div
                key={promo.id}
                variants={cardVariant}
                className="bg-white rounded-2xl p-6 border-t-4 border-[#E53935] shadow-xl relative group overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5B52E]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <div className="absolute -top-3 -right-3 bg-[#E53935] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md rotate-12 group-hover:rotate-6 transition-transform duration-200">
                  PROMO
                </div>
                <div className="h-28 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl mb-4 flex items-center justify-center">
                  <Package className="w-14 h-14 text-[#E53935]/30" />
                </div>
                <h3 className="font-nunito font-bold text-xl text-[#E53935] mb-1">{promo.name}</h3>
                <p className="text-sm text-gray-500 mb-4 min-h-[40px]">{promo.includes}</p>
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-2xl font-nunito font-extrabold text-[#E53935]">{formatPrice(promo.promoPrice)}</span>
                  <span className="text-sm text-gray-400 line-through mb-0.5">{formatPrice(promo.originalPrice)}</span>
                  <span className="ml-auto text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    -{Math.round((1 - promo.promoPrice / promo.originalPrice) * 100)}%
                  </span>
                </div>
                <div className="text-[10px] uppercase font-bold text-[#FF8A30] mb-4">
                  Válido hasta {promo.validUntil}
                </div>
                <a
                  href={generateWhatsAppLink(`Hola, quiero pedir la promoción: ${promo.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E53935] to-[#C62828] text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all duration-200 hover:scale-[1.02] shadow-md"
                >
                  <MessageCircle className="w-4 h-4" /> Pedir este combo
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How to order ──────────────────────────────────── */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#FF8A30] text-xs font-bold uppercase tracking-widest">Proceso simple</span>
            <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] mb-16 mt-2">¿Cómo hacer tu pedido?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-[38px] left-[18%] right-[18%] h-px border-t-2 border-dashed border-[#F5B52E]/50 z-0" />

            {[
              { icon: <ShoppingCart className="w-8 h-8" />, color: "border-[#F5B52E] text-[#F5B52E]", badgeBg: "bg-[#F5B52E]", n: 1, title: "Elige tus productos", desc: "Navega el catálogo o escríbenos directamente lo que necesitas." },
              { icon: <MessageCircle className="w-8 h-8" />, color: "border-green-500 text-green-500", badgeBg: "bg-green-500", n: 2, title: "Envíanos tu pedido", desc: "Por WhatsApp, en segundos. Te confirmamos precio y disponibilidad." },
              { icon: <Truck className="w-8 h-8" />, color: "border-[#FF8A30] text-[#FF8A30]", badgeBg: "bg-[#FF8A30]", n: 3, title: "Recibe en tu negocio", desc: "Coordinamos la entrega a tu local o punto de retiro." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 ${step.color} mb-6 relative`}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`absolute -top-2 -right-2 ${step.badgeBg} text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shadow`}>
                    {step.n}
                  </span>
                  {step.icon}
                </motion.div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-2">{step.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={generateWhatsAppLink("Hola! Necesito hacer un pedido.")}
              target="_blank"
              rel="noreferrer"
              className="shimmer-btn inline-flex items-center gap-2 bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 hover:scale-105 shadow-xl shadow-red-900/20 transition-all duration-200"
            >
              Hacer pedido ahora <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-20 bg-[#0B3A66] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#F5B52E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#F5B52E] text-xs font-bold uppercase tracking-widest">Lo que dicen nuestros clientes</span>
            <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-white mt-2">
              Confianza de cientos de negocios
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={cardVariant}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-colors duration-300 group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#F5B52E] fill-[#F5B52E]" />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 bg-[#F5B52E] rounded-full flex items-center justify-center font-nunito font-extrabold text-[#0B3A66] text-lg shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-tight">{t.name}</div>
                    <div className="text-[#A0BDD8] text-xs">{t.city} · Desde {t.since}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/clientes"
              className="inline-flex items-center gap-2 text-[#A0BDD8] hover:text-white font-semibold text-sm transition-colors duration-200"
            >
              Ver todos los testimonios <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA banner ──────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#FFF0CC] to-[#FFF8E7] border-y border-[#F5B52E]/30">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] mb-4">
            ¿Listo para abastecer tu negocio?
          </h2>
          <p className="text-[#6B6B6B] mb-8 text-lg">
            Contáctanos hoy y recibe tu primer pedido en menos de 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalogo"
              className="shimmer-btn bg-gradient-to-r from-[#E53935] to-[#C62828] text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-red-900/25 hover:brightness-110 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 justify-center"
            >
              📦 Ver Catálogo Completo
            </Link>
            <a
              href={generateWhatsAppLink("Hola! Me gustaría comenzar a pedir productos.")}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:brightness-110 hover:scale-105 text-white px-10 py-4 rounded-xl font-bold shadow-lg transition-all duration-200 inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
