
'use client';

import dynamic from 'next/dynamic';
const Tooth = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.tooth').then((tooth) => tooth.Tooth22), { ssr: false });
const Root22 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.root').then((roots) => roots.Root22), { ssr: false });
const CrownSideView22 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.areas.crown-side-view').then((crownSideView) => crownSideView.CrownSideView22), { ssr: false });
const ImplantUpperJaw = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.implant').then((implant) => implant.ImplantUpperJaw), { ssr: false });
const MissingRoot22 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-root').then((missingRoot) => missingRoot.MissingRoot22), { ssr: false });
const ArtificialCrown22 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.artificial-crown').then((artificialCrowns) => artificialCrowns.ArtificialCrown22), { ssr: false });
const Prosthesis22 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.prosthesis').then((prosthesis) => prosthesis.Prosthesis22), { ssr: false });
const MissingCrown22 = dynamic(() => import('@dechea/hes.ui.foundations.teeth.visualizations.missing-crown').then((missingCrowns) => missingCrowns.MissingCrown22), { ssr: false });



import { Container } from '../Container';

export const Tooth22 = () => {
  return (
    <Container>
      <Tooth>
        <Root22 enable={true} />
        <ImplantUpperJaw enable={false} />
        <MissingRoot22 enable={false} />
        <CrownSideView22 enable={true} />
        <ArtificialCrown22 enable={false} />
        <Prosthesis22 enable={false} />
        <MissingCrown22 enable={false} />
      </Tooth>
    </Container>
  );
};
