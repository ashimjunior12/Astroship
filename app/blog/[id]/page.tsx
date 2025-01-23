'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

// Define types for the drink data
interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strMeasure1: string;
}

const DrinkDetailPage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_DRINK_URL as string;
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<Drink | null>(null);
  const apiDataUrl = `${apiUrl}${id}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(apiDataUrl);
      const data = await response.json();
      if (data.drinks) {
        setDrink(data.drinks[0]);
      }
    } catch (error) {
      console.error('Error fetching drink data:', error);
    }
  }, [apiDataUrl]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, fetchData]);

  if (!drink) {
    return <div className='text-center mt-10 text-xl'>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto mt-16'>
      <Link href='/blog'>
        <Button>Back to Blog</Button>
      </Link>

      <div className='mt-6 text-center flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>{drink.strDrink}</h1>
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          width={300}
          height={300}
          className='rounded-lg mt-4'
        />
        <p className='mt-4 font-bold text-3xl'>{drink.strCategory}</p>
        <p className='mt-4'>{drink.strInstructions}</p>
        <p className='mt-4'>{drink.strInstructionsES}</p>

        <div className='mt-6'>
          <h2 className='text-xl font-semibold'>Ingredients:</h2>
          <p>
            {drink.strIngredient1} - {drink.strMeasure1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetailPage;
