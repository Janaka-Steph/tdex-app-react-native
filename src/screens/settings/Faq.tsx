import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Shell from '../../components/Shell';
import theme from '../../styles/theme.style';

const Faq: React.FC = () => {
  return (
    <Shell>
      <Text style={[styles.title, { marginTop: 0 }]}>What is TDEX App?</Text>
      <Text style={[styles.paragraph]}>
        T(True)DEX App is the reference implementation of the open source TDEX protocol
      </Text>

      <Text style={[styles.title]}>What is TDEX protocol?</Text>
      <Text style={[styles.paragraph]}>
        It is the first-of-its-kind atomic-swap based decentralized exchange (DEX) protocol built on
        the Liquid Network. It is a community-oriented, open-source solution that aims to become the
        framework for a fast and secure secondary market for Liquid Assets. TDEX facilitates
        liquidity generation in a way that leverages Bitcoin’s security but mitigates its privacy
        and fungibility shortcomings, thus strengthening the foundation for Liquid Finance
        (LiFi)—the Liquid Network’s version of Decentralised Finance (DeFi).
      </Text>

      <Text style={[styles.title]}>What is the Liquid Network?</Text>
      <Text style={[styles.paragraph]}>
        The Liquid Network is an Elements-based Bitcoin sidechain, developed by Blockstream. As a
        decentralised settlement network for traders and exchanges, it enables faster and truly
        confidential transactions in Bitcoin and Tether. Further, it facilitates the issuance of
        custom digital assets, a.k.a Issued Assets. A globally distributed Strong Federation secures
        and validates transactions on the network, thereby eliminating any single point of failure.
        To know more, read the Liquid White Paper.
      </Text>

      <Text style={[styles.title]}>How can I get Liquid Bitcoin (L-BTC)?</Text>
      <Text style={[styles.paragraph]}>
        There are several ways of acquiring L-BTC, you can peg in BTC in the TDEX App or buy L-BTC
        from several third parties.
      </Text>
      <Text style={[styles.paragraph]}>
        Please have a look at the list of third party sources on Liquid official website.
      </Text>

      <Text style={[styles.title]}>What is an Atomic Swap?</Text>
      <Text style={[styles.paragraph]}>
        Atomic Swap is a decentralised, peer-to-peer method for exchanging crypto-assets without
        involving any third-party intermediary. This is an instantaneous process, with almost
        real-time settlement, and wherein the counterparties are in complete control.
      </Text>

      <Text style={[styles.title]}>What is a Confidential Transaction?</Text>
      <Text style={[styles.paragraph]}>
        Any transaction has two main elements—amount and asset type. Confidential Transaction (CT)
        is a method for hiding this information, despite proving to any verifier that the input and
        output values add up to zero. Developed by Gregory Maxwell, CTs leverage Pedersen
        Commitments to eliminate double-spending and other risks, while upholding privacy. To know
        more, read the paper on Bulletproofs by Poelstra et al.
      </Text>

      <Text style={[styles.title]}>Who is a Liquidity Provider?</Text>
      <Text style={[styles.paragraph]}>
        A Liquidity Provider (Provider) on TDEX is, basically, the equivalent of what is commonly
        known as a market maker. They provide liquidity to the exchange’s tradeable asset pairs by
        holding mutually-pegged pairs comprising a Quote Asset and a Base Asset. This applies to any
        asset pair and not necessarily the bitcoin-pegged ones. TDEX incentivizes Providers to run
        always-on endpoints, which substantially resolves the problem of Double Coincidence of
        Wants. The primary role of Provides on TDEX is to ensure that traders have readily available
        markets, which has been a consistent pain point for most DEXs. Traders, in turn, can
        discover Providers using the TDEX App or any other end-point based on the TDEX SDK.
      </Text>

      <Text style={[styles.title]}>Can I become a Liquidity Provider on TDEX?</Text>
      <Text style={[styles.paragraph]}>
        Yes, of course. TDEX is open-source, meaning anyone can join as a liquidity provider or a
        trader or a developer. To participate as a Provider, you have to run an always on server
        (Daemon) on the network—in accordance with the Trade Protocol—either by running it through
        Docker or as a Standalone entity.
      </Text>

      <Text style={[styles.title]}>I lost my PIN, help!</Text>
      <Text style={[styles.paragraph]}>
        Forgetting your PIN is not a very big issue, as long as you remember your mnemonic. If you
        can’t log in to your wallet using the PIN, you can restore it using the mnemonic.
      </Text>

      <Text style={[styles.title]}>I lost my mnemonic, help!</Text>
      <Text style={[styles.paragraph]}>
        Sorry for your loss, but there’s no way to retrieve your mnemonic if you lose it. TDEX
        doesn’t have access to your mnemonic and can’t help you in this case. Ideally, it’s
        advisable to write your mnemonic down and store it safely. However, if you do remember your
        PIN, you can use it to login and retrieve your mnemonic from the wallet’s settings menu.
      </Text>

      <Text style={[styles.title]}>How to reinstall TDEX App, help!</Text>
      <Text style={[styles.paragraph]}>
        Never delete your App before deleting the mnemonic if you want to wipe out and reinstall
        fresh. So, before deleting your app you need hit Settings menu {'>'} Account {'>'} Delete
        mnemonic. Now you can delete your App and start fresh!
      </Text>

      <Text style={[styles.title]}>
        Will I lose access to my Liquid Assets if my smartphone is stolen?
      </Text>
      <Text style={[styles.paragraph]}>
        Relax! You don’t have to worry if your smartphone has been stolen, but the mnemonic phrase
        is not compromised. To regain access to your Liquid Assets, all you need to do is reinstall
        the TDEX app and the wallet on your new device. However, make sure that your mnemonic isn’t
        stolen, because that is what’s ultimately required to access your assets, not just the
        physical device.
      </Text>

      <Text style={[styles.title]}>What does TDEX App charge for the service?</Text>
      <Text style={[styles.paragraph]}>
        TDEX is a truly decentralized, open-source project with a dedicated community orientation.
        By design, the protocol doesn’t charge any fees, in and of itself, at least. However,
        Liquidity Providers might charge a fee for the service that they offer, namely providing and
        maintaining liquidity for asset pairs so that you can perform swap-based trades.
      </Text>

      <Text style={[styles.title]}>How can I deposit BTC?</Text>
      <Text style={[styles.paragraph]}>
        To deposit BTC you need to perform a peg-in into the Liquid Network. You can perform a
        trustless peg-in into the network from our application.
      </Text>

      <Text style={[styles.title]}>I don’t see my deposit. How can I recover my funds?</Text>
      <Text style={[styles.paragraph]}>
        In case of incidents during the peg-in process (if you lose your device before full
        confirmation for example) it is possible to recover your funds by inputting your deposit
        address into the claim peg-in section of the application.
      </Text>

      <Text style={[styles.title]}>How long does it take for my peg-in to confirm?</Text>
      <Text style={[styles.paragraph]}>
        To successfully peg-in BTC into Liquid, 102 confirmations on the BTC blockchain are needed.
        It takes around a day for the peg-in to be completed. You can follow the process from the
        L-BTC section of the TDEX app.
      </Text>

      <Text style={[styles.title]}>Who receives the transaction fee that I’m paying?</Text>
      <Text style={[styles.paragraph]}>
        Fees are paid to the liquidity providers running daemons on the TDEX network.
      </Text>

      <Text style={[styles.title]}>Which platforms are compatible with TDEX App?</Text>
      <Text style={[styles.paragraph]}>
        TDEX App has an application for Android, which is available on Google Play Store, and one
        for iOS, which you can get from the Apple Store. Furthermore, since TDEX is open-source and
        has a robust Software Development Kit (SDK), you can build your custom apps. You can also
        contribute to the protocol’s development on GitHub
      </Text>

      <Text style={[styles.title]}>
        My question isn’t answered in this FAQ. How can I contact you?
      </Text>
      <Text style={[styles.paragraph]}>
        TDEX is an open-source project, so you can rely on community support. The primary method of
        requesting support from the community is through TDEX’s official GitHub Channel.
      </Text>

      <Text style={[styles.paragraph, { marginTop: 6 }]}>
        You can also ask on the community channel on Telegram
      </Text>
    </Shell>
  );
};

export default Faq;

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
