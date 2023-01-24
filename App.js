//import { StatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, View } from 'react-native';
import AppLoading from "expo-app-loading";
import Cesta from './src/screens/Cesta/Index';
import mock from "./src/mocks/cesta";


export default function App() {
  return (
    <View>
      <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>
      </SafeAreaView>
    </View>
  );
}


