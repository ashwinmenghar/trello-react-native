import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View, Text } from "react-native";
import Loading from "./Loading";
import Board from "./board/Board";
import * as BoardType from "../types/board";
import {
  useCreateBoardsMutation,
  useGetBoardsQuery,
} from "../redux/services/boardApi";
import AddBoard from "./board/AddBoard";
import Error from "./Error";

const BoardList = () => {
  const {
    data,
    error,
    isLoading,
    refetch,
  }: {
    data?: BoardType.Board[];
    error?: any;
    isLoading: boolean;
    refetch: () => void;
  } = useGetBoardsQuery();

  const [createBoard, { isLoading: isCreating, error: createError }] =
    useCreateBoardsMutation<{
      data: BoardType.Board;
      error: any;
      isLoading: boolean;
    }>();

  const handleCreateBoard = async (value: string) => {
    const result = await createBoard(value);
    if ("data" in result) {
      refetch();
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Error error={error} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && (
        <View>
          <AddBoard
            isLoading={isCreating}
            error={createError}
            handleCreateBoard={handleCreateBoard}
          />
          <FlatList
            data={data}
            keyExtractor={(board: BoardType.Board) => board.id.toString()}
            renderItem={({ item }) => <Board board={item} />}
          />
        </View>
      )}
    </View>
  );
};

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
  errorText: {
    color: "red",
    textAlign: "center",
    padding: 10,
  },
});

export default BoardList;
