import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import theme from '../styles/theme.style';

interface BigButtonProps {
  disabled?: boolean;
  icon?: JSX.Element;
  style?: any;
  text: string;
}

const BigButton: React.FC<BigButtonProps> = ({ disabled, icon, style, text }) => {
  icon = icon ? <View style={[styles.button.icon]}>{icon}</View> : null;
  return (
    <TouchableOpacity style={[styles.button, disabled ? styles.button.disabled : null, style]}>
      {icon}
      <Text style={[styles.button.text, disabled ? styles.button.textDisabled : null]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_PRIMARY_TRANSPARENT,
    borderColor: theme.COLOR_PRIMARY,
    borderRadius: 40,
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    //
    icon: {
      marginRight: 6,
    },
    text: {
      color: theme.COLOR_PRIMARY,
      fontFamily: theme.FONT_HEADING,
      fontSize: theme.FONT_SIZE_L,
    },
    textDisabled: {
      color: theme.COLOR_SECONDARY_TINTED,
    },
    disabled: {
      backgroundColor: 'transparent',
      borderColor: theme.COLOR_SECONDARY_TINTED,
    },
  },
});
