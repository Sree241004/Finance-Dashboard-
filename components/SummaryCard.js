import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function SummaryCard({ title, amount, trend, trendDirection, Icon, iconBackground }) {
  const isPositive = trendDirection === 'up';

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</h3>
        {Icon && <Icon className="h-4 w-4 text-zinc-500" />}
      </div>
      <div className="text-2xl font-bold">{amount}</div>
      {trend && (
        <p className={`text-xs flex items-center mt-1 ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isPositive ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
          {trend}
        </p>
      )}
    </div>
  );
}
