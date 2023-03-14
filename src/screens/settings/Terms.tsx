import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Shell from '../../components/Shell';
import { ListItem, OrderedList } from '../../components/list/List';
import theme from '../../styles/theme.style';

const Terms: React.FC = () => {
  return (
    <Shell style={{ paddingBottom: 12 }}>
      <Text style={[styles.title, { marginTop: 0 }]}>Premise</Text>
      <Text style={[styles.paragraph]}>
        These terms and conditions (hereinafter referred to also as “T. & .C.”) represent the entire
        agreement between the user (hereinafter defined as “User” or in the plural as “Users”
        collectively) and Seven Labs Limited, a company duly registered and incorporated under the
        laws of Malta with Tax ID MT27141837 and whose registered office is in “6, Villa Gauci,
        Mdina Road, Balzan, BZN, 09031 Malta EE (hereinafter referred to as the “Company”).
      </Text>
      <Text style={[styles.paragraph]}>
        By downloading, installing the TDEX App through or by proceeding with an update for the App
        when offered a choice of proceeding or not, Users agree to be bound by these T. & .C.
      </Text>

      <Text style={[styles.title]}>Terms</Text>
      <OrderedList style={[styles.orderedList]}>
        <ListItem>The User represents and warrants that he/she:</ListItem>
        <OrderedList>
          <ListItem>has the power and capacity to enter into this agreement;</ListItem>
          <ListItem>
            deems to be a person who is very knowledgeable about cryptocurrency generally and
            non-custodial wallets in particular;
          </ListItem>
          <ListItem>
            is perfectly aware of the risks commonly associated with cryptocurrency generally and
            the use of non-custodial wallets in particular.
          </ListItem>
        </OrderedList>
        <ListItem>
          TDEX application (hereinafter referred to as the “App”) is a reference application of the
          TEDX.Network open source project (https://github.com/TDex-network/whitepaper). The App
          allows users to access the TDEX protocol and might serve as a non-custodial wallet for any
          Liquid Asset (https://blockstream.com/liquid/).
        </ListItem>
        <ListItem>
          The App may be downloaded on any available store or on Github at the following link:
          https://github.com/TDex-network. The App is provided on an “as is” and “as available”
          basis without any representation or warranty of any kind, whether express or implied, to
          the maximum extent permitted by applicable laws. Specifically, the Company disclaims any
          implied warranties of title, merchantability, fitness for a particular purpose and/or
          non-infringement.
        </ListItem>
        <ListItem>
          By downloading and installing the App users shall have access to the following functions:
        </ListItem>
        <OrderedList>
          <ListItem>
            generate a PIN (Personal identification Number) and the mnemonic phrase (the list of
            words that store all the information needed for the recovery of your wallet) for your
            non custodial wallet;
          </ListItem>
          <ListItem>receive and send any Liquid Asset;</ListItem>
          <ListItem>
            access and connect to TDEX.network for the swap of any Liquid Asset with other Liquid
            Assets considering the pairs offered by any Liquidity provider on the TDEX.network.
          </ListItem>
        </OrderedList>
        <ListItem>Users acknowledge that:</ListItem>
        <OrderedList>
          <ListItem>
            The Company does not store or have access to their mnemonic phrase, PIN or private keys.
          </ListItem>
          <ListItem>
            It is therefore their responsibility to carefully guard the mnemonic phrase and PINs and
            to have a backup of the private keys.
          </ListItem>
          <ListItem>
            If a User forgets or loses his means of authentication the Company has no way to recover
            them and the user may permanently lose access to any Assets stored in the wallet.
          </ListItem>
          <ListItem>
            Therefore the Company has no responsibility and will not be liable for any loss or
            damage a User may suffer from the loss or misappropriation of his mnemonic phrase, PINs
            and private keys.
          </ListItem>
        </OrderedList>
        <ListItem>
          Users acknowledge that the App is based on an open source project. Any further
          explanations regarding the functions of the App shall be found on
          https://github.com/TDex-network.
        </ListItem>
        <ListItem>
          The App and TDEX protocol are under the MIT Licence
          (https://github.com/TDex-network/tdex-specs/blob/master/LICENSE)
        </ListItem>
        <ListItem>The App shall be used in accordance with the above MIT Licence</ListItem>
        <ListItem>
          The App may be integrated with third party services. The Company is not responsible for
          any third party services and will not be liable for any loss or damage caused by third
          party services.
        </ListItem>
        <ListItem>
          The Company may add or remove functions or features of the App. The User may always stop
          using the App at any time.
        </ListItem>
        <ListItem>
          Users represent and warrant that they are using the App, in accordance with applicable
          laws, and not for any purpose not in compliance with applicable laws, including but not
          limited to illegal gambling, fraud, money laundering or terrorist activities.
        </ListItem>
        <ListItem>
          In no event will the Company, its directors, officers, employees, suppliers, agents or
          affiliates be liable for any loss or damages, including without limitation, direct,
          indirect, special, consequential, exemplary or punitive loss or damages, arising from or
          related to the use of the App including but not limited to loss of or inability to access
          or transact data, profit and Digital Assets.
        </ListItem>
        <OrderedList>
          <ListItem>
            Without limiting the generality of the foregoing, the Company takes no responsibility
            for and will not be liable for any financial or other loss or damage arising from or
            related to the use of the App including but not limited to any of the following:
          </ListItem>
          <OrderedList>
            <ListItem>financial loss due to App access being &quot;Brute-forced&quot;</ListItem>
            <ListItem>financial loss due to data loss</ListItem>
            <ListItem>financial loss due to hacks or unavailability</ListItem>
            <ListItem>financial loss due to forgotten mnemonics phrase, PINs or passwords</ListItem>
            <ListItem>financial loss due to inability to transact.</ListItem>
            <ListItem>financial loss due to errors calculating network fees</ListItem>
            <ListItem>
              financial loss due to incorrectly constructed transactions or mistyped Liquid
              addresses
            </ListItem>
            <ListItem>
              financial loss due to &quot;phishing&quot; or other websites masquerading as TDEX
            </ListItem>
          </OrderedList>
        </OrderedList>
        <ListItem>
          The Company takes no responsibility for, and will not be liable for, the App being
          unavailable due to technical or other issues beyond its control.
        </ListItem>
        <ListItem>
          The total liability of the Company, its directors, officers, employees, suppliers, agents
          or affiliates arising from or related to the use of the App, in the aggregate for all
          claims, is limited to 100.00 EUR.
        </ListItem>
        <ListItem>
          Users will hold harmless and indemnify the Company, its directors, officers, employees,
          suppliers, agents or affiliates from and against any claim, suit or action arising from or
          related to their use of the App or a violation of these T. & .C, including any liability
          arising from claims, losses, damages, suits, judgments, litigation costs and attorneys’
          fees.
        </ListItem>
        <ListItem>
          The Company has no control over and does not make any representations regarding the value
          of any Digital Asset, or the operation of the underlying software protocols which govern
          the operation of Digital Assets available on the TDEX.Network. The Company assumes no
          responsibility for the operation of the underlying protocols and is not able to guarantee
          their functionality, security or availability.
        </ListItem>
        <ListItem>
          The information contained on the Website tdex.network is for general information purposes
          only. The Company makes no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, suitability or availability with respect to
          the Website tdex.network or the information, products, services, or related graphics
          contained on the Website tdex.network for any purpose. Any reliance a User places on such
          information is therefore strictly at his/her own risk.
        </ListItem>
        <ListItem>
          Data Protection – Users acknowledge that the Company shall not collect, use, store and
          process personal data in relation to them in accordance with the Privacy Policy.
        </ListItem>
        <ListItem>
          Governing law and dispute resolution - These T. & .C shall be governed, interpreted and
          construed in accordance with Lex Mercatoria.
        </ListItem>
      </OrderedList>

      <Text style={[styles.paragraph, { marginTop: 20 }]}>
        Users irrevocably agree that (a) the Maltes courts shall have exclusive jurisdiction to
        settle any dispute which may arise under or in connection with these T. & .C (including a
        relating to the existence, validity or termination of these T. & .C. or any non-contractual
        obligation arising out of or connection with these T. & .C (an “Action”)); (b) the courts of
        Malta are the most appropriate and convenient courts to settle Actions and accordingly no
        party will argue to the contrary; and (c) Sections (a) and (b) are for the benefit of the
        Company only and, as a result, the Company shall not be prevented from taking proceedings
        relating to an Action in any other courts with jurisdiction. To the extent allowed by law,
        the Company may take concurrent proceedings in any number of jurisdictions.
      </Text>
    </Shell>
  );
};

export default Terms;

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
  orderedList: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_L,
    width: '100%',
  },
});
