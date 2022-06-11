import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function VaccineItem({ item }) {
  const { display, code } = item;

  return (
    <View
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 8,
        marginBottom: 8,
      }}
    >
      <Text style={{ fontSize: 17, paddingBottom: 8 }}>Name: {display}</Text>
      <Text>Number: {code}</Text>
    </View>
  );
}
