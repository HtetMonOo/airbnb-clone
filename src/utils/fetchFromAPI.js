import axios from 'axios';

const BASE_URL = 'https://airbnb13.p.rapidapi.com';

const options = {
  params: {
    checkin: '2023-11-16',
    checkout: '2023-11-17',
    adults: '1',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

const option = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com',
  },
};

export const fetchCategories = async () => {
  const { data } = await axios.get(
    'https://airbnb19.p.rapidapi.com/api/v1/getCategory',
    option
  );
  return data.data;
};
