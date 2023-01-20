
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth46), { ssr: false });
const Root46 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root46), { ssr: false });
const Root46Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root46Left), { ssr: false });
const Root46Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root46Right), { ssr: false });
const CrownSideView46 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView46), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot46 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot46), { ssr: false });
const MissingRoot46Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot46Left), { ssr: false });
const MissingRoot46Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot46Right), { ssr: false });
const ArtificialCrown46 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown46), { ssr: false });
const Prosthesis46 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis46), { ssr: false });
const MissingCrown46 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown46), { ssr: false });

import { Container } from '../Container';

export const Tooth46 = () => {
  return (
    <Container>
      <Tooth>
        <Root46 enable={true}>
          <Root46Right enable={true} />
          <Root46Left enable={true} />
        </Root46>

        <ImplantLowerJaw enable={false} />

        <MissingRoot46 enable={false}>
          <MissingRoot46Right enable={false} />
          <MissingRoot46Left enable={false} />
        </MissingRoot46>

        <CrownSideView46 enable={true} />
        <ArtificialCrown46 enable={false} />
        <Prosthesis46 enable={false} />
        <MissingCrown46 enable={false} />
      </Tooth>
    </Container>
  );
};
