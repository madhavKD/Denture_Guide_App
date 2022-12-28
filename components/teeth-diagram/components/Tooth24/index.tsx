'use client';

import React from 'react';
import { Tooth24 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root24,
  Root24Left,
  Root24Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView24 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth24 = () => {
  return (
    <Container>
      <Tooth>
        <Root24>
          <Root24Left />
          <Root24Right />
        </Root24>
        <CrownSideView24 />
      </Tooth>
    </Container>
  );
};
