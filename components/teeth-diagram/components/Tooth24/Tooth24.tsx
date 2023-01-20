
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth24), { ssr: false });
const Root24 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root24), { ssr: false });
const Root24Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root24Left), { ssr: false });
const Root24Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root24Right), { ssr: false });
const CrownSideView24 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView24), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot24 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot24), { ssr: false });
const MissingRoot24Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot24Left), { ssr: false });
const MissingRoot24Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot24Right), { ssr: false });
const ArtificialCrown24 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown24), { ssr: false });
const Prosthesis24 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis24), { ssr: false });
const MissingCrown24 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown24), { ssr: false });

import { Container } from '../Container';

export const Tooth24 = () => {
  return (
    <Container>
      <Tooth>
        <Root24 enable={true}>
          <Root24Left enable={true} />
          <Root24Right enable={true} />
        </Root24>

        <ImplantUpperJaw enable={false} />

        <MissingRoot24 enable={false}>
          <MissingRoot24Left enable={false} />
          <MissingRoot24Right enable={false} />
        </MissingRoot24>

        <CrownSideView24 enable={true} />
        <ArtificialCrown24 enable={false} />
        <Prosthesis24 enable={false} />
        <MissingCrown24 enable={false} />
      </Tooth>
    </Container>
  );
};
