"use server";

import { sql } from "@vercel/postgres";
import { User } from "./types/user";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

export async function createUser(formData: FormData) {
  const { name, email, password } = validateInputs(formData);

  const hashedPassword = await hash(password, 12);

  try {
    await sql<User>`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;
    console.log("Created a new user");
  } catch (e) {
    throw new Error("Couldnt create a new user");
  }

  redirect("/");
}

function validateInputs(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    throw new Error("Invalid Inputs");
  }

  return { name, email, password };
}
