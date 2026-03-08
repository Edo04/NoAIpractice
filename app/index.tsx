import { Text, View } from "react-native";

export default function Index() {
  let budget = 50000;
  let expense = 12000;
  let balance = budget - expense;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>家計簿アプリへようこそ！</Text>
      <Text>今月の予算：{budget.toLocaleString()}円</Text>
      <Text>現在の支出：{expense.toLocaleString()}円</Text>
      <Text>今月の予算残高：{balance.toLocaleString()}円</Text>
    </View>
  );
}
