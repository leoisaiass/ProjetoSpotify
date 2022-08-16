import { ScrollView, Image, StyleSheet, Text, View, ViewBase } from "react-native";
import {styles} from "./style";
import {AntDesign} from "@expo/vector-icons";

export default function Main(){
    return(
        <View style={styles.main}>
            
                <Text style={styles.mensagem}>Feito Para Você!</Text>
            
            <ScrollView horizontal={true}>
                <View style={styles.paravoce}>
                    <Image source={require('./img/onrepeat.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/dangerous.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/thefamemonster.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/rewind.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/evermore.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/therollingstones.jpg')} style={styles.foryou}/>
                </View>
            </ScrollView>

                <Text style={styles.mensagem}>Em Alta!</Text>
            <ScrollView horizontal={true}>
                <View style={styles.paravoce}>
                  <Image source={require('./img/thealbum.png')} style={styles.foryou}/>
                   <Image source={require('./img/decretosreais.webp')} style={styles.foryou}/>
                    <Image source={require('./img/slipknot.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/clairo.jpg')} style={styles.foryou}/>
                    <Image source={require('./img/willow.webp')} style={styles.foryou}/>
                    <Image source={require('./img/doce22.png')} style={styles.foryou}/>
                 </View>
            </ScrollView>
        </View>
    )

}