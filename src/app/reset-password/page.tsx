import { createClient } from '../../../utils/supabase/server';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: Promise<{
    message?: string;
    code?: string;
  }>;
}

export default async function ResetPassword({
  searchParams,
}: PageProps) {
  const supabase = await createClient();
  const params = await searchParams;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect(`${baseUrl}`);
  }

  const message = params?.message || '';
  const code = params?.code || '';

  const resetPassword = async (formData: FormData) => {
    'use server';

    // Get the code from the formData
    const code = formData.get('code') as string;
    const supabase = await createClient();
    const password = formData.get('password') as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (password !== confirmPassword) {
      return redirect(`${baseUrl}/reset-password?message=Passwords do not match&code=${code}`)
    }
    
    if (!code) {
      return redirect(`${baseUrl}/reset-password?message=Invalid reset link`);
    }
  
    // First, verify the reset code is valid
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (exchangeError) {
      console.error('Exchange error:', exchangeError);
      return redirect(`${baseUrl}/reset-password?message=Unable to reset password. Link expired!`);
    }
  
    // If code is valid, update the password
    const { error: updateError } = await supabase.auth.updateUser({ password });
    
    if (updateError) {
      console.error('Update error:', updateError);
      return redirect(`${baseUrl}/reset-password?message=Unable to reset password. Try again!&code=${code}`);
    }
  
    // Sign out user
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      // Continue even if sign out fails
    }
    
    // Wait a brief moment to ensure sign out is complete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return redirect(`${baseUrl}/login?message=Your password has been reset successfully. You can Sign In now.`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-center text-5xl font-extrabold font-spaceGrotesk tracking-tight text-gray-900">
            Home Finance Malaysia
          </h2>
          <p className="mt-3 text-center text-md text-gray-600">
            Please enter your new password
          </p>
        </div>
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={resetPassword}
        >
          <input type="hidden" name="code" value={code} />
          <label className="text-md" htmlFor="password">
            New Password
          </label>
          <input
            className="block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md mt-4" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            className="block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-blue-500"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button type='submit' className="flex w-full mt-4 justify-center rounded-md bg-teal-500 px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Reset
          </button>

          {message && (
            <p className="mt-4 p-4 text-red-500 italic capitalize font-bold text-center">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
