import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";
import { CardProps } from "../../types/card";
import CardItem from "./CardItem";
import AddCard from "./AddCard";

const BoardsAndCardsList = ({ cards }: { cards: CardProps }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.header}>
          <Text variant="titleSmall">{cards.name}</Text>
          <FontAwesome6 name="trash" size={16} color="red" solid />
        </View>

        <View>
          {cards?.cardData?.length > 0 && (
            <ScrollView nestedScrollEnabled>
              {cards.cardData.map((card) => (
                <CardItem cardData={card} key={card.id} />
              ))}
            </ScrollView>
          )}
          <AddCard />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default BoardsAndCardsList;
