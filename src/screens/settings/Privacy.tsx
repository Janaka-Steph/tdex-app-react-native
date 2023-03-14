import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Shell from '../../components/Shell';
import theme from '../../styles/theme.style';

const Privacy: React.FC = () => {
  return (
    <Shell>
      <Text style={[styles.paragraph]}>
        Every Individual should have an inalienable right to privacy. In a world where technology is
        increasingly used to identify, monitor and track users, TDEX App takes steps in the opposite
        direction. The TDEX app does not collect or share your information. That’s our policy in a
        nutshell.
      </Text>

      <Text style={[styles.title]}>TDEX App Privacy Policy</Text>
      <Text style={[styles.title, { marginTop: 0 }]}>Information we don’t collect</Text>
      <Text style={[styles.paragraph]}>
        TDEX App doesn’t store any identifying information about your device, such as your IP
        address or your user agents or your transactions. TDEX App is designed so that it doesn’t
        store any information. You don’t need a phone number, e-mail, or any information tied to
        your identity or your Liquid Assets to use the TDEX App. TDEX App is private by default.
      </Text>

      <Text style={[styles.title]}>Information that are shared with TDEX App</Text>
      <Text style={[styles.paragraph]}>
        If you use the TDEX App on your Android or iOS phone, Google or Apple might store
        information about how you use the app. They can record when the app is closed, opened, how
        long you use it for, crash logs, and your device model. This usage information could also be
        associated with your Google or Apple account. The only information that TDEX App receives is
        the number of downloads and crashes.
      </Text>
      <Text style={[styles.paragraph]}>
        If you’re planning to use TDEX App on mobile, it’s worth reading Apple or Google’s privacy
        policies. If you’re using iOS, check out Apple’s App Store Review Guidelines. For Android,
        read the User Data section of Google’s Developer Policy Center. Also, If you download TDEX
        app and install it manually with the apk from TDEX GitHub repository check GitHub Privacy
        Statement.
      </Text>
      <Text style={[styles.paragraph]}>
        Furthermore, TDEX relies on Blockstream.info/liquid as the data source of Liquid Blockchain
        by default, but you can change from Settings {'>'} Electrum server. For FIAT amounts
        conversion it relies on CoinGecko public APIs. Also TDEX App has no influence and/or
        awareness of if and how TDEX Liquidity Providers collect or use data related to atomic swap
        transactions.
      </Text>
      <Text style={[styles.paragraph]}>This policy is effective as of 6 May 2021</Text>
    </Shell>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  title: {
    alignItems: 'flex-start',
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_HEADING,
    fontSize: theme.FONT_SIZE_XXXXL,
    marginBottom: 12,
    marginTop: 12,
    width: '100%',
  },
  paragraph: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_L,
    lineHeight: 24,
    marginBottom: 12,
    width: '100%',
  },
});
