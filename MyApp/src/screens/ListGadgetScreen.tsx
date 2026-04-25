// src/screens/ListGadgetScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { COLORS } from '../theme';

const ListGadgetScreen = ({ navigation }) => {

  // Stores the 4 evidence photos. null = not uploaded yet.
  const [photos, setPhotos] = useState({
    front:    null,
    rear:     null,
    serial:   null,
    specs:    null,
  });

  // Price inputs
  const [dailyPrice, setDailyPrice]   = useState('');
  const [deposit, setDeposit]         = useState('');

  // Simulate photo upload for a specific slot
  const handlePhotoUpload = (slot) => {
    Alert.alert(
      'Upload Photo',
      'In the real app, camera opens here.',
      [
        {
          text: 'Simulate Upload',
          onPress: () =>
            setPhotos(prev => ({
              ...prev,
              [slot]: 'https://placehold.co/400x300/E6E8EC/6B7280?text=' + slot,
            })),
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleContinue = () => {
    // Check all 4 photos are uploaded
    const allPhotos = Object.values(photos).every(p => p !== null);
    if (!allPhotos) {
      Alert.alert('Missing Photos', 'Please upload all 4 gadget photos.');
      return;
    }
    if (!dailyPrice || !deposit) {
      Alert.alert('Missing Price', 'Please enter daily price and security deposit.');
      return;
    }

    // Navigate to Rental Summary (we'll build that next)
    // For now just show success
    Alert.alert('Listed!', `Gadget listed at Rs. ${dailyPrice}/day with Rs. ${deposit} deposit.`);
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>List Your Gadget Securely</Text>

        {/* Section: Evidence Photos */}
        <Text style={styles.sectionTitle}>Gadget Evidence</Text>
        <Text style={styles.sectionSubtitle}>
          Upload clear photos of your gadget. These act as proof of condition before renting.
        </Text>

        {/* 2x2 Photo Grid */}
        <View style={styles.photoGrid}>
          <PhotoBox
            label="Front View"
            image={photos.front}
            onPress={() => handlePhotoUpload('front')}
          />
          <PhotoBox
            label="Rear View"
            image={photos.rear}
            onPress={() => handlePhotoUpload('rear')}
          />
          <PhotoBox
            label="Serial Number"
            image={photos.serial}
            onPress={() => handlePhotoUpload('serial')}
          />
          <PhotoBox
            label="System Specs"
            image={photos.specs}
            onPress={() => handlePhotoUpload('specs')}
          />
        </View>

        {/* Section: Pricing */}
        <Text style={styles.sectionTitle}>Set Your Price</Text>

        <Text style={styles.label}>Daily Rate (Rs.)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 2500"
          placeholderTextColor={COLORS.textSecondary}
          keyboardType="numeric"
          value={dailyPrice}
          onChangeText={setDailyPrice}
        />

        <Text style={styles.label}>Security Deposit (Rs.)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 15000"
          placeholderTextColor={COLORS.textSecondary}
          keyboardType="numeric"
          value={deposit}
          onChangeText={setDeposit}
        />

        {/* Info tip */}
        <View style={styles.tipBox}>
          <Text style={styles.tipText}>
            💡 Security deposit is held in escrow and returned to the renter after safe return of your gadget.
          </Text>
        </View>

        <View style={{ height: 40 }} />

      </ScrollView>

      {/* Continue Button — fixed at bottom */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ListGadgetScreen;

// ─────────────────────────────────────────────
// 🔹 Photo Box — one slot in the 2x2 grid
// ─────────────────────────────────────────────
const PhotoBox = ({ label, image, onPress }) => (
  <TouchableOpacity style={styles.photoBox} onPress={onPress}>
    {image ? (
      <Image source={{ uri: image }} style={styles.photoImage} />
    ) : (
      <View style={styles.photoPlaceholder}>
        <Text style={styles.photoIcon}>📷</Text>
        <Text style={styles.photoLabel}>{label}</Text>
      </View>
    )}

    {/* Label always shown at bottom if image uploaded */}
    {image && (
      <View style={styles.photoLabelOverlay}>
        <Text style={styles.photoLabelOverlayText}>{label}</Text>
      </View>
    )}
  </TouchableOpacity>
);

// ─────────────────────────────────────────────
// 🎨 Styles
// ─────────────────────────────────────────────
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
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 6,
  },

  sectionSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },

  // 2x2 grid
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },

  // Each photo box takes up ~half the width
  photoBox: {
    width: '47%',
    height: 130,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
    overflow: 'hidden',
  },

  photoPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  photoIcon: {
    fontSize: 26,
  },

  photoLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Dark label overlay shown after upload
  photoLabelOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 4,
    alignItems: 'center',
  },
  photoLabelOverlayText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },

  // Pricing inputs
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },

  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: COLORS.textPrimary,
    marginBottom: 20,
  },

  // Tip box
  tipBox: {
    backgroundColor: '#EEF1F6',
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.green,
  },
  tipText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },

  // Footer button
  footer: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  continueText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});