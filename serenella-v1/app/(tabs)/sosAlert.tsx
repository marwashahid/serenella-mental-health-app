import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SOSScreen: React.FC = () => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(1)).current;

  // Ripple Animation for SOS Button
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 2,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animation]);

  const rippleStyle = {
    transform: [{ scale: animation }, { translateY: -40 }], // Adjusted ripple position upwards
    opacity: animation.interpolate({
      inputRange: [1, 2],
      outputRange: [0.5, 0],
    }),
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" /> {/* Back Icon */}
        </TouchableOpacity>
        <Text style={styles.userName}>Jenifer Pilman</Text>
        <Image
          source={require('../../assets/User1.png')}
          style={styles.userImage}
        />
      </View>

      {/* SOS Section */}
      <View style={styles.sosContainer}>
        <Animated.View style={[styles.ripple, rippleStyle]} />
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
        <Text style={styles.emergencyText}>Are you in emergency?</Text>
        <Text style={styles.descriptionText}>
          Press the button above; help will reach you soon.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.addressHeader}>Your current address</Text>
        <View style={styles.addressContainer}>
          <Image
            source={require('../../assets/User1.png')} // Replace with user image
            style={styles.footerImage}
          />
          <Text style={styles.addressText}>
            299 St. Laurent, Lahore, 4019, PAK
          </Text>
        </View>
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
    marginBottom: 30,
  },
  userName: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center', // Center align user name
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sosContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sosButton: {
    width: 150,
    height: 150,
    backgroundColor: '#2C2C72',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  sosText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  ripple: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#2C2C72',
    zIndex: 1,
  },
  emergencyText: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 25,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 18,
    color: '#a9a9d0',
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    paddingBottom: 20,
  },
  addressHeader: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  footerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
});

export default SOSScreen;
