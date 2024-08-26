import { getUsers } from "./services/user.service";
import UserTable from "./user-table";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className='p-5 flex flex-col gap-5'>
      <h1 className='font-bold'>Data Mutation example</h1>

      <section aria-label='user-list' className='border ruonded-sm'>
        <UserTable users={users} />
      </section>
    </main>
  );
}
