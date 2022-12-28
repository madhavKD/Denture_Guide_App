'use client';

import React from 'react';
import { Tooth31 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root31 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView31 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth31 = () => {
  return (
    <Container>
      <Tooth>
        <Root31 />
        <CrownSideView31 />
      </Tooth>
    </Container>
  );
};
