import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('credit');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Payment Method */}
        <Text style={styles.sectionTitle}>Choose a payment method</Text>

        {/* Credit/Debit Card */}
        <View style={styles.paymentOption}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedPayment('credit')}
          >
            <View
              style={[
                styles.radioCircle,
                selectedPayment === 'credit' && styles.radioSelected,
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.paymentText}>Debit/Credit</Text>

          <View style={styles.cardIcons}>
            <FontAwesome name="cc-visa" size={24} color="#ffffff" />
            <FontAwesome name="cc-mastercard" size={24} color="#ffffff" />
          </View>
          
        </View>

        {/* Card Details */}
        {selectedPayment === 'credit' && (
          <View style={styles.cardDetails}>
            <TextInput
              style={styles.input}
              placeholder="Card number"
              placeholderTextColor="#888"
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Cardholder First and Last Name"
              placeholderTextColor="#888"
            />
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="MM/YYYY"
                placeholderTextColor="#888"
                keyboardType="number-pad"
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="CVV Code"
                placeholderTextColor="#888"
                keyboardType="number-pad"
                secureTextEntry
              />
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setIsCardSaved(!isCardSaved)}
              >
                {isCardSaved && (
                  <Ionicons name="checkmark" size={18} color="white" />
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>Save this card to my profile</Text>
            </View>
          </View>
        )}

        {/* Other Payment Methods */}
        <View style={styles.paymentOption}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedPayment('easyPaisa')}
          >
            <View
              style={[
                styles.radioCircle,
                selectedPayment === 'easyPaisa' && styles.radioSelected,
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.paymentText}>EasyPaisa</Text>
        </View>
        <View style={styles.paymentOption}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedPayment('jazzCash')}
          >
            <View
              style={[
                styles.radioCircle,
                selectedPayment === 'jazzCash' && styles.radioSelected,
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.paymentText}>Jazz Cash</Text>
        </View>       
      </ScrollView>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay $100 now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    backgroundColor: '#1C1C4D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft:20,
    backgroundColor: '#1C1C4D',
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  radioSelected: {
    backgroundColor: '#007BFF',
  },
  paymentText: {
    color: 'white',
    flex: 1,
    fontSize: 18,
  },
  cardIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  cardDetails: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#545454',
    color: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxText: {
    color: 'white',
  },
  payButton: {
    backgroundColor: '#2C2C72',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
