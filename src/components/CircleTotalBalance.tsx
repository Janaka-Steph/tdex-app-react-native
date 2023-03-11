import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';

import theme from '../styles/theme.style';

interface CircleTotalBalanceProps {
  fiatBalance?: string;
  lbtcUnit?: string;
  totalBalance?: string;
}

const CircleTotalBalance: React.FC<CircleTotalBalanceProps> = ({
  fiatBalance,
  lbtcUnit,
  totalBalance,
}) => {
  return (
    <LinearGradient
      colors={['#333333FF', '#0F0F0FFF']}
      style={styles.outerContainer}
      start={{ x: 0, y: 0 }}
    >
      <LinearGradient
        colors={['#333333FF', '#0F0F0FFF']}
        style={styles.innerContainer}
        start={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>Total Balance</Text>
        <Text style={styles.amount}>12.56788</Text>
        <Text style={styles.ticker}>L-BTC</Text>
        <Text style={styles.fiat}>23780.93 EUR</Text>
      </LinearGradient>
    </LinearGradient>
  );
};

export default CircleTotalBalance;

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    borderRadius: (Dimensions.get('window').width * 0.6) / 2,
    height: Dimensions.get('window').width * 0.6,
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.6,
  },
  innerContainer: {
    alignItems: 'center',
    borderRadius: (Dimensions.get('window').width * 0.5) / 2,
    height: Dimensions.get('window').width * 0.5,
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.5,
  },
  title: {
    color: theme.COLOR_SECONDARY_TINTED,
    fontFamily: theme.FONT_HEADING,
    fontSize: theme.FONT_SIZE_L,
  },
  amount: {
    color: theme.COLOR_TERTIARY_TINTED,
    fontFamily: theme.FONT_SUB,
    fontSize: theme.FONT_SIZE_XXL,
  },
  ticker: {
    color: theme.COLOR_SECONDARY_TINTED,
    fontFamily: theme.FONT_SUB,
    fontSize: theme.FONT_SIZE_L,
  },
  fiat: {
    color: theme.COLOR_TERTIARY,
    fontFamily: theme.FONT_SUB_HEADING,
    fontSize: theme.FONT_SIZE_MD,
    marginTop: 4,
  },
});
