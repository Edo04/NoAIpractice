import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useBudgetStore } from "../store/budgetStore";

export default function Index() {
  const categories = useBudgetStore((state) => state.categories);
  const totalBudget = categories.reduce((acc, item) => acc + item.budget, 0);
  const totalExpense = categories.reduce((acc, item) => acc + item.expense, 0);
  const balance = totalBudget - totalExpense;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24 }}>家計簿アプリへようこそ！</Text>
      <Link href="/add">予算を追加する</Link>
      <Text>今月の予算：{totalBudget.toLocaleString()}円</Text>
      <Text>今月の支出：{totalExpense.toLocaleString()}円</Text>
      <Text>今月の残高：{balance.toLocaleString()}円</Text>
      <Link href="/list">一覧画面へ</Link>
    </View>
  );
}
