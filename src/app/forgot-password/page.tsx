"use server";

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { confirmReset } from './actions';
import { createClient } from '../../../utils/supabase/server';

interface PageProps {
  searchParams: Promise<{ message: string }>;
}

export default async function ForgotPassword({
  searchParams,
}: PageProps) {
  // Check session logic
  const supabase = await createClient();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  const params = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-center text-5xl font-extrabold font-spaceGrotesk tracking-tight text-gray-900">
            Home Finance Malaysia
          </h2>
          <p className="mt-3 text-center text-md text-gray-600">
            Please reset your password
          </p>
        </div>
        <form className="mt-8 space-y-6" action={confirmReset}>
            <div className="space-y-4 rounded-md">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-blue-500"
                    />
                    
                    <button
                    formAction={confirmReset}
                    className="flex w-full mt-4 justify-center rounded-md bg-teal-500 px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                    Confirm
                    </button>

                    {params?.message && (
                        <p className="mt-4 p-4 text-red-500 italic capitalize font-bold text-center">
                            {params.message}
                        </p>
                    )}

                    <Link href={`${baseUrl}/login`} className="opacity-80">
                        <p className="text-center underline capitalize hover:text-teal-500 mt-4">Remember your password? Sign in</p>
                    </Link>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
}
