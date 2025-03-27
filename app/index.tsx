import { View, StyleSheet, Text } from "react-native";
import React from "react";
import MyButton from "@/app-example/components/MyButton";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const onContine = () => {
    router.navigate("/signup");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <MyButton title={"Contine"} onPress={onContine} />
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
