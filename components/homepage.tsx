/**
 * Weather Dashboard App
 *
 * Required packages:
 * npm install react-native-linear-gradient react-native-svg
 * OR for Expo:
 * expo install expo-linear-gradient react-native-svg
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
// For Expo, use: import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import { ImageBackground } from 'react-native';
import AddLoc from './add_loc';

// Weather Icons Components
const SunIcon = ({ size = 24, color = '#FCD34D' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <Circle cx="12" cy="12" r="5" />
    <Line x1="12" y1="1" x2="12" y2="3" />
    <Line x1="12" y1="21" x2="12" y2="23" />
    <Line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <Line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <Line x1="1" y1="12" x2="3" y2="12" />
    <Line x1="21" y1="12" x2="23" y2="12" />
    <Line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <Line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Svg>
);

const CloudIcon = ({ size = 24, color = '#E5E7EB' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <Path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </Svg>
);

const CloudRainIcon = ({ size = 24, color = '#93C5FD' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <Path d="M16 13v8M8 13v8M12 15v8" />
    <Path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </Svg>
);

const CloudDrizzleIcon = ({ size = 24, color = '#93C5FD' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <Path d="M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2" />
    <Path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </Svg>
);

const SettingsIcon = ({ size = 24, color = '#FFF' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Circle cx="12" cy="12" r="3" />
    <Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 11 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Svg>
);

function AppContent() {
  const [showAddLoc, setShowAddLoc] = useState(false);
  const safeAreaInsets = useSafeAreaInsets();

  // When showAddLoc is true we render the Add Location screen as a full page
  if (showAddLoc) {
    return <AddLoc onBack={() => setShowAddLoc(false)} />;
  }

  const hourlyForecast = [
    { time: 'NOW', icon: 'sun', temp: '19°' },
    { time: '12PM', icon: 'sun', temp: '22°' },
    { time: '1PM', icon: 'sun', temp: '23°' },
    { time: '2PM', icon: 'sun', temp: '24°' },
    { time: '3PM', icon: 'cloud', temp: '23°' },
    { time: '4PM', icon: 'cloud', temp: '22°' },
    { time: '5PM', icon: 'rain', temp: '20°' },
  ];

  const dailyForecast = [
    { day: 'TODAY', icon: 'sun' },
    { day: 'TUESDAY', icon: 'rain' },
    { day: 'WEDNESDAY', icon: 'drizzle' },
    { day: 'THURSDAY', icon: 'cloud' },
    { day: 'FRIDAY', icon: 'cloud' },
  ];

  const getWeatherIcon = (type: string, size = 24) => {
    switch (type) {
      case 'sun':
        return <SunIcon size={size} />;
      case 'cloud':
        return <CloudIcon size={size} />;
      case 'rain':
        return <CloudRainIcon size={size} />;
      case 'drizzle':
        return <CloudDrizzleIcon size={size} />;
      default:
        return <SunIcon size={size} />;
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingTop: safeAreaInsets.top + 10 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.sosButton}>
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <SettingsIcon size={28} />
          </TouchableOpacity>
        </View>

        {/* Main Weather Card */}
        {!showAddLoc ? (
          <TouchableOpacity
            style={styles.mainCard}
            onPress={() => setShowAddLoc(true)}
          >
            <Text style={styles.cityName}>Imus</Text>
            <Text style={styles.temperature}>19°C</Text>
            <Text style={styles.condition}>Mostly Clear</Text>
            <Text style={styles.highLow}>H:24° L:18°</Text>
          </TouchableOpacity>
        ) : (
          <AddLoc onBack={() => setShowAddLoc(false)} />
        )}

        <View style={{ backgroundColor: '#515151a7', borderRadius: 32, padding: 12, marginBottom: 40, width: '108%', alignSelf: 'center'}}>
          <View style={styles.forecastCard}>
            <Text style={styles.forecastTitle}>24-HOUR FORECAST</Text>
            <View style={styles.dailyContainer}>
              {hourlyForecast.map((item, index) => (
                <View key={index} style={styles.hourlyItem}>
                  <Text style={styles.hourlyTime}>{item.time}</Text>
                  {getWeatherIcon(item.icon, 28)}
                  <Text style={styles.hourlyTemp}>{item.temp}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* 5-day Forecast */}
          <View style={styles.forecastCard}>
            <Text style={styles.forecastTitle}>5-DAY FORECAST</Text>
            <View style={styles.dailyContainer}>
              {dailyForecast.map((item, index) => (
                <View key={index} style={styles.dailyItem}>
                  <Text style={styles.dailyDay}>{item.day}</Text>
                  {getWeatherIcon(item.icon, 28)}
                </View>
              ))}
            </View>
          </View>

          {/* Weather Details */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              marginBottom: 16,
              width: '100%',
              gap: 16,
            }}
          >
            <View style={[styles.detailsCard, { width: '48%' }]}>
              <Text style={[styles.forecastTitle, { textAlign: 'center' }]}>
                CHANCE OF RAIN
              </Text>
              <View style={styles.detailsContent}>
                <View style={styles.rainSection}>
                  <Text style={styles.rainPercentage}>91%</Text>
                  <View style={styles.rainIconContainer}>
                    <CloudRainIcon size={60} color="#93C5FD" />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.detailsCard, { width: '48%' }]}>
              <Text style={[styles.forecastTitle, { textAlign: 'center' }]}>
                METRICS
              </Text>
              <View style={styles.metricsSection}>
                <View style={styles.metricRow}>
                  <Text style={styles.metricLabel}>HUMIDITY</Text>
                  <Text style={styles.metricValue}>91%</Text>
                </View>
                <View style={styles.metricRow}>
                  <Text style={styles.metricLabel}>REAL FEEL</Text>
                  <Text style={styles.metricValue}>24°C</Text>
                </View>
                <View style={styles.metricRow}>
                  <Text style={styles.metricLabel}>UV</Text>
                  <Text style={styles.metricValue}>0</Text>
                </View>
                <View style={styles.metricRow}>
                  <Text style={styles.metricLabel}>PRESSURE</Text>
                  <Text style={styles.metricValue}>1008mbar</Text>
                </View>
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
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sosButton: {
    backgroundColor: 'rgba(186, 30, 30, 0.79)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sosText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  mainCard: {
    backgroundColor: '#5151516c',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
    marginBottom: 16,
    width: '60%',
    alignSelf: 'center',
  },
  cityName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 8,
  },
  temperature: {
    color: '#FFF',
    fontSize: 72,
    fontWeight: '200',
    marginBottom: 8,
  },
  condition: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 4,
  },
  highLow: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  forecastCard: {
    backgroundColor: '#1b1b1bc4',
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
  },
  forecastTitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  hourlyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  hourlyItem: {
    alignItems: 'center',
    flex: 1,
  },
  hourlyTime: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 11,
    marginBottom: 8,
  },
  hourlyTemp: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 8,
  },
  dailyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  dailyItem: {
    alignItems: 'center',
    flex: 1,
  },
  dailyDay: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    marginBottom: 8,
  },
  detailsCard: {
    backgroundColor: '#1b1b1bc4',
    borderRadius: 24,
    padding: 20,
    marginBottom: 0,
    // width is set inline for more control
  },
  detailsContent: {
    flexDirection: 'row',
  },
  rainSection: {
    flex: 1,
    alignItems: 'center',
  },
  rainPercentage: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: '200',
    marginBottom: 16,
  },
  rainIconContainer: {
    marginTop: 8,
  },
  metricsSection: {
    flex: 1,
    justifyContent: 'space-around',
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  metricLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  metricValue: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default AppContent;
