import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { CommandLine } from '../CommandLine/CommandLine';
import { CONTACT_LINKS } from './contactData';
import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <Section id="contact" ariaLabel="Contact">
      <Container>
        <CommandLine command="cat contact.txt" />
        <div className={styles.contactLinks}>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              className={styles.btn}
              href={link.href}
              rel={link.download ? undefined : 'me noopener'}
              target={link.download ? undefined : '_blank'}
              download={link.download}
            >
              <span className={styles.glyph}>{link.glyph}</span> {link.label}
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
