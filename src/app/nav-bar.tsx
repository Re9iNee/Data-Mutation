"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { status, data } = useSession();

  return (
    <div className='inline-flex justify-between'>
      <h1 className='font-bold'>Data Mutation example</h1>
      <div className='inline-flex gap-4 justify-center items-center'>
        {status === "authenticated" ? (
          <>
            <h3 className=''>Hello! {data?.user?.name}</h3>
            <Button variant={"outline"} onClick={() => signOut()}>
              Log out
            </Button>
          </>
        ) : (
          <Button variant={"outline"} onClick={() => signIn()}>
            Log in
          </Button>
        )}
      </div>
    </div>
  );
}
