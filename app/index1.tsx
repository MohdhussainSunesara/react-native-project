// REACT //
import React from "react";

// REACT NATIVE //
import { StyleSheet } from "react-native";

// PLUGINS //
import { SafeAreaView } from "react-native-safe-area-context";

// COMPONENTS //
import ProductListScreen from "@/components/ProductListing";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {},
  list: {},
});
