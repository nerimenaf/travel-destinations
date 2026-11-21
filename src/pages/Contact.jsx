import { Container } from "react-bootstrap";

const contacts = [
  {
    label: "Email",
    value: "hello@wanderlist.example",
    href: "mailto:hello@wanderlist.example",
    hint: "We reply within two working days.",
  },
  {
    label: "Phone",
    value: "+1 (555) 010-2030",
    href: "tel:+15550102030",
    hint: "Monday to Friday, 9am–6pm.",
  },
  {
    label: "Office",
    value: "12 Harbour Street, Lisbon, Portugal",
    hint: "Visits by appointment only.",
  },
];

export default function Contact() {
  return (
    <Container className="section">
      <div className="section__head">
        <h1>Contact us</h1>
        <p className="text-muted mb-0">Questions about a trip? We are happy to help.</p>
      </div>

      <div className="contact-grid">
        {contacts.map(({ label, value, href, hint }) => (
          <article className="contact-card" key={label}>
            <span className="contact-card__label">{label}</span>
            {href ? <a href={href}>{value}</a> : <strong>{value}</strong>}
            <span className="note">{hint}</span>
          </article>
        ))}
      </div>

      <p className="note">Contact details are placeholders for this demo project.</p>
    </Container>
  );
}
