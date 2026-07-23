import type { RumoarContent } from "./types";

export const content: RumoarContent = {
  meta: {
    title: "RUMOAR — Should It Exist? | Round Two Submission",
    submittedBy: "Sunit",
    date: "July 2026",
  },

  nav: [
    { id: "verdict", label: "Verdict" },
    { id: "market", label: "Market" },
    { id: "competitors", label: "Competitors" },
    { id: "sourcing", label: "Sourcing" },
    { id: "economics", label: "Economics" },
    { id: "moat", label: "Moat" },
    { id: "risks", label: "Risks" },
    { id: "gtm", label: "GTM" },
    { id: "product", label: "Product" },
  ],

  hero: {
    eyebrow: "RUMOAR — ROUND TWO · STRATEGY & OPERATIONS TRACK · SUBMITTED BY SUNIT",
    headline: "Should Rumoar Exist?",
    subhead:
      "Every accessories pitch says the same three things: Gen Z spend is shifting, the category is white space, Mokobara proved the thesis. This memo is the version that hasn't been heard — built bottom-up, with sourced numbers, honest unit economics, and the reasons this could fail.",
    verdictChipBold: "VERDICT: YES — CONDITIONALLY.",
    verdictChipRest: "Three conditions below.",
  },

  ticker: [
    { text: "MOKOBARA ₹230 CR FY25 · STILL LOSS-MAKING" },
    { text: "ORGANISED SHARE OF BAGS & WALLETS: ~16%" },
    { text: "SNITCH AOV ₹1,200 → ₹1,850" },
    { text: "IMPORT DUTY STACK ON HS 4202: ~15% BCD + SWS + IGST" },
    { text: "ZOUK ₹125 CR, +61% YOY, 9 YEARS TO GET THERE" },
    { text: "RARE RABBIT TARGETING ₹1,000 CR" },
    { text: "MEN'S ACCESSORIES: USD 250–400 MN ORGANISED TODAY" },
    { text: "MOKOBARA AD SPEND ₹46 CR/YR AT ₹230 CR REVENUE" },
    { text: "SOULED STORE ₹492 CR, +36% YOY" },
    { text: "DOMESTIC MOQ: 100–300 UNITS · CHINA MOQ: 300–1,000 UNITS" },
  ],

  verdict: {
    kicker: "01 / The Call",
    title: "The Call, Up Front",
    body:
      'RUMOAR should exist — but not as "another Mokobara." The funded playbook (premium single-category, heavy ad spend, offline stores) is already crowded and still loss-making at ₹230 Cr scale [1]. RUMOAR\'s only defensible version is the one the brief actually describes: a multi-category identity brand where the second and third purchase — not the first — make the economics work.',
    conditions: [
      {
        num: 1,
        title: "Repeat rate ≥ 1.8 orders/customer/year by month 18.",
        body: "Accessories are infrequent purchases; a single-purchase customer never repays acquisition cost. Cross-category repeat is the entire model.",
      },
      {
        num: 2,
        title: "Blended CAC held under ₹550.",
        body: "Mokobara spends ~20% of revenue on ads and still loses money [1]. RUMOAR has no budget to outspend; community and organic content must carry ≥40% of new orders.",
      },
      {
        num: 3,
        title: "India-first sourcing for launch categories.",
        body: "The duty math (Section 4) plus MOQ flexibility makes domestic sourcing the right call at launch volume; China only flips the math at scale, for technical materials.",
      },
    ],
  },

  market: {
    kicker: "02 / Market Sizing",
    title: "How Big Is This, Actually?",
    lede: "Top-down first, then bottom-up, then the honest reconciliation. Assumptions are labelled — challenge them, that's what they're for.",
    funnel: [
      {
        label: "India fashion accessories market",
        value: "~USD 16 Bn, +9% CAGR [2]",
        widthPct: 100,
      },
      {
        label: "Minus jewellery (~52% [3]), watches, women's bags",
        value: "USD 1.5–2.5 Bn (men's non-jewellery)",
        widthPct: 52,
      },
      {
        label: "Organised share only ~16% [4]",
        value: "USD 250–400 Mn",
        widthPct: 14,
      },
    ],
    funnelAssumption: "ASSUMPTION: MEN'S SHARE 10–15% OF CATEGORY — STATED, NOT SOURCED",
    reconciliationIntro:
      "That puts the organised men's accessories opportunity at roughly USD 250–400 Mn today — small, but formalising fast, which is exactly when brands get built.",
    bottomUp: [
      {
        big: "~8–10 Mn men",
        body: "Target customer: urban, online-transacting, fashion-first men 18–35.",
        assumption: "ASSUMPTION — fashion-forward slice of ~60–70 Mn online fashion shoppers",
      },
      {
        big: "₹2,500–5,000",
        body: "Realistic annual accessories spend for this man.",
      },
      {
        big: "₹28–35 Cr",
        body: "If RUMOAR wins 1% of this segment at ₹3,500/yr → this is the honest 3-year revenue ceiling for a well-run, modestly funded version.",
      },
    ],
    reconciliation:
      "Reference trajectories: Zouk took ~9 years to ₹125 Cr [5]. Mokobara took 5 years and $24 Mn to ₹230 Cr [1]. A ₹30–50 Cr RUMOAR by year 3 is credible. A ₹200 Cr RUMOAR by year 3 is a funding story, not an operating plan.",
  },

  competitors: {
    kicker: "03 / Competitive Signal",
    title: "Competitor Movement = Timing Signal",
    rows: [
      {
        brand: "Mokobara (luggage-led)",
        revenue: "₹230 Cr [1]",
        yoy: "+97%",
        pnl: "–₹10 Cr loss",
        raised: "~$24 Mn",
        signal: "Premium accessories scale exists; profitability doesn't yet",
      },
      {
        brand: "Snitch (menswear)",
        revenue: "₹498 Cr [6]",
        yoy: "+107%",
        pnl: "near breakeven",
        raised: "~$53 Mn",
        signal: "The fashion-first Indian man is real, pays, and repeats — AOV grew ₹1,200→₹1,850 [7]",
      },
      {
        brand: "Zouk (bags/wallets)",
        revenue: "₹125 Cr [5]",
        yoy: "+61%",
        pnl: "–₹19 Cr loss",
        raised: "~$21 Mn",
        signal: "Made-in-India accessories work; raising again at ~₹610 Cr valuation [5]",
      },
      {
        brand: "The Souled Store",
        revenue: "₹492 Cr [6]",
        yoy: "+36%",
        pnl: "—",
        raised: "—",
        signal: "Identity/community brands outgrow product brands",
      },
      {
        brand: "Rare Rabbit",
        revenue: "targeting ₹1,000 Cr [6]",
        yoy: "—",
        pnl: "—",
        raised: "+$6 Mn (A91)",
        signal: "Premium menswear is consolidating capital",
      },
    ],
    reads: [
      {
        label: "The timing read:",
        tone: "brass",
        body: 'capital moved into every adjacent lane in the last 18 months — menswear (Snitch, Rare Rabbit, Wrogn [6]), bags (Zouk, Mokobara). Nobody yet owns "the fashion-first man\'s full kit." That gap is RUMOAR\'s claim.',
      },
      {
        label: "The warning read:",
        tone: "oxblood",
        body: "Snitch has already expanded into fragrance [6] — RUMOAR's stated future category. The window where accessories are uncontested by a ₹500 Cr menswear brand with 100+ stores is short.",
      },
      {
        label: "The uncomfortable read:",
        tone: "oxblood",
        body: "Mokobara faced a public white-labelling controversy over Chinese-sourced bags in Jan 2025 [8]. Design differentiation in this category is fragile — which is an argument for brand/community as the moat, not product.",
      },
    ],
  },

  sourcing: {
    kicker: "04 / Sourcing",
    title: "Where the Product Comes From",
    dutyCards: [
      {
        title: "China Import — HS 4202 (Bags/Wallets)",
        segments: [
          { label: "CIF value", value: "100", variant: "base" },
          { label: "Basic Customs Duty", value: "15% [9]", variant: "tax" },
          { label: "+ Social Welfare Surcharge", value: "10% of duties", variant: "tax" },
          { label: "+ IGST", value: "18% on duty-inclusive value [9][10]", variant: "tax" },
          { label: "Landed cost (pre-margin)", value: "≈ 135–140", variant: "total" },
        ],
        note: "IGST is claimable as input credit for a GST-registered business, so the sunk duty premium is roughly 17–20% — plus freight, plus 30–45 day lead times, plus MOQs of 300–1,000 units per style/colour.",
      },
      {
        title: "India Domestic Sourcing",
        segments: [
          { label: "Ex-factory value", value: "100", variant: "base" },
          { label: "Duty stack", value: "none", variant: "none" },
          { label: "GST", value: "fully creditable", variant: "none" },
          { label: "Landed cost (pre-margin)", value: "≈ 100", variant: "total" },
        ],
        note: "MOQs of 100–300 units negotiable, 2–3 week reorder cycles → you can test 3x more designs with the same working capital.",
      },
    ],
    hubs: [
      {
        name: "Kanpur, UP",
        body: "Large-scale leather backpacks, duffels, travel goods [11]. Indicative leather backpack ex-factory: ₹900–1,700/pc on IndiaMART listings [12].",
      },
      {
        name: "Kolkata, WB",
        body: "Fashion handbags and premium leather craft; export houses like KH Exports-scale players operate here [11][13].",
      },
      {
        name: "Chennai + Ambur, TN",
        body: "Tannery-linked, export-grade leather processing [11].",
      },
      {
        name: "Delhi NCR",
        body: "Private-label, boutique-run flexibility for fashion brands; right fit for RUMOAR's first drops [11].",
      },
    ],
    flipCallout:
      "China wins only when (a) volumes cross ~1,000+ units/style, (b) the product needs technical fabrics, moulded parts, or hardware India doesn't make competitively, or (c) landed cost advantage exceeds the ~20% sunk duty + working-capital drag. At launch, none of these hold. Start Indian, earn the right to blend.",
  },

  economics: {
    kicker: "05 / Unit Economics",
    title: "The Model, With Sliders",
    lede: "Benchmarks, then a live model. Anchors from public filings: Mokobara's procurement is ~43% of total spend and advertising ~20% of revenue; it spends ₹1.09 to earn ₹1 [1]. Snitch reached near-breakeven only after offline + retention cut marketing dependence [6][7].",
    calculator: {
      fulfilmentPct: 13,
      sliders: [
        { key: "aov", label: "AOV", min: 800, max: 4000, step: 50, default: 2000, format: "currency" },
        { key: "cogs", label: "COGS % of AOV", min: 25, max: 55, step: 1, default: 40, format: "percent" },
        { key: "cac", label: "Blended CAC per new customer", min: 200, max: 1200, step: 10, default: 550, format: "currency" },
        { key: "orders", label: "Orders per customer per year", min: 1.0, max: 3.0, step: 0.1, default: 1.4, format: "decimal" },
      ],
    },
    note: "Play with one variable at a time. CAC and AOV barely rescue the model on their own; orders/year is the lever that flips it — which is why the entire strategy (multi-category, community, drops) must be built to engineer the second purchase, not the first.",
  },

  moat: {
    kicker: "06 / Defensibility",
    title: "What's Actually Defensible",
    cards: [
      {
        tag: "NOT A MOAT",
        title: "Design",
        body: "Copied in one production cycle; see the Mokobara white-label episode [8].",
      },
      {
        tag: "NOT A MOAT (YET)",
        title: "Supply chain",
        body: "Everyone buys from the same Kanpur/Delhi NCR/Guangzhou vendors at launch volumes.",
      },
      {
        tag: "NOT A MOAT",
        title: "Distribution",
        body: "Meta ads and marketplaces are rented land; rent goes up every quarter.",
      },
      {
        tag: "THE ONLY BUILDABLE MOAT",
        title: "Community + cross-category repeat",
        body: "If a man buys his cap, wallet and fragrance from the same identity brand, his LTV triples while CAC is paid once. No single-category incumbent can follow without rebuilding their brand. This is also the hardest thing on this page to execute — which is what makes it a moat.",
      },
    ],
  },

  risks: {
    kicker: "07 / The Honest Part",
    title: "Why RUMOAR Won't Work",
    lede: "The structural risks, each with the condition that would have to be true to survive it. No generic answers.",
    blocks: [
      {
        num: 1,
        title: "Purchase frequency is against us.",
        body: "Men buy a wallet every 2–3 years, a bag every 1–2. A single-purchase business here has negative unit economics at realistic CAC (see Section 5).",
        mustBeTrue: "Must be true: cross-category repeat ≥1.8 orders/yr by month 18, measured, not hoped.",
      },
      {
        num: 2,
        title: "Multi-category from day one = multi-supply-chain from day one.",
        body: "Bags, caps, wallets and (later) fragrance have different vendors, MOQs, QC failure modes and, for fragrance, separate compliance. Inventory risk compounds across categories faster than revenue does.",
        mustBeTrue: "Must be true: launch with ≤3 categories, ≤25 SKUs, and kill-rules per SKU (sell-through <40% in 60 days = discontinued).",
      },
      {
        num: 3,
        title: '"Community-first" costs money the margins don\'t cover yet.',
        body: "Content, drops and events are funded by contribution margin; Mokobara spends ₹46 Cr/yr on ads at ₹230 Cr revenue and still posts losses [1].",
        mustBeTrue: "Must be true: ≥40% of orders from organic/community channels by month 12; if paid CAC is doing the work, the brand story is fiction.",
      },
      {
        num: 4,
        title: "Marketplace gravity.",
        body: "Myntra and Amazon own discovery for this exact customer; a destination site fights their algorithm with no budget.",
        mustBeTrue: "Must be true: RUMOAR's own channel holds ≥50% of revenue; marketplaces used for harvesting demand, never for creating it.",
      },
      {
        num: 5,
        title: "The window is closing from above.",
        body: "Snitch (₹498 Cr, 100+ stores, already in fragrance [6]) can bolt accessories onto existing traffic at near-zero CAC.",
        mustBeTrue: "Must be true: RUMOAR reaches a defensible community position (~50K genuine followers/buyers) within 12–18 months, before a menswear giant decides this category is worth a line extension.",
      },
      {
        num: 6,
        title: "Gen-Z spend data cuts both ways.",
        body: "The same trend-speed that creates the opportunity makes inventory obsolete in one season; fashion stock discounts brutally.",
        mustBeTrue: "Must be true: drop-based, small-batch buying (India-first sourcing enables this — Section 4), with markdown exposure capped at <15% of stock value.",
      },
    ],
  },

  gtm: {
    kicker: "08 / Go-To-Market",
    title: "90 Days, Zero Followers, No Media Budget",
    positioning:
      "\"For the man who already knows his style, RUMOAR is the one place that finishes it — because a look isn't done until the last detail is his.\"",
    cards: [
      {
        title: "Days 0–30 — Proof of voice",
        body: "3 content formats tested: 'finish the fit' transformations, carry-what-I-carry breakdowns, rumour-format drop teasers. Daily posting, zero spend. Success metric: save-rate >4%, not follower count.",
      },
      {
        title: "Days 31–60 — Borrowed audiences",
        body: "25 micro-creators (5K–50K followers) in menswear/grooming, product-gifting only, no fees. The Snitch first-10K playbook: volume of authentic creator content over one paid face [7].",
      },
      {
        title: "Days 61–90 — First drop",
        body: "One hero product, numbered small batch, waitlist-only. The scarcity IS the marketing. Target: 10K followers, 500-person waitlist, sell-out in 72h.",
      },
    ],
    aiNote:
      "On AI: AI brings content cost down ~70%: scripts, cutdowns, and creative variants generated in-house; human only on camera and final edit.",
  },

  product: {
    kicker: "09 / Product",
    title: "What's on the Wall — and What Isn't",
    principles: [
      { num: 1, body: "Fewer, finished things — ≤25 SKUs at launch: slings, caps, wallets." },
      { num: 2, body: "Deliberately excluded for launch: luggage (Mokobara's fortress), belts (commodity, no identity), fragrance (year-2 earn-in, not day-1)." },
      { num: 3, body: "Every product passes the shelf test: recognisable as RUMOAR at 3 metres with the logo covered." },
      { num: 4, body: 'Materials honest to price: full-grain and veg-tan leather from Chennai/Ambur belt [11], canvas and hardware from Delhi NCR; no "vegan leather" euphemisms for PU unless we mean it.' },
      { num: 5, body: "Small batches, numbered drops — sourcing strategy (Section 4) is the product strategy." },
    ],
  },

  footer: {
    line: "Submitted by Sunit · RUMOAR Round Two · July 2026. Also answering: Track 01 (full), Track 02 & 03 (selected). Built as a working page because a memo should behave like the product thinking it argues for.",
    disclaimer: "Figures are from public reporting as of July 2026; assumptions are labelled as assumptions.",
  },

  sources: [
    {
      num: 1,
      text: "Entrackr / RoC filings — Mokobara FY25: ₹230 Cr revenue, ₹10 Cr loss, ad spend ₹46 Cr, procurement 43% of spend, ~$24 Mn raised.",
      url: "https://entrackr.com/fintrackr/mokobara-revenue-doubles-to-rs-230-cr-in-fy25-11066667",
    },
    {
      num: 2,
      text: "Expert Market Research — India personal accessories ≈ USD 16.17 Bn (2024), ~9.4% CAGR.",
      url: "https://www.expertmarketresearch.com/reports/india-personal-accessories-market",
    },
    {
      num: 3,
      text: "Grand View Research — jewellery ≈ 51.6% share of India fashion accessories (2024).",
      url: "https://www.grandviewresearch.com/horizon/outlook/fashion-accessories-market/india",
    },
    {
      num: 4,
      text: "India Retailing — organised retail share of bags/belts/wallets ≈ 16%.",
    },
    {
      num: 5,
      text: "Entrackr / D2C Insider — Zouk FY25: ₹125 Cr (+60.7%), ₹19 Cr loss; raising ₹60 Cr at ≈₹610 Cr valuation.",
      url: "https://pulse.d2cinsider.com/zouk-set-to-raise-e2-82-b960-crore-at-e2-82-b9610-crore-valuation-as-d2c-fashion-brand-accelerates-growth/",
    },
    {
      num: 6,
      text: "Entrackr / Indian Retailer — Snitch FY25: ₹498 Cr, near breakeven, $53 Mn raised; Souled Store ₹492 Cr; Rare Rabbit +$6 Mn (A91), ₹1,000 Cr target; Wrogn +$9 Mn; Snitch expansion into fragrance & quick commerce.",
      url: "https://entrackr.com/fintrackr/snitch-nears-rs-500-cr-revenue-in-fy25-stays-close-to-breakeven-11058503",
    },
    {
      num: 7,
      text: "Public interviews/analyst reports — Snitch AOV ₹1,200 (FY22) → ₹1,850 (FY25); retention-led model.",
    },
    {
      num: 8,
      text: "Times Now / BestMediaInfo, Jan 2025 — Mokobara white-labelling allegations and response.",
      url: "https://bestmediainfo.com/mediainfo/mediainfo-marketing/mokobara-responds-to-backlash-over-alleged-white-labelling-claims-8639453",
    },
    {
      num: 9,
      text: "EximPe / ICEGATE — HS 4202 duty stack: BCD 15%, SWS 10% of duties, IGST 18% on duty-inclusive value.",
      url: "https://eximpe.com/hsn/handbag-hsn-code",
    },
    {
      num: 10,
      text: "EximPe — import duty computation methodology, China→India.",
      url: "https://eximpe.com/blog/b2b/import-duty-from-china-to-india",
    },
    {
      num: 11,
      text: "Panoramic Sourcing / industry directories — hub specialisations: Kanpur, Kolkata, Chennai/Ambur, Delhi NCR.",
      url: "https://panoramicsourcing.com/leather-bag-manufacturer-in-india/",
    },
    {
      num: 12,
      text: "IndiaMART verified-exporter listings — leather backpacks ₹900–1,700/pc ex-factory (Kanpur, Kolkata, Unnao).",
      url: "https://dir.indiamart.com/impcat/leather-backpacks.html?biz=10",
    },
    {
      num: 13,
      text: "Amburshoe industry guide — KH Exports (Chennai), Kanpur/Kolkata export houses.",
      url: "https://amburshoe.com/top-leading-leather-bag-manufacturers-in-india-guide/",
    },
  ],
};
