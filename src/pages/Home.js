import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  FlatList,
  Keyboard,
  StatusBar,
} from "react-native";
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

const Home = () => {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState("");

  const handleAddNewSkill = () => {
    setMySkills((oldState) => [...oldState, newSkill]);
    setNewSkill('');
    Keyboard.dismiss()
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    if(currentHour < 12) {
      setGreeting('Good morning')
    } else if(currentHour >=12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Daniel</Text>
      <Text style={styles.greetingText}>
        {greeting}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>
      <FlatList 
        data={mySkills}
        renderItem={({item}) => <SkillCard item={item} />}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: 'black'
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    fontSize: 18,
    color: "#fff",
    marginTop: 30,
    borderRadius: 7,
    padding: Platform.OS === "ios" ? 15 : 10,
  },
  greetingText: {
    color: '#fff'
  }
});
