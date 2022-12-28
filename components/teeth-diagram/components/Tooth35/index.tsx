'use client';

import React from 'react';
import { Tooth35 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root35 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView35 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth35 = () => {
  return (
    <Container>
      <Tooth>
        <Root35 />
        <CrownSideView35 />
      </Tooth>
    </Container>
  );
};
