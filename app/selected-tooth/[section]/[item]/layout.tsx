
import dynamic from 'next/dynamic'
const SelectedToothItems = dynamic(() => import('../../../../components/UI/SelectedToothItems').then((comp) => comp.SelectedToothItems))

export default function ItemLayout({ params, children }: { params: any, children: React.ReactNode }) {
  return (
    <>
      <SelectedToothItems params={params} />
      {children}
    </>
  )
}