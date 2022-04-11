import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//--------------- Screens
import OnboardingScreen from "./components/OnboardingScreen";
import MainRouter from "./src/MainRouter";
//*************** Screens
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(false);
      AsyncStorage.setItem("isAppFirstLaunched", "true");
    } else {
      setIsAppFirstLaunched(true);
    }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="MainRouter" component={MainRouter} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
