import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../styles/theme.style';

interface ScreenDescriptionProps {
  //centerDescription?: boolean;
  description: string;
  title: string;
}

const ScreenDescription: React.FC<ScreenDescriptionProps> = ({ description, title }) => {
  return (
    <View>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={[styles.description]}>{description}</Text>
    </View>
  );
};

export default ScreenDescription;

const styles = StyleSheet.create({
  description: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_L,
    lineHeight: 24,
  },
  title: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_HEADING,
    fontSize: theme.FONT_SIZE_XXXXL,
    marginBottom: 12,
    textAlign: 'center',
  },
});
