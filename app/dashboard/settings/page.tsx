import { UserButton } from "@clerk/nextjs";

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 max-w-2xl flex items-center gap-4">
        <div className="bg-white p-2 rounded-full">
            <UserButton />
        </div>
        <p className="text-gray-400 text-sm">Manage your security settings via Clerk.</p>
      </div>
    </div>
  );
}