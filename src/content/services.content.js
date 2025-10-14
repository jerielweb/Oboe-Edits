import graficoImg from '../assets/content/diseño.png';
import web from '../assets/content/Sitioweb.webp'
import Document from '../assets/doc/CV_Ejemplo.pdf#toolbar=0'
const serviceData = [
  {
    type: 'video',
    name: 'Edición/Creación de Video',
    description: [
      'Transforma tus grabaciones y contenido en videos profesionales, atractivos, dinámicos y de buena calidad.',
      'Ya sea que necesites videos para YouTube, redes sociales, presentaciones o cualquier otro propósito, estoy aquí para ayudarte a dar vida a tus ideas con edición experta y creatividad.',
    ],
    video: 'https://www.youtube.com/embed/vNbcctIrIZM',
    email: 'mailto:oboe.edits@hotmail.com?subject=Consulta%20sobre%20Edición%20de%20Video',
    link: 'https://wa.me/50672370958?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20Edición%20de%20Video.',
    example: 'Video De Polemica Para YouTube',
    list: ['Cortes y Montajes', 'Corrección de Color', 'Efectos Visuales', 'Animaciones', 'Incorporación de Música y Sonido', 'Subtítulos y Textos', 'Optimización para Plataformas'],
  },

  {
    type: 'image',
    name: 'Diseño Gráfico',
    description: [
      'Si necesitas piezas gráficas que impacten directamente y eleven tu marca, mi servicio está enfocado en crear diseños profesionales, listos para usar y optimizados para cualquier plataforma.',
      'Me especializo en el diseño de las herramientas visuales más cruciales para el marketing y la identidad, asegurando que cada pieza comunique tu mensaje de forma clara y atractiva.',
    ],
    image: graficoImg,
    email: 'mailto:oboe.edits@hotmail.com?subject=Consulta%20sobre%20Dise%C3%B1o%20Gr%C3%A1fico',
    list: ['Logotipos', 'Banners', 'Flyers', 'Tarjetas de Presentación', 'Infografías', 'Portadas para Redes Sociales', 'Miniaturas para YouTube', 'Posters', 'Material Publicitario', 'Imagenes De Fondo'],
    link: 'https://wa.me/50672370958?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20Diseño%20Gráfico.',
    example: 'Dideño de logotipos e iconos',
  },

  {
    type: 'image',
    image: web,
    name: 'Creación de Sitios Web Básicos',
    description: [
      'Me especializo en la creación de sitios web básicos, efectivos y de rápida implementación diseñados para pequeñas empresas, freelancers y proyectos que requieren una carta de presentación digital sólida.',
      'Un sitio web bien diseñado no solo mejora tu presencia en línea, sino que también aumenta la confianza de tus clientes potenciales y facilita la comunicación de tu propuesta de valor.',
    ],
    list: ['Sitio responsivo', 'Diseño moderno', 'Optimizado para el SEO', 'Soporte Contante', 'Buena Compatibilidad'],
    example: 'El mismo sitio que visitaste',
    link: 'https://api.whatsapp.com/send/?phone=50672370958&text=%21Hola%C2%A1%2C+Me+gustar%C3%ADa+saber+mas+informaci%C3%B3n+sobre+la+creaci%C3%B3n+de+sitios+web&type=phone_number&app_absent=0'
  },

  {
    type: 'PDF',
    name: 'Edición de Archivos',
    description: ['Ofrecemos servicios profesionales de edición y creación de archivos, transformando tus ideas y datos en documentos, presentaciones y materiales digitales pulcros y funcionales. Desde la optimización de archivos existentes hasta la creación de contenido completamente nuevo, garantizamos precisión, coherencia y un acabado de alta calidad.','Te puedo ayudar a crear, editar y mejorar tus archivos PDF, Word, Excel y PowerPoint de manera rápida y eficiente.',],
    list: [
      'Curriculum Profecional', 'Presentaciones', 'Proyectos', 'Cartas de Reacomendación', 'Conversión'
    ],
    link: 'https://api.whatsapp.com/send/?phone=50672370958&text=%21Hola%C2%A1%2C+Me+gustar%C3%ADa+saber+mas+informaci%C3%B3n+sobre+la+lo+de+documentos.&type=phone_number&app_absent=0',
    example: 'Curriculum Profecional',
    Document: Document
  },
];

export default serviceData;