import { SectionHeading } from "@/app/components/SectionHeading";

export function SiteFooter() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-divider space-y-6 border-t pt-14 md:pt-20"
    >
      <SectionHeading
        id="contact-heading"
        title="Contact"
        description="Placeholder for email, social links, and collaboration inquiries."
      />
    </section>
  );
}
