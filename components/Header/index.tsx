import { ScrollView, Image, StyleSheet, Text, View, ViewBase } from "react-native";
import { styles } from "./style";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Header(){
    return(
        <View>       
            <View style={styles.recomendacoesDoDia}>
                <View style={styles.recomendacoesDoDia1}>
                    <View style={styles.descricao}>
                        <Image source={require('./img/Ariana.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>Thank U, Next</Text>
                        {/* <Text style={styles.nomeArtista}>Ariana Grande</Text> */}
                    </View>
                    <View style={styles.descricao}>
                        <Image source={require('./img/Billie.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>Happier Than Ever</Text>
                        {/* <Text style={styles.nomeArtista}>Billie Eilish</Text> */}
                    </View>
                    <View style={styles.descricao}>
                        <Image source={require('./img/Taylor.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>Reputation</Text>
                        {/* <Text style={styles.nomeArtista}>Taylor Swift</Text> */}
                    </View>
                </View>
                <View style={styles.recomendacoesDoDia2}>
                    <View style={styles.descricao}>
                        <Image source={require('./img/TheWeekend.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>After Hours</Text>
                        {/* <Text style={styles.nomeArtista}>The Weekend</Text> */}
                    </View>
                    <View style={styles.descricao}>
                        <Image source={require('./img/Twice.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>Formula Of Love</Text>
                        {/* <Text style={styles.nomeArtista}>Twice</Text> */}
                    </View>
                    <View style={styles.descricao}>
                        <Image source={require('./img/Tyler.jpg')} style={styles.albunsDoDia}/>
                        <Text style={styles.nomeAlbum}>Igor</Text>
                        {/* <Text style={styles.nomeArtista}>Tyler, The Creator</Text> */}
                    </View>
                </View>  
            </View>       
              
        </View>
    )

}