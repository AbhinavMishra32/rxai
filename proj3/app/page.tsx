import { getData } from "@/actions/todoActions";
import { getAllUsers } from "@/actions/userActions";
import Todos from "@/components/Todos";

export default async function Home() {
  const users = await getAllUsers();
  console.log(users);

  // const data = await getData(users[0].id);

  return (
    <main>
      <Todos todos={[]} user={users[0]} />
    </main>)
}