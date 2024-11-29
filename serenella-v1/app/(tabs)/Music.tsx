import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Song image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Sleep1.png')} // Replace with your image file
          style={styles.image}
        />
      </View>

      {/* Song title */}
      <Text style={styles.title}>Night Island</Text>
      <Text style={styles.subtitle}>SLEEP MUSIC</Text>

      {/* Progress bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
        <View style={styles.progressIndicator} />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>02:15</Text>
        <Text style={styles.time}>5:00</Text>
      </View>

      {/* Music controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Matches the dark blue shade
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#c0c0c0',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#c0c0c0',
    borderRadius: 2,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  progressBar: {
    width: '45%', // Adjust this to reflect progress
    height: '100%',
    backgroundColor: 'white',
  },
  progressIndicator: {
    position: 'absolute',
    right: 0,
    top: -6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  time: {
    fontSize: 14,
    color: '#c0c0c0',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default MusicPlayer;
