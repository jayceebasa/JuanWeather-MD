import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = {
  onBack?: () => void;
};

interface PreferenceItem {
  id: string;
  title: string;
  type: 'select' | 'toggle' | 'slider';
  value?: string | boolean | number;
}

const ChevronIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path d="M9 18l6-6-6-6" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.5} />
  </Svg>
);

const SliderThumb = ({ position }: { position: number }) => (
  <View style={[styles.sliderThumb, { left: `${position}%` }]} />
);

export default function WeatherPreferences({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const [tempUnit, setTempUnit] = useState('Celsius');
  const [rainfallAlerts, setRainfallAlerts] = useState(true);
  const [alertThreshold, setAlertThreshold] = useState(70);

  const handleThresholdChange = (value: number) => {
    setAlertThreshold(Math.round(value));
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
          <Text style={styles.title}>Weather Preferences</Text>
        </View>

        {/* Preference Items */}
        <View style={styles.preferencesContainer}>
          {/* Temperature Unit */}
          <TouchableOpacity style={styles.preferenceItem}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemTitle}>Temperature Unit</Text>
            </View>
            <View style={styles.itemRight}>
              <Text style={styles.itemValue}>{tempUnit}</Text>
              <ChevronIcon />
            </View>
          </TouchableOpacity>

          {/* Toggle Rainfall Alerts */}
          <View style={styles.preferenceItem}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemTitle}>Toggle Rainfall Alerts</Text>
            </View>
            <Switch
              style={styles.toggle}
              value={rainfallAlerts}
              onValueChange={setRainfallAlerts}
              trackColor={{ false: '#767577', true: '#81c784' }}
              thumbColor={rainfallAlerts ? '#4caf50' : '#f4f3f4'}
            />
          </View>

          {/* Set Alert Threshold */}
          <View style={styles.preferenceItem}>
            <View style={styles.sliderSection}>
              <View style={styles.sliderHeader}>
                <Text style={styles.itemTitle}>Set Alert Threshold</Text>
                <Text style={styles.sliderValue}>{alertThreshold}%</Text>
              </View>
              <View style={styles.sliderContainer}>
                <View style={styles.sliderTrack}>
                  <View
                    style={[
                      styles.sliderFill,
                      { width: `${alertThreshold}%` },
                    ]}
                  />
                </View>
                <SliderThumb position={alertThreshold} />
              </View>
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabel}>0%</Text>
                <Text style={styles.sliderLabel}>100%</Text>
              </View>
            </View>
          </View>
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
    fontSize: 24,
    fontWeight: '600',
  },
  preferencesContainer: {
    gap: 12,
  },
  preferenceItem: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
  },
  itemLeft: {
    flex: 1,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  itemValue: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
  },
  toggle: {
    marginLeft: 12,
  },
  sliderSection: {
    flex: 1,
    gap: 12,
  },
  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderValue: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
  },
  sliderContainer: {
    position: 'relative',
    height: 40,
    justifyContent: 'center',
  },
  sliderTrack: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#81c784',
    borderRadius: 3,
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#81c784',
    top: '50%',
    marginTop: -10,
    marginLeft: -10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 11,
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
