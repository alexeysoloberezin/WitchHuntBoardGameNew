import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/api/baseQuery";

const fetchTodos = async () => {
  const { data } = await api.get("https://jsonplaceholder.typicode.com/todos");

  return data;
};

export const useTodos = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
