import React from "react";
import { Card, Text } from "react-native-paper";
import * as BoardType from "../../types/board";
import { Link, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/paramList";

const Board = ({ board }: { board: BoardType.Board }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Card
      style={{ margin: 10, padding: 10 }}
      onPress={() =>
        navigation.navigate("CardList", {
          boardId: board.id,
          title: board.name,
        })
      }
    >
      <Card.Content>
        <Text variant="titleLarge">{board.name}</Text>
      </Card.Content>
    </Card>
  );
};

export default Board;
