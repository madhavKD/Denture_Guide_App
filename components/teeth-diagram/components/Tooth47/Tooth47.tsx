// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth47), { ssr: false });
const Root47 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root47), { ssr: false });
const Root47Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root47Left), { ssr: false });
const Root47Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root47Right), { ssr: false });
const CrownSideView47 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView47), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot47 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot47), { ssr: false });
const MissingRoot47Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot47Left), { ssr: false });
const MissingRoot47Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot47Right), { ssr: false });
const ArtificialCrown47 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown47), { ssr: false });
const Prosthesis47 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis47), { ssr: false });
const MissingCrown47 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown47), { ssr: false });

import { Container } from '../Container';

export const Tooth47 = () => {
  return (
    <Container>
      <Tooth>
        <Root47 enable={true}>
          <Root47Right enable={true} />
          <Root47Left enable={true} />
        </Root47>

        <ImplantLowerJaw enable={false} />

        <MissingRoot47 enable={false}>
          <MissingRoot47Right enable={false} />
          <MissingRoot47Left enable={false} />
        </MissingRoot47>

        <CrownSideView47 enable={true} />
        <ArtificialCrown47 enable={false} />
        <Prosthesis47 enable={false} />
        <MissingCrown47 enable={false} />
      </Tooth>
    </Container>
  );
};
