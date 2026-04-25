// src/components/Category.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

const Category = ({ name, active = false }) => (
  <TouchableOpacity style={[styles.pill, active && styles.pillActive]}>
    <Text style={[styles.text, active && styles.textActive]}>{name}</Text>
  </TouchableOpacity>
);

export default Category;

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#EEF1F6',
  },
  pillActive: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: 13,
  },
  textActive: {
    color: '#FFFFFF',
  },
});