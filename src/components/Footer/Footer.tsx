import { Container } from '../Container/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <span>© {new Date().getFullYear()} Filipe</span>
          <span><a href="mailto:fddcm.daniel@gmail.com">
            mail me
          </a></span>
        </div>
      </Container>
    </footer>
  );
}
