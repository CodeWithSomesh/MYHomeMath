"use server"

import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'
import { revalidatePath } from 'next/cache';

export async function logout() {
  const supabase = await createClient()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect(`/error`)
  }

  revalidatePath(`${baseUrl}/login`, 'layout')
  redirect(`${baseUrl}/login`)
}
