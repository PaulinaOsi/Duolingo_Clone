import reactDom from "react-dom";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
        // optionsContainer:{
        // backgroundColor: 'red',
        // },
        optionContainer:{
            //styling border
            //backgroundColor: 'red',
            borderWidth: 2,
            borderBottomWidth: 4,
            borderColor: 'lightgrey',
            borderRadius: 10,
            //size 
            width: '47%',
            height: '47%',

            //spacing 
            padding: 14,

            alignItems: "center"
        },

        selectedContainer: {
            backgroundColor: "#DDF4FE",
            borderColor: "#81D5FE",
        },
        
        optionImage:{
           // backgroundColor: 'red',
            width: '100%',
            flex: 1,
        },

        optionText:{},
        selectedText: {
            fontWeight: "bold",
            color: "#40BEF7"
        },
    });
    export default styles;