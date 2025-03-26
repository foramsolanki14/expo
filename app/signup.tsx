import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import MyButton from "@/app-example/components/MyButton";

const signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const onLogin = () => {
    if (!name || !pass || !cpass) {
      Alert.alert("Warning", "Please fill requriedField");
      return;
    }
    router.navigate("/login");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/register.jpg")}
        style={styles.img}
      />
      <View style={styles.main}>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          onChangeText={(e) => setName(e)}
        />
        <TextInput
          placeholder="Enter PassWord"
          style={styles.input}
          value={pass}
          onChangeText={(e) => setPass(e)}
        />
        <TextInput
          placeholder="Enter Confirm PassWord"
          style={styles.input}
          value={cpass}
          onChangeText={(e) => setCpass(e)}
        />

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
