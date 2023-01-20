
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth25), { ssr: false });
const Root25 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root25), { ssr: false });
const CrownSideView25 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView25), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot25 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot25), { ssr: false });
const ArtificialCrown25 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown25), { ssr: false });
const Prosthesis25 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis25), { ssr: false });
const MissingCrown25 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown25), { ssr: false });

import { Container } from '../Container';

export const Tooth25 = () => {
  return (
    <Container>
      <Tooth>
        <Root25 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot25 enable={false} />
        <CrownSideView25 enable={true} />
        <ArtificialCrown25 enable={false} />
        <Prosthesis25 enable={false} />
        <MissingCrown25 enable={false} />
      </Tooth>
    </Container>
  );
};
