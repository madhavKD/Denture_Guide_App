'use client';

import React from 'react';
import { Tooth14 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root14,
  Root14Left,
  Root14Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView14 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth14 = () => {
  return (
    <Container>
      <Tooth>
        <Root14>
          <Root14Right />
          <Root14Left />
        </Root14>
        <CrownSideView14 />
      </Tooth>
    </Container>
  );
};
