import { generateWhatsAppLink, formatPrice } from "../utils";
import { promos } from "../data";
import { MessageCircle, Package, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Promotions() {
  return (
    <div className="flex flex-col">
       {/* Mini Hero */}
       <section className="bg-promo-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
           <span className="bg-yellow-400 text-[#0B3A66] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2 drop-shadow-sm">
             🔥 Válidas por tiempo limitado
           </span>
          <h1 className="font-nunito font-extrabold text-4xl md:text-5xl text-white mb-4">Promociones de la Semana</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promos.map(promo => (
              <div key={promo.id} className="bg-white rounded-2xl p-6 border-t-4 border-[var(--color-secondary-red)] shadow-sm hover:shadow-[0_8px_30px_rgba(229,57,53,0.15)] hover:-translate-y-1 transition-all relative group flex flex-col">
                <div className="absolute -top-3 -right-3 bg-[var(--color-secondary-red)] text-white text-sm font-bold px-4 py-1 rounded-full shadow-md transform rotate-12 group-hover:rotate-6 transition-transform">
                  PROMO 🔥
                </div>
                
                <div className="h-40 bg-[#FFF0EE] rounded-xl flex items-center justify-center mb-6 relative overflow-hidden border border-red-100">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E53935_1px,transparent_1px)] [background-size:10px_10px]"></div>
                  <Package className="w-20 h-20 text-[var(--color-secondary-red)] opacity-50 relative z-10" />
                </div>
                
                <h3 className="font-nunito font-extrabold text-2xl text-[var(--color-secondary-red)] mb-3">{promo.name}</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100 flex-1">
                  <p className="text-sm text-gray-700 font-medium">Incluye:</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">{promo.includes}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                     <span className="bg-[var(--color-primary-yellow)] text-[#0B3A66] px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest drop-shadow-sm">Ahorras {formatPrice(promo.savings)}</span>
                     <span className="text-xs font-bold text-[var(--color-accent-orange)] bg-orange-50 px-2 py-0.5 rounded">Válido hasta: {promo.validUntil.toLowerCase()}</span>
                  </div>
                  
                  <div className="flex items-end gap-3 mt-2">
                    <span className="text-4xl font-nunito font-extrabold text-[#1A1A1A]">{formatPrice(promo.promoPrice)}</span>
                    <span className="text-lg text-gray-400 line-through mb-1 font-bold">{formatPrice(promo.originalPrice)}</span>
                  </div>
                </div>
                
                <a 
                  href={generateWhatsAppLink(`Hola Distri-Jarca! Quiero pedir esta promo: ${promo.name} por ${formatPrice(promo.promoPrice)}`)}
                  target="_blank" rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-red-gradient text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-md mt-auto text-lg"
                >
                  <MessageCircle className="w-5 h-5" /> Pedir este combo
                </a>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-[#FFF0CC] rounded-3xl p-8 md:p-12 text-center border-2 border-[var(--color-primary-yellow)]/30 max-w-3xl mx-auto relative overflow-hidden shadow-sm">
             <div className="absolute -top-10 -right-10 opacity-10">
               <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#F5B52E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
             </div>
             
             <h3 className="font-nunito font-extrabold text-3xl text-[#0B3A66] mb-4 relative z-10">¿Quieres recibir las promos primero?</h3>
             <p className="text-gray-700 mb-8 max-w-lg mx-auto relative z-10">Únete a nuestra lista de difusión privada en WhatsApp. Promos exclusivas para negocios, una vez por semana. Sin spam.</p>
             
             <a
               href={generateWhatsAppLink("Hola! Quiero unirme a la lista de difusión de promociones para negocios.")}
               target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:brightness-105 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-md shadow-green-500/20 relative z-10"
             >
                <div className="bg-white/20 p-1 rounded-full"><Send className="w-4 h-4"/></div>
                Unirme a las promos
             </a>
          </div>

        </div>
      </section>
    </div>
  );
}
