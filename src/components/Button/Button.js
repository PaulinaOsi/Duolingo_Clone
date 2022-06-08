import React from "react";
import { Pressable , Text } from "react-native";
import propTypes from "prop-types";
import styles from "./styles";

const Button = ({text,onPress, disabled }) =>{
    return(
     <Pressable 
        onPress={onPress} 
        style={[styles.container, disabled? styles.disabledContainer : {}]}
        disabled={disabled}
        >
        
         <Text style={styles.text}>{text}</Text>
     </Pressable>
    );
};
Button.propTypes = {
    text: propTypes.string.isRequired,
    onPress: propTypes.func,
    disabled: propTypes.bool,  
}

Button.defaultProps = {
onPress: () => {},
disabled: false,
};
export default Button;