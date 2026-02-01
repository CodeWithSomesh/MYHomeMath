import { type NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/middleware'
// AUTH DISABLED - import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)

  // AUTH DISABLED - App runs without authentication, no redirects
  // Get the pathname of the request
  // const pathname = request.nextUrl.pathname

  // Get session from response cookies
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return response.cookies.get(name)?.value
  //       },
  //     },
  //   }
  // )
  //
  // const { data: { user } } = await supabase.auth.getUser()
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // // If user is not logged in and trying to access protected route
  // if (!user && pathname === `${baseUrl}`) {
  //   const redirectUrl = new URL(`${baseUrl}/login`, request.url)
  //   return NextResponse.redirect(redirectUrl)
  // }
  //
  // // If user is logged in and trying to access login page
  // if (user && pathname === `${baseUrl}/login`) {
  //   const redirectUrl = new URL(`${baseUrl}`, request.url)
  //   return NextResponse.redirect(redirectUrl)
  // }

  return response
}

export const config = {
  matcher: [
    '/login',
    '/auth/callback',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}