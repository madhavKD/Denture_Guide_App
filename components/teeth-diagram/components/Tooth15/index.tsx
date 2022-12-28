'use client';

import React from 'react';
import { Tooth15 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import { Root15 } from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView15 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth15 = () => {
  return (
    <Container>
      <Tooth>
        <Root15 />
        <CrownSideView15 />
      </Tooth>
    </Container>
  );
};
