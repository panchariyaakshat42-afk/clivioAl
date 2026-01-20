export default function BillingPage() {
  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Subscription Plan</h1>
      <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-2">Free Plan</h2>
        <p className="text-blue-200 mb-6">You are currently on the free tier.</p>
        <div className="bg-black/30 p-4 rounded-lg mb-6 flex justify-between items-center">
            <span>Credits Remaining</span>
            <span className="font-bold text-2xl">3</span>
        </div>
      </div>
    </div>
  );
}