
'use client';
import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth23), { ssr: false });
const Root23 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root23), { ssr: false });
const CrownSideView23 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView23), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot23 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot23), { ssr: false });
const ArtificialCrown23 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown23), { ssr: false });
const Prosthesis23 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis23), { ssr: false });
const MissingCrown23 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown23), { ssr: false });

import { Container } from '../Container';

export const Tooth23 = () => {
  return (
    <Container>
      <Tooth>
        <Root23 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot23 enable={false} />
        <CrownSideView23 enable={true} />
        <ArtificialCrown23 enable={false} />
        <Prosthesis23 enable={false} />
        <MissingCrown23 enable={false} />
      </Tooth>
    </Container>
  );
};
