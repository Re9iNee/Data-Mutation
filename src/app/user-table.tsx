import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { User } from "./types/user";
import UserTableRow from "./user-table-row";

export default function UserTable() {
  const users: User[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Alice Burgers", email: "alice.burgers@example.com" },
    { id: 3, name: "Hugh As", email: "hug.as@example.com" },
  ];

  return (
    <Table>
      <TableCaption>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>User</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className='text-right'>
            <Button variant={"default"} asChild>
              <Link href={"/create"}>Create </Link>
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  );
}
