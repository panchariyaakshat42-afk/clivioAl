import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Dashboard Navbar */}
      <nav className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          Clivio Dashboard
        </h1>
        <UserButton />
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Studio!</h2>
        <p className="text-gray-400 mb-8">This is where the magic happens (Protected Page)</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Mock Feature 1 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-blue-500 cursor-pointer transition">
            <div className="h-10 w-10 bg-blue-900/30 text-blue-400 rounded-lg flex items-center justify-center mb-4 text-xl">📝</div>
            <h3 className="font-bold mb-2">Text to Video</h3>
            <p className="text-sm text-gray-500">Paste your script and generate.</p>
          </div>

          {/* Mock Feature 2 */}
          <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-purple-500 cursor-pointer transition">
            <div className="h-10 w-10 bg-purple-900/30 text-purple-400 rounded-lg flex items-center justify-center mb-4 text-xl">🎙️</div>
            <h3 className="font-bold mb-2">Voice Clone</h3>
            <p className="text-sm text-gray-500">Train a new AI voice model.</p>
          </div>
          
           {/* Mock Feature 3 */}
           <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-green-500 cursor-pointer transition">
            <div className="h-10 w-10 bg-green-900/30 text-green-400 rounded-lg flex items-center justify-center mb-4 text-xl">👤</div>
            <h3 className="font-bold mb-2">My Avatars</h3>
            <p className="text-sm text-gray-500">Manage your digital twins.</p>
          </div>
        </div>
      </div>
    </div>
  );
}