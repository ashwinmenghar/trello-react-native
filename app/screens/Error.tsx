import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const Error = ({ error }: { error: string }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="titleLarge" style={{ color: "red" }}>
        {error}
      </Text>
    </View>
  );
};

export default Error;
