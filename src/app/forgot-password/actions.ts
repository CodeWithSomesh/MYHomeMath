"use server";

import { createClient } from '../../../utils/supabase/server';
import { redirect } from 'next/navigation';

export async function confirmReset(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${baseUrl}/reset-password`,
  });

  if (error) {
    // Redirect back to forgot-password page with error message
    return redirect(`${baseUrl}/forgot-password?message=${encodeURIComponent(error.message)}`);
  }

  // Redirect to confirm page with success message
  redirect(`${baseUrl}/confirm?message=Password Reset link has been sent to your email address`);
}
