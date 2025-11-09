import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className='bg-gray-100 dark:bg-[#111111] border-t border-gray-200 dark:border-gray-800'
      id='contact'
    >
      <div className='container mx-auto py-10 px-6 sm:px-12 text-sm text-gray-600 dark:text-gray-400'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-1'>
            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
              TMG Solutions I.K.E.
            </h4>
            <p>Single Member Private Company</p>
            <p>Software related services</p>
            <p>Ethnikis Antistasis 4, 73134, Chania, Greece</p>
          </div>
          <div className='md:col-span-1'>
            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
              Company Information
            </h4>
            <p>G.E.M.I. No: 165381258000</p>
            <p>VAT ID: EL146311136</p>
            <p>Tax Office: Chania</p>
          </div>
          <div className='md:col-span-1'>
            <h4 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
              Contact &amp; Legal
            </h4>
            <p>
              Email:{' '}
              <a
                className='hover:text-primary'
                href='mailto:contact@aurainteractive.dev'
              >
                contact@aurainteractive.dev
              </a>
            </p>
            <p>
              Telephone:{' '}
              <a className='hover:text-primary' href='tel:+306975606886'>
                +306975606886
              </a>
            </p>
            <Link href='#' className='hover:text-primary transition-colors '>
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className='mt-8 pt-6 border-t border-gray-300 dark:border-gray-700'>
          <p>© {year} TMG Solutions I.K.E. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
