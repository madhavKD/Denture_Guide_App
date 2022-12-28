'use client';

import React from 'react';
import { Tooth41 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root41 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView41 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth41 = () => {
  return (
    <Container>
      <Tooth>
        <Root41 />
        <CrownSideView41 />
      </Tooth>
    </Container>
  );
};
