import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MoodTrackingScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [animationValue] = useState(new Animated.Value(1));

  const moods = [
    { id: 1, label: 'Happy', emoji: '😊' },
    { id: 2, label: 'Neutral', emoji: '😐' },
    { id: 3, label: 'Sad', emoji: '😢' },
    { id: 4, label: 'Worried', emoji: '😟' },
    { id: 5, label: 'Anxious', emoji: '😰' },
    { id: 6, label: 'Angry', emoji: '😡' },
  ];

  const handleMoodSelection = (id: number) => {
    setSelectedMood(id);
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 1.5,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Mood Tracking</Text>
      </View>

      {/* Question Text */}
      <Text style={styles.questionText}>Jenifer, how are you feeling now?</Text>

      {/* Date and Time */}
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTime}>
          <Ionicons name="calendar-outline" size={28} color="white" />
          <Text style={styles.dateTimeText}>Today, July 12</Text>
        </View>
        <View style={styles.dateTime}>
          <Ionicons name="time-outline" size={28} color="white" />
          <Text style={styles.dateTimeText}>07:09</Text>
        </View>
      </View>

      {/* Mood Selection */}
      <FlatList
        data={moods}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.moodContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleMoodSelection(item.id)}
            style={styles.moodButton}
          >
            <Animated.Text
              style={[
                styles.emoji,
                selectedMood === item.id && { transform: [{ scale: animationValue }] },
              ]}
            >
              {item.emoji}
            </Animated.Text>
            <Text style={styles.moodLabel}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C4D',
    marginTop:0,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
   
  },
  questionText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingRight:20,
    paddingLeft:45,
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:25,
  },
  dateTimeText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 5,
  },
  moodContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  moodButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  emoji: {
    fontSize: 30,
    color: 'white',
    marginBottom: 5,
  },
  moodLabel: {
    position:'fixed',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#2C2C72',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MoodTrackingScreen;
