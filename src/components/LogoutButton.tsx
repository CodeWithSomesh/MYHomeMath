'use client'

import { Power } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { logout } from "@/app/logout/actions"


export default function LogoutButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="fixed md:text-lg cursor-pointer  text-white font-bold font-spaceGrotesk bottom-6 left-1/2 -translate-x-1/2 
            backdrop-blur-sm bg-red-500 rounded-full hover:bg-red-700 transition-all z-50 py-3 px-6">

            <div className="flex gap-2 items-center justify-center">
                <Power className="" />
                <p>Logout</p>
            </div>

        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl">Logout Confirmation</AlertDialogTitle>
          <AlertDialogDescription className="text-white opacity-85 text-md">
            Are you sure you want to log out?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-red-500 border-none hover:bg-red-400 hover:text-white font-bold">Cancel</AlertDialogCancel>
          <AlertDialogAction className=" hover:bg-teal-400 hover:text-white font-bold" onClick={logout} type="submit"> 
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

