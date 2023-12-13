
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import { RootStackParamList } from '../types/navigation';
import StartScreen from '../screens/StartScreen';
import SignUpScreen from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilScreen from '../screens/ProfilScreen';
import MusicScreen from '../screens/MusicScreen';
import CategorieScreen from '../screens/CategorieScreen';
import { themeColors } from '../themes';
import * as Icon from "react-native-feather";


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarActiveTintColor: themeColors.primaryColor(1),
        tabBarStyle: {
          height: 80,
          // width: '90%',
          // marginHorizontal: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#fff",
          paddingBottom: 10,
          // marginBottom: 20,
          // borderRadius: 15,
          shadowColor: themeColors.primaryColor(1),
          shadowOpacity: .8,
          shadowRadius: 60
        }
      }}

    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ color }) => {
            return <Icon.Home stroke={color} strokeWidth={3} fill="#fff" height={22} width={22} />
          }
        }}
      />
      <Tab.Screen name="Category" component={CategorieScreen}
        options={{
          tabBarLabel: "Categories",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ color }) => {
            return <Icon.Grid stroke={color} strokeWidth={3} fill="#fff" height={22} width={22} />
          }
        }}
      />
      <Tab.Screen name="PlayList" component={MusicScreen}
        options={{
          tabBarLabel: "Playlists",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ color }) => {
            return <Icon.Music stroke={color} strokeWidth={3} fill="#fff" height={22} width={22} />
          }
        }}
      />
      <Tab.Screen name="Profil" component={ProfilScreen}
        options={{
          tabBarLabel: "Profil",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ color }) => {
            return <Icon.User stroke={color} strokeWidth={3} fill="#fff" height={22} width={22} />
          }
        }}
      />

    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Start'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

