import React, {useState} from "react";
import { Text, View } from "react-native";
import propTypes from "prop-types";
import ImageOption from "../ImageOption";
import Button from "../Button";

import styles from "./styles";

const ImageMultipleChoiceQuestion = ({question, onCorrect, onWrong}) => {
    const [selected ,setSelected ] = useState(null); //array destructing
 
    const onButtonPress = () => {
        //check if the field has the correct field
        if(selected.correct){
        // Alert.alert("correct!");
        //move to next question 
        //  setCurrentQuestionIndex(currentQuestionIndex + 1); //setter is async so will not be updated 
        onCorrect();

        setSelected(null);
        }else{
       // Alert.alert("Wroong!");
        onWrong();
        }
    };
//Fragment component - because we are returning multiple componenet Text, View and button but we can encapsulate all inside the one fragment 
return(
  <> 
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
  </>
 );
};

//define complex prop type
ImageMultipleChoiceQuestion.propTypes = {
    question: propTypes.shape({
        question: propTypes.string.isRequired,
        options: propTypes.arrayOf(
            propTypes.shape({
                id: propTypes.string,
                text:propTypes.string,
                image: propTypes.string,
                correct: propTypes.bool,
            })
        ).isRequired,
    }).isRequired,
}
export default ImageMultipleChoiceQuestion;