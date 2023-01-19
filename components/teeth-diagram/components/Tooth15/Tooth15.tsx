// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth15), { ssr: false });
const Root15 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root15), { ssr: false });
const CrownSideView15 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView15), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot15 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot15), { ssr: false });
const ArtificialCrown15 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown15), { ssr: false });
const Prosthesis15 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis15), { ssr: false });
const MissingCrown15 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown15), { ssr: false });



import { Container } from '../Container';

export const Tooth15 = () => {
  return (
    <Container>
      <Tooth>
        <Root15 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot15 enable={false} />
        <CrownSideView15 enable={true} />
        <ArtificialCrown15 enable={false} />
        <Prosthesis15 enable={false} />
        <MissingCrown15 enable={false} />
      </Tooth>
    </Container>
  );
};
