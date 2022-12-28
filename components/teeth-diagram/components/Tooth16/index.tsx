'use client';

import React from 'react';
import { Tooth16 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root16,
  Root16Left,
  Root16Middle,
  Root16Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView16 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth16 = () => {
  return (
    <Container>
      <Tooth>
        <Root16>
          <Root16Middle />
          <Root16Left />
          <Root16Right />
        </Root16>
        <CrownSideView16 />
      </Tooth>
    </Container>
  );
};
