import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  onBack?: () => void;
};

const ToggleIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M6 9h12M6 15h12" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

export default function SOSSettings({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const [toggleLocation, setToggleLocation] = useState(true);
  const [messageTemplate, setMessageTemplate] = useState('My name is...');

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
          <Text style={styles.title}>SOS Settings</Text>
        </View>

        {/* Settings Items */}
        <View style={styles.settingsContainer}>
          {/* Toggle Location */}
          <View style={styles.settingItem}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemTitle}>Toggle location</Text>
            </View>
            <Switch
              style={styles.toggle}
              value={toggleLocation}
              onValueChange={setToggleLocation}
              trackColor={{ false: '#767577', true: '#81c784' }}
              thumbColor={toggleLocation ? '#4caf50' : '#f4f3f4'}
            />
          </View>

          {/* Message Template */}
          <View style={styles.settingItem}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemTitle}>Message Template</Text>
            </View>
            <View style={styles.messageBox}>
              <Text style={styles.messageText}>{messageTemplate}</Text>
            </View>
          </View>

          {/* Message Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter message template"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              value={messageTemplate}
              onChangeText={setMessageTemplate}
            />
          </View>

          {/* Send Text SOS Button */}
          <TouchableOpacity style={styles.sosButton}>
            <Text style={styles.sosButtonText}>Send Text SOS</Text>
          </TouchableOpacity>
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
    minHeight: 60,
  },
  itemLeft: {
    flex: 1,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  toggle: {
    marginLeft: 12,
  },
  messageBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: 120,
  },
  messageText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
  inputContainer: {
    marginTop: 4,
  },
  input: {
    backgroundColor: 'rgba(47, 46, 46, 0.68)',
    borderRadius: 12,
    padding: 14,
    color: '#fff',
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  sosButton: {
    backgroundColor: 'rgba(186, 30, 30, 0.79)',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  sosButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
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
