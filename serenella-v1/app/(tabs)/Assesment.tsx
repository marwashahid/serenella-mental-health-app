import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Question = {
  id: number;
  text: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    text: 'How often do you feel satisfied with your current quality of life?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
  },
  {
    id: 2,
    text: 'How frequently do you find joy in the things you usually enjoy?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
  },
  {
    id: 3,
    text: ' How often do you feel socially connected or supported by friends and family?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
  },
  {
    id: 4,
    text: 'How frequently do you feel hopeful or optimistic about the future?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
  },
  {
    id: 5,
    text: 'How often do you feel that your coping mechanisms are effective in managing stress and anxiety?',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
  },


];

const PersonalityTestScreen: React.FC = () => {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Personality Test</Text>
      </View>

      {/* Question Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Question {currentQuestionIndex + 1}/{questions.length}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressIndicator,
              { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* Question and Options */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>
        <FlatList
          data={currentQuestion.options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[
                styles.button,
                currentQuestionIndex === 0 && styles.disabledButton,
                ]}
                onPress={handlePrevious}
                disabled={currentQuestionIndex === 0}
            >
                <Text style={[styles.buttonText, currentQuestionIndex === 0 && styles.disabledText]}>
                Previous
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                styles.button,
                currentQuestionIndex === questions.length - 1 && styles.disabledButton,
                ]}
                onPress={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C4D',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#3E3E72',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressIndicator: {
    height: '100%',
    backgroundColor: '#00FFAA',
  },
  questionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    flex: 1,
  },
  questionText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2C2C72',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1, // Equal width for both buttons
    alignItems: 'center', // Center align text inside buttons
    marginHorizontal: 5, // Space between buttons
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#3E3E72',
  },
  disabledText: {
    color: '#7C7C9A',
  },
});

export default PersonalityTestScreen;
