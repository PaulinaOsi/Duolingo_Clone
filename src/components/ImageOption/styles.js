import reactDom from "react-dom";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
        optionContainer:{
            //styling border
            // backgroundColor: 'red',
            borderWidth: 2,
            borderBottomWidth: 4,
            borderColor: 'lightgrey',
            borderRadius: 10,
            //size 
            width: '48%',
            height: '48%',

            //spacing 
            padding: 10,

            alignItems: "center"
        },
        
        optionImage:{
           // backgroundColor: 'red',
            width: '100%',
            flex: 1,
        },

        optionText:{

        },
    });
    export default styles;