'use client';

import React from 'react';
import { Tooth37 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root37,
  Root37Left,
  Root37Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView37 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth37 = () => {
  return (
    <Container>
      <Tooth>
        <Root37>
          <Root37Right />
          <Root37Left />
        </Root37>
        <CrownSideView37 />
      </Tooth>
    </Container>
  );
};
