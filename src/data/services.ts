// ============================================================
//  SERVICES DATASET — single source of truth for /services
//  Each service: id, category, name, price (GYD), description,
//  daySmartUrl, hasDetailPage (+ optional detail for the modal).
// ============================================================

export const daySmartUrl =
  "https://book.daysmart.com/booking/service?DSID=DC-600297";

export interface ServiceDetail {
  /** Benefit bullets shown in the View Details modal */
  benefits: string[];
  sessions?: string;
  downtime?: string;
}

export interface Service {
  id: string;
  category: string;
  name: string;
  /** GYD amount. 0 = complimentary, null = on consultation */
  price: number | null;
  description: string;
  daySmartUrl: string;
  hasDetailPage: boolean;
  detail?: ServiceDetail;
}

export interface ServiceCategory {
  id: string;
  label: string;
  tagline: string;
  /** One-sentence outcome intro under the category heading */
  intro: string;
  services: Service[];
}

export function formatPrice(value: number | null): string {
  if (value === null || value === undefined) return "On Consultation";
  if (value === 0) return "Complimentary";
  return `GY$${value.toLocaleString("en-US")}`;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function svc(
  name: string,
  price: number | null,
  description: string,
  detail?: ServiceDetail,
): Omit<Service, "category"> {
  return {
    id: slugify(name),
    name,
    price,
    description,
    daySmartUrl,
    hasDetailPage: Boolean(detail),
    detail,
  };
}

function category(
  id: string,
  label: string,
  tagline: string,
  intro: string,
  services: Omit<Service, "category">[],
): ServiceCategory {
  return { id, label, tagline, intro, services: services.map(s => ({ ...s, category: id })) };
}

// ─────────────────────────────────────────────
//  CATALOG
// ─────────────────────────────────────────────
export const serviceCategories: ServiceCategory[] = [

  category(
    "facials",
    "Facials & Advanced Skincare",
    "Clear, glowing, filter-free skin.",
    "These treatments clear breakouts, fade scars and dark spots, and restore an even, lit-from-within glow.",
    [
      svc("HydraFacial With Booster", 25000,
        "Deep-cleanses, exfoliates and floods skin with hydration in one session — an instant glass-skin glow with zero downtime."),
      svc("Glow Facial", 20000,
        "A brightening treatment that revives dull, tired skin and leaves you with an even, radiant complexion."),
      svc("Acne Facial", 20000,
        "Targets active breakouts with deep extraction and calming actives to decongest and clear your skin."),
      svc("Acne Laser Treatment", 15000,
        "Laser energy destroys acne-causing bacteria and calms inflammation — clearer skin without harsh scrubbing."),
      svc("Anti-Aging Facial", 25000,
        "Collagen-boosting actives visibly soften fine lines and restore the firmness of younger skin."),
      svc("Deep Cleansing Facial", 15000,
        "A thorough reset that purges pores, lifts buildup and rebalances stressed skin."),
      svc("Chemical Peel Facial", 25000,
        "Medical-grade exfoliation that fades dark spots, acne scars and uneven tone — layer by layer."),
      svc("Algae Peel", 20000,
        "A natural marine peel that resurfaces the skin and stimulates renewal without harsh chemicals."),
      svc("Microdermabrasion Face Renewal", 20000,
        "Gently buffs away dead surface cells to smooth texture and brighten instantly."),
      svc("CO2 Face Rejuvenation", 60000,
        "Fractional CO2 laser resurfacing — the gold standard for deep scars, wrinkles and total skin renewal.",
        {
          benefits: [
            "Dramatically reduces acne scars, deep lines and rough texture",
            "Stimulates your own collagen for results that keep improving for months",
            "Evens tone and tightens skin in treated areas",
            "Full consultation and step-by-step explanation before treatment",
          ],
          sessions: "1–3 sessions, spaced 4–6 weeks apart",
          downtime: "5–7 days of redness and peeling — we guide you through aftercare",
        }),
      svc("Platelet-Rich Plasma (PRP) Facial", 30000,
        "Your own platelets are re-applied to trigger natural collagen — the famous celebrity “blood facial”.",
        {
          benefits: [
            "Uses your body's own growth factors — nothing synthetic",
            "Improves texture, fine lines and acne scarring naturally",
            "Restores a healthy, youthful glow over the following weeks",
          ],
          sessions: "3 sessions recommended, 4 weeks apart",
          downtime: "Mild redness for 24–48 hours",
        }),
      svc("Salmon DNA", 25000,
        "Polynucleotide skin therapy that deeply repairs, hydrates and restores elasticity from within.",
        {
          benefits: [
            "Intensive repair for dehydrated, stressed or aging skin",
            "Boosts elasticity and skin density",
            "Excellent alongside peels and laser treatments",
          ],
          sessions: "2–4 sessions for best results",
          downtime: "Minimal — slight redness same day",
        }),
      svc("Stem Cell Treatment", 25000,
        "Growth-factor therapy that accelerates skin regeneration, firmness and repair.",
        {
          benefits: [
            "Speeds up cellular renewal for smoother, firmer skin",
            "Supports recovery after laser or peel treatments",
            "Softens fine lines and improves overall skin quality",
          ],
          sessions: "Series of 3 recommended",
          downtime: "None to minimal",
        }),
      svc("Spongella", 20000,
        "A natural sea-sponge micro-exfoliation that keeps renewing your skin for days after treatment."),
      svc("Moon Bath", 15000,
        "A soothing, restorative ritual that calms the skin and melts away stress."),
      svc("Carbon Facial", 25000,
        "The laser “Hollywood facial” — a carbon mask plus laser that tightens pores and brightens instantly."),
      svc("IPL Laser Face Rejuvenation", 30000,
        "Intense pulsed light fades sun damage, redness and pigmentation for clearer, younger-looking skin."),
      svc("Pigmentation Reduction", 25000,
        "Targeted laser therapy that breaks up stubborn dark patches and evens your skin tone."),
      svc("Laser Skin Tightening", 30000,
        "Laser heat lifts and firms by stimulating collagen — tighter skin with no needles and no surgery."),
      svc("Butt Facial", 12000,
        "Smooths, brightens and clears bumps and dark spots — flawless skin from every angle."),
      svc("Vajacial", 10000,
        "A gentle intimate-area facial that treats ingrowns, bumps and hyperpigmentation with expert care."),
      svc("Body Scrubs", 15000,
        "Full-body exfoliation that sweeps away dullness and reveals soft, polished, glowing skin."),
      svc("Facial Consultation", 2000,
        "A one-on-one skin assessment where we map your personalised treatment plan — the smartest first step."),
    ],
  ),

  category(
    "body-contouring",
    "Body Contouring & Sculpting",
    "The silhouette you want — without the surgeon.",
    "These treatments reduce stubborn fat, firm loose skin and define your curves — no surgery, no downtime.",
    [
      svc("Body Contouring Consultation", 2000,
        "Your starting point — a full body assessment and a personalised sculpting plan with honest expectations."),
      svc("Cavitation", 15000,
        "Ultrasound waves break down stubborn fat cells so your body flushes them naturally — inches lost, no surgery."),
      svc("V10 Cavitation", 15000,
        "Next-generation cavitation that reaches deeper fat for stronger slimming and smoother contours."),
      svc("Fat Blaster", 15000,
        "An intensive fat-melting session focused on your most stubborn problem zone."),
      svc("Flat Tummy Session", 15000,
        "Focused abdominal sculpting that flattens, tightens and defines your midsection."),
      svc("EmSculpt Tummy", 15000,
        "Electromagnetic pulses build muscle while burning fat — like thousands of crunches in one relaxed session."),
      svc("EmSculpt Butt Lifting", 15000,
        "Lifts and firms the glutes by building muscle — a rounder, higher shape without a single squat."),
      svc("Vacuum Butt Treatment", 15000,
        "Non-invasive suction therapy that lifts, rounds and enhances your natural curves."),
      svc("Waist Sculpture", 15000,
        "Targeted waistline treatment for a defined, snatched silhouette."),
      svc("Radio Frequency Skin Tightening", 15000,
        "RF heat firms loose skin and smooths texture while your contouring results take shape."),
      svc("Maintenance Treatment — Cavitation RF", 15000,
        "The smart top-up that keeps your contouring results locked in after your main program."),
      svc("5D Laser", 15000,
        "Low-level laser lipolysis that painlessly shrinks fat cells in targeted areas."),
      svc("6D Lipo Laser", 15000,
        "Six-directional lipo laser coverage for even, efficient fat reduction."),
      svc("10D Laser", 15000,
        "Our most advanced lipo laser — maximum coverage for faster visible slimming."),
      svc("Endospheres", 15000,
        "Compressive micro-vibration that smooths cellulite, drains fluid and boosts circulation."),
      svc("Tecar", 15000,
        "Deep radio-frequency therapy that accelerates fat metabolism and tissue recovery."),
      svc("Venus Legacy", 15000,
        "Radio frequency plus magnetic pulses for skin tightening and cellulite smoothing in one treatment."),
      svc("Wood Therapy", 10000,
        "Sculpting wooden tools stimulate lymphatic drainage and hand-define your contours."),
      svc("Cellulite Reduction", 20000,
        "Targets dimpled skin on thighs and glutes for a visibly smoother, firmer surface."),
      svc("Back Sculpting", 20000,
        "Smooths bra-line bulge and defines the back for a sleeker profile."),
      svc("Chin Reduction", 30000,
        "Non-surgical double-chin reduction for a sharper, more defined jaw profile."),
      svc("Chin Reduction With Sculpting (6 Sessions)", 100000,
        "A complete six-session program that melts under-chin fat and sculpts your jawline for good.",
        {
          benefits: [
            "Six progressive sessions for a permanently sharper profile",
            "Combines fat reduction with skin-tightening technology",
            "No surgery, no needles, no recovery time",
          ],
          sessions: "6 sessions, typically 1–2 weeks apart",
          downtime: "None — return to your day immediately",
        }),
      svc("Liquid Lipo Injections", 30000,
        "Fat-dissolving injections for precise, targeted contouring of small stubborn areas."),
      svc("Leg Reduction", 60000,
        "Combined contouring technologies that slim and shape the legs."),
      svc("Thigh Slimming And Sculpting (6 Sessions)", 100000,
        "A six-session program that slims, smooths and firms your thighs from every angle.",
        {
          benefits: [
            "Progressive slimming plus cellulite smoothing over 6 sessions",
            "Firms and tightens as inches reduce",
            "A structured program — not a one-off treatment",
          ],
          sessions: "6 sessions, typically 1–2 weeks apart",
          downtime: "None",
        }),
      svc("Fibrosis Treatments", 120000,
        "Breaks down post-surgical hardness, lumps and adhesions to restore smooth, natural-feeling results.",
        {
          benefits: [
            "Softens fibrosis and hard lumps after lipo or BBL surgery",
            "Restores smooth, even contours",
            "Reduces discomfort and tightness in treated areas",
          ],
          sessions: "Program tailored after assessment",
          downtime: "None — supports your recovery",
        }),
      svc("Skin Tightening Program", 250000,
        "Our complete multi-technology program for dramatically firmer, lifted skin across your chosen areas.",
        {
          benefits: [
            "Combines RF, laser and advanced tightening technologies",
            "A structured full program — assessed, planned and tracked",
            "Firms loose skin after weight loss, pregnancy or aging",
          ],
          sessions: "Full program — schedule set at consultation",
          downtime: "None",
        }),
      svc("Post Surgery Recovery Program (Sessions)", 150000,
        "Professional lymphatic and recovery care that protects your surgical results and speeds healing.",
        {
          benefits: [
            "Lymphatic drainage reduces swelling and bruising faster",
            "Helps prevent fibrosis and uneven healing",
            "Supervised, structured aftercare — not guesswork at home",
          ],
          sessions: "Multi-session program tailored to your procedure",
          downtime: "Designed for your recovery period",
        }),
      svc("Surgery Travel Care Package", 500000,
        "Complete concierge aftercare for clients travelling for surgery — recovery, transport and daily care handled.",
        {
          benefits: [
            "Full recovery care while you're away from home",
            "Lymphatic massage, monitoring and daily support",
            "One package, zero logistics stress — we handle everything",
          ],
          sessions: "Complete package — details at consultation",
          downtime: "We manage your entire recovery window",
        }),
    ],
  ),

  category(
    "hair-removal",
    "Laser Hair Removal",
    "Smooth today. Smooth in six months.",
    "Candela laser technology permanently reduces hair at the root — so smooth skin becomes your default, not your monthly chore.",
    [
      svc("Upper Lip Hair Removal", 6000,
        "Quick, precise laser removal of upper-lip hair — done in minutes."),
      svc("Underarm Laser Hair Removal", 10000,
        "Permanently smooth underarms — no more shaving bumps or dark shadows."),
      svc("Face Laser Hair Removal", 15000,
        "Full-face laser treatment for permanently smoother, makeup-ready skin."),
      svc("Candela Hair Removal — Lip & Chin", 15000,
        "Targets lip and chin hair with Candela precision — smooth and shadow-free."),
      svc("Bikini Laser Hair Removal", 20000,
        "Clean bikini-line results without waxing pain or razor irritation."),
      svc("Brazilian Laser Hair Removal", 30000,
        "Complete, long-lasting smoothness with far less pain than waxing — and no regrowth stubble."),
      svc("Full Arm Laser Hair Removal", 40000,
        "Both arms, permanently smoother — say goodbye to weekly shaving."),
      svc("Full Leg Laser Hair Removal", 50000,
        "Silky, hair-free legs from hip to ankle — the last hair-removal routine you'll need."),
    ],
  ),

  category(
    "injectables",
    "Botox & Dermal Fillers",
    "Subtle work. Striking difference.",
    "Expertly-placed injectables that smooth lines, restore balance and enhance your features — so you look rested, not 'done'.",
    [
      svc("Botox Lip Flip", 10000,
        "A few precise units relax the upper lip for a fuller-looking smile — no filler needed."),
      svc("Botox Gummy Smile", 10000,
        "Softens the muscles that over-lift your lip, for a balanced, confident smile."),
      svc("Botox Chin Dimpling", 12000,
        "Smooths the 'orange-peel' chin texture for a soft, even profile."),
      svc("Botox Crow's Feet", 15000,
        "Softens the fine lines around your eyes so you look rested — even when you're not."),
      svc("Botox Brow Lift", 15000,
        "A subtle chemical lift that opens the eyes and arches the brow — no surgery."),
      svc("Botox Frown Lines", 20000,
        "Relaxes the '11 lines' between your brows for a calm, refreshed expression."),
      svc("Botox Forehead Lines", 20000,
        "Smooths horizontal forehead lines while keeping natural movement."),
      svc("Botox Bunny Lines", 20000,
        "Softens the scrunch lines on the nose for smooth, even skin."),
      svc("Botox Lip Enhancements", 25000,
        "Strategic Botox placement that shapes and enhances your natural lip line."),
      svc("Botox Jawline", 30000,
        "Slims and defines the jaw by relaxing overworked muscles."),
      svc("Botox Masseter Slimming", 30000,
        "Slims a square jaw and relieves teeth-grinding tension in one treatment."),
      svc("Botox Face Slimming Package", 70000,
        "A complete Botox protocol that sculpts a slimmer, softer facial shape.",
        {
          benefits: [
            "Full-face assessment and mapped injection plan",
            "Slims the jaw and balances facial proportions",
            "Natural movement preserved — subtle, elegant results",
          ],
          sessions: "Results reviewed at 2 weeks; repeat every 3–4 months",
          downtime: "None — avoid rubbing the area for 24 hours",
        }),
      svc("Botox Underarm (Sweat Reduction)", 100000,
        "Dramatically reduces underarm sweating for months — confidence in any outfit, any climate.",
        {
          benefits: [
            "Up to 6+ months of dramatically reduced sweating",
            "Ideal for Guyana's climate — no more shirt stains",
            "Quick treatment with no downtime",
          ],
          sessions: "One session, repeated roughly twice a year",
          downtime: "None",
        }),
      svc("Lip Boosters", 20000,
        "Deep hydration injections that plump and smooth lips — subtle volume, healthy shine."),
      svc("Eye Boosters", 30000,
        "Targeted skin boosters that brighten and smooth tired under-eyes."),
      svc("Lip Filler", 40000,
        "Custom lip shaping and volume with premium filler — balanced, kissable, natural-looking."),
      svc("Chin Fillers", 30000,
        "Defines and projects the chin to balance your profile."),
      svc("Filler Malar Split", 30000,
        "Precise cheekbone-area filler placement for lifted, sculpted definition."),
      svc("Molar Split", 40000,
        "Structural filler placement that refines the lower-face contour."),
      svc("Temple Fillers", 40000,
        "Restores hollow temples for a softer, more youthful upper face."),
      svc("Cheek Fillers", 60000,
        "Lifted, sculpted cheekbones that frame your whole face."),
      svc("Jawline Fillers", 70000,
        "A sharply defined jawline — sculpted, photographed-from-any-angle definition."),
      svc("Face Balancing", 200000,
        "A complete, artistically-mapped filler plan that harmonises all your features in one vision.",
        {
          benefits: [
            "Full facial assessment and proportional mapping",
            "Chin, cheeks, jaw and lips treated as one harmonious plan",
            "The single biggest 'wow' transformation we offer — still unmistakably you",
          ],
          sessions: "Typically completed over 1–2 visits",
          downtime: "Possible mild swelling for 24–72 hours",
        }),
      svc("Glutes Enhancement", 60000,
        "Non-surgical enhancement that adds shape and lift to the glutes."),
      svc("Butt Enhancement", 120000,
        "Fuller, lifted curves through expert non-surgical enhancement.",
        {
          benefits: [
            "Adds volume and lift without surgery",
            "Consultation-first: honest sizing and safety guidance",
            "Natural feel and movement",
          ],
          sessions: "Plan confirmed at consultation",
          downtime: "Minimal — guidance provided",
        }),
      svc("Breast Filler", 150000,
        "Non-surgical volume and shape enhancement — discussed and planned in private consultation.",
        {
          benefits: [
            "Subtle volume and improved shape without implants",
            "Private, unhurried consultation before any decision",
            "No general anaesthesia, no surgical recovery",
          ],
          sessions: "Plan confirmed at consultation",
          downtime: "Minimal",
        }),
      svc("Butt Fillers", 300000,
        "Our premium non-surgical butt enhancement — maximum shape, projection and lift.",
        {
          benefits: [
            "The fuller, lifted result — without a BBL operating room",
            "Expert, safety-first technique and honest consultation",
            "Shape designed around your proportions",
          ],
          sessions: "Plan confirmed at consultation",
          downtime: "Minimal compared to surgery",
        }),
      svc("Vaginal Fillers", 75000,
        "Discreet rejuvenation treatment — fully explained in a private consultation."),
      svc("Semaglutide Injection", 25000,
        "Physician-guided weight-management injection supporting appetite control."),
      svc("Cagrilintide Injection", 25000,
        "A modern weight-management injectable — part of a supervised slimming plan."),
      svc("Tightening Injection", 30000,
        "Injectable skin tightening for targeted firmness where you want it."),
      svc("Tesamorelin Injection", null,
        "Specialised peptide therapy — assessed and priced at consultation."),
      svc("Butt And Hip Fillers Consultation", 2000,
        "A private assessment where we discuss your goals, options and honest expectations."),
    ],
  ),

  category(
    "iv-therapy",
    "IV Vitamin Therapy",
    "Beauty and energy, delivered straight to the source.",
    "Vitamin drips deliver nutrients directly into your bloodstream — energy, glow and recovery you can feel the same day.",
    [
      svc("Vitamin C IV", 15000,
        "A powerful antioxidant drip that brightens skin and strengthens immunity."),
      svc("Energy Boost IV", 20000,
        "A revitalising blend that clears fatigue and powers you through busy weeks."),
      svc("Energy & Stress Recovery IV", 20000,
        "Replenishes what stress depletes — leave feeling calm, clear and recharged."),
      svc("Glow & Radiance IV", 20000,
        "Skin-loving vitamins that hydrate from within for a lit-from-inside glow."),
      svc("Detox & Liver Cleanse IV", 20000,
        "Supports your body's natural detox pathways for a genuine reset."),
      svc("Post-Op Care IV", 20000,
        "Targeted nutrients that speed healing and reduce fatigue after surgery."),
      svc("Anti-Inflammation IV", 25000,
        "Calms systemic inflammation to ease aches and support recovery."),
      svc("Anti-Aging NAD+ IV", 30000,
        "The longevity molecule — NAD+ supports cellular repair, energy and mental clarity.",
        {
          benefits: [
            "Supports cellular energy and repair at the source",
            "Popular for focus, recovery and healthy aging",
            "Administered comfortably in our private lounge",
          ],
          sessions: "Single sessions or a series for cumulative benefit",
          downtime: "None",
        }),
      svc("Anti-Wrinkle Relax IV", 30000,
        "A skin-focused blend that supports collagen and deep hydration."),
      svc("Slimming / Fat-Burning IV", 30000,
        "Metabolism-supporting nutrients that complement your body contouring program."),
      svc("Whitening / Pigmentation IV", 30000,
        "A brightening antioxidant blend that supports a clearer, more even tone."),
      svc("IV Consultation", 2000,
        "A quick health review to match you with the right drip, safely."),
    ],
  ),

  category(
    "treatments",
    "Specialised Treatments",
    "The concerns you've been hiding — handled.",
    "Targeted, technology-driven fixes for stretch marks, veins, tattoos, pigmentation, thinning hair and more.",
    [
      svc("Stretch Marks Removal", 20000,
        "Laser and collagen-stimulating therapy that visibly fades stretch marks."),
      svc("Spider Veins Removal", 20000,
        "Precision treatment that collapses visible veins for clearer skin."),
      svc("Tattoo Removal", 20000,
        "Laser removal that breaks down ink safely, session by session."),
      svc("Wart Removal", 20000,
        "Fast, professional removal with proper aftercare — done cleanly and safely."),
      svc("Teeth Whitening", 20000,
        "A brighter, camera-ready smile in a single relaxed session."),
      svc("Intimate Whitening", 15000,
        "Discreet, gentle brightening for intimate areas — professional and judgment-free."),
      svc("PRP Hair Restoration", 30000,
        "Your own growth factors injected into the scalp to reactivate thinning hair follicles.",
        {
          benefits: [
            "Natural regrowth using your own platelets — no chemicals",
            "Thicker, denser hair over a course of sessions",
            "Effective early intervention for thinning edges and crowns",
          ],
          sessions: "3–6 sessions, spaced about a month apart",
          downtime: "None — mild scalp tenderness for a day",
        }),
      svc("Carboxy Treatment", 25000,
        "CO2 therapy that boosts circulation and skin renewal in treated areas."),
      svc("Cryo Microwave", 30000,
        "Cold-plus-energy therapy for skin tightening and targeted toning."),
      svc("Hydrolipograsia", 60000,
        "An advanced targeted fat-reduction treatment for defined problem areas."),
      svc("Cavitation On Back", 15000,
        "Focused ultrasound fat reduction for back rolls and bra-line bulge."),
      svc("V10 Cavitation On Back", 15000,
        "Deeper-reaching cavitation for stubborn back contours."),
      svc("Lipo Laser", 15000,
        "Painless laser lipolysis that shrinks fat cells in targeted zones."),
      svc("Lipo Laser On Back", 15000,
        "Targeted laser slimming for a smoother, sleeker back profile."),
      svc("Rotating Machine", 15000,
        "Mechanical sculpting massage that breaks down fat and smooths contours."),
      svc("Vitamin C Treatment", 25000,
        "A concentrated vitamin C skin treatment for brightness and even tone."),
      svc("Parley Beauty Cream", 5000,
        "Our curated take-home cream to extend and protect your in-spa results."),
    ],
  ),

  category(
    "body-therapy",
    "Body Therapy & Recovery",
    "Ease the stress. Keep the results.",
    "Relaxing, circulation-boosting therapies that lock in your results and melt away tension.",
    [
      svc("Red Light Therapy", 10000,
        "Therapeutic light that calms inflammation, boosts collagen and speeds recovery."),
      svc("Thermo Shock", 15000,
        "Alternating hot-and-cold therapy that firms skin and stimulates circulation."),
      svc("Vacuum Therapy", 15000,
        "Suction massage that boosts lymphatic drainage and smooths tissue."),
      svc("Inner Ball Roller", 20000,
        "Deep rolling massage that sculpts, drains and relaxes muscle tissue."),
      svc("Butt Massage", 0,
        "A complimentary relaxation add-on with qualifying treatments."),
      svc("Face Massage", 0,
        "A complimentary lifting facial massage — our signature welcome touch."),
      svc("Slimming And Tightening Program", 250000,
        "Our flagship full-body transformation program — slimming, firming and maintenance in one plan.",
        {
          benefits: [
            "A complete multi-technology program, planned and tracked",
            "Combines fat reduction, skin tightening and maintenance",
            "Regular progress reviews so results stay on course",
          ],
          sessions: "Full program — schedule designed at consultation",
          downtime: "None",
        }),
    ],
  ),

  category(
    "packages",
    "Signature Packages & Consultations",
    "Bundled results. Better value.",
    "Structured programs that bundle the right treatments in the right order — serious transformations, mapped from day one.",
    [
      svc("Mommy & Me Package", 60000,
        "A shared pampering experience for you and someone you love — booked together, enjoyed together."),
      svc("Back Reduction Package", 100000,
        "A complete program that slims, smooths and sculpts the back.",
        {
          benefits: [
            "Multi-session program combining cavitation, laser and RF",
            "Targets bra-line bulge and back rolls",
            "Firmer, smoother back — visible in fitted clothing",
          ],
          sessions: "Multi-session program — schedule at consultation",
          downtime: "None",
        }),
      svc("Body Transformation Consultation", 2000,
        "Map your full transformation — goals, timeline and honest recommendations."),
      svc("Endolift Consultation", 2000,
        "Find out if Endolift is right for you — assessment and full explanation."),
    ],
  ),
];

/** Flat list of every service (useful for search, sitemaps, etc.) */
export const allServices: Service[] = serviceCategories.flatMap(c => c.services);
