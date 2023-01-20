
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth44), { ssr: false });
const Root44 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root44), { ssr: false });
const CrownSideView44 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView44), { ssr: false });
const ImplantLowerJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantLowerJaw), { ssr: false });
const MissingRoot44 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot44), { ssr: false });
const ArtificialCrown44 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown44), { ssr: false });
const Prosthesis44 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis44), { ssr: false });
const MissingCrown44 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown44), { ssr: false });

import { Container } from '../Container';

export const Tooth44 = () => {
  return (
    <Container>
      <Tooth>
        <Root44 enable={true} />
        <ImplantLowerJaw enable={false} />
        <MissingRoot44 enable={false} />
        <CrownSideView44 enable={true} />
        <ArtificialCrown44 enable={false} />
        <Prosthesis44 enable={false} />
        <MissingCrown44 enable={false} />
      </Tooth>
    </Container>
  );
};
