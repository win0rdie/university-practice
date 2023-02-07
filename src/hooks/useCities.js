import axios from 'axios';
import { useState, useEffect } from 'react';
// import universityData from '../constants/universityData.json';

const BASE_URL = 'https://63e271093e12b193763ffead.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export default function useCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('/cities').then(({ data: cities }) => {
      localStorage.setItem(
        'cities',
        JSON.stringify(
          cities.map(({ text }) => ({
            text,
            relation: 'cities',
          }))
        )
      );

      const cityFromLS = JSON.parse(localStorage.getItem('cities'));
      cityFromLS ? setCities(cityFromLS) : setCities([]);
    });
  }, []);

  return [cities, setCities];
}
