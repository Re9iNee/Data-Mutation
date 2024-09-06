import sql from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  noStore();

  const users: User[] = await sql`SELECT * FROM users`;

  return users;
}

export type UserExtended = User & { password: string };

export async function getUserByEmail(
  email: string
): Promise<UserExtended | undefined> {
  try {
    const user: any = await sql`SELECT * FROM users WHERE email = ${email}`;

    return user[0];
  } catch (e) {
    console.error(e);
  }
}
