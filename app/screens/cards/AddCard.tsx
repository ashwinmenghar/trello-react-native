import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const AddCard = () => {
  return (
    <View>
      <Button icon="plus" onPress={() => console.log("Pressed")}>
        Add a card
      </Button>
    </View>
  );
};

export default AddCard;
