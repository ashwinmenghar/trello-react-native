import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useGetMergedBoardDataQuery } from "../redux/services/boardWithCardsApi";
import { Button, Text } from "react-native-paper";
import BoardsAndCardsList from "./cards/BoardsAndCardsList";
import Loading from "./Loading";
import { CardListRouteProp } from "../types/card";
import AddList from "./AddList";

const CardList = ({ route }: { route: CardListRouteProp }) => {
  const { boardId } = route.params;
  const { data: cards, isLoading, error } = useGetMergedBoardDataQuery(boardId);

  const [isAddingList, setIsAddingList] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      {isLoading && <Loading />}
      {error && (
        <Text>
          {typeof error === "string"
            ? error
            : "An error occurred. Please try again later."}
        </Text>
      )}

      {!isLoading && !error && cards && (
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
            {cards &&
              cards.map((card) => (
                <BoardsAndCardsList key={card.id} cards={card} />
              ))}

            <View
              style={{
                marginTop: 10,
              }}
            >
              {isAddingList ? (
                <AddList setIsAddingList={setIsAddingList} />
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
