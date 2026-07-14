import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { CommandLine } from '../CommandLine/CommandLine';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <Section id="about" ariaLabel="About">
      <Container>
        <CommandLine command="cat about.md" />
        <div className={styles.bio}>
          <p>
            I am a <strong>Software Engineer</strong> driven by technical complexity. With{' '}
            <strong>4.5&nbsp;years</strong> of experience building mission-critical trading and
            risk systems, I have found my focus in the intersection of{' '}
            <span className={styles.accent}>AI and Frontend</span>.
          </p>
          <p>
            My goal is to transform abstract, complex AI capabilities into intuitive,
            production-ready experiences. I thrive on <strong>end-to-end ownership</strong>,
            ensuring that technological sophistication always results in a seamless user journey.
          </p>
        </div>
      </Container>
    </Section>
  );
}
