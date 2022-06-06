import { StyleSheet } from "react-native";
import { exp } from "react-native/Libraries/Animated/Easing";

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#58CC02',
        height: 50,
        marginVertical: 10,

        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",

        //borders
        borderRadius: 5,
        borderBottomWidth: 5,
        borderColor: "#57A600"

    },
    disabledContainer: {
        backgroundColor: 'lightgray',
        borderColor:'gray',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
       
        borderBottomWidth: 2,
        borderColor: "white",
    }
});
 
export default Styles;