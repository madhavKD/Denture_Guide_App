// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth38), { ssr: false });
const Root38 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root38), { ssr: false });
const Root38Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root38Left), { ssr: false });
const Root38Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root38Right), { ssr: false });
const CrownSideView38 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView38), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot38 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot38), { ssr: false });
const MissingRoot38Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot38Left), { ssr: false });
const MissingRoot38Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot38Right), { ssr: false });
const ArtificialCrown38 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown38), { ssr: false });
const Prosthesis38 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis38), { ssr: false });
const MissingCrown38 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown38), { ssr: false });

import { Container } from '../Container';

export const Tooth38 = () => {
  return (
    <Container>
      <Tooth>
        <Root38 enable={true}>
          <Root38Right enable={true} />
          <Root38Left enable={true} />
        </Root38>

        <ImplantLowerJaw enable={false} />

        <MissingRoot38 enable={false}>
          <MissingRoot38Right enable={false} />
          <MissingRoot38Left enable={false} />
        </MissingRoot38>

        <CrownSideView38 enable={true} />
        <ArtificialCrown38 enable={false} />
        <Prosthesis38 enable={false} />
        <MissingCrown38 enable={false} />
      </Tooth>
    </Container>
  );
};
