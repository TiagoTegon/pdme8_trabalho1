import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "90%",
        bottom: 0,
        backgroundColor: '#FFF',
        alignItems: "center",
        marginTop: 15,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 5,
        padding: 10,
        },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        fontSize: 18,
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 7,
        paddingLeft: 10,
    },
    buttons: {
        alignItems: "center",
        width: "75%",
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#63b8ff",
        padding: 15,
        marginTop: 10,
    },
    formTextButton: {
        fontSize: 18,
        color: "#ffffff",
    }
  });

export default styles;