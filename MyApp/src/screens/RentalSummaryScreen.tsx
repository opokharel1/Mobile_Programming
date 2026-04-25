// src/screens/RentalSummaryScreen.tsx

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

const RentalSummaryScreen = ({ navigation }) => {

  // Track which tab is active — Preview or Payment
  const [activeTab, setActiveTab] = useState('preview');

  // Rental details (in a real app these come from the previous screen)
  const rental = {
    name:       'Sony Alpha a7 III',
    owner:      'Ramesh K.',
    image:      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
    days:       3,
    dailyRate:  2500,
    deposit:    15000,
    serviceFee: 500,
  };

  // Calculate totals
  const rentalFee  = rental.days * rental.dailyRate;   // 3 x 2500 = 7500
  const total      = rentalFee + rental.deposit + rental.serviceFee;

  const handlePay = () => {
    Alert.alert(
      'Confirm Payment',
      `Total amount Rs. ${total.toLocaleString()} will be charged. Security deposit of Rs. ${rental.deposit.toLocaleString()} will be held in escrow.`,
      [
        {
          text: 'Confirm & Pay',
          onPress: () =>
            Alert.alert('Payment Successful! 🎉', 'Your deposit is locked in escrow. The owner has been notified.'),
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Rental Summary</Text>

        {/* Preview / Payment Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'preview' && styles.tabActive]}
            onPress={() => setActiveTab('preview')}
          >
            <Text style={[styles.tabText, activeTab === 'preview' && styles.tabTextActive]}>
              Preview
            </Text>
          </TouchableOpacity>

          <View style={styles.tabDivider} />

          <TouchableOpacity
            style={[styles.tab, activeTab === 'payment' && styles.tabActive]}
            onPress={() => setActiveTab('payment')}
          >
            <Text style={[styles.tabText, activeTab === 'payment' && styles.tabTextActive]}>
              Payment
            </Text>
          </TouchableOpacity>
        </View>

        {/* Gadget Info Card */}
        <View style={styles.gadgetCard}>
          <Image source={{ uri: rental.image }} style={styles.gadgetImage} />
          <View style={styles.gadgetInfo}>
            <Text style={styles.gadgetName}>{rental.name}</Text>
            <Text style={styles.gadgetOwner}>Owner: {rental.owner}</Text>
            <Text style={styles.gadgetDays}>{rental.days} days rental</Text>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✅ Verified Listing</Text>
            </View>
          </View>
        </View>

        {/* Cost Breakdown */}
        <Text style={styles.sectionTitle}>Cost Breakdown</Text>

        <View style={styles.breakdownCard}>

          <CostRow
            label="Rental Fee"
            value={`Rs. ${rentalFee.toLocaleString()}`}
            hint={`Rs. ${rental.dailyRate.toLocaleString()} x ${rental.days} days`}
          />

          <View style={styles.divider} />

          <CostRow
            label="Security Deposit (Refundable)"
            value={`Rs. ${rental.deposit.toLocaleString()}`}
            hint="Held in escrow, returned after safe return"
            highlight
          />

          <View style={styles.divider} />

          <CostRow
            label="Safety and service fee"
            value={`Rs. ${rental.serviceFee.toLocaleString()}`}
            hint="Platform fee for secure transactions"
          />

          <View style={styles.totalDivider} />

          {/* Total row */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>Rs. {total.toLocaleString()}</Text>
          </View>

        </View>

        {/* Escrow Info Box */}
        <View style={styles.escrowBox}>
          <Text style={styles.escrowTitle}>🔒 How Escrow Works</Text>
          <Text style={styles.escrowText}>
            Your security deposit of Rs. {rental.deposit.toLocaleString()} is held safely by Amanat —
            not given to the owner. It is automatically released back to you once the gadget is returned in good condition.
          </Text>
        </View>

        <View style={{ height: 40 }} />

      </ScrollView>

      {/* Pay Button — fixed at bottom */}
      <View style={styles.footer}>

        {/* Small summary above button */}
        <View style={styles.footerSummary}>
          <Text style={styles.footerSummaryLabel}>Total due today</Text>
          <Text style={styles.footerSummaryValue}>Rs. {total.toLocaleString()}</Text>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payText}>Pay & Lock Deposit</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default RentalSummaryScreen;

// ─────────────────────────────────────────────
// 🔹 Cost Row — one line in the breakdown table
// ─────────────────────────────────────────────
const CostRow = ({ label, value, hint, highlight = false }) => (
  <View style={styles.costRow}>
    <View style={styles.costLeft}>
      <Text style={styles.costLabel}>{label}</Text>
      {hint ? <Text style={styles.costHint}>{hint}</Text> : null}
    </View>
    <Text style={[styles.costValue, highlight && styles.costValueHighlight]}>
      {value}
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

  // Tab bar (Preview / Payment)
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabDivider: {
    width: 1,
    backgroundColor: COLORS.border,
  },

  // Gadget info card
  gadgetCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 12,
    marginBottom: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  gadgetImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  gadgetInfo: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  gadgetName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  gadgetOwner: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  gadgetDays: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  verifiedBadge: {
    marginTop: 4,
  },
  verifiedText: {
    fontSize: 12,
    color: COLORS.green,
    fontWeight: '600',
  },

  // Section title
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },

  // Breakdown card
  breakdownCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  // Each cost row
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  costLeft: {
    flex: 1,
    paddingRight: 12,
  },
  costLabel: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  costHint: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  costValue: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  costValueHighlight: {
    color: COLORS.green,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },

  totalDivider: {
    height: 2,
    backgroundColor: COLORS.primary,
    marginVertical: 8,
    opacity: 0.2,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  // Escrow info box
  escrowBox: {
    backgroundColor: '#EEF1F6',
    borderRadius: 12,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.green,
  },
  escrowTitle: {
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 6,
  },
  escrowText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },

  // Footer
  footer: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footerSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  footerSummaryLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  footerSummaryValue: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  payButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  payText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});