
import React from 'react';
import { SelectedToothItems } from '../../../../components/UI/SelectedToothItems'

export default function ItemLayout({ params, children }: { params: any, children: React.ReactNode }) {
  return (
    <>
      <SelectedToothItems params={params} />
      {children}
    </>
  )
}