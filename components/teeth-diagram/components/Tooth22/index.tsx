'use client';

import React from 'react';
import { Tooth22 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root22 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView22 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth22 = () => {
  return (
    <Container>
      <Tooth>
        <Root22 />
        <CrownSideView22 />
      </Tooth>
    </Container>
  );
};
