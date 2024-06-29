import React from 'react';
import RegisterPage from './components/pages/RegisterPage';
import index from './index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  const [userEmail, setUserEmail] = React.useState('');


  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='RegisterPage'>
        {/* index is the home page */}
        <Stack.Screen name="RegisterPage" component={RegisterPage} initialParams={{userEmail: userEmail, setUserEmail:setUserEmail}} />
        <Stack.Screen name="index" component={index} initialParams={{userEmail: userEmail}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
