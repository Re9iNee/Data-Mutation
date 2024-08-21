import UserEditForm from "@/app/edit-form";
import { User } from "@/app/types/user";
import { sql } from "@vercel/postgres";
import { notFound } from "next/navigation";
import React from "react";

export default async function EditUserPage({
  params,
}: {
  params: { id?: string };
}) {
  const id = params.id;
  if (!id) notFound();

  const user = await sql<User>`SELECT * FROM users WHERE id=${id}`;

  return <UserEditForm previousData={user.rows[0]} />;
}
