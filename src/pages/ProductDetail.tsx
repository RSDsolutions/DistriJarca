import { useParams, Link, Navigate } from "react-router-dom";
import { products } from "../data";
import { generateWhatsAppLink, formatPrice } from "../utils";
import { ArrowLeft, CheckCircle2, MessageCircle, Package, Truck, AlertCircle } from "lucide-react";
import { BeefIcon, CheeseIcon, JarIcon, SausageIcon } from "../icons";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/catalogo" />;
  }

  const getCategoryStyles = () => {
    switch(product.category) {
      case 'quesos': return { bg: 'bg-[#FFF0CC]', icon: <CheeseIcon className="w-48 h-48 text-[var(--color-primary-yellow-dark)] opacity-40"/>, badge: 'bg-[var(--color-primary-yellow)] text-[#0B3A66]', name: '🧀 Quesos' };
      case 'embutidos': return { bg: 'bg-[#FFF0EE]', icon: <BeefIcon className="w-48 h-48 text-[var(--color-secondary-red)] opacity-30"/>, badge: 'bg-[var(--color-secondary-red)] text-white', name: '🥩 Embutidos' };
      case 'untables': return { bg: 'bg-orange-50', icon: <JarIcon className="w-48 h-48 text-[var(--color-accent-orange)] opacity-40"/>, badge: 'bg-[var(--color-accent-orange)] text-white', name: '🫙 Untables' };
      case 'salchichas': return { bg: 'bg-red-50', icon: <SausageIcon className="w-48 h-48 text-red-800 opacity-30"/>, badge: 'bg-red-800 text-white', name: '🌭 Salchichas' };
      case 'combos': return { bg: 'bg-blue-50', icon: <Package className="w-48 h-48 text-[#0B3A66] opacity-30"/>, badge: 'bg-[#0B3A66] text-white', name: '📦 Combos' };
      default: return { bg: 'bg-gray-100', icon: null, badge: 'bg-gray-800 text-white', name: 'Otros' };
    }
  };

  const styles = getCategoryStyles();

  const msg = `Hola Distri-Jarca! 👋\nMe interesa pedir este producto:\n\n*${product.name}*\nPresentación: ${product.presentation}\n\nMi negocio es [TIPO]. ¿Me ayudas con precio mayorista y disponibilidad?`;

  return (
    <div className="bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <Link to="/catalogo" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#0B3A66] mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al catálogo
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Image Side */}
          <div className="space-y-4">
            <div className={`${styles.bg} aspect-square rounded-3xl flex items-center justify-center p-8 relative border-2 border-gray-100 shadow-sm`}>
               {styles.icon}
               <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <span className={`${styles.badge} px-4 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider inline-block w-max shadow-sm`}>
                   {styles.name}
                 </span>
                 <span className="bg-white text-green-700 px-4 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 shadow-sm border border-green-100">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div> En stock
                 </span>
               </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className={`${styles.bg} aspect-square rounded-xl flex items-center justify-center opacity-80 cursor-pointer border-2 border-transparent hover:border-[var(--color-primary-yellow)] transition-all`}>
                <div className="scale-50">{styles.icon}</div>
              </div>
              <div className={`${styles.bg} aspect-square rounded-xl flex items-center justify-center opacity-80 cursor-pointer border-2 border-transparent hover:border-[var(--color-primary-yellow)] transition-all`}>
                 <div className="scale-75 opacity-50"><Package className="text-gray-400" /></div>
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="flex flex-col h-full">
            <h1 className="font-nunito font-extrabold text-4xl lg:text-5xl text-[#0B3A66] mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Precio Referencial</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-nunito font-extrabold text-3xl text-[var(--color-secondary-red)]">{formatPrice(product.price)}</span>
                    <span className="text-gray-500 font-medium">/ {product.presentation.toLowerCase()}</span>
                  </div>
                </div>
                <div className="bg-[var(--color-primary-yellow-light)] text-[var(--color-primary-yellow-dark)] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Consultar tarifa mayorista
                </div>
              </div>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-3">Descripción</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{product.description}</p>
              </div>

              <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-3">Usos recomendados</h3>
                <div className="flex items-start gap-3 bg-[var(--color-primary-yellow-vlight)] p-4 rounded-xl border border-[var(--color-primary-yellow)]/30">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary-yellow-dark)] shrink-0" />
                  <p className="text-[#0B3A66] font-medium">{product.uses}</p>
                </div>
              </div>

               <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-3">Presentaciones disponibles</h3>
                <div className="flex flex-wrap gap-3">
                  <label className="cursor-pointer">
                    <input type="radio" name="pres" className="peer sr-only" defaultChecked />
                    <div className="px-5 py-2.5 rounded-full border-2 border-[var(--color-primary-yellow)] bg-[var(--color-primary-yellow-vlight)] text-[#0B3A66] font-bold text-sm peer-checked:bg-[var(--color-primary-yellow)] peer-checked:text-white transition-colors">
                      {product.presentation}
                    </div>
                  </label>
                  <label className="cursor-pointer opacity-50 relative">
                    <input type="radio" name="pres" className="peer sr-only" disabled />
                    <div className="px-5 py-2.5 rounded-full border-2 border-gray-200 bg-white text-gray-500 font-bold text-sm line-through">
                      Por mayor (Agotado)
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-100">
              <a 
                href={generateWhatsAppLink(msg)}
                target="_blank" rel="noreferrer"
                className="bg-red-gradient text-white hover:brightness-110 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-xl shadow-[var(--color-secondary-red-glow)] text-lg"
              >
                <MessageCircle className="w-6 h-6" /> Pedir por WhatsApp
              </a>
              <Link 
                to="/catalogo"
                className="border-2 border-[var(--color-primary-yellow)] text-[var(--color-primary-yellow-dark)] hover:bg-[var(--color-primary-yellow)] hover:text-[#0B3A66] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors text-lg"
              >
                <Package className="w-5 h-5" /> Ver más productos
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 font-medium bg-gray-50 py-4 rounded-xl">
               <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-[var(--color-accent-orange)]" /> Entregas en 24h</span>
               <span>•</span>
               <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Producto garantizado</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
