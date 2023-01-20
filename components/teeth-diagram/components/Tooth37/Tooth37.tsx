
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth37), { ssr: false });
const Root37 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root37), { ssr: false });
const Root37Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root37Left), { ssr: false });
const Root37Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root37Right), { ssr: false });
const CrownSideView37 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView37), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot37 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot37), { ssr: false });
const MissingRoot37Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot37Left), { ssr: false });
const MissingRoot37Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot37Right), { ssr: false });
const ArtificialCrown37 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown37), { ssr: false });
const Prosthesis37 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis37), { ssr: false });
const MissingCrown37 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown37), { ssr: false });

import { Container } from '../Container';

export const Tooth37 = () => {
  return (
    <Container>
      <Tooth>
        <Root37 enable={true}>
          <Root37Right enable={true} />
          <Root37Left enable={true} />
        </Root37>

        <ImplantLowerJaw enable={false} />

        <MissingRoot37 enable={false}>
          <MissingRoot37Right enable={false} />
          <MissingRoot37Left enable={false} />
        </MissingRoot37>

        <CrownSideView37 enable={true} />
        <ArtificialCrown37 enable={false} />
        <Prosthesis37 enable={false} />
        <MissingCrown37 enable={false} />
      </Tooth>
    </Container>
  );
};
