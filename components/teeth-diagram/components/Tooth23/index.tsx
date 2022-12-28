'use client';

import React from 'react';
import { Tooth23 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root23 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView23 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth23 = () => {
  return (
    <Container>
      <Tooth>
        <Root23 />
        <CrownSideView23 />
      </Tooth>
    </Container>
  );
};
