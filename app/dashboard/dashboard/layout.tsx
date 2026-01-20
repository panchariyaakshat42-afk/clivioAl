import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"; // 👈 New Import
import Link from "next/link";
import { 
  LayoutDashboard, 
  Video, 
  History, 
  CreditCard, 
  Settings,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. GET THE LOGGED IN USER
  const { userId } = await auth();

  // 2. CHECK IF IT IS YOU
  const isAdmin = userId === "user_37bWv9ZbFX5JqM8jiKP9IdDP21z"; // ✅ Your Real ID

  return (
    <div className="flex h-screen bg-black text-white">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 border-r border-white/10 flex flex-col shrink-0 bg-zinc-950">
        <div className="p-6 flex items-center gap-2 border-b border-white/10 h-16">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Video className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">Clivio</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium bg-zinc-900 rounded-lg border border-white/5 text-white">
            <LayoutDashboard className="w-5 h-5 text-blue-500" />
            Overview
          </Link>

          <Link href="/dashboard/create" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors">
            <Video className="w-5 h-5" />
            Create Video
          </Link>

          <Link href="/dashboard/showcase" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors">
            <Sparkles className="w-5 h-5 text-orange-500" />
            Showcase
          </Link>

          <Link href="/dashboard/history" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors">
            <History className="w-5 h-5" />
            History
          </Link>

          <Link href="/dashboard/billing" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors">
            <CreditCard className="w-5 h-5" />
            Billing
          </Link>

          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>

          {/* 3. ONLY SHOW THIS IF ADMIN IS TRUE */}
          {isAdmin && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="px-4 text-xs font-bold text-gray-500 mb-2 uppercase">Admin Zone</p>
              <Link href="/dashboard/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/10 rounded-lg transition-colors">
                <ShieldCheck className="w-5 h-5" />
                Admin Panel
              </Link>
            </div>
          )}

        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-2">
            <UserButton />
            <div className="text-xs">
              <p className="text-white font-medium">My Account</p>
              <p className="text-gray-500">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-black p-4">
        {children}
      </main>
    </div>
  );
}