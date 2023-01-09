
import { SelectedToothItems } from '../../../../components/UI/SelectedToothItems'

export default function Page({ params }: { params: any }) {
    const section = params.item;
    return (<SelectedToothItems type={section}></SelectedToothItems>)
}