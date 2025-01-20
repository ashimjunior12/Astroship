import { featuresData, ReactIcons } from "@/lib/data";

const Content = () => {
 
  return (
    <div>
      <h4 className='text-4xl lg:text-5xl'>
        Everything you need to start a website
      </h4>
      <p className='mt-6 text-lg'>
        Astro comes batteries included. It takes the best parts of
        state-of-the-art tools and adds its own innovations. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Explicabo, est?
      </p>

      <div className='mt-20 grid lg:grid-cols-3 gap-14 mx-10'>
        {featuresData.map((feature, index: number) => {
          return (
            <div className='flex gap-4'>
              <div className='left-content'>{<feature.icon size={80} />}</div>
              <div className='right-content'>
                <h5 className='font-bold text-lg'>{feature.title}</h5>
                <p className='text-gray-600 text-sm lg:text-lg'>{feature.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='bottom mt-10 text-center text-gray-600 text-lg lg:text-2xl'>
        <p>Works with your technologies</p>
        <div className='icons grid lg:grid-cols-6 grid-cols-3  gap-4 justify-center mt-5 place-items-center text-black'>
          {ReactIcons.map((item, index) => {
            return <div>{<item.icon size={50}/>}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Content;
