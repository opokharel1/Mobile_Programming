// src/components/BottomNav.tsx
// Used on every screen. Pass the screen name to highlight the active tab.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

const BottomNav = ({ active, navigation }) => (
  <View style={styles.nav}>
    <NavItem icon="🏠" label="Home"   isActive={active === 'Home'}
      onPress={() => navigation.navigate('Home')} />
    <NavItem icon="➕" label="List"   isActive={active === 'List'}
      onPress={() => navigation.navigate('ListGadget')} />
    <NavItem icon="🛡️" label="Safety" isActive={active === 'Safety'}
      onPress={() => navigation.navigate('Wallet')} />
  </View>
);

const NavItem = ({ icon, label, isActive, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={[styles.label, isActive && styles.labelActive]}>{label}</Text>
  </TouchableOpacity>
);

export default BottomNav;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingVertical: 10,
    paddingBottom: 24,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  icon: { fontSize: 20 },
  label: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});