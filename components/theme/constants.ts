// Color Palette
export const Colors = {
  // Backgrounds
  containerBg: '#5151519a',
  cardBg: 'rgba(47, 46, 46, 0.68)',
  darkBg: '#1b1b1bc4',
  
  // Text
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.8)',
    tertiary: 'rgba(255, 255, 255, 0.6)',
    quaternary: 'rgba(255, 255, 255, 0.5)',
    light: 'rgba(255, 255, 255, 0.4)',
    muted: 'rgba(255, 255, 255, 0.7)',
  },
  
  // Accents
  accent: '#81c784',
  accentLight: '#4caf50',
  danger: 'rgba(186, 30, 30, 0.79)',
  
  // UI Elements
  border: 'rgba(255, 255, 255, 0.1)',
  overlay: 'rgba(0, 0, 0, 0.2)',
  iconBg: 'rgba(255, 255, 255, 0.1)',
  iconBgAccent: 'rgba(129, 199, 132, 0.15)',
  
  // Weather
  sun: '#FCD34D',
  cloud: '#E5E7EB',
  rain: '#93C5FD',
  
  // Toggle/Switch
  switchTrackOff: '#767577',
  switchTrackOn: '#81c784',
  switchThumbOff: '#f4f3f4',
};

// Spacing
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 30,
};

// Border Radius
export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 30,
  full: 32,
};

// Font Sizes
export const FontSizes = {
  xs: 11,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 22,
  '3xl': 24,
  '4xl': 28,
  '5xl': 80,
  '6xl': 72,
};

// Font Weights
export const FontWeights = {
  light: '100',
  normal: '300',
  medium: '500',
  semibold: '600',
  bold: '600',
};

// Common Styles
export const CommonStyles = {
  container: {
    flex: 1 as const,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxxl,
    backgroundColor: Colors.containerBg,
  },
  titleCard: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xxl,
    alignItems: 'center' as const,
    marginBottom: Spacing.xxl,
    marginTop: 60,
  },
  card: {
    backgroundColor: Colors.cardBg,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
    minHeight: 60,
  },
  backIconContainer: {
    position: 'absolute' as const,
    left: 12,
    minWidth: 64,
    height: 44,
    flexDirection: 'row' as const,
    paddingHorizontal: 8,
    justifyContent: 'flex-start' as const,
    alignItems: 'center' as const,
    zIndex: 10,
  },
};
