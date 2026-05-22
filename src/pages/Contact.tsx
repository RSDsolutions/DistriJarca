import { Mail, MapPin, MessageCircle, Phone, FileCheck, Award, ShieldCheck } from "lucide-react";
import { generateWhatsAppLink } from "../utils";

export default function Contact() {
  const handleSimulatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Note: The prompt instructed to have "visual only, WhatsApp submit"
    // So we just take the data and open whatsapp.
    const formData = new FormData(form);
    const nombre = formData.get('nombre') as string;
    const negocio = formData.get('negocio') as string;
    const tipo = formData.get('tipo') as string;
    const ciudad = formData.get('ciudad') as string;
    const necesidad = formData.get('necesidad') as string;
    const detalle = formData.get('detalle') as string;

    const text = `Hola Distri-Jarca! 👋\n\n*Contacto:* ${nombre}\n*Negocio:* ${negocio} (${tipo})\n*Ciudad:* ${ciudad}\n*Necesito:* ${necesidad}\n\n*Detalle:*\n${detalle}`;
    
    window.open(generateWhatsAppLink(text), "_blank");
  };

  return (
    <div className="flex flex-col">
       {/* Mini Hero */}
       <section className="bg-[var(--color-neutral-cream)] py-16 text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-nunito font-extrabold text-4xl md:text-5xl text-[#0B3A66] mb-4">Contáctanos</h1>
          <p className="text-[var(--color-neutral-muted)] text-lg">Un asesor de ventas está listo para atenderte al instante.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 xl:gap-16">
            
            {/* Form Side */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <h2 className="font-nunito font-bold text-2xl text-[#0B3A66] mb-8">Envíanos tu consulta o pedido</h2>
              
              <form onSubmit={handleSimulatedSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nombre completo</label>
                    <input required name="nombre" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-yellow)] focus:border-transparent transition-all" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nombre de tu negocio</label>
                    <input required name="negocio" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-yellow)] focus:border-transparent transition-all" placeholder="Ej. Burger Store" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Tipo de negocio</label>
                    <select required name="tipo" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-yellow)] focus:border-transparent transition-all appearance-none cursor-pointer">
                      <option value="">Seleccionar...</option>
                      <option value="Local de comida rápida">Local de comida rápida</option>
                      <option value="Frigorífico">Frigorífico</option>
                      <option value="Despensa / Minimarket">Despensa / Minimarket</option>
                      <option value="Restaurante">Restaurante</option>
                      <option value="Distribuidor">Distribuidor</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Ciudad</label>
                    <input required name="ciudad" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-yellow)] focus:border-transparent transition-all" placeholder="Ej. Guayaquil" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">¿Qué necesitas?</label>
                  <select required name="necesidad" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-yellow)] focus:border-transparent transition-all appearance-none cursor-pointer">
                    <option value="">Seleccionar...</option>
                    <option value="Hacer un pedido">Hacer un pedido</option>
                    <option value="Cotización mayorista">Cotización mayorista</option>
                    <option value="Información de productos">Información de productos</option>
                    <option value="Convertirme en cliente">Convertirme en cliente</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Cuéntanos tu pedido o consulta</label>
                  <textarea required name="detalle" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-yellow)] focus:border-transparent transition-all resize-none" placeholder="Escribe aquí los detalles..."></textarea>
                </div>

                <button type="submit" className="w-full bg-red-gradient text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 flex justify-center items-center gap-2 shadow-xl shadow-[var(--color-secondary-red-glow)] transition-transform hover:-translate-y-1">
                  Enviar por WhatsApp <MessageCircle className="w-6 h-6" />
                </button>
              </form>

            </div>

             {/* Contact Panel */}
             <div className="space-y-8">
               <div className="bg-[#0B3A66] rounded-3xl p-8 border-t-4 border-[var(--color-primary-yellow)] shadow-lg relative overflow-hidden">
                 {/* Decorative background logo */}
                 <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11.5 5 9.5 4-4 8.5-8-1-5-6Z" /><path d="M11.5 5 3 9.5l5 6" /><path d="m21 9-4 8.5" /></svg>
                 </div>

                 <div className="mb-8">
                   <div className="bg-[var(--color-primary-yellow)] text-[#0B3A66] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded inline-block mb-4 relative z-10">
                     Respondemos en menos de 2 horas
                   </div>
                   
                   <a
                     href={generateWhatsAppLink("Hola Distri-Jarca! Necesito ayuda con...")}
                     target="_blank" rel="noreferrer"
                     className="bg-[#25D366] text-white w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-transform hover:-translate-y-1 shadow-lg relative z-10"
                   >
                     <MessageCircle className="w-6 h-6" /> Escribir al WhatsApp
                   </a>
                 </div>

                 <div className="space-y-6 relative z-10 font-sans">
                    <a href="tel:+593999999999" className="flex items-start gap-4 text-[var(--color-navy-light)] hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#0E4A80] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-yellow)] group-hover:text-[#0B3A66] transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="pt-2">
                        <p className="font-bold text-white text-lg">+593 99 999 9999</p>
                      </div>
                    </a>

                     <a href="mailto:ventas@distrijarca.ec" className="flex items-start gap-4 text-[var(--color-navy-light)] hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#0E4A80] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-yellow)] group-hover:text-[#0B3A66] transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="pt-2">
                        <p className="font-medium text-white">ventas@distrijarca.ec</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 text-[var(--color-navy-light)]">
                      <div className="w-10 h-10 rounded-full bg-[#0E4A80] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[var(--color-accent-orange)]" />
                      </div>
                      <div className="pt-1 space-y-1">
                        <p className="font-medium text-white">Oficinas y Bodega Central</p>
                        <p className="text-sm">Sector Industrial, Vía Principal.<br/>Ecuador</p>
                        <p className="text-xs text-[var(--color-primary-yellow)] mt-2 font-bold uppercase tracking-wider">Lunes a Viernes 8:00–18:00<br/>Sábados 8:00–14:00</p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>

          </div>

          {/* Trust strip */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-200">
            <div className="bg-[#FFF8E7] p-6 rounded-2xl flex items-center gap-4 shadow-sm">
               <FileCheck className="w-10 h-10 text-[#0B3A66]" />
               <p className="font-nunito font-bold text-[#0B3A66]">Empresa legalmente<br/>constituida</p>
            </div>
            <div className="bg-[#FFF8E7] p-6 rounded-2xl flex items-center gap-4 shadow-sm">
               <ShieldCheck className="w-10 h-10 text-[#0B3A66]" />
               <p className="font-nunito font-bold text-[#0B3A66]">Productos con registro<br/>sanitario</p>
            </div>
            <div className="bg-[#FFF8E7] p-6 rounded-2xl flex items-center gap-4 shadow-sm">
               <Award className="w-10 h-10 text-[#0B3A66]" />
               <p className="font-nunito font-bold text-[#0B3A66]">Más de 15 años de<br/>trayectoria</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
