import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import Header from "@/app-example/components/Header";
import TodoCard from "@/app-example/components/TodoCard";
import ActionButton from "@/app-example/components/ActionButton";
import AddTodo from "@/app-example/components/AddTodo";

export interface todoData {
  title: string;
  isCompleted: boolean;
  time: any;
}
const todo = () => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState("");
  const [data, setData] = useState<todoData[]>([]);
  const getFormattedTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  };

  const onSubmit = () => {
    if (!todo) {
      Alert.alert("Warning!!", "Please Enter your todo list");
    }
    let finalData: todoData = {
      title: todo,
      isCompleted: false,
      time: getFormattedTime(),
    };
    setData([...data, finalData]);
    setTodo("");
    setOpen(false);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todoContainer}>
        <FlatList
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => (
            <Text style={styles.noData}>No Data Found</Text>
          )}
          data={data}
          renderItem={({ item }) => {
            return (
              <TodoCard
                title={item.title}
                time={item.time}
                isCompleted={item.isCompleted}
              />
            );
          }}
        />
      </View>
      <AddTodo
        isActive={open}
        onClose={() => setOpen(false)}
        value={todo}
        onChangeText={(e: any) => setTodo(e)}
        onPressSubmit={onSubmit}
      />
      <ActionButton onPress={() => setOpen(true)} />
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  todoContainer: {
    padding: 20,
    gap: 10,
  },
  noData: {
    textAlign: "center",
    fontSize: 20,
  },
});
