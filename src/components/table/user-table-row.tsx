import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { User } from "./types/user";

type Props = {
  user: User;
};
export default function UserTableRow({ user }: Props) {
  return (
    <TableRow>
      <TableCell className='font-thin text-xs'>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className='text-right'>
        <Button type='button' variant={"secondary"} asChild>
          <Link href={`/edit/${user.id}`}>Edit</Link>
        </Button>
      </TableCell>
    </TableRow>
  );
}
