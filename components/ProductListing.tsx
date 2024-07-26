// REACT //
import React, { useEffect, useState } from "react";

// COMPONENTS //
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";

export default function ProductListScreen() {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const getProductsRequest = () => {
    const URL = "https://fakestoreapi.com/products";
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    getProductsRequest();
  }, []);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator color="green" size="large" />
      ) : error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={{ fontSize: 18, textAlign: "center" }}>
                {item.price}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
