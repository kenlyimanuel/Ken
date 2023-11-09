import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Signup,
  Welcome,
  Home,
  Profile,
  Calculator,
  Aboutme,
  KonversiScreen,
  BmiScreen,
} from "./screens";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HalamanHome"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          tabBarIcon: () => (
            <Icon name="calculator" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="BmiCalculator"
        component={BmiScreen}
        options={{
          tabBarIcon: () => <Icon name="weight" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="KonfersiSuhu"
        component={KonversiScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="temperature-low" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="Aboutme"
        component={Aboutme}
        options={{
          tabBarIcon: () => <Icon name="male" size={25} color={"#1F41BB"} />,
        }}
      />
    </Tab.Navigator>
  );
}
