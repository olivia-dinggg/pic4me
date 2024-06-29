import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation';
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hurehvuiehhuiuhiuhiuhiuhuhuihuih.</Text>

      <Navigation/>
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