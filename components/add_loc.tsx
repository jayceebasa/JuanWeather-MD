import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  onBack?: () => void;
};

export default function AddLoc({ onBack }: Props) {
  const insets = useSafeAreaInsets();

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
        <Text style={styles.backLabel}>Back</Text>
      </TouchableOpacity>

      <View style={[styles.container, { paddingTop: insets.top + 12 }]}> 
        <Text style={styles.title}>Add Location</Text>
        <Text style={styles.hint}>This is where you'd implement adding a new location.</Text>
      </View>
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
    backgroundColor: '#515151b3',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 12,
  },
  hint: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#2b6cb0',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  backText: {
    color: '#fff',
    fontWeight: '600',
  },
  backIconContainer: {
    position: 'absolute',
    left: 12,
    // allow horizontal layout for icon + label
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
