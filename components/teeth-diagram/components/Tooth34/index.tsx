'use client';

import React from 'react';
import { Tooth34 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root34 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView34 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth34 = () => {
  return (
    <Container>
      <Tooth>
        <Root34 />
        <CrownSideView34 />
      </Tooth>
    </Container>
  );
};
