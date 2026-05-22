import { MapPin, PackageCheck, Route, Timer } from "lucide-react";
import { generateWhatsAppLink } from "../utils";

export default function Distribution() {
  return (
    <div className="flex flex-col">
       {/* Mini Hero */}
       <section className="bg-[#0B3A66] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-9h-5V5h-5v12h1"/><path d="M7 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-nunito font-extrabold text-4xl md:text-5xl text-[var(--color-primary-yellow)] mb-4">Distribución Rápida y Confiable</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">Llevamos los productos directo a tu local, manteniendo la cadena de frío y los tiempos pactados.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[var(--color-neutral-cream)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] mb-16">El proceso de entrega</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-primary-yellow)]/30 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-primary-yellow)] text-[#0B3A66] rounded-full flex items-center justify-center font-bold text-xl shadow-md border-2 border-white">1</div>
              <Route className="w-10 h-10 text-[var(--color-accent-orange)] mx-auto mb-4" />
              <h3 className="font-nunito font-bold text-lg text-[#0B3A66] mb-2">Realiza tu pedido</h3>
              <p className="text-[var(--color-neutral-muted)] text-sm">Vía WhatsApp comunicando tu necesidad a nuestro asesor.</p>
            </div>
            
             <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-primary-yellow)]/30 relative mt-4 md:mt-0">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-primary-yellow)] text-[#0B3A66] rounded-full flex items-center justify-center font-bold text-xl shadow-md border-2 border-white">2</div>
              <PackageCheck className="w-10 h-10 text-[var(--color-accent-orange)] mx-auto mb-4" />
              <h3 className="font-nunito font-bold text-lg text-[#0B3A66] mb-2">Confirmación</h3>
               <p className="text-[var(--color-neutral-muted)] text-sm">Validamos stock y precio final en menos de 2 horas laborables.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-primary-yellow)]/30 relative mt-4 md:mt-0">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-primary-yellow)] text-[#0B3A66] rounded-full flex items-center justify-center font-bold text-xl shadow-md border-2 border-white">3</div>
              <Timer className="w-10 h-10 text-[var(--color-accent-orange)] mx-auto mb-4" />
              <h3 className="font-nunito font-bold text-lg text-[#0B3A66] mb-2">Preparación</h3>
               <p className="text-[var(--color-neutral-muted)] text-sm">Armado inmediato para pedidos recibidos antes de las 14:00.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-primary-yellow)]/30 relative mt-4 md:mt-0">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-primary-yellow)] text-[#0B3A66] rounded-full flex items-center justify-center font-bold text-xl shadow-md border-2 border-white">4</div>
              <Truck className="w-10 h-10 text-[var(--color-accent-orange)] mx-auto mb-4" />
              <h3 className="font-nunito font-bold text-lg text-[#0B3A66] mb-2">Entrega</h3>
               <p className="text-[var(--color-neutral-muted)] text-sm">Recibe en la puerta de tu local en 24-48h según zona.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Map & Coverage */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66]">¿A dónde llegamos?</h2>
            <p className="text-gray-600 text-lg">Cubrimos las principales zonas comerciales urbanas con nuestras propias rutas consolidadas.</p>
            
            <div className="flex flex-wrap gap-3 pt-4">
               {['Zona Norte', 'Centro Histórico', 'Zona Sur', 'Valles', 'Zona Industrial', 'Áreas Periféricas'].map(zone => (
                 <span key={zone} className="bg-orange-50 text-[var(--color-accent-orange)] font-bold px-4 py-2 rounded-full border border-orange-200">
                   {zone}
                 </span>
               ))}
            </div>

            <div className="bg-[#FFF0EE] border-l-4 border-[var(--color-secondary-red)] p-4 rounded-r-xl mt-8">
              <p className="text-[#0B3A66] font-medium text-sm">
                <strong>¿Tu zona no está en la lista?</strong> Consúltanos por WhatsApp, estamos en constante expansión de rutas y coordinamos entregas especiales.
              </p>
            </div>
          </div>

          <div className="bg-[#0B3A66] rounded-3xl p-8 aspect-video md:aspect-[4/3] flex items-center justify-center relative shadow-xl overflow-hidden border-4 border-white/10">
            {/* Map Placeholder */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0, #0B3A66 100%)', backgroundSize: '100% 100%' }}></div>
            <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--color-primary-yellow)] opacity-50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M100 20 C40 20 20 60 20 100 C20 150 100 180 100 180 C100 180 180 150 180 100 C180 60 160 20 100 20 Z" />
              <path d="M70 80 L130 120 M130 80 L70 120" stroke="rgba(255,255,255,0.2)"/>
            </svg>
            <MapPin className="absolute top-1/3 left-1/3 w-8 h-8 text-[var(--color-secondary-red)] animate-bounce" />
            <MapPin className="absolute top-1/2 left-2/3 w-6 h-6 text-[var(--color-secondary-red)] opacity-80" />
            <MapPin className="absolute bottom-1/3 left-1/2 w-7 h-7 text-[var(--color-accent-orange)] opacity-90" />
          </div>

        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#FFF0CC] rounded-3xl p-8 md:p-12 shadow-sm border border-[var(--color-primary-yellow)]/30">
            <h2 className="font-nunito font-extrabold text-3xl text-[#0B3A66] mb-8 text-center">Condiciones de Pedido</h2>
            
            <div className="bg-white rounded-xl divide-y divide-gray-100 border border-gray-100 shadow-sm overflow-hidden">
               <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-2 sm:gap-6">
                 <div className="font-bold text-[#0B3A66]">Pedido mínimo</div>
                 <div className="sm:col-span-2 text-gray-600">No manejamos mínimos estrictos en unidades, pero aplican montos referenciales para mantener precios de mayorista y envío gratis.</div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-2 sm:gap-6">
                 <div className="font-bold text-[#0B3A66]">Zonas de cobertura</div>
                 <div className="sm:col-span-2 text-gray-600 flex items-center gap-2">
                   Entregamos en la ciudad matriz y valles aledaños. Para provincias coordinamos el despacho en terminales seguros.
                 </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-2 sm:gap-6">
                 <div className="font-bold text-[#0B3A66]">Formas de pago</div>
                 <div className="sm:col-span-2 text-gray-600 flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-xs font-bold text-gray-700">Transferencia</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-xs font-bold text-gray-700">Efectivo contra-entrega</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-xs font-bold text-gray-700">Crédito (Aprobación previa)</span>
                 </div>
               </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-6 gap-2 sm:gap-6">
                 <div className="font-bold text-[#0B3A66]">Devoluciones</div>
                 <div className="sm:col-span-2 text-gray-600">Al ser cadena de frío, toda revisión se hace al momento de la entrega conjunta con el despachador.</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
