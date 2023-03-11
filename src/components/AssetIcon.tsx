import React, { useState } from 'react';
import { Image } from 'react-native';

import BtseIcon from '../assets/img/coins/btse.svg';
import CurrencyPlaceholderIcon from '../assets/img/coins/currency-placeholder.svg';
import LbtcIcon from '../assets/img/coins/lbtc.svg';
import LcadIcon from '../assets/img/coins/lcad.svg';
import UsdtIcon from '../assets/img/coins/usdt.svg';
import { BTSE_ASSET, LBTC_ASSET, LCAD_ASSET, USDT_ASSET } from '../utils/constants';

const CurrencyIcon: any = ({ assetHash }) => {
  const [err, setError] = useState(false);

  const featuredAssetsMap = new Map<string, JSX.Element>();
  featuredAssetsMap.set(LBTC_ASSET['liquid'].assetHash, <LbtcIcon height={48} width={48} />);
  featuredAssetsMap.set(LBTC_ASSET['testnet'].assetHash, <LbtcIcon height={48} width={48} />);
  featuredAssetsMap.set(LBTC_ASSET['regtest'].assetHash, <LbtcIcon height={48} width={48} />);
  featuredAssetsMap.set(USDT_ASSET['liquid'].assetHash, <UsdtIcon height={48} width={48} />);
  featuredAssetsMap.set(USDT_ASSET['testnet'].assetHash, <UsdtIcon height={48} width={48} />);
  featuredAssetsMap.set(LCAD_ASSET['liquid'].assetHash, <LcadIcon height={48} width={48} />);
  featuredAssetsMap.set(LCAD_ASSET['testnet'].assetHash, <LcadIcon height={48} width={48} />);
  featuredAssetsMap.set(BTSE_ASSET['liquid'].assetHash, <BtseIcon height={48} width={48} />);
  featuredAssetsMap.set(BTSE_ASSET['testnet'].assetHash, <BtseIcon height={48} width={48} />);
  const svgIcon = featuredAssetsMap.get(assetHash);

  if (err) {
    return <CurrencyPlaceholderIcon height={48} width={48} />;
  }
  if (svgIcon) {
    return svgIcon;
  } else {
    return (
      <Image
        source={{ uri: `https://liquid.network/api/v1/asset/${assetHash}/icon` }}
        style={{ width: 48, height: 48 }}
        onError={() => setError(true)}
      />
    );
  }
};

export default CurrencyIcon;
