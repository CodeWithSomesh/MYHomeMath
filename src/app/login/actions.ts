'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  // Basic validation
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/login?error=missing-fields')
    return // Prevent further execution
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect(`/login?error=${error.message}`)
    return
  }

  revalidatePath(`${baseUrl}`, 'layout')
  redirect(`${baseUrl}`)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/login?error=missing-fields')
    return // Prevent further execution
  }

  // Add password validation
  if (password.length < 6) {
    redirect('/login?error=password-too-short')
    return // Prevent further execution
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    redirect(`/login?error=${error.message}`)
    return
  }

  // Redirect to confirmation page instead of home
  redirect('/login?message=login-by-clicking-link-sent-to-email')
}
