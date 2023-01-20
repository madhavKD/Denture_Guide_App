
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth42), { ssr: false });
const Root42 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root42), { ssr: false });
const CrownSideView42 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView42), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot42 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot42), { ssr: false });
const ArtificialCrown42 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown42), { ssr: false });
const Prosthesis42 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis42), { ssr: false });
const MissingCrown42 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown42), { ssr: false });

import { Container } from '../Container';

export const Tooth42 = () => {
  return (
    <Container>
      <Tooth>
        <Root42 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot42 enable={false} />
        <CrownSideView42 enable={true} />
        <ArtificialCrown42 enable={false} />
        <Prosthesis42 enable={false} />
        <MissingCrown42 enable={false} />
      </Tooth>
    </Container>
  );
};
