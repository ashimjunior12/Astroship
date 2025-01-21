import Cards from "@/components/ui/pricing/Cards";


const page = () => {
 
  return (
    <div className='flex items-center flex-col justify-center mt-16'>
      <div className='top-section flex flex-col items-center'>
        <h1 className="text-4xl font-bold lg:text-5xl">Pricing</h1>
        <p className="mt-4 text-lg">Simple & Predictable pricing. No Surprises.</p>
      </div>

      {/* Card Content */}
      <Cards />
      {/* Card Content */}
    </div>
  );
}
export default page