'use client';

import React from 'react';
import { Tooth47 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root47,
  Root47Left,
  Root47Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView47 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth47 = () => {
  return (
    <Container>
      <Tooth>
        <Root47>
          <Root47Right />
          <Root47Left />
        </Root47>
        <CrownSideView47 />
      </Tooth>
    </Container>
  );
};
