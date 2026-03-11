import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useBudgetStore } from "../store/budgetStore";

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
  const categories = useBudgetStore((state) => state.categories);
  const totalBudget = categories.reduce((acc, item) => acc + item.budget, 0);
  const totalExpense = categories.reduce((acc, item) => acc + item.expense, 0);
  const balance = totalBudget - totalExpense;
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
      <Text>今月の残高：{balance.toLocaleString()}円</Text>
      <Link href="/list">一覧画面へ</Link>
    </View>
  );
}
