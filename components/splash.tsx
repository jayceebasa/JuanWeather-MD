import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

type Props = {
  onFinish: () => void;
};

export default function Splash({ onFinish }: Props) {
  useEffect(() => {
    // Show splash for 2-3 seconds before transitioning to home
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(81, 81, 81, 0.3)',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
