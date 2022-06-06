import React,{useState} from "react";
import { Text, View} from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";
import question from "./assets/data/oneQuestionWithOption";

//have one component per file 

const App = ()=>{
  const [selected ,setSelected ] = useState(null); //array destructing 

  const onButtonPress = () => {
    console.warn("pressed");
  };

  return (
    //return a value that can be written to the screen
    //go over use state
    <View style={styles.root}>

      <Text style={styles.title}>{question.question}</Text>
     
        <View style={styles.optionsContainer}>  
         {question.options.map((option)=>(
          <ImageOption 
           key={option.id}
           image={option.image}
           text={option.text}
           isSelected={selected?.id === option.id}
           onPress={()=> setSelected(option)}
         />
         ))}   
        </View>
        <Button text="Check" onPress={onButtonPress} disabled={!selected}/>
    </View> 
  );
};

export default App;