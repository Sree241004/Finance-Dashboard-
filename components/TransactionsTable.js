"use client";
import { useState, useMemo } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Search, Filter, ArrowUpDown, Edit, Trash2, Plus, Inbox, CheckCircle2 } from 'lucide-react';
import { transactionsData } from '@/data/mockData';

export default function TransactionsTable() {
  const { role } = useAppContext();
  const [transactions, setTransactions] = useState(transactionsData);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortParam, setSortParam] = useState({ key: 'date', direction: 'desc' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTxn, setEditingTxn] = useState(null);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    description: '',
    amount: '',
    category: 'Other',
    type: 'expense'
  });
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortParam.key === key && sortParam.direction === 'asc') direction = 'desc';
    setSortParam({ key, direction });
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...transactions];

    if (filter !== 'all') {
      result = result.filter(t => t.type === filter);
    }

    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(t => 
        t.category.toLowerCase().includes(lowerSearch) || 
        t.description.toLowerCase().includes(lowerSearch)
      );
    }

    result.sort((a, b) => {
      if (sortParam.key === 'amount') {
        const valA = Math.abs(a.amount);
        const valB = Math.abs(b.amount);
        return sortParam.direction === 'asc' ? valA - valB : valB - valA;
      }
      if (sortParam.key === 'date') {
        const valA = new Date(a.date).getTime();
        const valB = new Date(b.date).getTime();
        return sortParam.direction === 'asc' ? valA - valB : valB - valA;
      }
      return 0;
    });

    return result;
  }, [search, filter, sortParam, transactions]);

  const handleDeleteClick = (id) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = () => {
    setTransactions(transactions.filter(t => t.id !== deleteConfirmId));
    setDeleteConfirmId(null);
    showToast('Transaction deleted successfully');
  };

  const handleEdit = (txn) => {
    setEditingTxn(txn.id);
    setFormData({
      date: txn.date,
      description: txn.description,
      amount: Math.abs(txn.amount).toString(),
      category: txn.category,
      type: txn.type
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingTxn(null);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      description: '',
      amount: '',
      category: 'Other',
      type: 'expense'
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountVal = parseFloat(formData.amount);
    const finalAmount = formData.type === 'expense' ? -Math.abs(amountVal) : Math.abs(amountVal);
    
    if (editingTxn) {
      setTransactions(transactions.map(t => t.id === editingTxn ? { ...t, ...formData, amount: finalAmount } : t));
      showToast('Transaction updated successfully');
    } else {
      const newTxn = {
        id: Date.now().toString(),
        ...formData,
        amount: finalAmount
      };
      setTransactions([newTxn, ...transactions]);
      showToast('Transaction added successfully');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-500" />
            </div>
            <input 
              type="text" 
              placeholder="Search category or desc..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-zinc-500 hidden sm:block" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-auto border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-colors cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        
        {role === 'Admin' && (
          <button onClick={handleAdd} className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            Add Transaction
          </button>
        )}
      </div>

      <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left">
              <thead className="text-xs text-zinc-500 uppercase bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700">
                 <tr>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors select-none" onClick={() => handleSort('date')}>
                      <div className="flex items-center gap-1">Date <ArrowUpDown className="h-3 w-3" /></div>
                    </th>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap">Description</th>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap">Category</th>
                    <th scope="col" className="px-6 py-4 whitespace-nowrap">Type</th>
                    <th scope="col" className="px-6 py-4 text-right whitespace-nowrap cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors select-none" onClick={() => handleSort('amount')}>
                      <div className="flex items-center justify-end gap-1">Amount <ArrowUpDown className="h-3 w-3" /></div>
                    </th>
                    {role === 'Admin' && <th scope="col" className="px-6 py-4 text-right whitespace-nowrap">Actions</th>}
                 </tr>
              </thead>
              <tbody>
                {filteredAndSorted.length > 0 ? (
                  filteredAndSorted.map((txn, index) => (
                   <tr key={txn.id} className={`border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors ${index === filteredAndSorted.length - 1 ? 'border-none' : ''}`}>
                      <td className="px-6 py-4 text-zinc-500 whitespace-nowrap">{new Date(txn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                      <td className="px-6 py-4 font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap">{txn.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 text-xs font-medium px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                          {txn.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {txn.type === 'income' ? (
                          <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded">Income</span>
                        ) : (
                          <span className="bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 text-xs font-medium px-2.5 py-0.5 rounded">Expense</span>
                        )}
                      </td>
                      <td className={`px-6 py-4 text-right font-medium whitespace-nowrap ${txn.amount > 0 ? 'text-emerald-500' : ''}`}>
                        {txn.amount > 0 ? '+' : ''}${Math.abs(txn.amount).toFixed(2)}
                      </td>
                      {role === 'Admin' && (
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <button onClick={() => handleEdit(txn)} className="group relative text-zinc-500 hover:text-blue-500 transition-all hover:scale-110 active:scale-95 p-1" aria-label="Edit">
                            <Edit className="h-4 w-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Edit</span>
                          </button>
                          <button onClick={() => handleDeleteClick(txn.id)} className="group relative text-zinc-500 hover:text-rose-500 transition-all hover:scale-110 active:scale-95 p-1 ml-2" aria-label="Delete">
                            <Trash2 className="h-4 w-4" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Delete</span>
                          </button>
                        </td>
                      )}
                   </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={role === 'Admin' ? 6 : 5} className="px-6 py-16 text-center border-none">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                          <Inbox className="h-6 w-6 text-zinc-400" />
                        </div>
                        <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">No transactions found</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">We couldn't find anything matching your criteria.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
           </table>
         </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-md shadow-xl border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
              {editingTxn ? 'Edit Transaction' : 'Add Transaction'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Date</label>
                <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Description</label>
                <input type="text" required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100" placeholder="e.g. Apple Store" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Amount</label>
                  <input type="number" step="0.01" min="0" required value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} className="w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100" placeholder="0.00" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Type</label>
                  <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100">
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">Category</label>
                <input type="text" required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100" placeholder="e.g. Food, Software" />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  {editingTxn ? 'Save Changes' : 'Add Transaction'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setDeleteConfirmId(null)}></div>
          <div className="relative bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-sm shadow-xl border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Delete Transaction</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Are you sure you want to delete this transaction? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteConfirmId(null)} className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">Cancel</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-rose-500 text-white rounded-md text-sm font-medium hover:bg-rose-600 transition-colors shadow-sm">Delete</button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="flex items-center gap-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-4 py-3 rounded-lg shadow-lg text-sm font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 dark:text-emerald-500" />
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
}
