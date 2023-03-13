import React from 'react';

import ScreenDescription from '../../components/ScreenDescription';
import Shell from '../../components/Shell';

const Explorers: React.FC = () => {
  return (
    <Shell>
      <ScreenDescription
        description="Select a preset of backend APIs Electrs-compatible and frontend explorers Esplora-compatible or enter custom compatible endpoints."
        title="Set explorer endpoints"
      />
    </Shell>
  );
};

export default Explorers;
