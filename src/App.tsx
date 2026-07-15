import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader';
import { StackSection } from './components/StackSection/StackSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <ThemeToggle />
      <TerminalHeader />
      <main>
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
