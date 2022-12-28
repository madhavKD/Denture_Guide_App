'use client';

import React from 'react';
import { Tooth38 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root38,
  Root38Left,
  Root38Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView38 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth38 = () => {
  return (
    <Container>
      <Tooth>
        <Root38>
          <Root38Right />
          <Root38Left />
        </Root38>
        <CrownSideView38 />
      </Tooth>
    </Container>
  );
};
