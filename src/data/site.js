export const site = {
  name: 'Salvanoise',
  owner: 'Nahuel A. Salva',
  role: {
    en: 'Short-form & YouTube video editor',
    es: 'Editor de video para short-form y YouTube',
  },
  email: 'salvanoise@gmail.com',
  location: {
    en: 'Córdoba, Argentina',
    es: 'Córdoba, Argentina',
  },
  timezone: 'UTC−3',
  languages: {
    en: 'Spanish (native) · English (professional)',
    es: 'Español (nativo) · Inglés (profesional)',
  },
  availability: {
    en: 'Available for select projects — Nov 2026',
    es: 'Disponible para proyectos selectos — nov 2026',
  },
  responseTime: {
    en: 'Replies within 24 h · Mon–Fri',
    es: 'Respondo en 24 h · lun–vie',
  },

  media: {
    // Muted, looping previews inside the cards, like the original page.
    // Set to false to show still posters only.
    autoplayPreviews: true,
  },

  // TODO: add your WhatsApp number as a full international link, e.g.
  // whatsappUrl: 'https://wa.me/5493511234567'
  // Until then the WhatsApp button falls back to a pre-filled email.
  whatsappUrl: '',

  // TODO: replace with your Calendly / Cal.com link. Until then, the
  // "Book a call" button falls back to a pre-filled email.
  bookingUrl: '',

  socials: [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@salva.noise',
      url: 'https://www.instagram.com/salva.noise/',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      handle: '@salvanoise',
      url: 'https://www.tiktok.com/@salvanoise',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      // No channel URL exists yet. This is a real credited short film, not a
      // placeholder channel. TODO: replace with your channel when you have one.
      handle: { en: 'Film credit', es: 'Crédito de corto' },
      url: 'https://www.youtube.com/watch?v=SIZ1yj5o3gY&t=7s',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'Nahuel A. Salva',
      url: 'https://www.linkedin.com/in/nahuel-augusto-salva-93bb16353/',
    },
  ],
};

export const emailHref = `mailto:${site.email}`;

export const bookingHref =
  site.bookingUrl ||
  `mailto:${site.email}?subject=${encodeURIComponent('Intro call — Salvanoise')}&body=${encodeURIComponent(
    'Hi Nahuel,\n\nI would like to book a 15-minute intro call.\n\nProject:\nFormat:\nDeadline:\n\nThanks!'
  )}`;

export const whatsappHref =
  site.whatsappUrl ||
  `mailto:${site.email}?subject=${encodeURIComponent('WhatsApp enquiry — Salvanoise')}&body=${encodeURIComponent(
    'Hi Nahuel,\n\nI would like to talk about a project on WhatsApp.\n\nProject:\nFormat:\nDeadline:\n\nThanks!'
  )}`;
