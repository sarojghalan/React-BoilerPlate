import Service from "../setup/Network";
import { useQuery } from "@tanstack/react-query";

const useFetch = (url: string, queryKey: string) => {

  const { data, isLoading, isError} = useQuery(
    [queryKey],
      ()=> Service.get(url),
  );
  return { data, isError, isLoading };
};

export default useFetch;
