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
    { id: "global", label: "Global" },
    { id: "sourcing", label: "Sourcing" },
    { id: "economics", label: "Economics" },
    { id: "moat", label: "Moat" },
    { id: "risks", label: "Risks" },
    { id: "gtm", label: "GTM" },
  ],

  hero: {
    eyebrow: "RUMOAR — ROUND TWO · STRATEGY & OPERATIONS TRACK · SUBMITTED BY SUNIT",
    headline: "Should Rumoar Exist?",
    subhead:
      "I went through the market reports, the competitor filings, and the sourcing math myself. This page is my answer — with the numbers I found, the calls I'd make, and the reasons this could still fail.",
    verdictChipBold: "MY CALL: YES — IF THE FLYWHEEL WORKS.",
    verdictChipRest: "Explained below.",
  },

  ticker: [
    { text: "INDIA PERSONAL ACCESSORIES: $17.7 BN, 9.4% CAGR" },
    { text: "MOKOBARA ₹117 CR → ₹230 CR IN ONE YEAR — STILL LOSS-MAKING" },
    { text: "SNITCH: ~₹498 CR FY25, NEAR BREAKEVEN" },
    { text: "MEN'S LUXURY BAGS GLOBALLY: $11.8 BN → $18.4 BN BY 2035" },
    { text: "CROSSBODY BAGS: $10.5 BN → $15.2 BN BY 2033 · APAC FASTEST-GROWING" },
    { text: "ZOUK: +61% YOY · RAISING ~₹60 CR AT ~₹610 CR VALUATION" },
    { text: "SNITCH VALUATION ~₹2,500 CR — THE THREAT FROM ABOVE" },
    { text: "MEN'S FASHION ~7.5% CAGR · E-COMMERCE LANE ~12.3% CAGR" },
    { text: "DEMAND SPIKES IN DECEMBER — BUILD THE DROP CALENDAR BACKWARDS" },
    { text: "DISCOUNTS ARE FOR ACQUISITION, NEVER FOR HYPE" },
  ],

  verdict: {
    kicker: "01 / The Call",
    title: "The Call, Up Front",
    body:
      "The market numbers are promising and the money is already moving — but the two biggest players in adjacent lanes (Mokobara, Zouk) are still loss-making [1][8], which tells me the standard playbook (premium product + heavy ad spend) doesn't work on its own. My version of RUMOAR only works if three things hold:",
    conditions: [
      {
        num: 1,
        title: "The FOMO flywheel actually spins.",
        body: "Hype-led drops bring the first customers; word of mouth converts them into a following; a fresh spark re-lights it whenever growth stagnates. If the first drop doesn't create talk, the model has no engine.",
      },
      {
        num: 2,
        title: "Categories launch staggered, never all at once.",
        body: "One product creates the pull; the next is marketed as completing it. This keeps supply-chain risk to one new category at a time.",
      },
      {
        num: 3,
        title: "India-first sourcing.",
        body: "Both for the duty math and because India–China trade relations are unpredictable — a supply chain built on a relationship that could freeze overnight is a bet I wouldn't take at launch.",
      },
    ],
  },

  market: {
    kicker: "02 / Market Sizing",
    title: "How Big Is This, Actually?",
    lede: "India, top-down — the numbers I found:",
    funnel: [
      {
        label: "India personal accessories (2025)",
        value: "~$17.7 Bn · ~9.4% CAGR [5]",
        widthPct: 100,
      },
      {
        label: "India fashion accessories (2024)",
        value: "~$14.3 Bn → ~$24.3 Bn by 2030, ~9% CAGR [6]",
        widthPct: 81,
      },
    ],
    funnelNote: "ON THAT TRAJECTORY: ROUGHLY ~$43 BN OVER THE NEXT DECADE",
    stats: [
      {
        big: "~$43 Bn",
        body: "Where the personal-accessories market roughly lands over the next decade if the ~9.4% CAGR holds [5]. Drivers I found: rapid urbanization, rising fashion consciousness (especially among men), and social-media accessibility.",
      },
      {
        big: "~7.5% CAGR",
        body: "Men's fashion overall [7]. My read: men are visibly braver about exploring and wearing new trends than even five years ago, and the category growth reflects that shift.",
      },
      {
        big: "~12.3% CAGR",
        body: "E-commerce's projected growth lane. Offline stores and showrooms dominate distribution today, but online is the fast lane.",
      },
    ],
    bullets: [
      "Bags and watches hold the most dominant positions; fashion jewellery is the fastest-growing slice. Among men specifically, wallets, watches and tech-integrated products (smartwatches, bands) are the most common categories.",
      "The growth pillars I kept running into: smart accessories, ethical sourcing, omnichannel retail, and expansion into tier-2/3 cities.",
    ],
    incumbents:
      "The incumbent layer: the volume competition isn't startups — it's giants like Titan and Casio, with Fossil and Baggit also holding serious share. Any new brand is carving space underneath brands with decades of retail distribution.",
    scopeNote:
      "Scope check: Grand View counts jewellery at ~51.6% of all fashion accessories by value [6] — my \"bags and watches dominate\" read comes from category cuts scoped to men's non-jewellery accessories rather than the full jewellery-led fashion-accessories market. Same category, two different lenses; flagging the gap rather than picking whichever number sounds better.",
  },

  competitors: {
    kicker: "03 / Competitive Signal",
    title: "Competitor Movement = Timing Signal",
    columns: ["Brand", "Numbers I found", "My read"],
    rows: [
      {
        brand: "Mokobara (premium luggage/bags)",
        numbers: "₹117 Cr FY24 → ₹230 Cr FY25 (+97%); net loss widened ₹4 Cr → ₹10 Cr [1]",
        read: "Premium accessories demand is real and scaling fast — but growth is being bought, not earned. Profitability still unproven at ₹230 Cr.",
      },
      {
        brand: "Zouk (bags/wallets, men + women)",
        numbers: "~61% YoY growth; ~₹610 Cr valuation; raising another ~₹60 Cr for its next phase [8]",
        read: "Made-in-India accessories work commercially; investors keep backing the lane.",
      },
      {
        brand: "Snitch (men's fashion — the biggest player for this specific customer)",
        numbers: "~₹498 Cr FY25 revenue, operating near breakeven [9]; ~$53 Mn raised to date incl. a recent ~₹340 Cr Series B; valuation ~₹2,500 Cr [10]",
        read: "The fashion-first Indian man is a proven, paying customer. Snitch is also the clearest threat from above — it can bolt accessories onto existing traffic at near-zero acquisition cost.",
      },
      {
        brand: "SALTY (accessories, pivoting from jewellery)",
        numbers: "~₹4–4.5 Cr/month revenue; targeting ₹100–150 Cr this FY; men's line already 25–30% of business, 500+ designs; launching Salty Bags + its first offline store [12]; fresh ₹30.1 Cr raise (MG Investment-led), ~$8 Mn total, category leader on Blinkit [13]",
        read: "This is the competitor running the closest thing to RUMOAR's exact play — multi-category accessories destination, men's line already a third of the business, its own bags vertical launching, and freshly funded. I'd watch this one harder than Mokobara.",
      },
    ],
    closingLabel: "My closing read:",
    closing:
      "The timing signal is that capital has moved into every adjacent lane within 18 months, yet nobody owns \"the fashion-first man's complete kit.\" The warning inside the same data: the two pure-accessories players are loss-making, and the one profitable-adjacent player (Snitch) is big enough to copy any single tactic I describe on this page. Whatever RUMOAR builds has to be something a bigger brand can't just buy.",
  },

  global: {
    kicker: "04 / Global Signals",
    title: "The World Is Moving the Same Way",
    stats: [
      {
        big: "$11.8 Bn → $18.4 Bn",
        body: "Global men's luxury bag market, 2025 → projected 2035, ~5% CAGR [19].",
      },
      {
        big: "$10.5 Bn → $15.2 Bn",
        body: "Crossbody bags, 2024 → projected 2033, with Asia-Pacific the fastest-growing region — meaning the fastest-growing geography for the fastest-growing bag format includes India [20].",
      },
    ],
    bullets: [
      "Trend direction: carabiners, keyrings, wearable pouches, vintage caps, tinted sunglasses — the \"mundane turned wearable\" wave [21].",
      "Seasonality: demand spikes in December (holiday/gifting season) — launch and drop calendars should be built backwards from that [22].",
    ],
    readsLabel: "MY OWN SYNTHESIS — NOT FROM A REPORT",
    reads: [
      {
        title: "The winning product is work + casual in one.",
        body: "The same bag should fit a boardroom meeting in the afternoon, a date in the evening, and a guys' night after. Men don't want three bags for three contexts — they want one that survives all three.",
      },
      {
        title: "Men stay loyal to a style.",
        body: "Once a man finds a look that works, he repeats it. That cuts both ways: hard to win him over, but once won, he's a repeat customer with very little re-convincing needed. This is why the retention story matters more than the acquisition story in this category.",
      },
    ],
  },

  sourcing: {
    kicker: "05 / Sourcing",
    title: "Where the Product Comes From — and Why I'd Start Indian",
    argumentCards: [
      {
        title: "1. The duty math",
        body: "Importing bags/wallets from China (HS 4202) stacks Basic Customs Duty (~15%) + Social Welfare Surcharge + IGST 18% on the duty-inclusive value [14][15]. Even accounting for GST input credit, the sunk landed-cost premium is roughly 17–20% before freight and 30–45 day lead times. Domestic sourcing has no duty stack, negotiable smaller MOQs, and 2–3 week reorder cycles — which matters enormously for a drop-based model that needs to test many designs in small batches. Hubs exist for exactly RUMOAR's categories: Kanpur (large-scale leather bags), Kolkata (fashion/premium leather), Chennai–Ambur (tannery-linked, export grade), Delhi NCR (flexible private-label runs) [16].",
      },
      {
        title: "2. The risk nobody prices in",
        body: "India–China trade relations are unpredictable. A tariff change, a border flare-up, a customs slowdown — any of these can freeze a China-dependent supply chain overnight, and we've seen versions of this happen before. Building a young brand's entire product pipeline on a geopolitical relationship that can change without warning is a risk I wouldn't take at launch volumes. China only enters the picture later, at scale, for technical materials India doesn't produce competitively — after the brand can survive a supply disruption.",
      },
    ],
    dutyCards: [
      {
        title: "China Import — HS 4202 (Bags/Wallets)",
        segments: [
          { label: "CIF value", value: "100", variant: "base" },
          { label: "Basic Customs Duty", value: "15% [14]", variant: "tax" },
          { label: "+ Social Welfare Surcharge", value: "10% of duties", variant: "tax" },
          { label: "+ IGST", value: "18% on duty-inclusive value [14][15]", variant: "tax" },
          { label: "Landed cost (pre-margin)", value: "≈ 135–140", variant: "total" },
        ],
        note: "IGST is claimable as input credit for a GST-registered business, so the sunk duty premium is roughly 17–20% — plus freight, plus 30–45 day lead times.",
      },
      {
        title: "India Domestic Sourcing",
        segments: [
          { label: "Ex-factory value", value: "100", variant: "base" },
          { label: "Duty stack", value: "none", variant: "none" },
          { label: "GST", value: "fully creditable", variant: "none" },
          { label: "Landed cost (pre-margin)", value: "≈ 100", variant: "total" },
        ],
        note: "Smaller negotiable MOQs and 2–3 week reorder cycles → I can test more designs with the same working capital.",
      },
    ],
    hubs: [
      {
        name: "Kanpur, UP",
        body: "Large-scale leather bags — backpacks, duffels, travel goods [16]. Indicative leather backpack ex-factory: ₹900–1,700/pc on IndiaMART listings [18].",
      },
      {
        name: "Kolkata, WB",
        body: "Fashion handbags and premium leather craft; export houses like KH Exports-scale players operate here [16][17].",
      },
      {
        name: "Chennai + Ambur, TN",
        body: "Tannery-linked, export-grade leather processing [16].",
      },
      {
        name: "Delhi NCR",
        body: "Flexible private-label runs for fashion brands; the right fit for RUMOAR's first drops [16].",
      },
    ],
    todo:
      "Still my single biggest gap: I have per-piece ex-factory prices from IndiaMART [18] but no published MOQs anywhere. Call/WhatsApp 2–3 sellers (Kanpur + Delhi NCR) and one Chennai/Ambur exporter — ask MOQ per style/colour, unit price at MOQ, sample cost, lead time. Even two real quotes (\"Kanpur vendor X: 200 pcs MOQ, ₹1,150/pc, 21 days\") instantly outclasses every AI-sourced number on this page. 30–60 minutes of calls.",
  },

  economics: {
    kicker: "06 / Unit Economics",
    title: "The Model, With Sliders",
    lede: "The anchors are public: Mokobara's procurement runs ~43% of its total spend [2] and its advertising ~20% of revenue [3] — and it still posts losses, spending more than ₹1 to earn ₹1 [1]. Snitch got near breakeven [9] only after retention and offline reduced its marketing dependence [11]. The sliders below are my assumptions, clearly labelled as assumptions — move them and watch which one actually flips the model. Spoiler: it isn't price or ad efficiency. It's whether the customer comes back.",
    calculator: {
      fulfilmentPct: 13,
      sliders: [
        { key: "aov", label: "AOV", min: 800, max: 4000, step: 50, default: 2000, format: "currency" },
        { key: "cogs", label: "COGS % of AOV", min: 25, max: 55, step: 1, default: 40, format: "percent" },
        { key: "cac", label: "Blended CAC per new customer", min: 200, max: 1200, step: 10, default: 550, format: "currency" },
        { key: "orders", label: "Orders per customer per year", min: 1.0, max: 3.0, step: 0.1, default: 1.4, format: "decimal" },
      ],
    },
    note: "Play with one variable at a time. CAC and AOV barely rescue the model on their own; orders/year is the lever that flips it — which is why the flywheel and the staggered drops exist: to engineer the second purchase, not the first.",
  },

  moat: {
    kicker: "07 / The Moat",
    title: "The Moat: A FOMO Flywheel, Not an Ad Budget",
    opening:
      "My first instinct was to say marketing and design are the moat. I tested that against one question: if Mokobara or Snitch decided tomorrow to outspend me on ads and hire my exact influencers, what stops them? Nothing — they have more money, and design gets copied within one production cycle — Mokobara's own Jan 2025 white-labelling controversy is the proof [4]. Ad spend isn't a moat, it's rent. What survives that test is the thing money can't directly buy: a following that spreads the brand itself.",
    flywheelHeading: "The flywheel",
    flywheel: [
      {
        num: 1,
        title: "SPARK",
        body: "A hype-led, small-batch drop creates FOMO. Gen Z runs on it, and a brand literally named after a rumour should weaponise it: something only some people know about, spreading because missing it feels bad.",
      },
      {
        num: 2,
        title: "FOLLOWING",
        body: "The drop converts attention into a customer base and social following.",
      },
      {
        num: 3,
        title: "WORD OF MOUTH",
        body: "The following does the marketing. Owners post, friends ask, the rumour spreads without ad spend.",
      },
      {
        num: 4,
        title: "RE-SPARK",
        body: "When growth stagnates, the next drop re-lights the cycle. FOMO isn't a launch tactic; it's a rhythm.",
      },
    ],
    flywheelLoop: "↺ RE-SPARK FEEDS BACK INTO SPARK — THE CYCLE NEVER RUNS OUT OF ROAD",
    timelineHeading: "The staggered-category mechanism",
    timelineIntro:
      "Never launch everything at once. This is how the flywheel avoids the two classic failure modes: start with the bag — the hero product that creates the spark and builds the first base. A few weeks later, introduce the matching cap or wallet — marketed explicitly as completing the bag (\"the bag pairs with this\"). That brings the original customers back AND pulls in new customers who came for the second product, some of whom then buy backwards into the bag. Repeat with the next category a month later. Each drop feeds the previous one.",
    timeline: [
      {
        label: "Drop 01 — The Bag",
        body: "The hero product. Creates the spark, builds the first customer base.",
      },
      {
        label: "Weeks later — The Cap / Wallet",
        body: "Marketed explicitly as completing the bag. Brings the original customers back and pulls in new ones, some of whom buy backwards into the bag.",
      },
      {
        label: "A month later — The Next Category",
        body: "Repeat. Each drop feeds the previous one.",
      },
    ],
    whyCards: [
      {
        title: "It solves the repeat-purchase problem.",
        body: "Accessories are low-frequency purchases — a man doesn't need a new wallet every month. Staggered complementary drops give existing customers a reason to return between restocks, which is exactly the variable the unit-economics calculator says decides everything.",
      },
      {
        title: "It de-risks the supply chain.",
        body: "Multi-category from day one means multi-vendor, multi-MOQ, multi-QC risk from day one. Staggering means only one new category's supply chain is being learned at a time.",
      },
    ],
    discountCallout:
      "Discounts are for acquisition, never for hype. Swiggy/Zomato-style first-order offers to bring new customers in — fine. Discounting the hyped drop itself — never, because a sale price on a \"scarce\" product kills the scarcity that made it work.",
  },

  risks: {
    kicker: "08 / The Honest Part",
    title: "Why RUMOAR Won't Work",
    lede: "The honest failure modes, each with what would have to be true to survive it.",
    blocks: [
      {
        num: 1,
        title: "Purchase frequency is against the whole category.",
        body: "Accessories are bought rarely; a one-purchase customer never pays back acquisition cost.",
        mustBeTrue: "What must be true: the staggered-drop mechanism measurably brings customers back — repeat rate is the number I'd track above everything else.",
      },
      {
        num: 2,
        title: "The flywheel might not spark.",
        body: "FOMO only works if the first drop actually creates talk. If it lands quietly, there's no engine and no plan B on this page.",
        mustBeTrue: "What must be true: the debut product is genuinely distinctive, the batch genuinely small, and the launch content genuinely native to Reels — not ads pretending to be content.",
      },
      {
        num: 3,
        title: "Snitch can copy any of this.",
        body: "A ₹2,500 Cr-valued brand with the same customer can run drops, hire the same creators, and bundle accessories into existing traffic at near-zero CAC.",
        mustBeTrue: "What must be true: RUMOAR builds a recognisable identity and community fast enough that copying the tactic doesn't transfer the following — the window is 12–18 months.",
      },
      {
        num: 4,
        title: "FOMO fatigue.",
        body: "The same trick on the same audience weakens; drop #3 can't just repeat drop #1.",
        mustBeTrue: "What must be true: the scarcity lever evolves — early-access for existing customers, limited colourways, collabs — so re-sparks target people who already bought, not just outsiders.",
      },
      {
        num: 5,
        title: "Incumbent gravity.",
        body: "Titan-scale distribution and marketplace algorithms own discovery for this customer today.",
        mustBeTrue: "What must be true: RUMOAR's own channels (community, drops, word of mouth) generate the majority of demand; marketplaces harvest it but never create it.",
      },
    ],
    todo:
      "Read this section hardest before submitting — it's the one every candidate gets probed on. Add or replace with any risk you personally believe in that isn't here.",
  },

  gtm: {
    kicker: "09 / Go-To-Market",
    title: "90 Days, Zero Followers, No Media Budget",
    cards: [
      {
        title: "Channel call (mine)",
        body: "Instagram Reels first — it's where Indian men discover fashion brands today. YouTube Shorts second, everything else after. Evidence that supports the call: Zouk's growth content is deliberately unpolished Reels — real people packing real bags — amplified by UGC contests so customers' own networks carry the reach [23]. And micro-creators (5K–50K followers) are reported to drive 2–3x the engagement of big names, at a fraction of the cost [24].",
      },
      {
        title: "Influencer approach (mine)",
        body: "No celebrity faces. My criteria: non-controversial, decent reach, affordable. Real example of the profile I mean: Sarang Patil — ~45K followers, disclosed rates of ₹15–30K per post, existing history with mainstream men's grooming brands [25]. Contrast case: Karron Dhingra (The Formal Edit) — ~256K followers but ~₹27K+ per single post [25]; bigger isn't better when 5 micro-creators cost the same and out-engage him combined. The first 25 faces get built from this profile: menswear, grooming, streetwear and everyday-carry creators in the 5K–50K band, product-gifting first, paid only after a creator's audience proves it converts.",
      },
    ],
    todo:
      "Genuinely unresolved — I tried to pull real Reddit threads for this (r/IndianFashionAddicts, r/malefashionadvice) and the search kept resolving to e-commerce listings instead of forum results; I have not fabricated any threads or quotes to fill the gap. This is on you: 15–20 minutes searching those subreddits plus r/india directly in your own browser for \"wallet recommendation,\" \"sling bag brand,\" \"bag quality India\" gets real, screenshot-able evidence — and it's evidence no AI tool handed you, which is exactly what this brief is testing for.",
  },

  footer: {
    line: "Research, data selection, and every strategic call on this page: Sunit. Page build and layout: AI-assisted, and disclosed as such — the thinking is the submission, the website is just how it's presented.",
    disclaimer: "Figures are from public reporting as of July 2026; assumptions are labelled as assumptions.",
  },

  sources: [
    {
      num: 1,
      text: "Entrackr (Fintrackr) — Mokobara FY25: ₹117 Cr → ₹230 Cr revenue (+97%), net loss widened ₹4 Cr → ₹10 Cr.",
      url: "https://entrackr.com/fintrackr/mokobara-revenue-doubles-to-rs-230-cr-in-fy25-11066667",
    },
    {
      num: 2,
      text: "BW Disrupt — Mokobara procurement ₹109 Cr, ~43% of total FY25 spend.",
      url: "https://www.bwdisrupt.com/article/mokobara-reports-rs-230-cr-fy25-revenue-eyes-rs-500-cr-by-fy27-591839",
    },
    {
      num: 3,
      text: "SiliconIndia — Mokobara FY25 ad spend ₹46 Cr (+88% YoY), ~20% of revenue.",
      url: "https://www.siliconindia.com/news/startups/mokobara-revenue-doubles-to-rs-230-crore-in-fy25-nid-239280-cid-19.html",
    },
    {
      num: 4,
      text: "Tracxn — Mokobara funding (~$24 Mn; Peak XV, Saama, Sauce; 28+ stores) and the Jan 2025 white-labelling controversy coverage.",
      url: "https://tracxn.com/d/companies/mokobara/__Q0udPPaej0fygydpCQ8Hd-tolTGf-3Pxk7GnEFOwUW4",
    },
    {
      num: 5,
      text: "Expert Market Research — India personal accessories ≈ USD 16.17–17.7 Bn, ~9.4% CAGR.",
      url: "https://www.expertmarketresearch.com/reports/india-personal-accessories-market",
    },
    {
      num: 6,
      text: "Grand View Research — India fashion accessories ≈ USD 24.3 Bn by 2030; jewellery ≈ 51.6% share (2024).",
      url: "https://www.grandviewresearch.com/horizon/outlook/fashion-accessories-market/india",
    },
    {
      num: 7,
      text: "Fortune Business Insights — men's segment growth in fashion accessories, ~7.45% CAGR.",
      url: "https://www.fortunebusinessinsights.com/fashion-accessories-market-104269",
    },
    {
      num: 8,
      text: "D2C Insider Pulse — Zouk FY25: ~61% YoY growth, ₹19 Cr loss; raising ~₹60 Cr at ≈₹610 Cr valuation.",
      url: "https://pulse.d2cinsider.com/zouk-set-to-raise-e2-82-b960-crore-at-e2-82-b9610-crore-valuation-as-d2c-fashion-brand-accelerates-growth/",
    },
    {
      num: 9,
      text: "Entrackr (Fintrackr) — Snitch FY25: ~₹498 Cr revenue (from ₹241 Cr FY24), near breakeven.",
      url: "https://entrackr.com/fintrackr/snitch-nears-rs-500-cr-revenue-in-fy25-stays-close-to-breakeven-11058503",
    },
    {
      num: 10,
      text: "Startuppedia — Snitch funding: ~$53 Mn total incl. ~₹340 Cr Series B (Jun 2025); valuation ~₹2,500 Cr.",
      url: "https://startuppedia.in/trending/startup-news/shark-tankfeatured-fast-fashion-menswear-brand-snitch-doubles-revenue-to-rs-506-crore-in-fy25-slips-into-a-rs-17-crore-loss-11154796",
    },
    {
      num: 11,
      text: "Value for Startups — Snitch AOV ₹1,200 (FY22) → ₹1,850 (FY25), ~35% month-12 retention, offline ~40–45% of revenue. Analyst estimates — directional, not filed.",
      url: "https://valueforstartups.in/snitch",
    },
    {
      num: 12,
      text: "Afaqs! — SALTY pivoting from jewellery to accessories: targeting ₹100–150 Cr this FY, men's line 25–30% of business, launching Salty Bags + first offline store.",
      url: "https://www.afaqs.com/news/mktg/salty-eyes-rs-150-cr-revenue-as-it-pivots-from-jewellery-to-accessories-11186922",
    },
    {
      num: 13,
      text: "Indian Retailer — SALTY raises ₹30.1 Cr (MG Investment-led, Jan 2026); category leader on Blinkit.",
      url: "https://www.indianretailer.com/news/d2c-accessories-brand-salty-raises-rs-301-cr-funding-round",
    },
    {
      num: 14,
      text: "EximPe — HS 4202 duty stack: BCD 15%, SWS 10% of duties, IGST 18% on duty-inclusive value.",
      url: "https://eximpe.com/hsn/handbag-hsn-code",
    },
    {
      num: 15,
      text: "EximPe — import duty computation methodology, China→India.",
      url: "https://eximpe.com/blog/b2b/import-duty-from-china-to-india",
    },
    {
      num: 16,
      text: "Panoramic Sourcing — hub specialisations: Kanpur, Kolkata, Chennai/Ambur, Delhi NCR.",
      url: "https://panoramicsourcing.com/leather-bag-manufacturer-in-india/",
    },
    {
      num: 17,
      text: "Amburshoe industry guide — named manufacturers incl. KH Exports (Chennai).",
      url: "https://amburshoe.com/top-leading-leather-bag-manufacturers-in-india-guide/",
    },
    {
      num: 18,
      text: "IndiaMART verified-exporter listings — leather backpacks ₹900–1,700/pc ex-factory (Kanpur, Kolkata, Unnao).",
      url: "https://dir.indiamart.com/impcat/leather-backpacks.html?biz=10",
    },
    {
      num: 19,
      text: "Forbes — global men's luxury bag market, $11.8 Bn (2025) → $18.4 Bn (2035).",
      url: "https://www.forbes.com/sites/laiafarrangraves/2026/02/11/the-rise-of-the-man-bag-and-why-luxury-fashion-has-fully--embraced-it/",
    },
    {
      num: 20,
      text: "Accio — global crossbody bag market, $10.5 Bn (2024) → $15.2 Bn (2033), APAC fastest-growing.",
      url: "https://www.accio.com/business/are-cross-body-bags-still-in-style-for-men-trend",
    },
    {
      num: 21,
      text: "Ape to Gentleman — SS26 men's accessory trend directions.",
      url: "https://www.apetogentleman.com/mens-accessories-trends-spring/",
    },
    {
      num: 22,
      text: "SaleHoo — men's accessories buying-behavior signals (impulse pricing, December gifting spikes).",
      url: "https://www.salehoo.com/trends/mens-accessories",
    },
    {
      num: 23,
      text: "Social Samosa / Hav Strategy — Zouk's deliberately unpolished Reels/UGC content strategy.",
      url: "https://www.socialsamosa.com/social-media-strategy/contemporary-to-desi-how-zouk-changed-social-media-10472393",
    },
    {
      num: 24,
      text: "Commerce Pundit — micro-creators (5K–50K followers) driving 2–3x engagement over macro-influencers.",
      url: "https://www.commercepundit.com/blog/instagram-growth-strategy-dtc-brands-2025/",
    },
    {
      num: 25,
      text: "Man's World India — Sarang Patil and Karron Dhingra rate cards and brand history.",
      url: "https://www.mansworldindia.com/currentedition/the-business-of-grooming-influencers",
    },
  ],
};
