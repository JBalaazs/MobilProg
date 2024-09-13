import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddDetailsScreen from "./screens/AddDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import ModifyScreen from "./screens/ModifyScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return(

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDetails" component={AddDetailsScreen}/>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Modify" component={ModifyScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}