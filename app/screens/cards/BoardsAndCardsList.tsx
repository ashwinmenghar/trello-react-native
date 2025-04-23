import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";
import { CardProps } from "../../types/card";
import CardItem from "./CardItem";
import AddCard from "./AddCard";
import { useRemoveListMutation } from "../../redux/services/ListApi";
import Loading from "../Loading";
import Error from "../Error";
import { getErrorMessage } from "../../helper";

const BoardsAndCardsList = ({
  cards,
  refetch,
}: {
  cards: CardProps;
  refetch: () => void;
}) => {
  const [removeList, { isLoading, error, isError }] = useRemoveListMutation();

  const handleDeleteBoardAndCardsList = async () => {
    const { data } = await removeList({ listId: cards.id });
    if (data) {
      refetch();
    }
  };

  return (
    <Card style={styles.container}>
      {isLoading && (
        <View style={styles.loadingAndErrorContainer}>
          <Loading />
        </View>
      )}

      {isError && (
        <View style={styles.loadingAndErrorContainer}>
          <Error error={getErrorMessage(error)} />
        </View>
      )}

      {!isLoading && !isError && (
        <Card.Content>
          <View style={styles.header}>
            <Text variant="titleSmall">{cards.name}</Text>
            <FontAwesome6
              name="trash"
              size={16}
              color="red"
              solid
              onPress={handleDeleteBoardAndCardsList}
            />
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
      )}
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
    marginTop: 15,
  },
  loadingAndErrorContainer: {
    marginTop: 50,
  },
});

export default BoardsAndCardsList;
