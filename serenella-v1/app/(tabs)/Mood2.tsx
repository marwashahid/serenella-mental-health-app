import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';

const MoodTrackingScreen = () => {
  const navigation = useNavigation();
  const [customOption, setCustomOption] = useState('');
  const [showInput, setShowInput] = useState(false);
  const options = [
    { name: 'Work', icon: <MaterialIcons name="work" size={24} color="white" /> },
    { name: 'Love', icon: <FontAwesome5 name="heart" size={24} color="white" /> },
    { name: 'Friends', icon: <MaterialIcons name="group" size={24} color="white" /> },
    { name: 'Travel', icon: <FontAwesome5 name="plane" size={24} color="white" /> },
    { name: 'Walking', icon: <FontAwesome5 name="walking" size={24} color="white" /> },
    { name: 'Games', icon: <Ionicons name="game-controller" size={24} color="white" /> },
    { name: 'Movie', icon: <MaterialIcons name="movie" size={24} color="white" /> },
    { name: 'Sports', icon: <FontAwesome5 name="football-ball" size={24} color="white" /> },
    { name: 'Exam', icon: <Entypo name="book" size={24} color="white" /> },
    { name: 'Hobby', icon: <MaterialIcons name="brush" size={24} color="white" /> },
    { name: 'Food', icon: <MaterialIcons name="restaurant" size={24} color="white" /> },
    { name: 'Add', icon: <Ionicons name="add-circle-outline" size={24} color="white" /> }
  ];

  const handleOptionPress = (option) => {
    if (option.name === 'Add') {
      setShowInput(true);
    } else {
      console.log(option.name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mood Tracking</Text>
      </View>
      <Text style={styles.question}>What made your day happy?</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleOptionPress(option)}
          >
            <View style={styles.iconTextContainer}>
              {option.icon}
              <Text style={styles.optionText}>{option.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {showInput && (
          <TextInput
            style={styles.input}
            placeholder="Enter custom option"
            value={customOption}
            onChangeText={setCustomOption}
          />
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.goBack()}>
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C4D',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
  },
  arrow: {
    color: 'white',
    fontSize: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 16,
  },
  question: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#A0A0C0',
    borderWidth: 1,
    borderColor: '#2C2C73',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    width: '48%',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  footerButton: {
    backgroundColor: '#2C2C72',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  nextButton: {
    backgroundColor: '#2C2C72',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MoodTrackingScreen;