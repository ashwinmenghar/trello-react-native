import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const Error = ({ error }: { error: string }) => {
  return (
    <Text
      variant="titleLarge"
      style={{
        color: "red",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
      }}
    >
      {error}
    </Text>
  );
};

export default Error;
