import { CarProps, FilterProps } from '../types/index';
import { metadata } from '../app/layout';
import { createClient } from 'pexels';
//console.log(CarProps);


export async function fetchCars(filters:FilterProps) {

const {manufacturer,year,model,limit,fuel} = filters;

    const headers = {
        'x-rapidapi-key': '9544714e70msh3ef047f13193e36p15fbd8jsnc615d9b69420',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


const UNSPLASH_ACCESS_KEY = 'WpNGIsCil2-kIfenX_2tkdoxf_XmPO5xjfLcFmxh1x0'; // Replace with your Unsplash API key

export async function fetchCarImageUrl(car: CarProps, angle: string) {
    const { make, model } = car;
    const query = `${make} ${model}`;
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        // Return the first image result URL
        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular; // Or use any other image size (e.g., small, full)
        } else {
            console.log('No images found');
            return ''; // Return a placeholder or empty string if no images are found
        }
    } catch (error) {
        console.error('Error fetching car images:', error);
        return ''; // Return a placeholder or empty string in case of error
    }
}


const client = createClient('jOLJsZlyqtlvrkEzLx7hIXkuIoGintev95xmq9ZQmZzGHzd82QJ2wOao');  // Replace with your API key

// Function to generate car image
export async function generateCarImage(car: CarProps, angle: string) {
    const { make, model, year } = car;
    const query = `${make} ${model} ${angle}`;  // Create a query string

    try {
        // Fetch images from Pexels
        const response = await client.photos.search({ query, per_page: 1 });

        if (response.photos && response.photos.length > 0) {
            // Return the first image's URL if available
            const firstPhoto = response.photos[0];
            return firstPhoto.src.original;  // You can choose another size like large, small, etc.
        } else {
            console.error('No photos found for this query.');
            return null;  // Return null if no images were found
        }
    } catch (error) {
        console.error('Error fetching images from Pexels:', error);
        return null;  // Return null if an error occurs
    }
}

export const updatesearchParams  = (type:string, value:string) =>{


    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName;

}

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  
  export const deleteSearchParams = (type: string) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);
  
    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());
  
    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
  };
