import React from "react";
import { Text, View} from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
//have one component per file 

const App = ()=>{
  return (
    //return a value that can be written to the screen
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
     
        <View style={styles.optionsContainer}>
         <ImageOption/>
         <ImageOption/>
         <ImageOption/>
         <ImageOption/>  
        </View>

    </View> 
  );
};

export default App;