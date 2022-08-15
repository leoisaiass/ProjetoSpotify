import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cumprimentos: {
        fontSize: 30,
        paddingTop: 40,
        paddingLeft: 20,
        color: "white",
        backgroundColor: "#191414",
        fontFamily: "Verdana",
    },
    recomendacoesDoDia: {
        flexDirection: "row",
        backgroundColor: "#191414",
        paddingTop: 25,
        paddingBottom: 20,
    },
    recomendacoesDoDia1: {
        flexDirection: "column",
        paddingLeft: 15,
    },
    recomendacoesDoDia2: {
        flexDirection: "column",
        paddingLeft: 10,
    },
    albunsDoDia: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    descricao: {
        flexDirection: "row",
        paddingBottom: 10,
    },
    nomeAlbum: {
        color: "#FFFFFF",
        fontSize: 12,
        padding: 10,
    },
    nomeArtista: {
        color: "#FFFFFF"
    }
});