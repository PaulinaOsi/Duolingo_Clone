import reactDom from "react-dom";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
        //contains syles for different components
        root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 35,
        },
        
        title: {
            fontSize: 20, 
            fontWeight: "bold",
            alignSelf: "stretch",
        },

        optionsContainer: {
           // backgroundColor: 'red',
            width: '100%',
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignContent: "space-between",
        }, 
    });
    export default styles;