import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import MyButton from "@/app-example/components/MyButton";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();
  const onRegister = () => {
    if (!name || !pass) {
      Alert.alert("warning", "Please requried filed");
      return;
    }
    router.navigate("/todo");
  };
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.img}
      />
      <View style={styles.main}>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          onChangeText={(e: any) => setName(e)}
        />
        <TextInput
          placeholder="Enter PassWord"
          style={styles.input}
          value={pass}
          onChangeText={(e: any) => setPass(e)}
        />

        <MyButton title={"login"} onPress={onRegister} />
      </View>
    </View>
  );
};

export default login;

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
