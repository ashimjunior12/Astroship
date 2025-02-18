import { Button } from './button';

const Footer = () => {
  return (
    <div>
      <div className='bg-black mt-10 text-white p-5 rounded flex gap-3 flex-col items-center'>
        <h2 className='text-xl font-bold lg:text-4xl my-2'>
          Build faster websites
        </h2>
        <p className='text-sm lg:text-md'>
          Pull content from anywhere and serve it fast with Astro&apos;s
          next-gen island architecture.
        </p>
        <Button className='bg-white text-black hover:bg-white'>
          Get Started
        </Button>
      </div>
    </div>
  );
};
export default Footer;
