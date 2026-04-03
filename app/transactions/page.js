import TransactionsTable from '@/components/TransactionsTable';

export default function Transactions() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
          <p className="text-zinc-500 dark:text-zinc-400">View and manage your recent transactions.</p>
        </div>
      </div>
      <TransactionsTable />
    </div>
  );
}
