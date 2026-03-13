import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useBudgetStore } from "../store/budgetStore";

export default function Add() {
  const addCategory = useBudgetStore((state) => state.addCategory);
  const [inputCategoryname, setInputCategoryname] = useState("");
  const [inputBudget, setInputBudget] = useState("");
  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, width: 200, padding: 8 }}
        placeholder="カテゴリー名を入力"
        onChangeText={(text) => setInputCategoryname(text)}
      />
      <TextInput
        style={{ borderWidth: 1, width: 200, padding: 8 }}
        keyboardType="number-pad"
        placeholder="予算額を入力"
        onChangeText={(text) => setInputBudget(text)}
      />
      <Button
        title="新しい予算を追加"
        onPress={() =>
          addCategory({
            category: inputCategoryname,
            budget: Number(inputBudget),
            expense: 0,
          })
        }
      />
    </View>
  );
}
