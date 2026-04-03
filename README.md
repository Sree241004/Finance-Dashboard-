# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built using Next.js and Tailwind CSS.  
This project demonstrates frontend development skills including UI design, state management, and data visualization.

---

## ✨ Features

### 📊 Dashboard Overview
- Summary cards: **Total Balance, Income, Expenses**
- Line chart for transaction trends
- Pie chart for expense categories

### 📋 Transactions Section
- View all transactions with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)
- Features:
  - 🔍 Search (by category/description)
  - 🔽 Filter (Income / Expense)
  - 🔃 Sort (by date or amount)

### 🔐 Role-Based UI (Frontend Simulation)
- Switch roles using dropdown:
  - **Viewer** → Read-only access
  - **Admin** → Can add, edit, and delete transactions
- UI updates instantly using global state (Context API)

### 💡 Insights Section
- Highest spending category
- Savings rate calculation
- Net cash flow summary
- Visual charts for better understanding

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Charts:** Recharts
- **Icons:** lucide-react

---

## ⚙️ Getting Started

Install dependencies:

```bash
npm install