import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Welcome back! Here&apos;s an overview of your finances.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Balance</h3>
            <DollarSign className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-emerald-500 flex items-center mt-1">
             <ArrowUpRight className="h-3 w-3 mr-1" />+20.1% from last month
          </p>
        </div>
        {/* Card 2 */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Income</h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold">+$12,450.00</div>
          <p className="text-xs text-emerald-500 flex items-center mt-1">
             <ArrowUpRight className="h-3 w-3 mr-1" />+4% from last month
          </p>
        </div>
        {/* Card 3 */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Expenses</h3>
            <ArrowDownRight className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold">-$4,231.00</div>
          <p className="text-xs text-rose-500 flex items-center mt-1">
             <ArrowDownRight className="h-3 w-3 mr-1" />-2% from last month
          </p>
        </div>
        {/* Card 4 */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Active Cards</h3>
            <CreditCard className="h-4 w-4 text-zinc-500" />
          </div>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
             1 ending in 4242
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col min-h-[300px]">
           <h3 className="font-semibold mb-4">Overview</h3>
           <div className="flex-1 flex items-center justify-center">
             <div className="text-center space-y-2">
               <div className="h-32 w-64 border-b border-l border-zinc-200 dark:border-zinc-700 flex items-end px-2 space-x-4">
                  <div className="w-8 bg-zinc-800 dark:bg-zinc-200 rounded-t-sm h-[40%] animate-pulse"></div>
                  <div className="w-8 bg-zinc-800 dark:bg-zinc-200 rounded-t-sm h-[60%] animate-pulse"></div>
                  <div className="w-8 bg-zinc-800 dark:bg-zinc-200 rounded-t-sm h-[30%] animate-pulse"></div>
                  <div className="w-8 bg-zinc-800 dark:bg-zinc-200 rounded-t-sm h-[80%] animate-pulse"></div>
                  <div className="w-8 bg-zinc-800 dark:bg-zinc-200 rounded-t-sm h-[50%] animate-pulse"></div>
                  <div className="w-8 bg-emerald-500 rounded-t-sm h-[90%]"></div>
               </div>
               <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Monthly progress</p>
             </div>
           </div>
        </div>
        <div className="col-span-3 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
           <h3 className="font-semibold mb-4">Recent Activity</h3>
           <div className="space-y-4">
              <div className="flex items-center">
                 <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mr-3">
                    <DollarSign className="h-4 w-4" />
                 </div>
                 <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Subscription</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Spotify</p>
                 </div>
                 <div className="font-medium text-sm">-$12.99</div>
              </div>
              <div className="flex items-center">
                 <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mr-3">
                    <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                 </div>
                 <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Salary</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Tech Corp</p>
                 </div>
                 <div className="font-medium text-sm text-emerald-500">+$6,500.00</div>
              </div>
              <div className="flex items-center">
                 <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4" />
                 </div>
                 <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Groceries</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Whole Foods</p>
                 </div>
                 <div className="font-medium text-sm">-$142.50</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
