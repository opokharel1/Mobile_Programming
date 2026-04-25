// src/components/ProductCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

const ProductCard = ({ name, price, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
    color: COLORS.textPrimary,
  },
  price: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
});