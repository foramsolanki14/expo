import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import MyButton from "@/app-example/components/MyButton";

const signup = () => {
  const router = useRouter();
  const onLogin = () => {
    router.navigate("/todo");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/register.jpg")}
        style={styles.img}
      />
      <View style={styles.main}>
        <TextInput placeholder="Enter Name" style={styles.input} />
        <TextInput placeholder="Enter PassWord" style={styles.input} />
        <TextInput placeholder="Enter Confirm PassWord" style={styles.input} />

        <MyButton title={"SignUp"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  img: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
  },
  main: {
    padding: 15,
    gap: 15,
  },
});
