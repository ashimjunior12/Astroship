import Contact from "@/components/ui/contact/Contact"
import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { LuPhone } from 'react-icons/lu';


const page = () => {
  return (
    <div className='mt-20 flex items-center flex-col w-10/12 mx-auto'>
      <h1 className='text-5xl font-bold'>Contact</h1>
      <p className='mt-2 text-lg text-gray-500'>We are here to help</p>

      <div className='container flex mt-10 justify-between flex-col lg:flex-row'>
        <div className='left'>
          <p className='text-2xl font-bold'>Contact Astroship</p>
          <p className='text-xl text-gray-500'>
            Have something to say? We are here to help. Fill up the <br /> form or send
            email or call phone.
          </p>
          <div className='address-sec mt-8 flex flex-col gap-4'>
            <p className='flex gap-2 relative'>
              {' '}
              <CiLocationOn
                size={18}
                className='absolute top-1/2 -translate-y-1/2 left-0'
              />{' '}
              <span className='ml-7'>1734 Sanfransico, CA 93063</span>
            </p>
            <p className='flex gap-2 relative'>
              {' '}
              <CiMail
                size={18}
                className='absolute top-1/2 -translate-y-1/2 left-0'
              />{' '}
              <span className='ml-7'>hello@astroshipstarter.com</span>
            </p>
            <p className='flex gap-2 relative'>
              {' '}
              <LuPhone
                size={18}
                className='absolute top-1/2 -translate-y-1/2 left-0'
              />{' '}
              <span className='ml-7'>+1 (987) 4587 899</span>
            </p>
          </div>
        </div>
        <div className='right'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
export default page