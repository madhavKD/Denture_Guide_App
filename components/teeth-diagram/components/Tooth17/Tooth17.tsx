
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth17), { ssr: false });
const Root17 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root17), { ssr: false });
const Root17Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root17Left), { ssr: false });
const Root17Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root17Middle), { ssr: false });
const Root17Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root17Right), { ssr: false });
const CrownSideView17 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView17), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot17 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot17), { ssr: false });
const MissingRoot17Left = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot17Left), { ssr: false });
const MissingRoot17Middle = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot17Middle), { ssr: false });
const MissingRoot17Right = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot17Right), { ssr: false });
const ArtificialCrown17 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown17), { ssr: false });
const Prosthesis17 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis17), { ssr: false });
const MissingCrown17 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown17), { ssr: false });

import { Container } from '../Container';

export const Tooth17 = () => {
  return (
    <Container>
      <Tooth>
        <Root17 enable={true}>
          <Root17Middle enable={true} />
          <Root17Left enable={true} />
          <Root17Right enable={true} />
        </Root17>

        <ImplantUpperJaw enable={false} />

        <MissingRoot17 enable={false}>
          <MissingRoot17Middle enable={false} />
          <MissingRoot17Left enable={false} />
          <MissingRoot17Right enable={false} />
        </MissingRoot17>

        <CrownSideView17 enable={true} />
        <ArtificialCrown17 enable={false} />
        <Prosthesis17 enable={false} />
        <MissingCrown17 enable={false} />
      </Tooth>
    </Container>
  );
};
