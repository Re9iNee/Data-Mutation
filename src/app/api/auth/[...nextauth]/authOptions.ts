import { compare } from "bcryptjs";

import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions, User } from "next-auth";
import { getUserByEmail, UserExtended } from "@/app/services/user.service";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          type: "email",
          label: "E-Mail",
          placeholder: "example@mail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user: any = await getUserByEmail(credentials.email);

        console.log(user);

        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
};
