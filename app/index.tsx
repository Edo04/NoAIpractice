import { useState } from "react";
import { Button, Text, View } from "react-native";

function MoneyItem({ label, amount }: { label: string; amount: number }) {
  return (
    <Text>
      {label}：{amount.toLocaleString()}円
    </Text>
  );
}

export default function Index() {
  const [budget, setBudget] = useState(50000);
  const [expense, setExpense] = useState(12000);
  const balance = budget - expense;
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
      <Button title="新しい予算" onPress={() => setBudget(30000)} />
      <Button title="新しい支出" onPress={() => setExpense(5000)} />
    </View>
  );
}
