import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [goal, setGoal] = useState();
  const [listGoals, setListGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }
  function addGoalHandler() {
    setGoal("");
    setListGoals((listGoals) => [...listGoals, goal]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal!"
          value={goal}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.gaolsConatiner}>
        {listGoals.map((goal, index) => (
          <View style={styles.goalItem} key={index}>
            <Text style={{ color: "white" }}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  gaolsConatiner: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
  },
});
