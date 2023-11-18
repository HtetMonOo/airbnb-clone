import axios from 'axios';

const BASE_URL = 'https://airbnb13.p.rapidapi.com';

const options = {
  params: {
    checkin: '2023-12-16',
    checkout: '2023-12-17',
    adults: '1',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};

const option = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'airbnb-data.p.rapidapi.com',
  },
};

// export const fetchCategories = async () => {
//   const { data } = await axios.get(
//     'https://airbnb-data.p.rapidapi.com/WebAPIs/airbnb/category/v1',
//     option
//   );
//   return data.data;
// };

export const fetchCategories = () => console.log('in fetching categories');
