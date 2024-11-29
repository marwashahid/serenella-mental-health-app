import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const SignUpScreen = () => {
  const [agree, setAgree] = useState(false); // State for checkbox

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/meditation.png')} // Replace with your meditation image path
          style={styles.image}
        />
      </View>

      {/* Welcome and Signup Form */}
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>
          Welcome to <Text style={styles.serenellaText}>Serenella!</Text>
        </Text>
        <Text style={styles.loginText}>Sign Up</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#666"
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />

        {/* Checkbox for Terms & Privacy Policy */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              agree ? styles.checkboxSelected : styles.checkboxUnselected,
            ]}
            onPress={() => setAgree(!agree)} // Toggle checkbox state
          >
            {agree && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I agree to the{' '}
            <Text style={styles.link}>Terms & Conditions</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            !agree && { backgroundColor: '#b0c4de' }, // Disable button if not agreed
          ]}
          disabled={!agree} // Disable interaction if not agreed
        >
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Option */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an Account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 3,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  serenellaText: {
    color: '#6c8af6', // Blue color for Serenella
  },
  loginText: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f3f8ff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxUnselected: {
    borderColor: '#666',
  },
  checkboxSelected: {
    borderColor: '#6c8af6',
    backgroundColor: '#6c8af6',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    flexWrap: 'wrap',
  },
  link: {
    color: '#6c8af6',
    fontWeight: 'bold',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#6c8af6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6c8af6',
  },
});

export default SignUpScreen;
