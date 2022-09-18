import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import TaskList from './src/screens/TaskList';
import VoiceNotes from './src/screens/VoiceNotes';
import TasksList from './src/screens/TasksList';
import AddTask from './src/screens/AddTask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{title:"Dashboard"}} />
      <Stack.Screen name="TasksList" component={TasksList} options={{title:"Tasks List"}} />
      <Stack.Screen name="VoiceNotes" component={VoiceNotes} options={{title:"Voice Notes"}} />
      <Stack.Screen name="AddTask" component={AddTask} options={{title:"Add New Task"}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
