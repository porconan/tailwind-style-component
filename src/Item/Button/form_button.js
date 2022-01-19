import React from 'react'
import tw from 'twin.macro'
import  Button  from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-pt-5`,
    // hasBackground && tw`tw-bg-gradient-to-b tw-from-yellow-50 tw-to-blue-200 `,
  ],
}

function round(size){
    return(
        <FontAwesomeIcon
            style={{
                width:size,
                height:size
            }}
            icon={faInfoCircle}
        />
    )
}

function icon(){
    return(
        <FontAwesomeIcon
            style={{
                width:"100%",
                height:"100%"
            }}
            icon={faInfoCircle}
        />
    )
}


const FormButton = (props) => (
  <div id="ThingDetail">
    <div tw="tw-px-4 tw-py-4 tw-flex tw-flex-col tw-justify-center tw-h-full tw-gap-y-5">
        <div className="tw-font-bold tw-text-2xl">Buttons</div>
        <div className="tw-font-bold tw-text-xl">Solid Buttons</div>
        <div>Button Size</div>
        <div className="tw-flex tw-items-center">
            <div className="tw-px-2"><Button type="solid" variant="primary" size="small">small</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="primary" size="base">base</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="primary" size="large">large</Button></div>
        </div>
        <div>Variant Button</div>
        <div className="tw-flex tw-pb-4">
            {/* <div className="tw-px-2"><Button>Submit</Button></div> */}
            <div className="tw-px-2"><Button type="solid" variant="primary">primary</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="secondary">secondary</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="success">success</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="danger">danger</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="warning">warning</Button></div>
            <div className="tw-px-2"><Button type="solid" variant="dark">dark</Button></div>
        </div>

        <div className="tw-font-bold tw-text-xl">Outline Buttons</div>
        <div>Button Size</div>
        <div className="tw-flex tw-items-center">
            <div className="tw-px-2"><Button type="outline" variant="primary" size="small">small</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="primary" size="base">base</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="primary" size="large">large</Button></div>
        </div>
        <div>Variant Button</div>
        <div className="tw-flex tw-pb-4">
            <div className="tw-px-2"><Button type="outline" variant="primary">primary</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="secondary">secondary</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="success">success</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="danger">danger</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="warning">Warning</Button></div>
            <div className="tw-px-2"><Button type="outline" variant="dark">dark</Button></div>
        </div>

        <div>Variant Button have icon</div>
        <div className="tw-flex tw-pb-4">
            {/* <div className="tw-px-2"><Button>Submit</Button></div> */}
            <div className="tw-px-2">
                <Button type="solid" variant="primary" icon={['far', "info-circle"]} onClick={() => alert("On click button")} >primary</Button>
            </div>
            <div className="tw-px-2"><Button type="solid" variant="primary" isLoading={true}>primary</Button></div>
        </div>


        <div className="tw-font-bold tw-text-xl">Solid Round Buttons</div>
        <div>Button Size</div>
        <div className="tw-flex tw-items-center">
            <div className="tw-px-2"><Button type="solid-round" variant="primary" size="small">{round("18px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="primary" size="base">{round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="primary" size="large">{round("45px")}</Button></div>
        </div>
        <div>Variant Button</div>
        <div className="tw-flex tw-pb-4">
            <div className="tw-px-2"><Button type="solid-round" variant="primary"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="secondary"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="success"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="danger"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="warning"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="dark"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="solid-round" variant="glass"> {round("30px")}</Button></div>
        </div>

        <div className="tw-font-bold tw-text-xl">Outline Round Buttons</div>
        <div>Button Size</div>
        <div className="tw-flex tw-items-center">
            <div className="tw-px-2"><Button type="outline-round" variant="primary" size="small">{round("18px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="primary" size="base">{round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="primary" size="large">{round("45px")}</Button></div>
        </div>
        <div>Variant Button</div>
        <div className="tw-flex tw-pb-4">
            <div className="tw-px-2"><Button type="outline-round" variant="primary"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="secondary"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="success"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="danger"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="warning"> {round("30px")}</Button></div>
            <div className="tw-px-2"><Button type="outline-round" variant="dark"> {round("30px")}</Button></div>
        </div>

        <div className="tw-font-bold tw-text-xl">Icon Buttons</div>
        <div>Button Size</div>
        <div className="tw-flex tw-items-center">
            <div className="tw-px-2"><Button type="icon" variant="primary" size="small">{icon("18px")}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="primary" size="base">{icon("30px")}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="primary" size="large">{icon("45px")}</Button></div>
        </div>
        <div>Variant Button</div>
        <div className="tw-flex tw-pb-4">
            <div className="tw-px-2"><Button type="icon" variant="primary"> {icon()}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="secondary"> {icon()}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="success"> {icon()}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="danger"> {icon()}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="warning"> {icon()}</Button></div>
            <div className="tw-px-2"><Button type="icon" variant="dark"> {icon()}</Button></div>
        </div>

    </div>
  </div>
)

export default FormButton
