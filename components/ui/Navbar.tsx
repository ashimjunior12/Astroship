'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from './button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';




const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathName = usePathname();

  console.log(pathName)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false); 
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-between text-gray-600 relative`}>
      <div className='left flex gap-4'>
        {/* Logo */}
        <Link href='/'>
          <span className='text-black font-bold text-xl'>Astro</span>
          <span className='text-xl'>ship</span>
        </Link>
        {/* logo */}
      </div>

      <div
        className={`middle lg:flex gap-16 ${
          menu
            ? 'flex flex-col mt-12 mb-12 p-2 bg-black  text-white items-start absolute w-full rounded'
            : 'hidden'
        }`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-md lg:hover:text-black hover:bg-none hover:text-gray-50'>
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className='flex flex-col gap-2 px-4 py-2'>
                <NavigationMenuLink>Action</NavigationMenuLink>
                <NavigationMenuLink>Another action</NavigationMenuLink>
                <NavigationMenuLink>Dropdown submenu</NavigationMenuLink>
                <NavigationMenuLink>404 page</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href='/'
          className={clsx(
            'mt-1 lg:hover:text-black hover:text-gray-300',
            pathName === '/' ? 'lg:text-black' : ''
          )}
          onClick={() => setMenu(false)}
        >
          Home
        </Link>

        <Link
          href='/pricing'
          className={clsx(
            'mt-1 lg:hover:text-black hover:text-gray-300',
            pathName === '/pricing' ? 'lg:text-black' : ''
          )}
          onClick={() => setMenu(false)}
        >
          Pricing
        </Link>
        <Link
          href='/about'
          onClick={() => setMenu(false)}
          className={clsx(
            'mt-1 lg:hover:text-black hover:text-gray-300',
            pathName === '/about' ? 'lg:text-black' : ''
          )}
        >
          About
        </Link>
        <Link
          href='/'
          className='mt-1 lg:hover:text-black hover:text-gray-300'
          onClick={() => setMenu(false)}
        >
          Blog
        </Link>
        <Link
          href='/contact'
          className={clsx(
            'mt-1 lg:hover:text-black hover:text-gray-300',
            pathName === '/contact' ? 'lg:text-black' : ''
          )}
          onClick={() => setMenu(false)}
        >
          Contact
        </Link>
        <Link
          href='/'
          className='mt-1 relative lg:hover:text-black hover:text-gray-300'
          onClick={() => setMenu(false)}
        >
          Pro Version{' '}
          <span className='border-2 p-1 text-white text-xs rounded-full absolute bottom-2 animate-colorPulse'>
            New
          </span>
        </Link>
        <div className={`btn-container lg:flex gap-4 flex `}>
          <Button className='border-none bg-white text-black hover:bg-white'>
            Login
          </Button>
          <Button>Sign up</Button>
        </div>
      </div>

      <Button
        className='bg-white text-black hover:bg-white block lg:hidden'
        onClick={() => setMenu(!menu)}
      >
        {menu ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </Button>
    </div>
  );
};

export default Navbar;
