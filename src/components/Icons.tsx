import BtcIcon from '../assets/img/coins/btc.svg';
import CurrencyPlaceholderIcon from '../assets/img/coins/currency-placeholder.svg';
import DepositIcon from '../assets/img/deposit.svg';
import SwapIcon from '../assets/img/swap-circle-white.svg';
import { TxType } from '../stores/walletStore';

export const TxIcon = ({ type }: any): any => {
  switch (type) {
    case TxType.Swap:
      return <SwapIcon />;
    case TxType.Deposit:
      return <DepositIcon />;
    case TxType.Withdraw:
      return <DepositIcon />;
    case TxType.DepositBtc:
      return <BtcIcon />;
    default:
      return <CurrencyPlaceholderIcon />;
  }
};
