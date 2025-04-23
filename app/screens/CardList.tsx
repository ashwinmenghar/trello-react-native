import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useGetMergedBoardDataQuery } from "../redux/services/boardWithCardsApi";
import { Button, Text } from "react-native-paper";
import BoardsAndCardsList from "./cards/BoardsAndCardsList";
import Loading from "./Loading";
import { CardListRouteProp, BoardListProps } from "../types/card";
import AddList from "./AddList";
import Error from "./Error";
import { getErrorMessage } from "../helper";

const CardList = ({ route }: { route: CardListRouteProp }) => {
  const { boardId } = route.params;
  const [isAddingList, setIsAddingList] = useState<boolean>(false);

  const {
    data: boardLists,
    isLoading,
    error,
    refetch,
  } = useGetMergedBoardDataQuery(boardId);

  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      {isLoading && <Loading />}
      {error && <Error error={getErrorMessage(error)} />}

      {!isLoading && !error && boardLists && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          snapToInterval={310}
          snapToAlignment="start"
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
            }}
          >
            {boardLists &&
              boardLists.map((boardList) => (
                <BoardsAndCardsList
                  key={boardList.id}
                  boardList={boardList}
                  refetch={refetch}
                />
              ))}

            <View
              style={{
                marginTop: 10,
              }}
            >
              {isAddingList ? (
                <AddList
                  setIsAddingList={setIsAddingList}
                  boardId={boardId}
                  refetch={refetch}
                />
              ) : (
                <Button
                  icon="plus"
                  mode="elevated"
                  onPress={() => setIsAddingList(true)}
                >
                  Add another list
                </Button>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CardList;
