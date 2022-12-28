'use client';

import React from 'react';
import { Tooth12 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root12 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView12 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth12 = () => {
  return (
    <Container>
      <Tooth>
        <Root12 />
        <CrownSideView12 />
      </Tooth>
    </Container>
  );
};
