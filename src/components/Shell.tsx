import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import theme from '../styles/theme.style';

const Shell: React.FC<any> = ({ children }) => {
  return (
    <LinearGradient
      colors={[theme.COLOR_SECONDARY, theme.COLOR_SECONDARY_SHADED]}
      style={[styles.gradient]}
    >
      <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
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
