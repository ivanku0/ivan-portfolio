import { SectionHeading } from "@/components/SectionHeading";

export function SiteFooter() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-divider space-y-6 border-t pt-18 md:pt-24"
    >
      <SectionHeading
        id="contact-heading"
        title="Contact"
        description="Placeholder for email, social links, and collaboration inquiries."
      />
    </section>
  );
}
