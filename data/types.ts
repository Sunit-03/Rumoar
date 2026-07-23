export interface NavSection {
  id: string;
  label: string;
}

export interface TickerItem {
  text: string;
}

export interface ConditionCard {
  num: number;
  title: string;
  body: string; // may contain [n] footnote markers
}

export interface FunnelStep {
  label: string;
  value: string;
  widthPct: number;
  assumption?: string;
}

export interface BottomUpStat {
  big: string;
  body: string; // may contain [n] footnote markers
  assumption?: string;
}

export interface CompetitorRow {
  brand: string;
  revenue: string;
  yoy: string;
  pnl: string;
  raised: string;
  signal: string; // may contain [n] footnote markers
}

export interface ReadItem {
  label: string;
  tone: "brass" | "oxblood";
  body: string; // may contain [n] footnote markers
}

export interface DutySegment {
  label: string;
  value: string;
  variant: "base" | "tax" | "total" | "none";
}

export interface DutyCard {
  title: string;
  segments: DutySegment[];
  note: string; // may contain [n] footnote markers
}

export interface HubCard {
  name: string;
  body: string; // may contain [n] footnote markers
}

export type SliderFormat = "currency" | "percent" | "decimal";

export interface SliderConfig {
  key: "aov" | "cogs" | "cac" | "orders";
  label: string;
  min: number;
  max: number;
  step: number;
  default: number;
  format: SliderFormat;
}

export interface CalculatorConfig {
  sliders: SliderConfig[];
  fulfilmentPct: number; // fixed % of AOV
}

export type MoatTag = "MOAT" | "NOT A MOAT" | "NOT A MOAT (YET)" | "THE ONLY BUILDABLE MOAT";

export interface MoatCard {
  tag: MoatTag;
  title: string;
  body: string; // may contain [n] footnote markers
}

export interface RiskBlock {
  num: number;
  title: string;
  body: string; // may contain [n] footnote markers
  mustBeTrue: string;
}

export interface GtmCard {
  title: string;
  body: string; // may contain [n] footnote markers
}

export interface Principle {
  num: number;
  body: string; // may contain [n] footnote markers
}

export interface Source {
  num: number;
  text: string;
  url?: string;
}

export interface RumoarContent {
  meta: {
    title: string;
    submittedBy: string;
    date: string;
  };
  nav: NavSection[];
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    verdictChipBold: string;
    verdictChipRest: string;
  };
  ticker: TickerItem[];
  verdict: {
    kicker: string;
    title: string;
    body: string;
    conditions: ConditionCard[];
  };
  market: {
    kicker: string;
    title: string;
    lede: string;
    funnel: FunnelStep[];
    funnelAssumption: string;
    reconciliationIntro: string;
    bottomUp: BottomUpStat[];
    reconciliation: string; // may contain [n] footnote markers
  };
  competitors: {
    kicker: string;
    title: string;
    rows: CompetitorRow[];
    reads: ReadItem[];
  };
  sourcing: {
    kicker: string;
    title: string;
    dutyCards: DutyCard[];
    hubs: HubCard[];
    flipCallout: string;
  };
  economics: {
    kicker: string;
    title: string;
    lede: string;
    calculator: CalculatorConfig;
    note: string;
  };
  moat: {
    kicker: string;
    title: string;
    cards: MoatCard[];
  };
  risks: {
    kicker: string;
    title: string;
    lede: string;
    blocks: RiskBlock[];
  };
  gtm: {
    kicker: string;
    title: string;
    positioning: string;
    cards: GtmCard[];
    aiNote: string;
  };
  product: {
    kicker: string;
    title: string;
    principles: Principle[];
  };
  footer: {
    line: string;
    disclaimer: string;
  };
  sources: Source[];
}
