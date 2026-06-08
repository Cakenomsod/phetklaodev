import SiteNav from "@/src/components/layout/SiteNav";

export default function ShowcaseNav() {
  return (
    <SiteNav backHref="/portfolio" backLabel="Portfolio">
      <span className="font-mono text-[10px] tracking-[0.18em] text-accent-primary/80 uppercase">
        Competition · Case Study
      </span>
    </SiteNav>
  );
}
