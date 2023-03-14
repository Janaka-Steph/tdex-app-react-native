import { StyleSheet } from 'react-native';

import theme from './theme.style';

export default StyleSheet.create({
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
  input: {
    backgroundColor: theme.COLOR_SECONDARY,
    borderRadius: 8,
    color: theme.COLOR_TEXT,
    marginTop: 50,
    padding: 20,
    width: '100%',
  },
  inputPlaceholder: { color: theme.COLOR_TERTIARY },
} as const);
