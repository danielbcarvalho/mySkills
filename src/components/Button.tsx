import React from "react";
import { 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({title,...rest} : ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
