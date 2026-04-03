# Finance Dashboard UI

This project is a clean, interactive finance dashboard built to fulfill the UI assignment core requirements. It leverages modern web development practices to construct a modular, responsive architecture.

## Features & Implementation

### 1. Dashboard Overview
- Contains statistical summary cards (`Total Balance`, `Income`, `Expenses`).
- Uses `recharts` for highly interactive Data Visualization.
- Implements `TransactionLineChart` for balance trends and `ExpensePieChart` for categorical expenditure breakdown.

### 2. Transactions Section
- Contains a dynamic `<TransactionsTable />` wrapper executing robust data sorting.
- **Search**: Fuzzy search capabilities by Category or string comparisons against Descriptions.
- **Filter**: Filter engine parsing absolute standard Types (`Income` or `Expense`).
- **Sort**: Clickable table columns dynamically sort Transactions chronologically by `Date` or absolute integers by `Amount`.

### 3. Basic Role Based Access Control (Local RBAC Simulation)
- The entire application wraps inside a custom `<AppProvider>` initializing a React Context state to synchronize Authorization permissions globally.
- Swapping the role inside the top `Navbar` immediately alerts all nested routes of changes without prop drilling.
- **Viewer**: Read-only tables and metrics.
- **Admin**: The UI dynamically redraws structural nodes, granting access to "Add Transaction", inline "Edit", and "Delete" tools.

### 4. Insights Section
- Instantiates logic modules dynamically calculating live metrics by aggregating `data/mockData.js` object loops:
  - **Top Expense**: Identifies the single highest categorical drain.
  - **Savings Rate**: Determines algorithmic net percentage of Income retained vs logic outflow.
  - **Net Cash Flow**: Evaluates final net-positive operational logic.
- Displays responsive visualizations using `recharts` mapping properties utilizing declarative `<BarChart />` and `<PieChart />` implementations.

## Tech Stack
- **Framework**: Next.js (App Router routing mapped, React 18 concurrent standards).
- **Styling**: Tailwind CSS (Fully responsive layout utility breakpoints, constrained zinc/emerald hex paletting, fully optimized styling rules).
- **Icons**: `lucide-react` component-based vectorized SVGs.
- **Data Visualization**: `recharts` composable logic handling wrapper containers.

## Getting Started

First, install the required dependencies:

```bash
npm install
```

Second, spin up the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to witness the layout. The application utilizes a hard-routed root intercept redirecting standard `/` requests instantly to the `/dashboard`.
