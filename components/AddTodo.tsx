// REACT //
import React, { useState } from "react";

// REACT NATIVE //
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

export default function AddTodo({ submitClick }) {
  const [text, setText] = useState("");
  const textChange = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={textChange}
      />
      <Button
        title="Add todo"
        color="coral"
        onPress={() => submitClick(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
