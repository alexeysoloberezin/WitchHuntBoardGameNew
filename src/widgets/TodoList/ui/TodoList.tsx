import { useTodos } from "@features/todo/api/getTodos";

export const TodoList = () => {
  const { data, isLoading, isError } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {isError}</div>;

  return (
    <ul>
      {Array.isArray(data) &&
        data.map((todo: any) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
};
