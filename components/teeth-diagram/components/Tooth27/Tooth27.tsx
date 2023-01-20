
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth27), { ssr: false });
const Root27 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root27), { ssr: false });
const Root27Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root27Left), { ssr: false });
const Root27Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root27Middle), { ssr: false });
const Root27Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root27Right), { ssr: false });
const CrownSideView27 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView27), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot27 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot27), { ssr: false });
const MissingRoot27Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot27Left), { ssr: false });
const MissingRoot27Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot27Middle), { ssr: false });
const MissingRoot27Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot27Right), { ssr: false });
const ArtificialCrown27 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown27), { ssr: false });
const Prosthesis27 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis27), { ssr: false });
const MissingCrown27 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown27), { ssr: false });

import { Container } from '../Container';

export const Tooth27 = () => {
  return (
    <Container>
      <Tooth>
        <Root27 enable={true}>
          <Root27Middle enable={true} />
          <Root27Left enable={true} />
          <Root27Right enable={true} />
        </Root27>

        <ImplantUpperJaw enable={false} />

        <MissingRoot27 enable={false}>
          <MissingRoot27Middle enable={false} />
          <MissingRoot27Left enable={false} />
          <MissingRoot27Right enable={false} />
        </MissingRoot27>

        <CrownSideView27 enable={true} />
        <ArtificialCrown27 enable={false} />
        <Prosthesis27 enable={false} />
        <MissingCrown27 enable={false} />
      </Tooth>
    </Container>
  );
};
