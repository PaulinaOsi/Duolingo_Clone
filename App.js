import React,{useState, useEffect} from "react";
import { Text, View, Alert} from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";
import questions from "./assets/data/imageMulatipleChoiceQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";

//have one component per file 

const App = ()=>{
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect (()=>{
    if(currentQuestionIndex >= questions.length){
      Alert.alert("You won!");
      setCurrentQuestionIndex(0);
    }else{
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  },[currentQuestionIndex]);

  const onCorrect = () =>{
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const onWrong = () =>{
    Alert.alert("Wroong!");
  }

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion 
      question={currentQuestion}
      onCorrect={onCorrect}
      onWrong={onWrong}
      />
   </View> 
  );
};

export default App;