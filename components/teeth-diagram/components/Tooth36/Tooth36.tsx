
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth36), { ssr: false });
const Root36 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root36), { ssr: false });
const Root36Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root36Left), { ssr: false });
const Root36Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root36Right), { ssr: false });
const CrownSideView36 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView36), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot36 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot36), { ssr: false });
const MissingRoot36Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot36Left), { ssr: false });
const MissingRoot36Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot36Right), { ssr: false });
const ArtificialCrown36 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown36), { ssr: false });
const Prosthesis36 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis36), { ssr: false });
const MissingCrown36 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown36), { ssr: false });

import { Container } from '../Container';

export const Tooth36 = () => {
  return (
    <Container>
      <Tooth>
        <Root36 enable={true}>
          <Root36Right enable={true} />
          <Root36Left enable={true} />
        </Root36>

        <ImplantLowerJaw enable={false} />

        <MissingRoot36 enable={false}>
          <MissingRoot36Right enable={false} />
          <MissingRoot36Left enable={false} />
        </MissingRoot36>

        <CrownSideView36 enable={true} />
        <ArtificialCrown36 enable={false} />
        <Prosthesis36 enable={false} />
        <MissingCrown36 enable={false} />
      </Tooth>
    </Container>
  );
};
