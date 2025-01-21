import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../button';
import { pricingPlan } from '@/lib/data';



const Cards = () => {
  return (
    <div className='mt-10 grid lg:grid-cols-3 grid-cols-1 gap-28'>
      {pricingPlan.map((item, index: number) => {
        return (
          <div key={index}>
            <Card>
              <CardHeader>
                <CardDescription className='text-center text-4xl mb-2'>{item.name}</CardDescription>
                <CardTitle className='text-center text-3xl'>{item.price}</CardTitle>
              </CardHeader>
                      
        {item.features.map((feature,index)=>{
          return (
            <CardContent key={index} className='flex'>
              <feature.icon className='mr-2 mt-1' />
              <p className='text-lg'>{feature.text}</p>
            </CardContent>
          );
        })}
              <CardFooter>
              
                {item.buttonLabel==='Get Started'?<Button className='w-full'>Get Started</Button>:<Button className='bg-white text-black border border-black hover:bg-gray-100 w-full'>{item.buttonLabel}</Button>}
                
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
