// src/screens/ContactScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import database from '@react-native-firebase/database';  // ← real Firebase now
import { COLORS } from '../theme';

const ContactScreen = ({ navigation }) => {

  const [form, setForm] = useState({
    userId:    '',
    firstName: '',
    lastName:  '',
    email:     '',
    address:   '',
    phone:     '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Check nothing is empty
    const isEmpty = Object.values(form).some(v => v.trim() === '');
    if (isEmpty) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      // Save to Firebase — same as your script.js
      // creates:  users/user_001/{ firstName, lastName, ... }
      await database()
        .ref('users/' + form.userId)
        .set({
          firstName: form.firstName,
          lastName:  form.lastName,
          email:     form.email,
          address:   form.address,
          phone:     form.phone,
        });

      Alert.alert('Submitted! ✅', 'Your details have been saved.');

      // Clear form
      setForm({
        userId:    '',
        firstName: '',
        lastName:  '',
        email:     '',
        address:   '',
        phone:     '',
      });

    } catch (error) {
      Alert.alert('Error ❌', 'Something went wrong. Please try again.');
      console.error('Firebase error:', error);
    }

    setLoading(false);
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.subheading}>
          Have a question or issue? Fill in the form and we'll get back to you.
        </Text>

        <FormField
          label="User ID"
          placeholder="e.g. user_001"
          value={form.userId}
          onChangeText={v => handleChange('userId', v)}
        />
        <FormField
          label="First Name"
          placeholder="e.g. Ramesh"
          value={form.firstName}
          onChangeText={v => handleChange('firstName', v)}
        />
        <FormField
          label="Last Name"
          placeholder="e.g. Karki"
          value={form.lastName}
          onChangeText={v => handleChange('lastName', v)}
        />
        <FormField
          label="Email"
          placeholder="e.g. ramesh@gmail.com"
          value={form.email}
          onChangeText={v => handleChange('email', v)}
          keyboardType="email-address"
        />
        <FormField
          label="Address"
          placeholder="e.g. Kathmandu, Nepal"
          value={form.address}
          onChangeText={v => handleChange('address', v)}
        />
        <FormField
          label="Phone"
          placeholder="e.g. 9800000000"
          value={form.phone}
          onChangeText={v => handleChange('phone', v)}
          keyboardType="phone-pad"
        />

        <View style={{ height: 40 }} />

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.submitButton, loading && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitText}>
            {loading ? 'Submitting...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );

};

export default ContactScreen;

const FormField = ({ label, placeholder, value, onChangeText, keyboardType = 'default' }) => (
  <View style={styles.fieldWrapper}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={COLORS.textSecondary}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  backButton: {
    fontSize: 16,
    color: COLORS.primary,
    marginBottom: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 24,
    lineHeight: 20,
  },
  fieldWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  footer: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});