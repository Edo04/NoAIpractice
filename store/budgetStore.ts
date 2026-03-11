import { create } from "zustand";

type Category = {
  category: string;
  budget: number;
  expense: number;
};

type BudgetStore = {
  categories: Category[];
};

export const useBudgetStore = create<BudgetStore>()((set) => ({
  categories: [
    { category: "食費", budget: 30000, expense: 12000 },
    { category: "交通費", budget: 20000, expense: 2000 },
    { category: "固定支出", budget: 40000, expense: 24000 },
    { category: "その他", budget: 10000, expense: 3000 },
  ],
}));
