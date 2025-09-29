import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onBack?: () => void;
};

export default function AddLoc({ onBack }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}> 
      <Text style={styles.title}>Add Location</Text>
      <Text style={styles.hint}>This is where you'd implement adding a new location.</Text>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
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
});
