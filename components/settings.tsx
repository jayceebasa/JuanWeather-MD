import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import WeatherPreferences from './weather-preferences';
import EmergencyContact from './emergency-contact';
import SOSSettings from './sos-settings';
import AboutSupport from './about-support';

type Props = {
  onBack?: () => void;
};

interface SettingsItem {
  id: string;
  title: string;
  icon: 'settings' | 'phone' | 'alert' | 'info';
}

const SettingsIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 11 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const AlertIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12 9v6M12 21h.01" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const InfoIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12 16v-4M12 8h.01" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ArrowIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
  </Svg>
);

export default function Settings({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const [showWeatherPreferences, setShowWeatherPreferences] = useState(false);
  const [showEmergencyContact, setShowEmergencyContact] = useState(false);
  const [showSOSSettings, setShowSOSSettings] = useState(false);
  const [showAboutSupport, setShowAboutSupport] = useState(false);

  const settingsItems: SettingsItem[] = [
    {
      id: '1',
      title: 'Weather Preferences',
      icon: 'settings',
    },
    {
      id: '2',
      title: 'Emergency Contact',
      icon: 'phone',
    },
    {
      id: '3',
      title: 'SOS Settings',
      icon: 'alert',
    },
    {
      id: '4',
      title: 'About & Support',
      icon: 'info',
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'settings':
        return <SettingsIcon />;
      case 'phone':
        return <PhoneIcon />;
      case 'alert':
        return <AlertIcon />;
      case 'info':
        return <InfoIcon />;
      default:
        return <SettingsIcon />;
    }
  };

  if (showWeatherPreferences) {
    return <WeatherPreferences onBack={() => setShowWeatherPreferences(false)} />;
  }

  if (showEmergencyContact) {
    return <EmergencyContact onBack={() => setShowEmergencyContact(false)} />;
  }

  if (showSOSSettings) {
    return <SOSSettings onBack={() => setShowSOSSettings(false)} />;
  }

  if (showAboutSupport) {
    return <AboutSupport onBack={() => setShowAboutSupport(false)} />;
  }

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
        {/* Settings Title Card */}
        <View style={styles.titleCard}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Settings Items */}
        <View style={styles.settingsContainer}>
          {settingsItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.settingItem}
              onPress={() => {
                if (item.id === '1') setShowWeatherPreferences(true);
                if (item.id === '2') setShowEmergencyContact(true);
                if (item.id === '3') setShowSOSSettings(true);
                if (item.id === '4') setShowAboutSupport(true);
              }}
            >
              <View style={styles.itemLeft}>
                <View style={styles.iconBox}>
                  {getIcon(item.icon)}
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <ArrowIcon />
            </TouchableOpacity>
          ))}
        </View>
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
    fontSize: 28,
    fontWeight: '600',
  },
  settingsContainer: {
    gap: 12,
  },
  settingItem: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 70,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
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
