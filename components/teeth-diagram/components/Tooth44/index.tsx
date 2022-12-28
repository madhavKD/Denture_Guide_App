'use client';

import React from 'react';
import { Tooth44 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root44 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView44 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth44 = () => {
  return (
    <Container>
      <Tooth>
        <Root44 />
        <CrownSideView44 />
      </Tooth>
    </Container>
  );
};
