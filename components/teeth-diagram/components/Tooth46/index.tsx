'use client';

import React from 'react';
import { Tooth46 as Tooth } from '@dechea/hes.ui.foundations.teeth.areas.tooth';
import {
  Root46,
  Root46Left,
  Root46Right,
} from '@dechea/hes.ui.foundations.teeth.areas.root';
import { CrownSideView46 } from '@dechea/hes.ui.foundations.teeth.areas.crown-side-view';
import { Container } from '../Container';

export const Tooth46 = () => {
  return (
    <Container>
      <Tooth>
        <Root46>
          <Root46Right />
          <Root46Left />
        </Root46>
        <CrownSideView46 />
      </Tooth>
    </Container>
  );
};
