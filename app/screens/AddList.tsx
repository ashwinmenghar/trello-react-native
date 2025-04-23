import { useState } from "react";
import { Card, Button, TextInput } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";

import Loading from "./Loading";
import Error from "./Error";
import { useCreateListsMutation } from "../redux/services/ListApi";
import { getErrorMessage } from "../helper";

const AddList = ({
  setIsAddingList,
  boardId,
  refetch,
}: {
  setIsAddingList: (value: boolean) => void;
  boardId: string;
  refetch: () => void;
}) => {
  const [text, setText] = useState("");
  const [createList, { isLoading, isError, error }] = useCreateListsMutation();

  const handleAddList = async () => {
    if (!text.trim() || isLoading) return;

    const { data } = await createList({ name: text.trim(), boardId });
    if (data) {
      setText("");
      refetch();
      setIsAddingList(false);
    }
  };

  return (
    <Card style={{ width: 350 }}>
      {error && <Error error={getErrorMessage(error)} />}

      {isLoading && (
        <View style={{ height: 100 }}>
          <Loading />
        </View>
      )}

      {!isLoading && !isError && (
        <View style={{ marginTop: 25 }}>
          <Card.Content>
            <TextInput
              label={"Enter list name..."}
              value={text}
              onChangeText={setText}
              disabled={isLoading}
            />
          </Card.Content>

          <Card.Actions>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Button
                mode="contained-tonal"
                onPress={handleAddList}
                disabled={!text.trim() || isLoading}
              >
                Add list
              </Button>
              <Button
                mode="contained-tonal"
                onPress={() => setIsAddingList(false)}
                disabled={isLoading}
                style={{ margin: 10 }}
              >
                <FontAwesome6
                  name="xmark"
                  size={18}
                  solid
                  underlayColor="#DDDDDD"
                />
              </Button>
            </View>
          </Card.Actions>
        </View>
      )}
    </Card>
  );
};

export default AddList;
