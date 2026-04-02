import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, PieChart as PieChartIcon } from 'lucide-react';
import SummaryCard from '@/components/SummaryCard';
import TransactionLineChart from '@/components/TransactionLineChart';
import ExpensePieChart from '@/components/ExpensePieChart';
import { transactionTrendData, expenseCategoryData } from '@/data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Welcome back! Here&apos;s an overview of your finances.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard 
          title="Total Balance" 
          amount="$45,231.89" 
          trend="+20.1% from last month" 
          trendDirection="up" 
          Icon={DollarSign} 
        />
        <SummaryCard 
          title="Income" 
          amount="+$12,450.00" 
          trend="+4% from last month" 
          trendDirection="up" 
          Icon={ArrowUpRight} 
        />
        <SummaryCard 
          title="Expenses" 
          amount="-$4,231.00" 
          trend="-2% from last month" 
          trendDirection="down" 
          Icon={ArrowDownRight} 
        />
        <SummaryCard 
          title="Active Cards" 
          amount="3" 
          Icon={CreditCard} 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col min-h-[350px]">
           <div className="flex items-center gap-2 mb-4">
               <ArrowUpRight className="w-5 h-5 text-zinc-500" />
               <h3 className="font-semibold text-zinc-900 dark:text-white">Transaction Trend</h3>
           </div>
           <div className="flex-1 -ml-4">
             <TransactionLineChart data={transactionTrendData} />
           </div>
        </div>
        
        <div className="col-span-3 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col min-h-[350px]">
           <div className="flex items-center gap-2 mb-4">
               <PieChartIcon className="w-5 h-5 text-zinc-500" />
               <h3 className="font-semibold text-zinc-900 dark:text-white">Expense Categories</h3>
           </div>
           <div className="flex-1">
             <ExpensePieChart data={expenseCategoryData} />
           </div>
        </div>
      </div>
    </div>
  );
}
