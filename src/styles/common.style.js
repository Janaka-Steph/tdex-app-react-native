import { StyleSheet } from 'react-native';

import theme from './theme.style';

export default StyleSheet.create({
  buttonFullWidth: {
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
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%',
  },
  headingLarge: {
    color: theme.COLOR_SECONDARY_TINTED,
    fontFamily: theme.FONT_HEADING,
    fontSize: theme.FONT_SIZE_XL,
  },
  list: {
    marginBottom: 20,
    width: '100%',
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_SECONDARY,
    borderRadius: 8,
    color: theme.COLOR_TEXT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    padding: 16,
    width: '100%',
  },
});
