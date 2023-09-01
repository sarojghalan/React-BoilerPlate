import React from 'react';
import Service from '../setup/Network';

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<string[]>([]);
  const [errorText, setErrorText] = React.useState<string | unknown>('');
  
  const fetchData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await Service.get(url);
      setIsLoading(false);
      setData(response?.data?.data);
    } catch (error: unknown) {
      setIsLoading(false);
      setErrorText(error);
    }
  }, [url]);
  React.useEffect(() => {
    fetchData();
  }, [url]);
  return { isLoading, data, errorText, fetchData };
};

export default useFetch;
