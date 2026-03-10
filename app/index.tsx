import { useState } from "react";
import { Text, View } from "react-native";

function MoneyItem({ label, amount }: { label: string; amount: number }) {
  return (
    <Text>
      {label}：{amount.toLocaleString()}円
    </Text>
  );
}

function CategoryItem({
  category,
  budget,
  expense,
}: {
  category: string;
  budget: number;
  expense: number;
}) {
  return (
    <View>
      <Text>{category}</Text>
      <Text>今月の予算：{budget.toLocaleString()}円</Text>
      <Text>今月の支出：{expense.toLocaleString()}円</Text>
    </View>
  );
}

export default function Index() {
  const [categories, setCategories] = useState([
    { category: "食費", budget: 30000, expense: 12000 },
    { category: "交通費", budget: 20000, expense: 2000 },
    { category: "固定支出", budget: 40000, expense: 24000 },
    { category: "その他", budget: 10000, expense: 3000 },
  ]);
  const totalBudget = categories.reduce((acc, item) => acc + item.budget, 0);
  const totalExpense = categories.reduce((acc, item) => acc + item.expense, 0);
  const balance = totalBudget - totalExpense;
  const [inputBudget, setInputBudget] = useState("");
  const [inputExpense, setInputExpense] = useState("");
  const categoryList = categories.map((item) => (
    <CategoryItem
      key={item.category}
      category={item.category}
      budget={item.budget}
      expense={item.expense}
    />
  ));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>家計簿アプリへようこそ！</Text>
      {categoryList}
    </View>
  );
}
