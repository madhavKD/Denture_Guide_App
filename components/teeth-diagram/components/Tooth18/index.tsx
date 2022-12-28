'use client';

import React from 'react';
import { Tooth18 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root18,
  Root18Left,
  Root18Middle,
  Root18Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView18 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth18 = () => {
  return (
    <Container>
      <Tooth>
        <Root18>
          <Root18Middle />
          <Root18Left />
          <Root18Right />
        </Root18>
        <CrownSideView18 />
      </Tooth>
    </Container>
  );
};
