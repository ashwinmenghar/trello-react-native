import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, View } from "react-native";
import Loading from "./Loading";
import Board from "./Board";
import * as BoardType from "../types/board";
import { useGetBoardsQuery } from "../redux/services/boardApi";

const BoardList = () => {
  const { data, error, isLoading } = useGetBoardsQuery();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      gap: 10,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      {!isLoading && !error && data && (
        <FlatList
          data={data}
          keyExtractor={(board: BoardType.Board) => board.id.toString()}
          renderItem={({ item }) => <Board board={item} />}
        />
      )}
    </View>
  );
};

export default BoardList;
