import { sql } from "@vercel/postgres";
import { User } from "../types/user";
import { unstable_noStore as noStore } from "next/cache";

export async function getUsers(): Promise<User[]> {
  noStore();

  const users = (await sql<User>`SELECT * FROM users`).rows;
  return users;
}
