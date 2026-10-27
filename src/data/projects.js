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
  en: 'A long conversation turned into vertical clips. The moment worth clipping, kept in context — clean captions, no lost thread.',
  es: 'Una conversación larga convertida en clips verticales. El momento que vale la pena, sin perder el contexto — subtítulos limpios y el hilo intacto.',
};

export const reels = [
  {
    id: 'reel-02',
    kind: 'reel',
    duration: '0:33',
    title: { en: 'Dynamic Reel — 01', es: 'Reel dinámico — 01' },
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
    title: { en: 'Dynamic Reel — 02', es: 'Reel dinámico — 02' },
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
    title: { en: 'Dynamic Reel — 03', es: 'Reel dinámico — 03' },
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
    title: { en: 'Dynamic Reel — 04', es: 'Reel dinámico — 04' },
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
    title: { en: 'Podcast Clip — 01', es: 'Clip de podcast — 01' },
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
    title: { en: 'Podcast Clip — 02', es: 'Clip de podcast — 02' },
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
    title: { en: 'Podcast Clip — 03', es: 'Clip de podcast — 03' },
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
    title: { en: 'Podcast Clip — 04', es: 'Clip de podcast — 04' },
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
    title: { en: 'Documentary — 01', es: 'Documental — 01' },
    context: {
      en: 'Interview-led portrait. Two-camera setup, archival stills and a restrained grade built around the voice of the subject.',
      es: 'Retrato con entrevistas. Dos cámaras, imágenes de archivo y un color contenido construido alrededor de la voz del protagonista.',
    },
    platform: 'YouTube',
    format: '16:9',
    scope: { en: 'Edit · Sound · Color', es: 'Edición · Sonido · Color' },
    poster: poster('doc-01'),
    video: video('doc-01'),
  },
  {
    id: 'doc-02',
    kind: 'doc',
    year: '2026',
    duration: '2:59',
    title: { en: 'Documentary — 02', es: 'Documental — 02' },
    context: {
      en: 'A slow-burn documentary portrait. Story first, pace second: every cut earns the next one, every pause has a reason.',
      es: 'Un retrato documental de cocción lenta. Primero la historia, después el ritmo: cada corte se gana el siguiente y cada pausa tiene un motivo.',
    },
    platform: 'YouTube',
    format: '16:9',
    scope: { en: 'Edit · Sound · Color', es: 'Edición · Sonido · Color' },
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
    src: `${import.meta.env.BASE_URL}media/clients/client-01.webp`,
  },
  {
    id: 'client-02',
    name: 'Lacoope Films',
    category: { en: 'Production house', es: 'Productora' },
    src: `${import.meta.env.BASE_URL}media/clients/client-02.webp`,
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
    src: `${import.meta.env.BASE_URL}media/clients/client-04.webp`,
  },
  {
    id: 'client-05',
    name: 'Kingdomedia',
    category: { en: 'Publishing project', es: 'Proyecto editorial' },
    src: `${import.meta.env.BASE_URL}media/clients/client-05.webp`,
  },
  {
    id: 'client-06',
    name: 'Clasificados',
    category: { en: 'Marketplace', es: 'Marketplace' },
    src: `${import.meta.env.BASE_URL}media/clients/client-06.webp`,
  },
  {
    id: 'client-07',
    name: 'Terremoto',
    category: { en: 'Nightclub', es: 'Club nocturno' },
    src: `${import.meta.env.BASE_URL}media/clients/client-07.webp`,
  },
  {
    id: 'client-08',
    name: 'Centro Cristiano',
    category: { en: 'Church', es: 'Iglesia' },
    src: `${import.meta.env.BASE_URL}media/clients/client-08.webp`,
  },
  {
    id: 'client-09',
    name: 'TrashbinClean',
    category: { en: 'Cleaning company', es: 'Empresa de limpieza' },
    src: `${import.meta.env.BASE_URL}media/clients/client-09.webp`,
  },
];

export const contactMedia = {
  video: video('wedding-02'),
  poster: poster('wedding-02'),
  duration: '1:03',
  title: { en: 'Wedding film — recent work', es: 'Wedding film — trabajo reciente' },
};

export const contactPhoto = `${import.meta.env.BASE_URL}media/contact-photo.webp`;
