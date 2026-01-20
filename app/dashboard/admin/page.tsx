import { auth, currentUser } from "@clerk/nextjs/server";
import { ShieldAlert, Users, DollarSign, Activity, LayoutDashboard } from "lucide-react";
import { db } from "@/lib/db"; // 👈 Make sure yeh path sahi ho

export default async function AdminPage() {
  const { userId } = await auth();
  const user = await currentUser();

  // 🔒 SECURITY CHECK
  const MY_SECRET_ID = "user_37bWv9ZbFX5JqM8jiKP9IdDP21z"; 
  const isMatch = userId === MY_SECRET_ID;

  if (!isMatch) {
    return <AccessDeniedComponent userId={userId} />;
  }

  // 👇 REAL DATA FETCHING (Database Queries)
  // Hum parallel mein data fetch karenge taaki page fast load ho
  const [userCount, videoCount] = await Promise.all([
    db.user.count(),         // Total Users count karo
    db.video?.count() || 0,  // Total Videos (agar Video table hai toh)
  ]);

  // Agar Payment/Subscription table hai toh revenue bhi nikal sakte hain:
  // const subscriptionCount = await db.userSubscription.count({ where: { isValid: true }});

  return (
    <div className="p-8 text-white w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <LayoutDashboard className="text-blue-500" /> 
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-1">Real-time overview of Clivio AI.</p>
        </div>
        <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-medium animate-pulse">
          ● Live Data
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Card 1: TOTAL USERS */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Signed Up Users</p>
              {/* 👇 REAL DATA HERE */}
              <h3 className="text-3xl font-bold mt-2">{userCount}</h3>
            </div>
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Card 2: GENERATED VIDEOS (Example) */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Videos Created</p>
              {/* 👇 REAL DATA HERE */}
              <h3 className="text-3xl font-bold mt-2">{videoCount}</h3>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
              <Activity size={24} />
            </div>
          </div>
        </div>

        {/* Card 3: PLACEHOLDER (Revenue abhi calculate nahi kiya) */}
        <div className="bg-zinc-900 border border-white/10 p-6 rounded-xl opacity-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">Revenue (Coming Soon)</p>
              <h3 className="text-3xl font-bold mt-2">$0.00</h3>
            </div>
            <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
              <DollarSign size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-xl p-8">
        <h2 className="text-xl font-bold mb-4">Database Connection Status</h2>
        <p className="text-green-400">✅ Connected to Prisma. Data fetched successfully.</p>
      </div>
    </div>
  );
}

function AccessDeniedComponent({ userId }: { userId: string | null }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
      <ShieldAlert className="w-20 h-20 text-red-500 mb-4" />
      <h1 className="text-3xl font-bold text-white mb-2">Access Denied</h1>
      <p className="text-gray-400">You are not authorized.</p>
    </div>
  );
}