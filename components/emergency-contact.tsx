import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { PlusIcon, PhoneIconSmall, ChevronRightIcon, BackArrowIcon } from './icons';
import { Colors, Spacing, BorderRadius, CommonStyles } from './theme/constants';

type Props = {
  onBack?: () => void;
};

interface Contact {
  id: string;
  name: string;
  phone: string;
}

export default function EmergencyContact({ onBack }: Props) {
  const insets = useSafeAreaInsets();
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Mj Bautista',
      phone: '09165543123',
    },
    {
      id: '2',
      name: 'Juan Carlos Basa',
      phone: '09165543123',
    },
    {
      id: '3',
      name: 'Charles Medel',
      phone: '09165543123',
    },
    {
      id: '4',
      name: 'Frances Balgos',
      phone: '09165543123',
    },
  ]);

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
        <BackArrowIcon />
        <Text style={styles.backLabel}>Previous</Text>
      </TouchableOpacity>

      <ScrollView style={[styles.container, { paddingTop: insets.top + 12 }]} showsVerticalScrollIndicator={false}>
        {/* Title Card */}
        <View style={styles.titleCard}>
          <Text style={styles.title}>Emergency Contact</Text>
        </View>

        {/* Contacts List */}
        <View style={styles.contactsContainer}>
          {contacts.map((contact) => (
            <TouchableOpacity key={contact.id} style={styles.contactItem}>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
              </View>
              <View style={styles.contactRight}>
                <View style={styles.phoneIconBox}>
                  <PhoneIconSmall />
                </View>
                <Text style={styles.contactPhone}>{contact.phone}</Text>
                <ChevronRightIcon />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Contact Button */}
        <TouchableOpacity style={styles.addButton} accessibilityLabel="Add Contact">
          <PlusIcon />
          <Text style={styles.addButtonLabel}>ADD CONTACT</Text>
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
    ...CommonStyles.container,
  },
  titleCard: {
    ...CommonStyles.titleCard,
  },
  title: {
    color: Colors.text.primary,
    fontSize: 24,
    fontWeight: '600',
  },
  contactsContainer: {
    gap: Spacing.md,
  },
  contactItem: {
    ...CommonStyles.card,
    minHeight: 70,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    color: Colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  contactRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  phoneIconBox: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactPhone: {
    color: Colors.text.tertiary,
    fontSize: 12,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.xxl,
    paddingVertical: Spacing.xl,
    gap: Spacing.md,
  },
  addButtonLabel: {
    color: Colors.text.muted,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
  backIconContainer: {
    ...CommonStyles.backIconContainer,
  },
  backLabel: {
    color: Colors.text.primary,
    marginLeft: Spacing.md,
    fontSize: 16,
    fontWeight: '600',
  },
});
