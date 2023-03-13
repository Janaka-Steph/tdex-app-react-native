import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import theme from '../styles/theme.style';

const Shell: React.FC<any> = ({ children, style }) => {
  return (
    <LinearGradient
      colors={[theme.COLOR_SECONDARY_BIS, theme.COLOR_SECONDARY_SHADED]}
      style={[styles.gradient]}
    >
      <ScrollView contentContainerStyle={[styles.container, style]}>{children}</ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 16,
    paddingTop: 20,
  },
});

export default Shell;
