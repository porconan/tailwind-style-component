import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Card(props) {

    const CardSelect = styled.div(({}) => [
        tw`tw-border tw-rounded tw-transform tw-duration-75 tw-bg-white tw-shadow-base tw-p-6 tw-border hover:tw-border-primary-blue hover:tw-shadow-card-hover`
    ])

    const CardMultiSelect = styled.div(() => [
        tw`tw-border tw-rounded tw-transform tw-duration-75 tw-bg-white tw-shadow-base tw-p-6 tw-relative hover:tw-shadow-card-hover`,
        props.isSelect ? tw`tw-border-primary-blue` :  tw`hover:tw-border-primary-blue` 
    ])
    return (
    <>
        { props.type === "multi-select" ?
            <CardMultiSelect {...props.isSelect }
                style={{
                    width: props.width||"100%",
                    height: props.height||"100%"
                }}
            >
                {props.children}
            {props.isSelect &&
                <div className="tw-absolute"
                    style={{
                        //   display: highlight ? "block" : "none",
                        zIndex: "1",
                        right: "-20px",
                        top: "-15px"
                    }}
                >
                <div className="tw-bg-primary-blue"
                    style={{
                        display: props.isSelect ? "block" : "none",
                        borderRadius: "100%",
                        border: "4px solid white"
                    }}>
                        <FontAwesomeIcon
                            className="tw-text-white tw-mx-2 tw-my-1 tw-flex tw-justify-center tw-items-center"
                            icon={faCheck}
                            style={{
                                width:"1em",
                                height:"auto"
                            }}
                        />
                </div>
            </div>
            }
        </CardMultiSelect>
        :
        <CardSelect
            style={{
                width: props.width||"100%",
                height: props.height||"100%"
            }}
        >
            {props.children}
        </CardSelect>
        }
    </>
    
)
    }



export default Card
