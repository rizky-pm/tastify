import Link from 'next/link';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';

const Navbar = () => {
  return (
    <nav className='flex items-center border-b-2 border-border h-16 relative'>
      <MaxWidthWrapper>
        <div className='flex justify-between items-center'>
          <Link className='font-extrabold text-3xl' href={'/'}>
            {/* TODO: Find better font */}
            tastify
          </Link>

          <ul className='flex space-x-4'>
            <li>
              <Link
                href={'/sign-in'}
                className={buttonVariants({
                  variant: 'default',
                  size: 'sm',
                })}
              >
                Sign in
              </Link>
            </li>

            {/* TODO: Add new link/button when user signed in */}
          </ul>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
