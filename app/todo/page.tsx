import { sql } from "@vercel/postgres";
import { AddForm } from "@/app/todo/add-form";
import { DeleteForm } from "@/app/todo/delete-form";


export default async function Home() {
  let data = await sql`SELECT * FROM todos`;
  const { rows: todos } = data
  
  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li className="border border-black " key={todo.id}>
            {todo.text}
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul>
    </main>
  );
}