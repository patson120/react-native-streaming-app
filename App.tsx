import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

 const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-center text-4xl font-bold">Welcome to our streaming app!</Text>
      <StatusBar style="dark"  />
    </View>
  );
}

export default App;