
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth48), { ssr: false });
const Root48 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root48), { ssr: false });
const Root48Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root48Left), { ssr: false });
const Root48Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root48Right), { ssr: false });
const CrownSideView48 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView48), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot48 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot48), { ssr: false });
const MissingRoot48Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot48Left), { ssr: false });
const MissingRoot48Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot48Right), { ssr: false });
const ArtificialCrown48 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown48), { ssr: false });
const Prosthesis48 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis48), { ssr: false });
const MissingCrown48 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown48), { ssr: false });

import { Container } from '../Container';

export const Tooth48 = () => {
  return (
    <Container>
      <Tooth>
        <Root48 enable={true}>
          <Root48Right enable={true} />
          <Root48Left enable={true} />
        </Root48>

        <ImplantLowerJaw enable={false} />

        <MissingRoot48 enable={false}>
          <MissingRoot48Right enable={false} />
          <MissingRoot48Left enable={false} />
        </MissingRoot48>

        <CrownSideView48 enable={true} />
        <ArtificialCrown48 enable={false} />
        <Prosthesis48 enable={false} />
        <MissingCrown48 enable={false} />
      </Tooth>
    </Container>
  );
};
