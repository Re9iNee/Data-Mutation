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

import { User } from "@/app/types/user";
import UserTableRow from "./user-table-row";

type Props = {
  users: User[];
};
export default function UserTable({ users }: Props) {
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
