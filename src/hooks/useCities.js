import { fetchCities } from 'api/citiesApi/ciitesApi';
import { useState, useEffect } from 'react';

export default function useCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities().then(({ data: cities }) => {
      localStorage.setItem(
        'cities',
        JSON.stringify(
          cities.map(({ text, id }) => ({
            text,
            id,
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
