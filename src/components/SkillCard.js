import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SkillCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{item}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
