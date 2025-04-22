import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { RootStackParamList } from "../../types/paramList";
import { Modal, StyleSheet, View } from "react-native";
import Loading from "../Loading";
import Error from "../Error";

function AddBoard({
  isLoading,
  error,
  handleCreateBoard,
}: {
  isLoading: boolean;
  error: any;
  handleCreateBoard: (value: string) => void;
}) {
  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <View>
      <Card style={styles.cardView} onPress={() => setModalVisible(true)}>
        <Card.Content>
          <Text variant="titleMedium">Create New Board</Text>
        </Card.Content>
      </Card>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.headerTitle}>Create board</Text>
            <TextInput
              label="Board title"
              value={text}
              onChangeText={(text) => setText(text)}
              style={styles.modalText}
              autoFocus={true}
            />
            <View style={styles.buttonAlign}>
              <Button
                mode="contained-tonal"
                onPress={() => {
                  setText("");
                  setModalVisible(!modalVisible);
                }}
              >
                Cancel
              </Button>
              <Button
                mode="elevated"
                onPress={() => {
                  text.length > 0 && setModalVisible(!modalVisible);
                  handleCreateBoard(text);
                  setText("");
                }}
                disabled={text.length === 0}
              >
                Save
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonAlign: {
    flexDirection: "row",
    gap: 10,
  },
  cardView: {
    margin: 10,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    width: 300,
  },
});

export default AddBoard;
