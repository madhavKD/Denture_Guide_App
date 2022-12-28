'use client';

import React from 'react';
import { Tooth11 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root11 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView11 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth11 = () => {
  return (
    <Container>
      <Tooth>
        <Root11 />
        <CrownSideView11 />
      </Tooth>
    </Container>
  );
};
