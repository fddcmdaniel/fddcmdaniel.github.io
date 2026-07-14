import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { CommandLine } from '../CommandLine/CommandLine';
import { STACK } from './stackData';
import styles from './StackSection.module.css';

export function StackSection() {
  return (
    <Section id="stack" ariaLabel="Technology stack">
      <Container>
        <CommandLine command="ls ./stack" />
        <div className={styles.tree}>
          {STACK.map((category, index) => (
            <div className={styles.treeRow} key={category.dir}>
              <span className={styles.treeBranch}>
                {index === STACK.length - 1 ? '└──' : '├──'}
              </span>
              <span className={styles.treeDir}>{category.dir}</span>
              <span className={styles.chips}>
                {category.skills.map((skill) => (
                  <span className={styles.chip} key={skill}>
                    {skill}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
