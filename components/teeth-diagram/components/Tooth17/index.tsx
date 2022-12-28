'use client';

import React from 'react';
import { Tooth17 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root17,
  Root17Left,
  Root17Middle,
  Root17Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView17 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth17 = () => {
  return (
    <Container>
      <Tooth>
        <Root17>
          <Root17Middle />
          <Root17Left />
          <Root17Right />
        </Root17>
        <CrownSideView17 />
      </Tooth>
    </Container>
  );
};
