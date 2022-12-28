'use client';

import React from 'react';
import { Tooth27 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root27,
  Root27Left,
  Root27Middle,
  Root27Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView27 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth27 = () => {
  return (
    <Container>
      <Tooth>
        <Root27>
          <Root27Middle />
          <Root27Left />
          <Root27Right />
        </Root27>
        <CrownSideView27 />
      </Tooth>
    </Container>
  );
};
