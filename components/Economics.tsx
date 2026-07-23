"use client";

import { useMemo, useState } from "react";
import type { RumoarContent, SliderConfig } from "@/data/types";
import { FootnoteText } from "./FootnoteText";
import { Reveal } from "./Reveal";
import { useAnimatedNumber } from "@/lib/use-animated-number";

function formatValue(value: number, format: SliderConfig["format"]): string {
  if (format === "percent") return `${value}%`;
  if (format === "decimal") return value.toFixed(1);
  return formatInr(value);
}

function formatInr(n: number): string {
  const neg = n < 0;
  const rounded = Math.round(Math.abs(n));
  const s = rounded.toString();
  const lastThree = s.length > 3 ? s.slice(-3) : s;
  const other = s.length > 3 ? s.slice(0, -3) : "";
  const formatted = other ? `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${lastThree}` : lastThree;
  return `${neg ? "−" : ""}₹${formatted}`;
}

export function Economics({ economics }: { economics: RumoarContent["economics"] }) {
  const { sliders, fulfilmentPct } = economics.calculator;

  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(sliders.map((s) => [s.key, s.default]))
  );

  const results = useMemo(() => {
    const aov = values.aov;
    const cogsPct = values.cogs / 100;
    const cac = values.cac;
    const orders = values.orders;

    const fulfilment = aov * (fulfilmentPct / 100);
    const cogsAmt = aov * cogsPct;
    const contribPerOrder = aov - cogsAmt - fulfilment;
    const firstYear = contribPerOrder * orders - cac;
    const payback = contribPerOrder > 0 ? cac / contribPerOrder : Infinity;

    return { contribPerOrder, firstYear, payback };
  }, [values, fulfilmentPct]);

  const isViable = results.firstYear >= 0;

  const animatedContrib = useAnimatedNumber(results.contribPerOrder);
  const animatedFirstYear = useAnimatedNumber(results.firstYear);
  const animatedPayback = useAnimatedNumber(isFinite(results.payback) ? results.payback : 0);

  return (
    <section className="block" id="economics">
      <div className="wrap">
        <Reveal>
          <div className="kicker">{economics.kicker}</div>
          <h2 className="section-title">{economics.title}</h2>
          <p className="lede">
            <FootnoteText text={economics.lede} />
          </p>
        </Reveal>

        <Reveal className="calc-card">
          <div className="calc-inputs">
            {sliders.map((slider) => (
              <div className="slider-group" key={slider.key}>
                <div className="slider-label">
                  <span>{slider.label}</span>
                  <span className="val mono">{formatValue(values[slider.key], slider.format)}</span>
                </div>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={values[slider.key]}
                  aria-label={slider.label}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, [slider.key]: parseFloat(e.target.value) }))
                  }
                />
              </div>
            ))}
          </div>
          <div className="outputs">
            <div className="output-row">
              <span className="olabel">
                Contribution per order (fulfilment fixed at {fulfilmentPct}% of AOV — shipping, payment, returns)
              </span>
              <span className="oval mono">{formatInr(animatedContrib)} / order</span>
            </div>
            <div className="output-row">
              <span className="olabel">First-year contribution per customer</span>
              <span className="oval mono">{formatInr(animatedFirstYear)}</span>
            </div>
            <div className="output-row">
              <span className="olabel">Payback period</span>
              <span className="oval mono">
                {isFinite(results.payback) ? `${animatedPayback.toFixed(1)} orders` : "never"}
              </span>
            </div>
            <div className={`verdict-line mono ${isViable ? "pos" : "neg"}`}>
              {isViable
                ? "Viable — if retention actually happens. Repeat rate is doing all the work in this math."
                : "At these numbers, RUMOAR loses money on every customer it acquires. This is the default state of this category."}
            </div>
          </div>
        </Reveal>

        <p className="calc-note">{economics.note}</p>
      </div>
    </section>
  );
}
