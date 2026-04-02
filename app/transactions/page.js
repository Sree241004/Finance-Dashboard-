export default function Transactions() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
          <p className="text-zinc-500 dark:text-zinc-400">View and manage your recent transactions.</p>
        </div>
        <button className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
          Download CSV
        </button>
      </div>

      <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left">
              <thead className="text-xs text-zinc-500 uppercase bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                 <tr>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap">Description</th>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap">Date</th>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap">Status</th>
                    <th scope="col" className="px-6 py-4 text-right whitespace-nowrap">Amount</th>
                 </tr>
              </thead>
              <tbody>
                 <tr className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">Apple Store</td>
                    <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">Oct 24, 2026</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span></td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">-$999.00</td>
                 </tr>
                 <tr className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">Stripe Payout</td>
                    <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">Oct 22, 2026</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span></td>
                    <td className="px-6 py-4 text-right text-emerald-500 font-medium whitespace-nowrap">+$2,450.00</td>
                 </tr>
                 <tr className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">AWS Services</td>
                    <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">Oct 21, 2026</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 text-xs font-medium px-2.5 py-0.5 rounded">Pending</span></td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">-$124.50</td>
                 </tr>
                 <tr className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">Whole Foods</td>
                    <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">Oct 20, 2026</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span></td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">-$142.50</td>
                 </tr>
                 <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white whitespace-nowrap">Uber</td>
                    <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">Oct 19, 2026</td>
                    <td className="px-6 py-4 whitespace-nowrap"><span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span></td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">-$24.00</td>
                 </tr>
              </tbody>
           </table>
         </div>
      </div>
    </div>
  );
}
