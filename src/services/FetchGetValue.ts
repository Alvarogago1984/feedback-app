import { useEffect, useState } from 'react';
import { DataInterface } from './FetchGetValue.type';

export const FetchGetValueBody = () => {
  const [valueFetch, setValueFetch] = useState<DataInterface | undefined>();
  const url = '/data.json';

  useEffect(() => {
    const fechtGet = async () => {
      try {
        const fetchValue = await fetch(url);
        const data = await fetchValue.json();
        setValueFetch(data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };
    fechtGet();
  }, []);

  return { valueFetch };
};
