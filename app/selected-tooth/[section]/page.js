'use-client'

import {SelectedTooth} from '../../../components/UI/SelectedTooth'

export default function Page({params}) {
    const section = params.section;
    return (<SelectedTooth type={section}></SelectedTooth>)
}