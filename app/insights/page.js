import { PieChart, TrendingUp } from 'lucide-react';

export default function Insights() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Insights</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Analyze your spending patterns and trends.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
         <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm min-h-[400px] flex flex-col">
            <div className="flex items-center gap-2 mb-8">
               <PieChart className="w-5 h-5 text-zinc-500" />
               <h3 className="font-semibold">Spending by Category</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
               {/* Very basic CSS Pie Chart placeholder */}
               <div className="w-48 h-48 rounded-full border-[16px] border-zinc-100 dark:border-zinc-800 relative">
                  <div className="absolute inset-0 rounded-full border-[16px] border-emerald-500 border-t-transparent border-l-transparent -rotate-45" />
                  <div className="absolute inset-0 rounded-full border-[16px] border-blue-500 border-b-transparent border-r-transparent border-l-transparent rotate-45" />
               </div>
               <div className="flex flex-wrap gap-4 justify-center mt-6 text-sm text-zinc-500">
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Operations</div>
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Marketing</div>
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></div> Other</div>
               </div>
            </div>
         </div>
         <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm min-h-[400px] flex flex-col">
            <div className="flex items-center gap-2 mb-8">
               <TrendingUp className="w-5 h-5 text-zinc-500" />
               <h3 className="font-semibold">Monthly Cashflow</h3>
            </div>
            <div className="flex-1 flex items-end justify-between gap-2 pt-10">
               {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                 <div key={i} className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-md relative group">
                    <div 
                      className="absolute bottom-0 w-full bg-zinc-800 dark:bg-zinc-200 rounded-t-md transition-all group-hover:bg-emerald-500"
                      style={{ height: `${height}%` }}
                    />
                 </div>
               ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-zinc-500">
               <span>Apr</span>
               <span>May</span>
               <span>Jun</span>
               <span>Jul</span>
               <span>Aug</span>
               <span>Sep</span>
               <span>Oct</span>
            </div>
         </div>
      </div>
    </div>
  );
}
