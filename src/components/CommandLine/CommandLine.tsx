import styles from './CommandLine.module.css';

interface CommandLineProps {
  command: string;
}

export function CommandLine({ command }: CommandLineProps) {
  return (
    <p className={styles.cmdLine}>
      <span className={styles.promptSign}>$</span>
      <span className={styles.cmd}>{command}</span>
    </p>
  );
}
