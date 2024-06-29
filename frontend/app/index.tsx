import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function index({ userEmail, navigation }:any) {
  React.useEffect(() => {
    if (userEmail === '') {
      navigation.navigate('RegisterPage');
    }
  }, [userEmail]);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hurehvuiehhuiuhiuhiuhiuhuhuihuih.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
})