import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';

// Weather Icons Components (same as homepage)
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

type Props = {
  onBack?: () => void;
};

interface LocationWeather {
  id: string;
  city: string;
  temp: number;
  condition: string;
  highTemp: number;
  icon: 'sun' | 'cloud' | 'rain';
}

export default function AddLoc({ onBack }: Props) {
  const insets = useSafeAreaInsets();

  const locations: LocationWeather[] = [
    {
      id: '1',
      city: 'Imus',
      temp: 19,
      condition: 'Mostly Clear',
      highTemp: 24,
      icon: 'sun',
    },
    {
      id: '2',
      city: 'Manila',
      temp: 26,
      condition: 'Light Rain',
      highTemp: 29,
      icon: 'rain',
    },
    {
      id: '3',
      city: 'Tagaytay',
      temp: 22,
      condition: 'Cloudy',
      highTemp: 25,
      icon: 'cloud',
    },
  ];

  const getWeatherIcon = (type: string, size = 56) => {
    switch (type) {
      case 'sun':
        return <SunIcon size={size} />;
      case 'cloud':
        return <CloudIcon size={size} />;
      case 'rain':
        return <CloudRainIcon size={size} />;
      default:
        return <SunIcon size={size} />;
    }
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
        {/* Weather Cards */}
        <View style={styles.cardsContainer}>
          {locations.map((location) => (
            <TouchableOpacity key={location.id} style={styles.weatherCard}>
              <View style={styles.iconContainer}>
                {getWeatherIcon(location.icon, 100)}
              </View>
              <View style={styles.contentSection}>
                <Text style={styles.cityName}>{location.city}</Text>
                <Text style={styles.tempValue}>{location.temp}°</Text>
                <Text style={styles.condition}>{location.condition}</Text>
                <Text style={styles.highTemp}>H:{location.highTemp}°</Text>
              </View>
              <TouchableOpacity style={styles.deleteButton}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </Svg>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Location Button */}
        <TouchableOpacity style={styles.addButton} accessibilityLabel="Add Location">
          <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
            <Circle cx="20" cy="20" r="20" fill="#B0BEC5" opacity={0.5} />
            <Path d="M20 10V30M10 20H30" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
          </Svg>
          <Text style={styles.addButtonLabel}>ADD LOCATION</Text>
        </TouchableOpacity>
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
  cardsContainer: {
    marginTop: 60,
    gap: 12,
  },
  weatherCard: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 100,
  },
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contentSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 64,
  },
  cityName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 4,
  },
  tempValue: {
    color: '#fff',
    fontSize: 80,
    fontWeight: '100',
    marginBottom: 4,
  },
  condition: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 16,
    marginBottom: 2,
  },
  highTemp: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  deleteButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    paddingVertical: 20,
    gap: 12,
  },
  addButtonLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
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
