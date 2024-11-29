import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Import RootStackParamList type



type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp; // Use the navigation prop type
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Night Theme Background */}
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/Sleep4.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to Meditation Mode</Text>
        <Text style={styles.description}>
          Explore the new king of mediation and calmness. It uses sound and visualization to
          create perfect conditions for refreshing and peaceful mind.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('SleepMusic')} // Use the navigation prop
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C4D',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#a9a9d0',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  getStartedButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 80,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default WelcomeScreen;
