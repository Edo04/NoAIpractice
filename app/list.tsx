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

export default function List() {
  const categories = useBudgetStore((state) => state.categories);
  const categoryList = categories.map((item) => (
    <CategoryItem
      key={item.category}
      category={item.category}
      budget={item.budget}
      expense={item.expense}
    />
  ));
  return (
    <View>
      <Text>一覧表示画面</Text>
      {categoryList}
    </View>
  );
}
