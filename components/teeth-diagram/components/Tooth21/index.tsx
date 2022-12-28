'use client';

import React from 'react';
import { Tooth21 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root21 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView21 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth21 = () => {
  return (
    <Container>
      <Tooth>
        <Root21 />
        <CrownSideView21 />
      </Tooth>
    </Container>
  );
};
