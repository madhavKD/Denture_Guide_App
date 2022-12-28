'use client';

import React from 'react';
import { Tooth33 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root33 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView33 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth33 = () => {
  return (
    <Container>
      <Tooth>
        <Root33 />
        <CrownSideView33 />
      </Tooth>
    </Container>
  );
};
