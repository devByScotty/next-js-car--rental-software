"use client";

import Image from "next/image";
import { useState ,useEffect } from "react";

import { calculateCarRent, generateCarImage } from "@utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { CarProps } from "@types";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [frontImageUrl, setFrontImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchImages = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
          const frontUrl = await generateCarImage(car, 'back');
          setFrontImageUrl(frontUrl ?? '');
          console.log(frontUrl);
        } catch (error) {
          console.error('Error generating image URLs:', error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };

      fetchImages();
    }
  }, [isOpen, car]);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        {loading ? (
          <p>Loading...</p> // Show a loading message or spinner
        ) : (
          <Image src={frontImageUrl} alt='car' fill priority className='object-contain' />
        )}
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg" width={20} height={20} alt='gas' />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            btnType={'button'}
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading [17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;