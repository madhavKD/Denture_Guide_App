
import React from 'react';
import { ProductsByCategory } from '../../../../../components/UI/SelectedToothItems/components/Products';

export default function SelectedToothSubItemLayout({ children, params }: { children: React.ReactNode, params: any }) {
  return (
    <>
      <ProductsByCategory params={params} />
      {children}
    </>
  );
}
