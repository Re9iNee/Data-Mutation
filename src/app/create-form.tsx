import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  UserCircleIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { createUser } from "./actions";

export default function UserCreateForm() {
  return (
    <form action={createUser}>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* name input */}
        <div className='mb-4'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Choose a name
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Enter name'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
              <UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>
        {/* email input */}
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block text-sm font-medium'>
            Choose an email
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Enter email'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>
        {/* password input */}
        <div className='mb-4'>
          <label htmlFor='password' className='mb-2 block text-sm font-medium'>
            Choose a password
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='password'
                name='password'
                type='password'
                placeholder='Enter password'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
              <LockClosedIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/'
          className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Create User</Button>
      </div>
    </form>
  );
}
