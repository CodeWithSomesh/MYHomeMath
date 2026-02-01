"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "../../utils/supabase/client"

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {
          router.replace('/login')
        }
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAuth()
  }, [router, supabase])

  if (isLoading) {
    return <div>Loading...</div> // You can replace this with a proper loading component
  }

  return <>{children}</>
}