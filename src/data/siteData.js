// ============================================================
//  CRÈME DE LA CRÈME SPA & BEAUTY — Centralized Site Data
//  Edit this file to update any text, hours, services, or
//  contact details across the entire website automatically.
// ============================================================

// ─────────────────────────────────────────────
//  BRAND & CONTACT
// ─────────────────────────────────────────────
export const siteName        = "Crème De La Crème Spa & Beauty";
export const siteTagline     = "Georgetown, Guyana's Most Sought-After Luxury Spa";
export const locationAddress = "Delph Avenue, between Duncan & William Street, Campbellville, Georgetown, Guyana";
export const locationShort   = "Delph Ave, Campbellville, Georgetown, Guyana";
export const contactPhone    = "+592 665-7125";
export const contactEmail    = "";   // Add when available
export const whatsappUrl     = "https://wa.me/5926657125?text=Hi%20Cr%C3%A8me%20De%20La%20Cr%C3%A8me%20Spa%2C%20I%27d%20like%20to%20book%20an%20appointment";
export const daysmartUrl        = "https://book.daysmart.com/booking/service?DSID=DC-600297";

// ─────────────────────────────────────────────
//  BUSINESS HOURS
// ─────────────────────────────────────────────
export const businessHours = [
  { day: "Monday – Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday",        time: "9:30 AM – 7:00 PM"  },
  { day: "Sunday",          time: "10:00 AM – 6:00 PM" },
];

// ─────────────────────────────────────────────
//  HOMEPAGE CONTENT
// ─────────────────────────────────────────────
export const homepageHero = {
  eyebrow:     "Georgetown, Guyana's Most Sought-After Luxury Spa",
  headlinePt1: "You Deserve",
  headlineEm:  "Nothing Less",
  headlinePt2: "Than This.",
  subheadline: "Guyana's premier destination for luxury facials, therapeutic massage, expert hair care, and precision nail artistry — all under one roof in the heart of Georgetown.",
  ctaPrimary:  "Reserve Now via WhatsApp",
  ctaSecond:   "Browse & Book Online",
};

export const homepagePromise = {
  quote:    "You'll wonder why you waited this long.",
  body:     "Every appointment is unhurried, bespoke, and entirely about you — because you didn't come here to be rushed. You came to be restored.",
  cta:      "Claim Your Appointment",
};

// Overview cards shown on the homepage (links to full service detail on /services)
export const serviceOverviews = [
  {
    title:       "Luxury Facials & Skin Care",
    description: "Your skin tells your story — let us make it a beautiful one. Our estheticians craft each facial to your exact skin profile, using medical-grade formulations that deliver visible results from the very first session.",
    href:        "/services#facials",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>`,
  },
  {
    title:       "Day Spa & Premium Massages",
    description: "An hour with our therapists is a full reset. Trained across Swedish, deep tissue, hot stone, and aromatherapy modalities, they work with both surgical precision and a deeply intuitive touch.",
    href:        "/services#massages",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"/></svg>`,
  },
  {
    title:       "Professional Hair Care & Styling",
    description: "Your hair is your crown — and it deserves a master craftsperson. From lived-in colour to keratin transformations, our stylists deliver results that turn heads long after you leave the chair.",
    href:        "/services#hair",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>`,
  },
  {
    title:       "Luxury Manicures & Pedicures",
    description: "Details make the difference. Our nail artists bring obsessive precision to every shape, polish, and finish — whether you want understated elegance or a bold statement that speaks for itself.",
    href:        "/services#nails",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`,
  },
];

// ─────────────────────────────────────────────
//  SERVICES (full menu — used on /services)
// ─────────────────────────────────────────────
export const serviceCategories = [
  {
    id:       "facials",
    label:    "Luxury Facials & Skin Care",
    tagline:  "Visible results. Real radiance. No compromises.",
    services: [
      {
        name:     "Signature Gold Facial",
        duration: "75 min",
        price:    "",
        desc:     "Our flagship treatment. A gold-infused protocol that firms, brightens, and deeply nourishes — designed to deliver a red-carpet glow that lasts for days.",
      },
      {
        name:     "Deep Pore Cleansing Facial",
        duration: "60 min",
        price:    "",
        desc:     "The reset your skin has been craving. Expert extraction and deep-cleansing actives work together to purify congested pores and restore balanced, healthy-looking skin.",
      },
      {
        name:     "Hydrating Vitamin C Facial",
        duration: "60 min",
        price:    "",
        desc:     "Dull, tired skin meets its match. A potent vitamin C infusion that visibly evens tone, erases the look of fatigue, and floods the skin with lasting luminosity.",
      },
      {
        name:     "Anti-Aging Collagen Facial",
        duration: "75 min",
        price:    "",
        desc:     "Turn back the clock — naturally. Collagen-stimulating actives work deep in the dermis to visibly plump fine lines and restore the supple firmness of younger skin.",
      },
      {
        name:     "Sensitive Skin Calming Facial",
        duration: "60 min",
        price:    "",
        desc:     "Reactive skin deserves expert care, not guesswork. This ultra-gentle botanical treatment reduces redness, calms irritation, and leaves even the most sensitive complexions feeling comfortable and balanced.",
      },
      {
        name:     "Express Glow Facial",
        duration: "30 min",
        price:    "",
        desc:     "No time? No problem. In 30 minutes, this power-packed treatment delivers a genuine radiance boost — perfect the morning of a special occasion or whenever your skin needs a quick, expert lift.",
      },
    ],
  },
  {
    id:       "massages",
    label:    "Day Spa & Premium Massages",
    tagline:  "Walk in carrying the week. Walk out carrying nothing.",
    services: [
      {
        name:     "Swedish Relaxation Massage",
        duration: "60 / 90 min",
        price:    "",
        desc:     "The gold standard of relaxation. Long, flowing strokes release surface tension, improve circulation, and coax the nervous system into a state of deep, full-body calm.",
      },
      {
        name:     "Deep Tissue Therapy Massage",
        duration: "60 / 90 min",
        price:    "",
        desc:     "For the tension that won't let go. Sustained, targeted pressure reaches the deeper muscle layers where chronic stress and stiffness hide — then systematically dissolves them.",
      },
      {
        name:     "Hot Stone Luxury Massage",
        duration: "90 min",
        price:    "",
        desc:     "Warmth. Weight. Release. Smooth volcanic basalt stones are guided across the body with therapeutic intention, creating a grounding, profoundly restorative experience unlike anything else.",
      },
      {
        name:     "Aromatherapy Journey Massage",
        duration: "75 min",
        price:    "",
        desc:     "A multi-sensory retreat. Your therapist handpicks a blend of pure essential oils matched to your mood and needs — then works them into the body through slow, deliberate, healing strokes.",
      },
      {
        name:     "Couples Spa Package",
        duration: "120 min",
        price:    "",
        desc:     "Luxury, together. Side-by-side massages in a private setting, rounded off with a sparkling toast — the most meaningful way to celebrate any occasion, or simply each other.",
      },
      {
        name:     "Prenatal Massage",
        duration: "60 min",
        price:    "",
        desc:     "You're carrying something extraordinary. This gentle, specially adapted massage honours your body's current needs — relieving back tension, reducing swelling, and bringing deep, safe relaxation during one of life's most demanding chapters.",
      },
    ],
  },
  {
    id:       "hair",
    label:    "Professional Hair Care & Styling",
    tagline:  "Your best hair day — every time you leave our chair.",
    services: [
      {
        name:     "Precision Haircut & Style",
        duration: "45+ min",
        price:    "",
        desc:     "Not just a haircut — a transformation. Your stylist analyses your face shape, texture, and lifestyle to sculpt a cut that works effortlessly from morning to night, day after day.",
      },
      {
        name:     "Full Colour & Toner",
        duration: "90+ min",
        price:    "",
        desc:     "Colour that looks like it was born there. Professional application paired with expert toning delivers seamless, even, multi-dimensional results that flatter your complexion and stay vibrant longer.",
      },
      {
        name:     "Balayage / Highlights",
        duration: "120+ min",
        price:    "",
        desc:     "The art of the sun-kissed look, done right. Hand-painted, freeform lightening creates effortlessly natural, graduated dimension — the kind of colour people spend months trying to achieve on their own.",
      },
      {
        name:     "Keratin Smoothing Treatment",
        duration: "120+ min",
        price:    "",
        desc:     "Life is too short to fight your hair. This professional keratin treatment eliminates frizz at the source, leaving hair genuinely smooth, manageable, and brilliantly glossy for weeks.",
      },
      {
        name:     "Deep Conditioning Hair Treatment",
        duration: "45 min",
        price:    "",
        desc:     "Colour-processed, heat-styled, or simply thirsty — every strand gets what it needs. This intensive repair treatment restores moisture, seals the cuticle, and brings back softness and shine you thought was gone.",
      },
      {
        name:     "Blowout & Style",
        duration: "45 min",
        price:    "",
        desc:     "A professional blowout changes everything. Volume, movement, and a flawless finish that holds — this is what a great blowout actually feels like when done by someone who has mastered it.",
      },
    ],
  },
  {
    id:       "nails",
    label:    "Luxury Manicures & Pedicures",
    tagline:  "Obsessive precision. Immaculate finish.",
    services: [
      {
        name:     "Signature Luxury Manicure",
        duration: "45 min",
        price:    "",
        desc:     "The benchmark for beautiful hands. Premium exfoliation, careful cuticle work, a deeply relaxing hand massage, and a flawless polish application — every detail seen to, every time.",
      },
      {
        name:     "Gel Manicure",
        duration: "60 min",
        price:    "",
        desc:     "All the polish, none of the waiting. Long-wear gel colour cures instantly to a mirror-bright, chip-resistant finish that stays immaculate through two weeks of real life.",
      },
      {
        name:     "Luxury Spa Pedicure",
        duration: "60 min",
        price:    "",
        desc:     "Your feet carry you everywhere — give them the care they deserve. A full-service spa pedicure featuring a warm soak, buffing scrub, therapeutic massage, and pristine polish in a genuinely relaxing environment.",
      },
      {
        name:     "Gel Pedicure",
        duration: "75 min",
        price:    "",
        desc:     "The complete pedicure experience elevated with a lasting gel finish. Every element of our spa pedicure, sealed with durable colour that holds from sandal season to sandal season.",
      },
      {
        name:     "Nail Art Design",
        duration: "Varies",
        price:    "",
        desc:     "Your nails, your canvas. From refined geometric accents to intricate hand-painted designs, our nail artists execute at a level of craft that photographs beautifully and impresses in person.",
      },
      {
        name:     "Paraffin Wax Treatment",
        duration: "Add-on",
        price:    "",
        desc:     "The luxury add-on your hands and feet will thank you for. Warm paraffin wax envelops the skin in moisture, relieves joint stiffness, and leaves a softness that you'll notice for days.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
//  ABOUT PAGE CONTENT
// ─────────────────────────────────────────────
export const aboutStory = {
  eyebrow: "Georgetown, Guyana",
  heading: "Built on One Belief: You Should Feel Extraordinary",
  paragraphs: [
    "Crème De La Crème Spa & Beauty was founded with a clear and unapologetic vision: to build something Georgetown had never quite seen before — a luxury spa that didn't ask you to travel abroad to experience world-class beauty and wellness.",
    "Nestled on Delph Avenue in Campbellville, our sanctuary was designed from the ground up as a place of genuine refuge. Where the noise of the day stops at the door. Where every detail — from the scent in the air to the weight of a warm towel — is considered.",
    "We believe that truly exceptional service is felt before a single word is spoken. It's in the environment, the expertise, the quiet confidence of a team that genuinely knows what they're doing. That's the standard we hold ourselves to — every client, every appointment, every day.",
    "Georgetown deserves the best. So do you.",
  ],
};

export const aboutValues = [
  {
    title: "Uncompromising Standards",
    desc:  "We don't cut corners. Every product, every tool, every technique is held to an exacting standard — because you'll feel the difference immediately.",
  },
  {
    title: "Genuinely Tailored Care",
    desc:  "No two clients are the same. Every treatment begins with listening — understanding your skin, your goals, and your preferences before a single product is applied.",
  },
  {
    title: "Expert Practitioners",
    desc:  "Our team trains continuously. Technique, product knowledge, and client care are ongoing commitments — not one-time credentials.",
  },
  {
    title: "A Space That Restores",
    desc:  "From the moment you step inside, the environment itself begins working on you. The calm, the warmth, the detail — all of it is intentional.",
  },
];

// ─────────────────────────────────────────────
//  CONTACT PAGE CONTENT
// ─────────────────────────────────────────────
export const contactIntro = "The fastest way to book is via WhatsApp — we're responsive, friendly, and ready to find you the perfect slot. Prefer to browse availability at your own pace? Our online calendar has you covered.";

export const contactBookingCard = {
  eyebrow:  "The Easiest Way to Book",
  heading:  "Pick Your Time. We'll Handle the Rest.",
  body:     "No waiting lists. No friction. Just tell us what you'd like, and we'll take care of every detail.",
  ctaPrimary: "Book via WhatsApp",
  ctaSecond:  "Online Calendar",
};

// ─────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────
export const footerTagline = "Georgetown's finest sanctuary for luxury beauty & total restoration.";

export const footerNavLinks = [
  { label: "Home",     href: "/"        },
  { label: "Services", href: "/services"},
  { label: "About",    href: "/about"   },
  { label: "Contact",  href: "/contact" },
];
