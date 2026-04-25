// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerIcon}>🛡️</Text>
          <Text style={styles.header}>Amanat</Text>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Rent Now</Text>
          <Text style={styles.bannerSubtitle}>Affordable gadget rentals available</Text>
        </View>

        <TouchableOpacity
          style={styles.verifyBanner}
          onPress={() => navigation.navigate('IdentityVerify')}
        >
          <Text style={styles.verifyText}>⚠️ Verify your identity to start renting →</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.contactLink}>✉️ Contact Us</Text>
        </TouchableOpacity>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categories}>
          <Category name="All" active={true} />
          <Category name="Cameras" />
          <Category name="Drones" />
          <Category name="Laptops" />
          <Category name="Gaming" />
        </View>

        {/* Featured */}
        <Text style={styles.sectionTitle}>Featured Near You</Text>
        <View style={styles.cardRow}>
          <ProductCard
            name="Sony Alpha a7 III"
            price="Rs. 2,500 / day"
            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
            onPress={() => navigation.navigate('RentalSummary')}
          />
          <View style={{ width: 12 }} />
          <ProductCard
            name="DJI Mavic Air 2"
            price="Rs. 4,000 / day"
            image="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400"
            onPress={() => navigation.navigate('RentalSummary')}
          />
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom nav gets navigation prop so it can switch screens */}
      <BottomNav active="Home" navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 50 },
  headerRow: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', marginBottom: 20, gap: 8,
  },
  headerIcon: { fontSize: 20 },
  header: { fontSize: 22, fontWeight: 'bold', color: COLORS.primary },
  banner: {
    backgroundColor: COLORS.surface, borderRadius: 18,
    padding: 20, marginBottom: 20,
    borderWidth: 1, borderColor: COLORS.border,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, elevation: 3,
  },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.textPrimary, fontStyle: 'italic' },
  bannerSubtitle: { color: COLORS.textSecondary, marginTop: 6 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.textPrimary, marginBottom: 12 },
  categories: { flexDirection: 'row', gap: 8, marginBottom: 20, flexWrap: 'wrap' },
  cardRow: { flexDirection: 'row' },

  // 

  verifyBanner: {
    backgroundColor: '#FFF8EC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.amber,
  },
  verifyText: {
    color: COLORS.amber,
    fontWeight: '600',
    fontSize: 13,
  },

  // Contact us
  contactLink: {
  textAlign: 'center',
  color: COLORS.textSecondary,
  fontSize: 13,
  marginBottom: 16,
  textDecorationLine: 'underline',
},
});