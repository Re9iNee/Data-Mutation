import UserEditForm from "@/app/edit/edit-form";
import sql from "@/lib/db";

import { notFound } from "next/navigation";

export default async function EditUserPage({
  params,
}: {
  params: { id?: string };
}) {
  const id = params.id;
  if (!id) notFound();

  const user: any = (await sql`SELECT * FROM users WHERE id=${id}`)[0];

  return <UserEditForm previousData={user} />;
}
