// src/screens/IdentityVerifyScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { COLORS } from '../theme';

const IdentityVerifyScreen = ({ navigation }) => {

  // These store the picked images. null = not uploaded yet.
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack]   = useState(null);
  const [selfie, setSelfie]     = useState(null);

  // For now, we simulate picking an image with a placeholder.
  // Later you can plug in a real image picker library.
  const handleUpload = (setter) => {
    Alert.alert(
      'Upload Photo',
      'In the real app, camera/gallery opens here.',
      [
        {
          text: 'Simulate Upload',
          onPress: () => setter('https://placehold.co/400x200/E6E8EC/6B7280?text=Uploaded'),
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleSubmit = () => {
    // Check all three are uploaded before submitting
    if (!nidFront || !nidBack || !selfie) {
      Alert.alert('Missing Documents', 'Please upload all three documents first.');
      return;
    }
    Alert.alert('Submitted!', 'Your documents are under review. We will notify you soon.');
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Identity Verify</Text>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>⚠️ Action Required</Text>
          <Text style={styles.infoText}>
            To keep Amanat safe, we need to verify your identity before you can rent or list gadgets.
            Upload a clear photo of your National ID (front & back) and a live selfie.
          </Text>
        </View>

        {/* NID Front */}
        <Text style={styles.label}>National ID (Front)</Text>
        <UploadBox
          image={nidFront}
          onPress={() => handleUpload(setNidFront)}
        />

        {/* NID Back */}
        <Text style={styles.label}>National ID (Back)</Text>
        <UploadBox
          image={nidBack}
          onPress={() => handleUpload(setNidBack)}
        />

        {/* Selfie */}
        <Text style={styles.label}>Live Selfie</Text>
        <SelfieBox
          image={selfie}
          onPress={() => handleUpload(setSelfie)}
        />

        <View style={{ height: 40 }} />

      </ScrollView>

      {/* Submit Button — fixed at bottom */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit for Verification</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default IdentityVerifyScreen;

// ─────────────────────────────────────────────
// 🔹 Upload Box — for NID front and back
// ─────────────────────────────────────────────
const UploadBox = ({ image, onPress }) => (
  <TouchableOpacity style={styles.uploadBox} onPress={onPress}>
    {image ? (
      // Show the uploaded image
      <Image source={{ uri: image }} style={styles.uploadedImage} />
    ) : (
      // Show placeholder
      <View style={styles.uploadPlaceholder}>
        <Text style={styles.uploadIcon}>🖼️</Text>
        <Text style={styles.uploadHint}>Tap to upload</Text>
      </View>
    )}
  </TouchableOpacity>
);

// ─────────────────────────────────────────────
// 🔹 Selfie Box — camera style, slightly different look
// ─────────────────────────────────────────────
const SelfieBox = ({ image, onPress }) => (
  <TouchableOpacity style={styles.selfieBox} onPress={onPress}>
    {image ? (
      <Image source={{ uri: image }} style={styles.uploadedImage} />
    ) : (
      <View style={styles.uploadPlaceholder}>
        <Text style={styles.uploadIcon}>📷</Text>
        <Text style={styles.uploadHint}>Tap to take selfie</Text>
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

  // Info box at top
  infoBox: {
    backgroundColor: '#EEF1F6',
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  infoTitle: {
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 6,
  },
  infoText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },

  // Label above each upload box
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },

  // NID upload boxes (wide rectangle)
  uploadBox: {
    height: 140,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
    marginBottom: 20,
    overflow: 'hidden',
  },

  // Selfie box (slightly taller, square-ish)
  selfieBox: {
    height: 160,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
    marginBottom: 20,
    overflow: 'hidden',
  },

  // Shown before image is uploaded
  uploadPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  uploadIcon: {
    fontSize: 28,
  },
  uploadHint: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },

  // Shown after image is uploaded
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Fixed bottom submit button
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
  submitText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});