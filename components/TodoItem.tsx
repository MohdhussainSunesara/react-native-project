// REACT //
import React from "react";

// REACT NATIVE //
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

// PLUGINS //
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemtext}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
  itemtext: {
    marginLeft: 10,
  },
});
