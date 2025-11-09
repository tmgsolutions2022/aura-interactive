import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='grow'>
        <HeroSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
