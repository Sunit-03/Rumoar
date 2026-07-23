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
}

export interface StatCard {
  big: string;
  body: string; // may contain [n] footnote markers
  assumption?: string;
}

export interface CompetitorRow {
  brand: string;
  numbers: string; // may contain [n] footnote markers
  read?: string; // may contain [n] footnote markers
  todo?: string; // renders as a visible TODO block in place of the read
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

export interface ArgumentCard {
  title: string;
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

export interface FlywheelStep {
  num: number;
  title: string;
  body: string;
}

export interface TimelineStep {
  label: string;
  body: string;
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

export interface GlobalRead {
  title: string;
  body: string;
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
    funnelNote: string;
    stats: StatCard[];
    bullets: string[]; // may contain [n] footnote markers
    incumbents: string;
    scopeNote: string;
  };
  competitors: {
    kicker: string;
    title: string;
    columns: [string, string, string];
    rows: CompetitorRow[];
    closingLabel: string;
    closing: string;
  };
  global: {
    kicker: string;
    title: string;
    stats: StatCard[];
    bullets: string[];
    readsLabel: string;
    reads: GlobalRead[];
  };
  sourcing: {
    kicker: string;
    title: string;
    argumentCards: ArgumentCard[];
    dutyCards: DutyCard[];
    hubs: HubCard[];
    todo: string;
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
    opening: string;
    flywheelHeading: string;
    flywheel: FlywheelStep[];
    flywheelLoop: string;
    timelineHeading: string;
    timelineIntro: string;
    timeline: TimelineStep[];
    whyCards: ArgumentCard[];
    discountCallout: string;
  };
  risks: {
    kicker: string;
    title: string;
    lede: string;
    blocks: RiskBlock[];
    todo: string;
  };
  gtm: {
    kicker: string;
    title: string;
    cards: GtmCard[];
    todo: string;
  };
  footer: {
    line: string;
    disclaimer: string;
    todo?: string;
  };
  sources: Source[];
}
