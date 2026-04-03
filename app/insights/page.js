"use client";
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, DollarSign } from 'lucide-react';
import { transactionsData, transactionTrendData } from '@/data/mockData';
import ExpensePieChart from '@/components/ExpensePieChart';
import { expenseCategoryData } from '@/data/mockData';

export default function Insights() {
  const insights = useMemo(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    const categoryTotals = {};

    transactionsData.forEach(t => {
      const amt = Math.abs(t.amount);
      if (t.type === 'income') {
        totalIncome += amt;
      } else {
        totalExpense += amt;
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + amt;
      }
    });

    let highestCategory = 'None';
    let highestAmount = 0;
    for (const [cat, amt] of Object.entries(categoryTotals)) {
      if (amt > highestAmount) {
        highestAmount = amt;
        highestCategory = cat;
      }
    }

    const savingsRate = totalIncome > 0 ? (((totalIncome - totalExpense) / totalIncome) * 100).toFixed(1) : 0;

    return { totalIncome, totalExpense, highestCategory, highestAmount, savingsRate };
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Insights</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Analyze your spending patterns and trends.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
           <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-lg"><AlertCircle size={20} /></div>
             <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">Top Expense</h3>
           </div>
           <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-4">{insights.highestCategory}</p>
           <p className="text-sm text-zinc-500 mt-1">${insights.highestAmount.toFixed(2)} spent overall</p>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
           <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg"><TrendingUp size={20} /></div>
             <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">Savings Rate</h3>
           </div>
           <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-4">{insights.savingsRate}%</p>
           <p className="text-sm text-zinc-500 mt-1">Income retained vs spent</p>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
           <div className="flex items-center gap-3 mb-2">
             <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg"><DollarSign size={20} /></div>
             <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">Cash Flow</h3>
           </div>
           <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-4">
              ${(insights.totalIncome - insights.totalExpense).toFixed(2)}
           </p>
           <p className="text-sm text-zinc-500 mt-1">Net positive operations</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
         <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col min-h-[400px]">
            <h3 className="font-semibold mb-6">Monthly Cashflow</h3>
            <div className="flex-1">
               <ResponsiveContainer width="100%" height="100%" minHeight={300} minWidth={1}>
                  <BarChart data={transactionTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.2} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#71717a' }} tickFormatter={(value) => `$${value}`} />
                    <Tooltip contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: 'none', color: '#fff' }} itemStyle={{ color: '#fff' }} cursor={{ fill: '#52525b', opacity: 0.1 }} />
                    <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col min-h-[400px]">
            <h3 className="font-semibold mb-6">Spending Breakdown</h3>
            <div className="flex-1">
              <ExpensePieChart data={expenseCategoryData} />
            </div>
         </div>
      </div>
    </div>
  );
}
