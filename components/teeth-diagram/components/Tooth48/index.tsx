'use client';

import React from 'react';
import { Tooth48 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root48,
  Root48Left,
  Root48Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView48 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth48 = () => {
  return (
    <Container>
      <Tooth>
        <Root48>
          <Root48Right />
          <Root48Left />
        </Root48>
        <CrownSideView48 />
      </Tooth>
    </Container>
  );
};
