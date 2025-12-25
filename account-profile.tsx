"use client"

import { RefreshCw, Wallet, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function AccountProfile() {
  const router = useRouter()

  const handleLogout = () => {
    console.log("[v0] User logged out")
    router.push("/auth")
  }

  return (
    <div className="px-4 py-8">
      {/* User Avatar with Gradient Border */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-80" />
          <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <img src="/gaming-avatar.jpg" alt="User Avatar" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Greeting */}
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-500">Hi, Shihab</h2>

      {/* Available Balance */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-lg font-semibold text-foreground">Available Balance : 0 Tk</span>
        <button className="p-2 rounded-lg border border-border hover:bg-accent transition-colors">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Support Pin */}
        <div className="bg-background border-2 border-indigo-500 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-indigo-500 mb-2">102496</div>
          <div className="text-base font-semibold text-foreground">Support Pin</div>
        </div>

        {/* Weekly Spent */}
        <div className="bg-background border-2 border-indigo-500 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-indigo-500 mb-2">0 ৳</div>
          <div className="text-base font-semibold text-foreground">Weeklly Spent</div>
        </div>

        {/* Total Spent */}
        <div className="bg-background border-2 border-indigo-500 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-indigo-500 mb-2">0</div>
          <div className="text-base font-semibold text-foreground">Total Spent</div>
        </div>

        {/* Total Order */}
        <div className="bg-background border-2 border-indigo-500 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-indigo-500 mb-2">0</div>
          <div className="text-base font-semibold text-foreground">Total Order</div>
        </div>
      </div>

      {/* Account Information Section */}
      <div className="bg-background border border-border rounded-xl p-4">
        <div className="flex items-center gap-3 mb-4">
          <Wallet className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Account Information</h3>
        </div>

        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white gap-2 bg-transparent"
        >
          <LogOut className="w-4 h-4" />
          লগ আউট
        </Button>
      </div>
    </div>
  )
}
