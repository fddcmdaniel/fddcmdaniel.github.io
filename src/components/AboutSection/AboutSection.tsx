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
            I am a <strong>Software Engineer</strong> at{' '}
            <strong>Blip (Flutter Entertainment)</strong>, where since 2022 I have built
            mission-critical trading and risk platforms. Since 2024 I have led the move to a
            Risk-focused squad, architecting high-performance monitoring tools that process
            millions of live data points using advanced virtualization.
          </p>
          <p>
            My focus increasingly sits at the intersection of{' '}
            <span className={styles.accent}>AI and Frontend</span> — I designed and shipped an
            autonomous, end-to-end AI-powered conversational agent (AWS Bedrock, LangGraph,
            Python) that is now part of core internal tooling, and architected a full-cycle
            AI-driven SDLC flow spanning automated requirement generation through parallel
            AI development and testing with human-in-the-loop validation.
          </p>
        </div>
      </Container>
    </Section>
  );
}
