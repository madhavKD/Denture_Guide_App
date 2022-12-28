'use client';

import React from 'react';
import { Tooth36 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root36,
  Root36Left,
  Root36Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView36 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth36 = () => {
  return (
    <Container>
      <Tooth>
        <Root36>
          <Root36Right />
          <Root36Left />
        </Root36>
        <CrownSideView36 />
      </Tooth>
    </Container>
  );
};
