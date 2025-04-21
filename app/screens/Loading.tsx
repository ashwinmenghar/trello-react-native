import * as React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Loading = () => (
  <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
    <ActivityIndicator animating={true} color={MD2Colors.red800} size="large" />
  </SafeAreaView>
);

export default Loading;
