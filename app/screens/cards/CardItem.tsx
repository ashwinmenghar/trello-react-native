import React from "react";
import { View } from "react-native";
import { CardData } from "../../types/card";
import { Text } from "react-native-paper";

const CardItem = ({ cardData }: { cardData: CardData }) => {
  if (!cardData) return;

  return (
    <View
      style={{
        backgroundColor: "#e7e2e1",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <Text variant="bodyMedium" style={{ fontWeight: "500", marginLeft: 10 }}>
        {cardData.name}
      </Text>
    </View>
  );
};

export default CardItem;
