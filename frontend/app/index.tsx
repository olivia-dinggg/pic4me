import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'; // Import Button from react-native
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Login from '@/components/pages/Login'; // Adjust the path as per your project structure

// Define the stack navigator
const Stack = createNativeStackNavigator();
type RootStackParamList = {
  Login: undefined;
};

// Define props type using NativeStackScreenProps
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

// Index component
const Index: React.FC<Props> = ({ navigation }) => {
  return (
    // <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        {/* Use onPress for button click */}
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </Stack.Navigator>
    // </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
})