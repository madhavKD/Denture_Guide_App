'use client';

import React from 'react';
import { Tooth13 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root13 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView13 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth13 = () => {
  return (
    <Container>
      <Tooth>
        <Root13 />
        <CrownSideView13 />
      </Tooth>
    </Container>
  );
};
