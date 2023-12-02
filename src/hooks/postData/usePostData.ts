import { useMutation, useQueryClient } from "react-query";
import { api } from "../../helper/api";

export const useMutaionPostData = <T>(url: string, invalideData?: string) => {
  const PostFunction = async (Data: T): Promise<any> => {
    return await api.post(`${url}`, Data);
  };
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(
    PostFunction,
    {
      onSuccess: () => {
        if (invalideData) {
          queryClient.resetQueries(invalideData);
        }
      },
      onError: () => {},
      onMutate: () => {},
    }
  );

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
    data,
  };
};
