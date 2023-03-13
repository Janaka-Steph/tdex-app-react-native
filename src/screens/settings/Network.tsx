import React from 'react';

import ScreenDescription from '../../components/ScreenDescription';
import Shell from '../../components/Shell';

const Network: React.FC = () => {
  return (
    <Shell>
      <ScreenDescription
        description="Select a network between mainnet, testnet and regtest"
        title="Set network"
      />
    </Shell>
  );
};

export default Network;
