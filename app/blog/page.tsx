'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

const api = process.env.NEXT_PUBLIC_API_URL as string;

interface Drinks {
  idDrink: number;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strInstructionsES: string;
  strDrinkThumb: string;
}

const Page = () => {
  // Changed to uppercase 'Page' to adhere to React component naming convention
  const [drinks, setDrinks] = useState<Drinks[]>([]);

  const fetchData = useCallback(async () => {
    // Wrapped in useCallback to ensure a stable reference
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const drinksData: Drinks[] = data.drinks.map((drink: Drinks) => ({
        idDrink: Number(drink.idDrink),
        strDrink: drink.strDrink,
        strCategory: drink.strCategory,
        strInstructions: drink.strInstructions,
        strInstructionsES: drink.strInstructionsES,
        strDrinkThumb: drink.strDrinkThumb,
      }));
      setDrinks(drinksData);
    } catch (error) {
      console.error('Error fetching drinks:', error);
    }
  }, []); // Empty dependency array ensures fetchData does not recreate on every render

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Added fetchData as a dependency

  return (
    <div className='flex flex-col items-center mt-16'>
      <div className='top'>
        <h1 className='text-center text-4xl font-bold'>Our Blog</h1>
        <p className='mt-3 text-gray-500 text-xl'>
          We write about building startups and thoughts going on our mind.
        </p>
      </div>
      <div className='drinks-list mt-8 mx-auto flex flex-col items-center space-y-8'>
        {drinks.length > 0 ? (
          drinks.map((drink, index) => (
            <Link
              href={`/blog/${drink.idDrink}`}
              key={index}
              className='drink-item w-full sm:max-w-xs md:max-w-2xl lg:max-w-4xl flex items-center justify-between bg-white p-6 rounded-lg shadow-lg hover:cursor-pointer transition-all'
            >
              <div className='flex items-center space-x-6 flex-col md:flex-row justify-center '>
                <div className='flex-shrink-0'>
                  <Image
                    src={drink.strDrinkThumb}
                    width={200}
                    height={200}
                    alt='drink'
                    className='rounded-lg w-full'
                  />
                </div>
                <div className='flex flex-col justify-between space-y-4 mt-4'>
                  <p className='text-3xl font-bold text-gray-800'>
                    {drink.strDrink}
                    <span className='text-lg font-normal text-gray-500'>
                      {drink.strCategory}
                    </span>
                  </p>
                  <p className='text-gray-700'>{drink.strInstructions}</p>
                  <p className='text-gray-500'>{drink.strInstructionsES}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-lg text-gray-500'>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
