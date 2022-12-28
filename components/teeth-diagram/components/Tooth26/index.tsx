'use client';

import React from 'react';
import { Tooth26 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root26,
  Root26Left,
  Root26Middle,
  Root26Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView26 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth26 = () => {
  return (
    <Container>
      <Tooth>
        <Root26>
          <Root26Middle />
          <Root26Left />
          <Root26Right />
        </Root26>
        <CrownSideView26 />
      </Tooth>
    </Container>
  );
};
