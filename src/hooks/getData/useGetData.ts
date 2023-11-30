import { useQuery } from "react-query";
import { api } from "../../helper/api";

const useGetData = (queryCash: string, endpoint: string) => {
  const GetFunction = async () => {
    return await api.get(`${endpoint}`);
  };

  const { data, isLoading, isError, refetch } = useQuery(
    queryCash,
    GetFunction,
    {
      onSuccess: (data: any) => {},
    }
  );
  return { data, isLoading, isError, refetch };
};

export default useGetData;
