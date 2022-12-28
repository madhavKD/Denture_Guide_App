'use client';

import React from 'react';
import { Tooth32 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root32 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView32 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth32 = () => {
  return (
    <Container>
      <Tooth>
        <Root32 />
        <CrownSideView32 />
      </Tooth>
    </Container>
  );
};
