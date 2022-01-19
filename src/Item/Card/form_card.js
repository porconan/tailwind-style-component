import React, { useRef, useEffect } from "react"
import tw from 'twin.macro'
import  Card  from './index'


const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-pt-5 `,
    // box-shadow: 0px 0px 8px #3DAEE3;
    // hasBackground && tw`tw-bg-gradient-to-b tw-from-yellow-50 tw-to-blue-200 `,
  ],
}


const FormCard = (props) => (

    <div tw="tw-px-4 tw-py-4 tw-flex tw-flex-col tw-justify-center tw-h-full tw-gap-y-5">
        <div className="tw-font-bold tw-text-2xl">Cards</div>
        <div className="tw-text-base">Basic Card</div>
        <div className="tw-flex tw-items-center">
            <div className="tw-mx-2"><Card width={100} height={100} type="select">select</Card></div>
            <div className="tw-mx-2"><Card width={100} height={100} type="multi-select">multi select</Card></div>
            <div className="tw-mx-2"><Card width={100}  height={100} type="multi-select" isSelect>Select</Card></div>
        </div>
    </div>
)

export default FormCard
