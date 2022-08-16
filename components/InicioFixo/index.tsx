import { ScrollView, Image, StyleSheet, Text, View, ViewBase } from "react-native";
import { styles } from "./style";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function InicioFixo(){
    return(
        <View>       
            <View style={styles.Inicio}>
            <Text style={styles.cumprimentos} >
                Bom dia!
            </Text>
            <View style={styles.estiloicone}>
                <FontAwesome name="gear" size={30} color="white"  style={{marginRight:"60%"}}/>
            </View>
            </View>
            </View>
    )

}