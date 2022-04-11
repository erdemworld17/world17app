import React from "react";
import { StyleSheet, PixelRatio, Switch } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// NavBar
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
// Screens
import LoginPage from "./LoginPage";
import Aboutus from "./Aboutus";
import ContactUs from "./ContactUs";
import AltSirketler from "./AltSirketler";
import Yatırımfırsatları from "./Yatırımfırsatları";
import Referanslar from "./Referanslar";
import HomeScreen from "./HomeScreen";
import CalculatorScreen from "./CalculatorScreen";
// Stackler
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CalculateStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const ContactStack = createNativeStackNavigator();

// Router
function MainRouter() {
  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName={"Ana Sayfa"}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(32,151,190)",
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="Ana Sayfa"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={35} color="rgb(32,151,190)" />
            ),
          }}
        >
          {() => (
            <HomeStack.Navigator
              screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: HEADER_TITLE },
                headerStyle: { backgroundColor: "rgb(32,151,190)" },
              }}
            >
              <HomeStack.Screen name="World17 Group" component={HomeScreen} />
              <HomeStack.Screen name="Hakkımızda" component={Aboutus} />
              <HomeStack.Screen
                name="Alt Şirketlerimiz"
                component={AltSirketler}
              />
              <HomeStack.Screen
                name="Yatırım Fırsatları"
                component={Yatırımfırsatları}
              />
              <HomeStack.Screen name="Referanslar" component={Referanslar} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Hesap"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="calculator" size={25} color="rgb(32,151,190)" />
            ),
            tabBarLabel: "Hesap Makinesi",
          }}
        >
          {() => (
            <CalculateStack.Navigator
              screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: HEADER_TITLE },
                headerStyle: { backgroundColor: "rgb(32,151,190)" },
              }}
            >
              <CalculateStack.Screen name="Hesap Makinesi" component={CalculatorScreen} />
            </CalculateStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="CRM"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="user" size={25} color="rgb(32,151,190)" />
            ),
            tabBarLabel: "CRM Login",
          }}
        >
          {() => (
            <LoginStack.Navigator
              screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: HEADER_TITLE },
                headerStyle: { backgroundColor: "rgb(32,151,190)" },
              }}
            >
              <LoginStack.Screen name="CRM Login" component={LoginPage} />
            </LoginStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="contact"
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="phone" size={25} color="rgb(32,151,190)" />
            ),
            tabBarLabel: "İletişim",
          }}
        >
          {() => (
            <ContactStack.Navigator
              screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: HEADER_TITLE },
                headerStyle: { backgroundColor: "rgb(32,151,190)" },
              }}
            >
              <ContactStack.Screen name="İletişim" component={ContactUs} />
            </ContactStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//HEADER TITLE
var HEADER_TITLE = 22;

if (PixelRatio.get() == 2) {
  HEADER_TITLE = 35;
}
// Style
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "rgb(32,151,190)",
    justifyContent: "space-evenly",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "35%",
  },
  header: {
    fontSize: 35,
    fontStyle: "italic",
    color: "black",
  },

  card: {
    borderRadius: 10,
    elevation: 12,
    backgroundColor: "white",
    shadowColor: "rgb(53,35,84)",
    shadowOpacity: 50,
    shadowRadius: 2,
    width: "45%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainRouter;
