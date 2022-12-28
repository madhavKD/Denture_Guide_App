'use client';

import React from 'react';
import { Tooth25 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root25 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView25 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth25 = () => {
  return (
    <Container>
      <Tooth>
        <Root25 />
        <CrownSideView25 />
      </Tooth>
    </Container>
  );
};
