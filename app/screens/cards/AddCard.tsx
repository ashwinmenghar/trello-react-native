import React, { useState } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useCreateCardMutation } from "../../redux/services/cardApi";
import { FontAwesome6 } from "@expo/vector-icons";
import Loading from "../Loading";
import { getErrorMessage } from "../../helper";
import Error from "../Error";

const AddCard = ({
  refetch,
  listId,
}: {
  refetch: () => void;
  listId: string;
}) => {
  const [cardName, setCardName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [createCard, { isLoading, isError, error }] = useCreateCardMutation();

  const handleAddCard = async () => {
    const { data } = await createCard({ name: cardName, listId });
    if (data) {
      refetch();
      setIsVisible(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={getErrorMessage(error)} />;
  }

  return (
    <View>
      {isVisible ? (
        <View>
          <TextInput
            placeholder="Add a card"
            value={cardName}
            onChangeText={(text) => setCardName(text)}
            style={{ marginTop: 20 }}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Button
                mode="contained-tonal"
                disabled={isLoading}
                style={{ margin: 10 }}
                onPress={handleAddCard}
              >
                Add card
              </Button>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#DDDDDD",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}
              onPress={() => setIsVisible(false)}
            >
              <FontAwesome6 name="xmark" size={18} solid />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Button icon="plus" onPress={() => setIsVisible(true)}>
          Add a card
        </Button>
      )}
    </View>
  );
};

export default AddCard;
