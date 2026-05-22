import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { products } from "../data";
import { formatPrice, generateWhatsAppLink } from "../utils";
import { BeefIcon, CheeseIcon, JarIcon, SausageIcon } from "../icons";
import { Package, MessageCircle, FileText } from "lucide-react";

const FILTERS = [
  { id: "todos",     label: "Todos",         emoji: "🛒" },
  { id: "quesos",    label: "Quesos",        emoji: "🧀" },
  { id: "embutidos", label: "Embutidos",     emoji: "🥩" },
  { id: "untables",  label: "Untables",      emoji: "🫙" },
  { id: "salchichas",label: "Salchichas",    emoji: "🌭" },
  { id: "combos",    label: "Combos",        emoji: "📦" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.22 } },
};

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "todos";

  const filteredProducts = products.filter((p) =>
    currentFilter === "todos" ? true : p.category === currentFilter
  );

  return (
    <div className="flex flex-col">
      {/* Mini Hero */}
      <section className="bg-[#0B3A66] py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Animated gradient orb */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#F5B52E]/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="bg-[#FF8A30]/20 border border-[#FF8A30]/40 text-[#FF8A30] px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 uppercase tracking-wider">
              <Package className="w-4 h-4" /> Precios mayoristas disponibles — consulta por WhatsApp.
            </span>
            <h1 className="font-nunito font-extrabold text-4xl md:text-5xl text-[#F5B52E]">Catálogo de Productos</h1>
            <p className="text-[#A0BDD8] text-lg">La mejor selección para abastecer tu negocio de comida.</p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="py-12 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-6">

          {/* Filters */}
          <motion.div
            className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-gray-200"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSearchParams({ filter: filter.id })}
                className={`relative overflow-hidden px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                  currentFilter === filter.id
                    ? "text-white shadow-md shadow-red-900/20 scale-[1.04]"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#E53935]/40 hover:text-[#E53935] hover:scale-[1.02]"
                }`}
              >
                {currentFilter === filter.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E53935] to-[#C62828]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{filter.emoji} {filter.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Product count */}
          <motion.p
            key={currentFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-500 font-medium mb-6"
          >
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} disponible{filteredProducts.length !== 1 ? "s" : ""}
          </motion.p>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
              }}
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={cardVariant}>
                  <ProductCard product={product} />
                </motion.div>
              ))}

              {filteredProducts.length === 0 && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-24"
                >
                  <span className="text-6xl mb-4 block">🔍</span>
                  <p className="text-xl text-gray-400 font-medium">No se encontraron productos en esta categoría.</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  const getCategoryStyles = () => {
    switch (product.category) {
      case "quesos":
        return {
          bg: "bg-[#FFF0CC]",
          icon: <CheeseIcon className="w-24 h-24 text-[#D4940A] opacity-35" />,
          badge: "bg-[#F5B52E] text-[#0B3A66]",
          accent: "border-[#F5B52E]",
        };
      case "embutidos":
        return {
          bg: "bg-[#FFF0EE]",
          icon: <BeefIcon className="w-24 h-24 text-[#E53935] opacity-30" />,
          badge: "bg-[#E53935] text-white",
          accent: "border-[#E53935]",
        };
      case "untables":
        return {
          bg: "bg-orange-50",
          icon: <JarIcon className="w-24 h-24 text-[#FF8A30] opacity-35" />,
          badge: "bg-[#FF8A30] text-white",
          accent: "border-[#FF8A30]",
        };
      case "salchichas":
        return {
          bg: "bg-red-50",
          icon: <SausageIcon className="w-24 h-24 text-red-800 opacity-30" />,
          badge: "bg-red-800 text-white",
          accent: "border-red-800",
        };
      case "combos":
        return {
          bg: "bg-blue-50",
          icon: <Package className="w-24 h-24 text-[#0B3A66] opacity-30" />,
          badge: "bg-[#0B3A66] text-white",
          accent: "border-[#0B3A66]",
        };
      default:
        return {
          bg: "bg-gray-100",
          icon: null,
          badge: "bg-gray-800 text-white",
          accent: "border-gray-400",
        };
    }
  };

  const styles = getCategoryStyles();

  return (
    <div className={`product-card-hover bg-white rounded-2xl border-t-4 ${styles.accent} shadow-sm overflow-hidden flex flex-col group`}>
      {/* Thumbnail */}
      <div className={`${styles.bg} h-48 flex items-center justify-center relative p-4 overflow-hidden`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
        >
          {styles.icon}
        </motion.div>
        <span className={`absolute top-3 left-3 ${styles.badge} px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider`}>
          {product.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-0.5 leading-tight">{product.name}</h3>
        <span className="text-[#6B6B6B] text-sm mb-3">{product.presentation}</span>
        <p className="text-gray-500 text-sm mb-5 line-clamp-2 flex-1 leading-relaxed">{product.description}</p>

        <div className="mb-5 border-t border-gray-100 pt-4">
          <div className="font-nunito font-extrabold text-[#0B3A66] text-2xl">
            Desde {formatPrice(product.price)}
          </div>
          <span className="text-[10px] text-[#FF8A30] font-bold uppercase tracking-wider block mt-0.5">
            Precio mayorista: Consultar
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            to={`/catalogo/${product.slug}`}
            className="border-2 border-[#F5B52E] text-[#D4940A] hover:bg-[#F5B52E] hover:text-[#0B3A66] py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <FileText className="w-4 h-4" /> Detalles
          </Link>
          <a
            href={generateWhatsAppLink(`Hola Distri-Jarca! Me interesa cotizar: ${product.name}`)}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#E53935] to-[#C62828] text-white hover:brightness-110 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" /> Pedir
          </a>
        </div>
      </div>
    </div>
  );
}
