import { getContent } from "@/lib/get-content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Verdict } from "@/components/Verdict";
import { Market } from "@/components/Market";
import { Competitors } from "@/components/Competitors";
import { Sourcing } from "@/components/Sourcing";
import { Economics } from "@/components/Economics";
import { Moat } from "@/components/Moat";
import { Risks } from "@/components/Risks";
import { Gtm } from "@/components/Gtm";
import { Product } from "@/components/Product";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const data = await getContent();

  return (
    <>
      <Nav sections={data.nav} />
      <Hero hero={data.hero} />
      <Ticker items={data.ticker} />
      <Verdict verdict={data.verdict} />
      <Market market={data.market} />
      <Competitors competitors={data.competitors} />
      <Sourcing sourcing={data.sourcing} />
      <Economics economics={data.economics} />
      <Moat moat={data.moat} />
      <Risks risks={data.risks} />
      <Gtm gtm={data.gtm} />
      <Product product={data.product} />
      <Ticker items={data.ticker} />
      <Footer footer={data.footer} sources={data.sources} />
    </>
  );
}
