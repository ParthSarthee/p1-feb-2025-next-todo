import TodoCard from "@/components/Todo";
import { IsUser } from "@/components/Auth";


export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <IsUser />
      <TodoCard />
    </main>
  );
}
