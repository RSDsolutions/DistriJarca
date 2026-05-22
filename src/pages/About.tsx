import { CheckCircle2, HeartHandshake, History, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { generateWhatsAppLink } from "../utils";

export default function About() {
  return (
    <div className="flex flex-col">
       {/* Mini Hero */}
       <section className="bg-[var(--color-neutral-cream)] py-16 relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none rotate-12">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#0B3A66" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-nunito font-extrabold text-4xl md:text-5xl text-[#0B3A66] mb-4">Quiénes Somos</h1>
          <p className="text-[var(--color-neutral-muted)] text-lg max-w-2xl mx-auto">Conoce la historia detrás de la distribuidora que abastece a cientos de negocios en Ecuador.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-[#FFF0CC] rounded-3xl p-12 aspect-[4/3] flex items-center justify-center relative shadow-inner overflow-hidden group">
            {/* Styled SVG Illustration */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, #F5B52E 2px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <Truck className="w-48 h-48 text-[var(--color-primary-yellow-dark)] group-hover:scale-105 transition-transform duration-500 relative z-10" />
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[var(--color-primary-yellow)]/30 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] leading-tight">Más de 15 años llevando calidad a los negocios de Ecuador.</h2>
            <div className="space-y-4 text-gray-600 font-sans leading-relaxed text-lg">
              <p>Distri-Jarca nació como una pequeña iniciativa familiar. Empezamos distribuyendo en un solo vehículo, tocando puertas en locales de comida rápida y pequeñas despensas que necesitaban un proveedor confiable.</p>
              <p>Hoy, hemos crecido de ser ese pequeño proveedor local a convertirnos en una distribuidora regional de quesos y embutidos de alta rotación, pero nunca hemos perdido nuestra esencia.</p>
              <p>Sabemos que si la materia prima de tu negocio falta un día, pierdes ventas. Por eso, nuestro compromiso principal no es solo venderte un producto, sino ser el socio logístico que asegura que tu cocina o vitrina nunca esté vacía.</p>
            </div>
            
            <div className="pt-6 border-t border-gray-100 mt-8">
              <Link to="/contacto" className="inline-flex items-center gap-2 bg-[#0B3A66] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0E4A80] transition-colors">
                Contactar a un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-neutral-lightgray)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] text-center mb-16">Nuestros Valores</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#FFF0CC] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-[var(--color-primary-yellow-dark)]" />
              </div>
              <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-2">Calidad Primero</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Solo distribuimos productos que cumplen con nuestros estrictos estándares de frescura y sabor. Si no lo consumiríamos nosotros, no lo vendemos.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#FFF0EE] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-8 h-8 text-[var(--color-secondary-red)]" />
              </div>
              <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-2">Familia y Confianza</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Somos una empresa familiar. Tratamos a cada cliente, sin importar su tamaño, como parte de nuestra red de confianza.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <History className="w-8 h-8 text-[var(--color-accent-orange)]" />
              </div>
              <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-2">Puntualidad</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Cumplimos los tiempos de entrega pactados. Entendemos que tu negocio no puede esperar, y nosotros tampoco.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#0E4A80]" />
              </div>
              <div>
                <h3 className="font-nunito font-bold text-xl text-[#0B3A66] mb-2">Crecimiento Juntos</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Cuando tu negocio crece y vende más, nosotros también crecemos. Por eso nos importa genuinamente tu éxito comercial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-nunito font-extrabold text-3xl md:text-4xl text-[#0B3A66] text-center mb-16">Nuestra Trayectoria</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-primary-yellow)] before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-primary-yellow)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-nunito font-bold text-xl text-[#0B3A66]">2008</h4>
                </div>
                <p className="text-gray-600 text-sm">Fundación de Distri-Jarca como distribuidora familiar local en Ecuador.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-primary-yellow)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-nunito font-bold text-xl text-[#0B3A66]">2012</h4>
                </div>
                <p className="text-gray-600 text-sm">Expansión de catálogo: primera incorporación robusta de línea de embutidos premium.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-primary-yellow)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-nunito font-bold text-xl text-[#0B3A66]">2016</h4>
                </div>
                <p className="text-gray-600 text-sm">Firma de primeros contratos continuos con cadenas formales de restaurantes y tiendas.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-primary-yellow)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-nunito font-bold text-xl text-[#0B3A66]">2020</h4>
                </div>
                <p className="text-gray-600 text-sm">Transformación rápida a digitalización: inicio de sistema de pedidos masivos por WhatsApp para mayor agilidad.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-secondary-red)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-red-gradient text-white p-6 rounded-2xl shadow-lg transform md:scale-105">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-nunito font-bold text-2xl">Presente</h4>
                </div>
                <p className="text-red-50 text-sm font-medium">Más de 500 negocios activos abastecidos semanalmente en toda la región.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
