export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'quesos' | 'embutidos' | 'untables' | 'salchichas' | 'combos';
  presentation: string;
  price: number;
  description: string;
  uses: string;
}

export const PHONE_NUMBER = "593999999999"; // Placeholder

export const products: Product[] = [
  { id: '1', name: 'Queso fresco por kg', slug: 'queso-fresco', category: 'quesos', presentation: 'Por kg', price: 4.50, description: 'Queso fresco de textura suave y sabor balanceado. Ideal para desayunos y repostería.', uses: 'Ideal para: empanadas, desayunos, ensaladas.' },
  { id: '2', name: 'Queso mozarela block', slug: 'queso-mozarela', category: 'quesos', presentation: 'Por bloque (2.5kg)', price: 18.00, description: 'Mozzarella de excelente fundido y estiramiento. Perfecto para pizzerías y comida rápida.', uses: 'Ideal para: pizzas, sándwiches, lasañas.' },
  { id: '3', name: 'Queso crema tarro 1kg', slug: 'queso-crema', category: 'untables', presentation: 'Por unidad (1kg)', price: 6.80, description: 'Queso crema de textura sedosa y sabor delicado, muy versátil en cocina dulce y salada.', uses: 'Ideal para: repostería, dips, sushi, untar.' },
  { id: '4', name: 'Queso amarillo laminado', slug: 'queso-amarillo-laminado', category: 'quesos', presentation: 'Por paquete (104 rebanadas)', price: 14.50, description: 'Rebanadas perfectas que no se pegan, funden rápido y dan excelente sabor.', uses: 'Ideal para: hamburguesas, sándwiches calientes.' },
  { id: '5', name: 'Queso parmesano rallado', slug: 'queso-parmesano', category: 'quesos', presentation: 'Por kg', price: 12.00, description: 'Queso madurado de sabor intenso, rallado y listo para espolvorear.', uses: 'Ideal para: pastas, pizzas, gratinados.' },
  { id: '6', name: 'Queso ricotta', slug: 'queso-ricotta', category: 'untables', presentation: 'Por kg', price: 5.50, description: 'Ricotta fresca y ligera, excelente rendimiento en rellenos.', uses: 'Ideal para: pastas rellenas, postres ligeros.' },
  { id: '7', name: 'Mortadela corriente kg', slug: 'mortadela-corriente', category: 'embutidos', presentation: 'Por kg', price: 3.80, description: 'Clásica mortadela de excelente rendimiento y sabor tradicional.', uses: 'Ideal para: sándwiches fríos, desayunos escolares.' },
  { id: '8', name: 'Mortadela especial', slug: 'mortadela-especial', category: 'embutidos', presentation: 'Por kg', price: 5.20, description: 'Elaborada con cortesy finos, sabor premium y textura firme.', uses: 'Ideal para: tablas de fiambres, bocaditos.' },
  { id: '9', name: 'Jamón de pierna', slug: 'jamon-de-pierna', category: 'embutidos', presentation: 'Por bloque (3kg)', price: 22.00, description: 'Jamón de cerdo seleccionado, jugoso y de rebanado perfecto.', uses: 'Ideal para: sándwiches, pizzas, desayunos.' },
  { id: '10', name: 'Jamón ahumado', slug: 'jamon-ahumado', category: 'embutidos', presentation: 'Por bloque (2.5kg)', price: 24.00, description: 'Toque ahumado natural en madera, realza el sabor de tus preparaciones.', uses: 'Ideal para: pizzas premium, ensaladas de chef.' },
  { id: '11', name: 'Salami italiano', slug: 'salami-italiano', category: 'embutidos', presentation: 'Por unidad (1kg)', price: 11.50, description: 'Salami curado estilo italiano, ligeramente especiado.', uses: 'Ideal para: pizzas, bocaditos, tablas.' },
  { id: '12', name: 'Chorizo parrillero', slug: 'chorizo-parrillero', category: 'salchichas', presentation: 'Por paquete (10 un)', price: 7.00, description: 'Chorizo de cerdo jugoso especial para asados y parrillas.', uses: 'Ideal para: parrilladas, choripanes.' },
  { id: '13', name: 'Salchicha de pollo', slug: 'salchicha-pollo', category: 'salchichas', presentation: 'Por paquete (24 un)', price: 4.50, description: 'Salchicha suave de pollo, preferida por su ligereza.', uses: 'Ideal para: desayunos, hot dogs ligeros.' },
  { id: '14', name: 'Salchicha Frankfurt', slug: 'salchicha-frankfurt', category: 'salchichas', presentation: 'Por paquete (20 un)', price: 6.50, description: 'Ahumada y crujiente, perfecta para hot dogs premium.', uses: 'Ideal para: hot dogs, salchipapas.' },
  { id: '15', name: 'Pepperoni pizza', slug: 'pepperoni-pizza', category: 'embutidos', presentation: 'Por kg laminado', price: 13.00, description: 'Pepperoni rebanado de curación óptima. No se quema ni suelta exceso de grasa.', uses: 'Ideal para: pizzas.' },
  { id: '16', name: 'Combo Pizzería (mozzarella + pepperoni + jamón)', slug: 'combo-pizzeria', category: 'combos', presentation: 'Combo', price: 40.00, description: '1 Bloque de Mozzarella + 1kg Pepperoni + 1 Bloque Jamón. Rendimiento y calidad.', uses: 'Ideal para: pizzerías y negocios de comida italiana.' }
];

export const promos = [
  { id: 'p1', name: 'Combo Pizzería', includes: '2.5kg Mozzarella + 1kg Pepperoni + 1kg Jamón rallado', originalPrice: 48.00, promoPrice: 40.00, savings: 8.00, validUntil: 'Domingo' },
  { id: 'p2', name: 'Combo Hamburguesería', includes: '104 láminas Queso + 50 Salchichas + 1kg Tocino', originalPrice: 35.00, promoPrice: 30.00, savings: 5.00, validUntil: 'Fin de mes' },
  { id: 'p3', name: 'Combo Restaurante', includes: '2kg Queso Fresco + 1kg Queso Crema + 2kg Mortadela', originalPrice: 24.50, promoPrice: 20.00, savings: 4.50, validUntil: 'Viernes' },
  { id: 'p4', name: 'Combo Frigorífico', includes: '5kg Queso Fresco + 3kg Jamón Pierna + 2kg Salami', originalPrice: 75.00, promoPrice: 65.00, savings: 10.00, validUntil: 'Fin de mes' },
  { id: 'p5', name: 'Combo Semanal Ahorro', includes: '1kg Queso Fresco + 1kg Mortadela + 1 Pq Salchicha', originalPrice: 15.00, promoPrice: 12.00, savings: 3.00, validUntil: 'Domingo' },
  { id: 'p6', name: 'Combo Emprendedor', includes: '2.5kg Mozzarella + 2 Pq Salchicha Frankfurt', originalPrice: 31.00, promoPrice: 27.00, savings: 4.00, validUntil: 'Fin de mes' },
];

export const testimonials = [
  { name: 'Frigorífico Don Luis', city: 'Quito', quote: 'Desde que trabajamos con Distri-Jarca, nunca nos ha faltado producto. La frescura del queso es incomparable, nuestros clientes lo notan.', since: '2020' },
  { name: 'Pizzería La Mamma', city: 'Guayaquil', quote: 'El mozzarella bloque es perfecto, no suelta agua y funde hermoso. Las entregas siempre puntuales, me salvaron varias emergencias.', since: '2018' },
  { name: 'Minimarket Los Andes', city: 'Cuenca', quote: 'Comenzamos con un pedido pequeño y ahora son nuestro principal proveedor de embutidos. Precios justos y atención excelente por WhatsApp.', since: '2022' },
  { name: 'Burger Station', city: 'Machala', quote: 'El queso laminado es de primera y no se pega. Nos facilitan muchísimo el trabajo en la plancha.', since: '2021' },
  { name: 'Cafetería El Buen Día', city: 'Quito', quote: 'Sus jamones y el queso crema fresco elevaron la calidad de nuestros desayunos. Recomendados 100%.', since: '2019' },
  { name: 'Distribuidora del Sur', city: 'Loja', quote: 'Trabajamos al por mayor y sus precios de distribuidor nos dejan un muy buen margen. Son confiables y cumplidos.', since: '2016' },
];
