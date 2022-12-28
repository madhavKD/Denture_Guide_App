'use client';

import React from 'react';
import { Tooth45 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root45 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView45 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth45 = () => {
  return (
    <Container>
      <Tooth>
        <Root45 />
        <CrownSideView45 />
      </Tooth>
    </Container>
  );
};
