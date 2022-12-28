'use client';

import React from 'react';
import { Tooth28 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root28,
  Root28Left,
  Root28Middle,
  Root28Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView28 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth28 = () => {
  return (
    <Container>
      <Tooth>
        <Root28>
          <Root28Middle />
          <Root28Left />
          <Root28Right />
        </Root28>
        <CrownSideView28 />
      </Tooth>
    </Container>
  );
};
