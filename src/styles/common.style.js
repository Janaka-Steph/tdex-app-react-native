import { StyleSheet } from 'react-native';

import theme from './theme.style';

export default StyleSheet.create({
  btn: {
    padding: 10,
    borderWidth: 1,
  },
  headingLarge: {
    color: theme.COLOR_SECONDARY_TINTED,
    fontFamily: theme.FONT_HEADING,
    fontSize: theme.FONT_SIZE_XL,
  },
});
