// import Image from "@/components/ui/about/Image";
import { aboutData } from "@/lib/data";
import Image from "next/image";

const page = () => {
 
  return (
    <div className='flex items-center flex-col justify-center mt-16'>
      <div className='top'>
        <h1 className='font-bold text-6xl text-center'>About</h1>
        <p className='text-xl mt-2 text-gray-500'>
          We are a small passionate team
        </p>
      </div>
      <div className='footer mt-16'>
        <h2 className='text-3xl font-bold'>Empowering the world with Astro.</h2>
        <p className='text-lg mt-2 text-gray-500'>
          We're a multi-cultural team from around the world! We come from
          diverse backgrounds, bringing different personalities, experiences and
          skills to the job. This is what makes our team so special.
        </p>
        <div className='container grid lg:grid-cols-3 gap-4 place-items-center mt-10'>
          {aboutData.map((item, index: number) => {
            return (
              <div key={index}>
                <Image className="rounded hover:shadow-xl transition hover:-translate-y-1" src={item.image} alt='image' width={400} height={400} />
                <h3 className="text-center mt-3 text-2xl">{item.name}</h3>
                <p className="text-center text-gray-500">{item.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default page