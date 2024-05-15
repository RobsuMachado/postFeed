import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./src/pages/feed";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        title: "Feed",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};