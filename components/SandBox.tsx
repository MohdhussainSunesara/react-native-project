// REACT //
import React from "react";

// REACT NATIVE //
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function SandBox() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
});
