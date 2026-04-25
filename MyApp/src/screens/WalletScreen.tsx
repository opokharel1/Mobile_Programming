// src/screens/WalletScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { COLORS } from '../theme';
import BottomNav from '../components/BottomNav';

const WalletScreen = ({ navigation }) => {

  // Wallet balances (in a real app these come from Firebase)
  const [balance] = useState({
    available: 12500,
    escrowHeld: 15000,
  });

  const totalNetWorth = balance.available + balance.escrowHeld;

  // Fake transaction history
  const transactions = [
    { id: '1', icon: '🔒', label: 'Deposit Locked',    detail: 'Sony Alpha a7 III',  amount: '-Rs. 15,000', color: COLORS.primary  },
    { id: '2', icon: '🔓', label: 'Deposit Released',  detail: 'DJI Mavic Air 2',    amount: '+Rs. 8,000',  color: COLORS.green    },
    { id: '3', icon: '↗️', label: 'Withdrawal',        detail: 'To eSewa account',   amount: '-Rs. 5,000',  color: '#C14953'       },
    { id: '4', icon: '↙️', label: 'Top Up',            detail: 'From Khalti',         amount: '+Rs. 20,000', color: COLORS.green    },
    { id: '5', icon: '🔒', label: 'Deposit Locked',    detail: 'GoPro Hero 11',      amount: '-Rs. 5,000',  color: COLORS.primary  },
  ];

  const handleWithdraw = () => {
    Alert.alert(
      'Withdraw Funds',
      `Available balance: Rs. ${balance.available.toLocaleString()}. In the real app, this connects to Khalti withdrawal.`,
      [
        { text: 'Withdraw', onPress: () => Alert.alert('Withdrawal requested!') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleTopUp = () => {
    Alert.alert(
      'Top Up Wallet',
      'In the real app, this opens Khalti payment gateway.',
      [
        { text: 'Top Up', onPress: () => Alert.alert('Top up successful!') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <Text style={styles.heading}>My Wallet</Text>

        {/* Balance Card */}
        <View style={styles.balanceCard}>

          <Text style={styles.balanceLabel}>Total Net Worth</Text>
          <Text style={styles.balanceTotal}>Rs. {totalNetWorth.toLocaleString()}</Text>

          {/* Available + Escrow row */}
          <View style={styles.balanceRow}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Available</Text>
              <Text style={styles.balanceItemValue}>
                Rs. {balance.available.toLocaleString()}
              </Text>
            </View>

            {/* Vertical divider */}
            <View style={styles.balanceItemDivider} />

            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Escrow Held</Text>
              <Text style={[styles.balanceItemValue, { color: COLORS.amber }]}>
                Rs. {balance.escrowHeld.toLocaleString()}
              </Text>
            </View>
          </View>

        </View>

        {/* Withdraw + Top Up Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
            <Text style={styles.withdrawText}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.topUpButton} onPress={handleTopUp}>
            <Text style={styles.topUpText}>Top Up</Text>
          </TouchableOpacity>
        </View>

        {/* Escrow Info */}
        <View style={styles.escrowInfo}>
          <Text style={styles.escrowInfoText}>
            🔒 Escrow Held funds are locked during active rentals and released automatically after safe return.
          </Text>
        </View>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>

        {transactions.map(tx => (
          <TransactionRow key={tx.id} transaction={tx} />
        ))}

        <View style={{ height: 80 }} />

      </ScrollView>

      <BottomNav active="Safety" navigation={navigation} />
    </View>
  );
};

export default WalletScreen;

// ─────────────────────────────────────────────
// 🔹 Transaction Row
// ─────────────────────────────────────────────
const TransactionRow = ({ transaction }) => (
  <View style={styles.txRow}>
    <View style={styles.txIconBox}>
      <Text style={styles.txIcon}>{transaction.icon}</Text>
    </View>
    <View style={styles.txInfo}>
      <Text style={styles.txLabel}>{transaction.label}</Text>
      <Text style={styles.txDetail}>{transaction.detail}</Text>
    </View>
    <Text style={[styles.txAmount, { color: transaction.color }]}>
      {transaction.amount}
    </Text>
  </View>
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

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },

  // Balance card
  balanceCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    marginBottom: 4,
  },
  balanceTotal: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 12,
  },
  balanceItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  balanceItemDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  balanceItemLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  balanceItemValue: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  // Withdraw + Top Up buttons
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  withdrawButton: {
    flex: 1,
    backgroundColor: '#EEF1F6',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  withdrawText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 15,
  },
  topUpButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
  },
  topUpText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },

  // Escrow info
  escrowInfo: {
    backgroundColor: '#EEF1F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.green,
  },
  escrowInfoText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },

  // Section title
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },

  // Transaction row
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 12,
  },
  txIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF1F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txIcon: {
    fontSize: 18,
  },
  txInfo: {
    flex: 1,
  },
  txLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  txDetail: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  txAmount: {
    fontSize: 14,
    fontWeight: '700',
  },
});