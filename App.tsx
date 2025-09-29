/**
 * Weather Dashboard App
 *
 * Required packages:
 * npm install react-native-linear-gradient react-native-svg
 * OR for Expo:
 * expo install expo-linear-gradient react-native-svg
 */

import React from 'react';
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
import AppContent from './components/homepage';

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
  >
    <Circle cx="12" cy="12" r="3" />
    <Path d="M12 1v6m0 6v6" />
    <Path d="M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24" />
  </Svg>
);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <AppContent />
    </SafeAreaProvider>
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
    backgroundColor: 'rgba(239, 68, 68, 0.3)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    backgroundColor: 'rgba(31, 41, 55, 0.4)',
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
    backgroundColor: 'rgba(31, 41, 55, 0.4)',
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

export default App;
