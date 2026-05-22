import { Building2, MessageCircle, Quote, ShoppingBasket, Store, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { testimonials } from "../data";
import { generateWhatsAppLink } from "../utils";

export default function Clients() {
  return (
    <div className="flex flex-col">
       {/* Mini Hero */}
       <section className="bg-[var(--color-neutral-cream)] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #0B3A66 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-nunito font-extrabold text-4xl md:text-5xl text-[#0B3A66] mb-4">Negocios que Confían en Distri-Jarca</h1>
          <p className="text-[var(--color-neutral-muted)] text-lg max-w-2xl mx-auto">Conoce los tipos de negocios a los que proveemos diariamente con la mejor calidad.</p>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6 lg:space-y-8">
            <ClientCard 
              icon={<UtensilsCrossed className="w-12 h-12 text-[#E53935]" />}
              emoji="🍔"
              title="Locales de Comida Rápida"
              desc="Hamburguesas, sándwiches, perros calientes — tenemos los ingredientes de alta rotación (queso laminado, tocino, salchichas, pepperoni) que necesitas siempre frescos, fundentes y al mejor precio."
              whatsappMsg="Hola Distri-Jarca. Tengo un local de comida rápida y busco proveedor de quesos y embutidos."
            />
             <ClientCard 
              icon={<Building2 className="w-12 h-12 text-[#0B3A66]" />}
              emoji="❄️"
              title="Frigoríficos y Cárnicos"
              desc="Surtido completo de quesos frescos, bloques enteros de embutidos y cortes curados para tu vitrina. Precios altamente competitivos que te permiten excelente margen de reventa."
              whatsappMsg="Hola Distri-Jarca. Tengo un frigorífico y necesito abastecer mi vitrina con productos al x mayor."
            />
             <ClientCard 
              icon={<ShoppingBasket className="w-12 h-12 text-[#F5B52E]" />}
              emoji="🛒"
              title="Despensas y Minimarkets"
              desc="Variedad de productos empacados, porcionados y listos para exhibición y venta al consumidor final. Proveemos el surtido ideal para que tu barrio siempre encuentre lo que busca."
              whatsappMsg="Hola Distri-Jarca. Tengo una despensa/minimarket y necesito quesos y embutidos de venta rápida."
            />
            <ClientCard 
              icon={<Store className="w-12 h-12 text-[#FF8A30]" />}
              emoji="🏪"
              title="Distribuidores Secundarios"
              desc="¿Quieres revender en tu zona? Trabajamos con distribuidores secundarios en toda la región ofreciendo tarifas preferenciales por volumen constante."
              whatsappMsg="Hola Distri-Jarca. Me interesa trabajar con ustedes como distribuidor secundario."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--color-neutral-lightgray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] text-center mb-16">Lo que dicen nuestros clientes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testi, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[var(--color-primary-yellow)] relative mt-4">
                <Quote className="absolute -top-4 -right-2 w-10 h-10 text-[var(--color-primary-yellow-light)]" />
                <p className="text-gray-600 font-sans italic relative z-10 mb-6 leading-relaxed">"{testi.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-[#0B3A66] text-white flex items-center justify-center font-bold font-nunito shrink-0">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-[#0B3A66] leading-tight">{testi.name}</h4>
                    <p className="text-sm text-gray-500">{testi.city}</p>
                  </div>
                   <div className="ml-auto flex flex-col items-end">
                      <span className="flex gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-[var(--color-primary-yellow)] text-xs">★</span>)}
                      </span>
                      <span className="bg-orange-50 text-[var(--color-accent-orange)] text-[10px] font-bold px-2 py-0.5 rounded-full">Desde {testi.since}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-gradient py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-nunito font-extrabold text-4xl text-white">¿Eres un negocio de comida?</h2>
          <p className="text-red-100 text-lg">Únete a más de 500 negocios que ya trabajan con Distri-Jarca y mejora tu rentabilidad asegurando la calidad de tus insumos.</p>
          <Link to="/contacto" className="inline-block mt-4 bg-white text-[#E53935] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-xl">
            Quiero ser cliente
          </Link>
        </div>
      </section>

    </div>
  );
}

function ClientCard({ icon, emoji, title, desc, whatsappMsg }: any) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow grid md:grid-cols-[120px_1fr] lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 items-center">
      <div className="bg-[#FFF8E7] aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-white bg-[radial-gradient(#0B3A66_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 scale-150 drop-shadow-md">
           {icon}
        </div>
        <span className="absolute bottom-2 right-2 text-2xl">{emoji}</span>
      </div>
      <div>
        <h3 className="font-nunito font-extrabold text-2xl lg:text-3xl text-[#0B3A66] mb-3">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">{desc}</p>
        <a
          href={generateWhatsAppLink(whatsappMsg)}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-red-gradient text-white hover:brightness-110 px-6 py-3 rounded-lg font-bold transition-transform hover:-translate-y-1 shadow-md shadow-[var(--color-secondary-red-glow)]"
        >
          <MessageCircle className="w-5 h-5"/> Contactar como {title.split(' ')[0]}
        </a>
      </div>
    </div>
  );
}
