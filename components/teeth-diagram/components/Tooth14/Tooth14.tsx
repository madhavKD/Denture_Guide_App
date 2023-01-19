// @ts-nocheck
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth14), { ssr: false });
const Root14 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root14), { ssr: false });
const Root14Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root14Left), { ssr: false });
const Root14Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root14Right), { ssr: false });
const CrownSideView14 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView14), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot14 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot14), { ssr: false });
const MissingRoot14Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot14Left), { ssr: false });
const MissingRoot14Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot14Right), { ssr: false });
const ArtificialCrown14 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown14), { ssr: false });
const Prosthesis14 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis14), { ssr: false });
const MissingCrown14 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown14), { ssr: false });

import { Container } from '../Container';

export const Tooth14 = () => {
  return (
    <Container>
      <Tooth>
        <Root14 enable={true}>
          <Root14Right enable={true} />
          <Root14Left enable={true} />
        </Root14>

        <ImplantUpperJaw enable={false} />

        <MissingRoot14 enable={false}>
          <MissingRoot14Right enable={false} />
          <MissingRoot14Left enable={false} />
        </MissingRoot14>

        <CrownSideView14 enable={true} />
        <ArtificialCrown14 enable={false} />
        <Prosthesis14 enable={false} />
        <MissingCrown14 enable={false} />
      </Tooth>
    </Container>
  );
};
