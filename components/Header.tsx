import Link from 'next/link';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className='w-full py-4 px-6 sm:px-12 md:px-20 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-3'>
          <Logo />
          <span className='text-2xl font-bold text-gray-900 dark:text-white'>
            Aura
          </span>
          <span className='text-2xl font-light text-gray-500 dark:text-gray-400'>
            interactive
          </span>
        </Link>
        <nav className='flex items-center space-x-6'>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
