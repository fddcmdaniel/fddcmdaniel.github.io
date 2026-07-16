import { Container } from '../Container/Container';
import { useTypewriter, type TerminalStep } from '../../hooks/useTypewriter';
import avatarUrl from '../../assets/avatar.png';
import styles from './TerminalHeader.module.css';

const SCRIPT: TerminalStep[] = [
  { cmd: 'whoami', out: 'I am Filipe.' },
  { cmd: 'purpose', out: 'Building interfaces that empower users.' },
  {
    cmd: 'goal',
    out: 'Bridging the gap between complex AI and intuitive UX.',
    final: true,
  },
];

export function TerminalHeader() {
  const { cmdText, outText, showCursorOnCmd, isFinal } = useTypewriter(SCRIPT);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.terminalWrap}>
          <span className={styles.avatarPeek} aria-hidden="true">
            <img className={styles.avatarImg} src={avatarUrl} alt="" />
          </span>

          <div
            className={styles.terminal}
            role="img"
            aria-label="Animated terminal: whoami — I am Filipe. purpose — Building interfaces that empower users. goal — Bridging the gap between complex AI and intuitive UX."
          >
            <div className={styles.terminalBar} aria-hidden="true">
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.title}>filipe@portfolio — zsh</span>
            </div>

            <div className={styles.terminalBody} aria-hidden="true">
              <div className={styles.termLine}>
                <span className={styles.prompt}>
                  filipe<span className={styles.path}>:~$</span>
                </span>{' '}
                <span>{cmdText}</span>
                {showCursorOnCmd && <span className={styles.cursor} />}
              </div>

              <div className={`${styles.termLine} ${styles.termOutput}`}>{outText}</div>

              {isFinal && (
                <div className={styles.termLine}>
                  <span className={styles.prompt}>
                    filipe<span className={styles.path}>:~$</span>
                  </span>{' '}
                  <span className={styles.cursor} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
