'use client';

import React from 'react';
import { Tooth43 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root43 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView43 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth43 = () => {
  return (
    <Container>
      <Tooth>
        <Root43 />
        <CrownSideView43 />
      </Tooth>
    </Container>
  );
};
