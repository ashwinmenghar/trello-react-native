import { useState } from "react";
import { Card, Button, TextInput } from "react-native-paper";
import { FontAwesome6 } from "@expo/vector-icons";

const AddList = ({
  setIsAddingList,
}: {
  setIsAddingList: (value: boolean) => void;
}) => {
  const [text, setText] = useState("");

  return (
    <Card style={{ width: 350 }}>
      <Card.Content>
        <TextInput value={text} onChangeText={(text) => setText(text)} />
      </Card.Content>

      <Card.Actions>
        <Button mode="text">Add</Button>
        <FontAwesome6
          name="xmark"
          size={18}
          solid
          style={{ margin: 10, padding: 5 }}
          onPress={() => setIsAddingList(false)}
          onPressIn={() => {/* Add background color change on press */}}
          pressRetentionOffset={{ top: 10, left: 10, bottom: 10, right: 10 }}
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
          underlayColor="#DDDDDD"
        />
      </Card.Actions>
    </Card>
  );
};

export default AddList;
