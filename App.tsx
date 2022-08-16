import { ScrollView, View } from "react-native";
import InicioFixo from "./components/InicioFixo";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


export default function App() {
  return (
    <View style={{flex:1}}>
    <InicioFixo />
    <ScrollView horizontal={false}>
     <View>
      <Header />
      <Main />
      </View>
      </ScrollView>
      <Footer />
    </View>
  )
}