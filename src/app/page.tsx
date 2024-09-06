import UserTable from "@/components/table/user-table";
import NavBar from "./nav-bar";
import { getUsers } from "./services/user.service";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className='p-5 flex flex-col gap-5'>
      <NavBar />

      <section aria-label='user-list' className='border ruonded-sm'>
        <UserTable users={users} />
      </section>
    </main>
  );
}
