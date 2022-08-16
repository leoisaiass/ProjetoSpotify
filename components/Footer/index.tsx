import { StyleSheet, Text, View, ViewBase } from "react-native";
import {styles} from "./style";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

export default function Footer(){
    return(
        <View style={styles.footer}>
            <View style={styles.estiloicone}>
                <AntDesign name="home" size={35} style={styles.iconeemsi}/>
                <Text style={styles.texto}>Início</Text>
            </View>

            <View style={styles.estiloicone}>
                <AntDesign size={35} name="search1" style={styles.iconeemsi}/>
                <Text style={styles.texto}>Pesquisa</Text>
            </View>

            <View style={styles.estiloicone}>
                <AntDesign size={35} name="book" style={styles.iconeemsi}/>
                <Text style={styles.texto}>Biblioteca</Text>
            </View>
        </View>
    )

}