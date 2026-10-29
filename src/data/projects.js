const poster = (id) => `${import.meta.env.BASE_URL}media/posters/${id}.webp`;
const video = (id) => `${import.meta.env.BASE_URL}media/videos/${id}.mp4`;

export const showreel = {
  id: 'reel-01',
  poster: poster('reel-01'),
  video: video('reel-01'),
  duration: '0:47',
  ratio: '9 / 16',
};

const reelContext = {
  en: 'Hook, pacing, kinetic captions and sound design. Cut for the feed, built to hold the first three seconds.',
  es: 'Hook, ritmo, subtítulos dinámicos y diseño sonoro. Cortado para el feed, construido para sostener los primeros tres segundos.',
};

const podcastContext = {
  en: 'Long-form conversations and brand content turned into vertical clips — without losing the message.',
  es: 'Conversaciones extensas y contenido de marca convertidos en clips verticales, sin perder el mensaje.',
};

export const reels = [
  {
    id: 'reel-02',
    kind: 'reel',
    duration: '0:33',
    title: { en: 'TrashBinClean PR — Local Business Ad', es: 'TrashBinClean PR — Local Business Ad' },
    context: reelContext,
    platform: 'Instagram · TikTok',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-02'),
    video: video('reel-02'),
  },
  {
    id: 'reel-03',
    kind: 'reel',
    duration: '0:34',
    title: { en: 'Dynamic Fitness Workout - Motion & Energy Edit', es: 'Dynamic Fitness Workout - Motion & Energy Edit' },
    context: reelContext,
    platform: 'Instagram · TikTok',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-03'),
    video: video('reel-03'),
  },
  {
    id: 'reel-04',
    kind: 'reel',
    duration: '1:05',
    title: { en: 'Centro Cristiano - Chruch Event', es: 'Centro Cristiano - Chruch Event' },
    context: reelContext,
    platform: 'Instagram · TikTok',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-04'),
    video: video('reel-04'),
  },
  {
    id: 'reel-01',
    kind: 'reel',
    duration: '0:47',
    title: { en: 'Salvanoise - Cinematic Style Test Edit', es: 'Salvanoise - Cinematic Style Test Edit' },
    context: reelContext,
    platform: 'Instagram · TikTok',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-01'),
    video: video('reel-01'),
  },
];

export const podcasts = [
  {
    id: 'reel-05',
    kind: 'podcast',
    duration: '0:48',
    title: { en: 'Jordan Peterson - Motivational Podcast Clip', es: 'Jordan Peterson - Motivational Podcast Clip' },
    context: podcastContext,
    platform: 'YouTube · Instagram',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-05'),
    video: video('reel-05'),
  },
  {
    id: 'reel-06',
    kind: 'podcast',
    duration: '0:38',
    title: { en: 'Jay Shetty - Podcast Clip Edit', es: 'Jay Shetty - Podcast Clip Edit' },
    context: podcastContext,
    platform: 'YouTube · Instagram',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-06'),
    video: video('reel-06'),
  },
  {
    id: 'reel-07',
    kind: 'podcast',
    duration: '0:36',
    title: { en: 'San Antonio Clasificados - Motion Graphic Ad', es: 'San Antonio Clasificados - Motion Graphic Ad' },
    context: podcastContext,
    platform: 'YouTube · Instagram',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-07'),
    video: video('reel-07'),
  },
  {
    id: 'reel-08',
    kind: 'podcast',
    duration: '0:33',
    title: { en: 'Buceo Salta - UnderWater Audiovisual Experience', es: 'Buceo Salta - UnderWater Audiovisual Experience' },
    context: podcastContext,
    platform: 'YouTube · Instagram',
    format: '9:16',
    scope: { en: 'Edit · Captions · Sound', es: 'Edición · Subtítulos · Sonido' },
    poster: poster('reel-08'),
    video: video('reel-08'),
  },
];

export const documentaries = [
  {
    id: 'doc-01',
    kind: 'doc',
    year: '2026',
    duration: '1:51',
    title: { en: 'Dyatlov Pass Incident - Cinematic Documentary', es: 'Dyatlov Pass Incident - Cinematic Documentary' },
    context: {
      en: 'Short-form documentary built around tension, pacing and visual storytelling. Dynamic cuts, sound design and motion graphics used to transform a complex historical event into acompelling narrative',
      es: 'Documental de formato corto construido en torno a la tensión, el ritmo y la narrativa visual. Montaje dinámico, diseño de sonido y gráficos en movimiento se utilizan para transformar un complejo acontecimiento histórico en una narrativa cautivadora.',
    },
    platform: 'YouTube',
    format: '16:9',
    scope: { en: 'Edit · Sound · Color · Motion Graphics', es: 'Edición · Sonido · Color · Motion Graphics' },
    poster: poster('doc-01'),
    video: video('doc-01'),
  },
  {
    id: 'doc-02',
    kind: 'doc',
    year: '2026',
    duration: '2:59',
    title: { en: 'The Aberfan Disaster (1966) - The Day Village Was Buried', es: 'The Aberfan Disaster (1966) - The Day Village Was Buried' },
    context: {
      en: 'Archival-driven documentary built with historical stills, motion graphics and a restrained grade. Edit, sound design and colorization working together to serve the story.',
      es: 'Documental basado en material de archivo, construido con imágenes fijas históricas, gráficos en movimiento y una gradación sobria. Edición, diseño de sonido y colorización trabajan en conjunto para servir a la historia.',
    },
    platform: 'YouTube',
    format: '16:9',
    scope: { en: 'Edit · Sound · Color · Motion Graphics', es: 'Edición · Sonido · Color · Motion Graphics' },
    poster: poster('doc-02'),
    video: video('doc-02'),
  },
];

const motionContext = {
  en: 'Graphic-led motion flyer: typography, rhythm and sound. Design and animation rather than footage editing.',
  es: 'Flyer animado: tipografía, ritmo y sonido. Diseño y animación, más que edición de material filmado.',
};

export const motion = [
  {
    id: 'motion-01',
    kind: 'motion',
    duration: '0:15',
    title: { en: 'Motion Flyer — 01', es: 'Motion flyer — 01' },
    context: motionContext,
    platform: 'Instagram',
    format: '9:16',
    scope: { en: 'Design · Animation · Sound', es: 'Diseño · Animación · Sonido' },
    poster: poster('motion-01'),
    video: video('motion-01'),
  },
  {
    id: 'motion-02',
    kind: 'motion',
    duration: '0:18',
    title: { en: 'Motion Flyer — 02', es: 'Motion flyer — 02' },
    context: motionContext,
    platform: 'Instagram',
    format: '9:16',
    scope: { en: 'Design · Animation · Sound', es: 'Diseño · Animación · Sonido' },
    poster: poster('motion-02'),
    video: video('motion-02'),
  },
  {
    id: 'motion-03',
    kind: 'motion',
    duration: '0:13',
    title: { en: 'Motion Flyer — 03', es: 'Motion flyer — 03' },
    context: motionContext,
    platform: 'Instagram',
    format: '9:16',
    scope: { en: 'Design · Animation · Sound', es: 'Diseño · Animación · Sonido' },
    poster: poster('motion-03'),
    video: video('motion-03'),
  },
];

export const films = [
  {
    id: 'film-01',
    original: 'AFUERA ES PELIGROSO',
    title: { en: 'Outside Is Dangerous', es: 'Afuera es peligroso' },
    role: { en: 'Editing · Sound Assistant', es: 'Edición · Asistencia de sonido' },
    platform: 'YouTube',
    url: 'https://www.youtube.com/watch?v=SIZ1yj5o3gY&t=7s',
    poster: `${import.meta.env.BASE_URL}media/stills/film-01.webp`,
  },
  {
    id: 'film-02',
    original: 'LAS HORAS',
    title: { en: 'The Hours', es: 'Las horas' },
    role: { en: 'Editing · Sound Editing · Sound Design', es: 'Edición · Edición de sonido · Diseño sonoro' },
    platform: 'YouTube',
    url: 'https://www.youtube.com/watch?v=zzWkKV4JN7A',
    poster: `${import.meta.env.BASE_URL}media/stills/film-02.webp`,
  },
  {
    id: 'film-03',
    original: 'LA HOSTERÍA',
    title: { en: 'The Inn', es: 'La hostería' },
    role: { en: 'Editing · Sound Assistant', es: 'Edición · Asistencia de sonido' },
    platform: 'Vimeo',
    url: 'https://vimeo.com/1183864040',
    poster: `${import.meta.env.BASE_URL}media/stills/film-03.webp`,
  },
  {
    id: 'film-04',
    original: 'CORTO MUNDIALISTA',
    title: { en: 'World Cup Short', es: 'Corto mundialista' },
    role: { en: 'Sound Recording · Sound Post-Production', es: 'Grabación de sonido · Postproducción de sonido' },
    platform: 'YouTube',
    url: 'https://www.youtube.com/watch?v=TZupTi3NZqc',
    poster: `${import.meta.env.BASE_URL}media/stills/film-04.webp`,
  },
  {
    id: 'film-05',
    original: 'FLIPBOOK — EL CUENTO DE LA PRINCESA KAGUYA',
    title: { en: 'Flipbook — The Tale of Princess Kaguya', es: 'Flipbook — El cuento de la princesa Kaguya' },
    role: {
      en: 'Illustration · Animation · Editing · Sound Design & Post-Production',
      es: 'Ilustración · Animación · Edición · Diseño sonoro y postproducción',
    },
    platform: 'Vimeo',
    url: 'https://vimeo.com/1183834124',
    poster: `${import.meta.env.BASE_URL}media/stills/film-05.webp`,
  },
];

export const clients = [
  {
    id: 'client-01',
    name: 'BeCreatives',
    category: { en: 'Production house', es: 'Productora' },
    src: `${import.meta.env.BASE_URL}media/clients/client-07.webp`,
  },
  {
    id: 'client-02',
    name: 'Lacoope Films',
    category: { en: 'Production house', es: 'Productora' },
    src: `${import.meta.env.BASE_URL}media/clients/client-08.webp`,
  },
  {
    id: 'client-03',
    name: 'Nexo Silvestre',
    category: { en: 'Production house', es: 'Productora' },
    src: `${import.meta.env.BASE_URL}media/clients/client-03.webp`,
  },
  {
    id: 'client-04',
    name: 'Altoremo',
    category: { en: 'Production house', es: 'Productora' },
    src: `${import.meta.env.BASE_URL}media/clients/client-02.webp`,
  },
  {
    id: 'client-05',
    name: 'Kingdomedia',
    category: { en: 'Publishing project', es: 'Proyecto editorial' },
    src: `${import.meta.env.BASE_URL}media/clients/client-09.webp`,
  },
  {
    id: 'client-06',
    name: 'Clasificados',
    category: { en: 'Marketplace', es: 'Marketplace' },
    src: `${import.meta.env.BASE_URL}media/clients/client-04.webp`,
  },
  {
    id: 'client-07',
    name: 'Terremoto',
    category: { en: 'Nightclub', es: 'Club nocturno' },
    src: `${import.meta.env.BASE_URL}media/clients/client-06.webp`,
  },
  {
    id: 'client-08',
    name: 'Centro Cristiano',
    category: { en: 'Christian Church', es: 'Iglesia Cristiana' },
    src: `${import.meta.env.BASE_URL}media/clients/client-01.webp`,
  },
  {
    id: 'client-09',
    name: 'TrashbinClean',
    category: { en: 'Cleaning company', es: 'Empresa de limpieza' },
    src: `${import.meta.env.BASE_URL}media/clients/client-05.webp`,
  },
];

export const contactMedia = {
  video: video('wedding-02'),
  poster: poster('wedding-02'),
  duration: '1:03',
  title: { en: 'Showreel | Video Editing Portfolio by SALVANOISE', es: 'Showreel | Video Editing Portfolio by SALVANOISE' },
};

export const contactPhoto = `${import.meta.env.BASE_URL}media/contact-photo.webp`;
