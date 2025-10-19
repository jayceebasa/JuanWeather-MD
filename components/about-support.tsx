import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = {
  onBack?: () => void;
};

const InfoIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth={2} />
    <Path d="M12 16v-4M12 8h.01" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const EmailIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M4 6h16M4 6L12 13l8-7M4 6v12h16V6" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M3 9l4-4h2l10 10v2l-4 4h-2l-10-10V9z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default function AboutSupport({ onBack }: Props) {
  const insets = useSafeAreaInsets();

  const handleEmailPress = () => {
    Linking.openURL('mailto:support@juanweather.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      {/* Top-left back icon */}
      <TouchableOpacity
        onPress={onBack}
        style={[
          styles.backIconContainer,
          { top: insets.top + 10 },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Back"
      >
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <Path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
        <Text style={styles.backLabel}>Previous</Text>
      </TouchableOpacity>

      <ScrollView style={[styles.container, { paddingTop: insets.top + 12 }]} showsVerticalScrollIndicator={false}>
        {/* Title Card */}
        <View style={styles.titleCard}>
          <Text style={styles.title}>About & Support</Text>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <InfoIcon />
            <Text style={styles.sectionTitle}>About JuanWeather</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>App Version</Text>
            <Text style={styles.infoValue}>1.0.0</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Build Number</Text>
            <Text style={styles.infoValue}>2024.01.001</Text>
          </View>

          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>
              JuanWeather is your personal weather companion, providing real-time weather updates, emergency alerts, and location-based weather information to keep you safe and informed.
            </Text>
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <PhoneIcon />
            <Text style={styles.sectionTitle}>Get Support</Text>
          </View>

          <TouchableOpacity style={styles.supportCard} onPress={handleEmailPress}>
            <View style={styles.supportIconContainer}>
              <EmailIcon />
            </View>
            <View style={styles.supportContent}>
              <Text style={styles.supportTitle}>Email Support</Text>
              <Text style={styles.supportSubtitle}>support@juanweather.com</Text>
            </View>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <Path d="M9 6l6 6-6 6" stroke="#81c784" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportCard} onPress={handlePhonePress}>
            <View style={styles.supportIconContainer}>
              <PhoneIcon />
            </View>
            <View style={styles.supportContent}>
              <Text style={styles.supportTitle}>Phone Support</Text>
              <Text style={styles.supportSubtitle}>+1 (234) 567-890</Text>
            </View>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
              <Path d="M9 6l6 6-6 6" stroke="#81c784" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <InfoIcon />
            <Text style={styles.sectionTitle}>Legal</Text>
          </View>

          <TouchableOpacity style={styles.legalCard}>
            <Text style={styles.legalText}>Privacy Policy</Text>
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path d="M9 6l6 6-6 6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={styles.legalCard}>
            <Text style={styles.legalText}>Terms of Service</Text>
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path d="M9 6l6 6-6 6" stroke="rgba(255, 255, 255, 0.5)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </TouchableOpacity>
        </View>

        <Text style={styles.copyright}>© 2024 JuanWeather. All rights reserved.</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#5151519a',
  },
  titleCard: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 60,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 16,
    padding: 16,
    minHeight: 60,
    justifyContent: 'center',
  },
  infoLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  infoValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  descriptionCard: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 16,
    padding: 16,
  },
  descriptionText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    lineHeight: 20,
  },
  supportCard: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: 70,
  },
  supportIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: 'rgba(129, 199, 132, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportContent: {
    flex: 1,
  },
  supportTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  supportSubtitle: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  legalCard: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 56,
  },
  legalText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  copyright: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
  },
  backIconContainer: {
    position: 'absolute',
    left: 12,
    minWidth: 64,
    height: 44,
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 10,
  },
  backLabel: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});
