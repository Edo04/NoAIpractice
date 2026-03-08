import { Text, View } from "react-native";
function MoneyItem({ label, amount }: { label: string; amount: number }) {
  return (
    <Text>
      {label}：{amount.toLocaleString()}円
    </Text>
  );
}

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
      <Text style={{ fontSize: 24 }}>家計簿アプリへようこそ！</Text>
      <MoneyItem label="今月の予算" amount={budget} />
      <MoneyItem label="現在の支出" amount={expense} />
      <MoneyItem label="今月の予算残高" amount={balance} />
    </View>
  );
}
