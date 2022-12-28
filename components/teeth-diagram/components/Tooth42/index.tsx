'use client';

import React from 'react';
import { Tooth42 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root42 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView42 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth42 = () => {
  return (
    <Container>
      <Tooth>
        <Root42 />
        <CrownSideView42 />
      </Tooth>
    </Container>
  );
};
