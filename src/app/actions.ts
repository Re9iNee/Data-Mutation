"use server";

import { sql } from "@vercel/postgres";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { User } from "./types/user";

import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function createUser(formData: FormData) {
  const parsedResult = userSchema.safeParse(Object.fromEntries(formData));

  if (!parsedResult.success) {
    return;
  }

  const { name, email, password } = parsedResult.data;
  const hashedPassword = await hash(password, 12);

  try {
    await sql<User>`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;
    console.log("Created a new user");
  } catch (e) {
    throw new Error(`Couldnt create a new user, ${e}`);
  }

  redirect("/");
}

export async function updateUser(id: string, formData: FormData) {
  const { name, email } = validateUpdateUserInputs(formData);

  try {
    await sql<User>`UPDATE users SET name=${name}, email=${email} WHERE id=${id}`;
  } catch (e) {
    throw new Error(`Couldnt update user with id ${id}, ${e}`);
  }

  redirect("/");
}

function validateUpdateUserInputs(formData: FormData): {
  name: string;
  email: string;
} {
  const name = formData.get("name");
  const email = formData.get("email");

  if (typeof name !== "string" || typeof email !== "string") {
    throw new Error("Invalid Inputs");
  }

  return { name, email };
}
