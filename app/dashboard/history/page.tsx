import { Play } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Your History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-blue-500 transition">
          <div className="h-40 bg-zinc-800 flex items-center justify-center relative">
            <Play className="w-12 h-12 text-white/50 group-hover:text-white transition" />
          </div>
          <div className="p-4">
            <h3 className="font-bold">Top 10 Travel Tips</h3>
            <p className="text-sm text-gray-500">Generated 2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}