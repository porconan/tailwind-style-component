import React, { useState } from "react";
import tw, { styled, css, theme } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {far} from '@fortawesome/free-regular-svg-icons'


    const containerSolid = {
        // Named class sets
        primary : tw`tw-px-4 tw-bg-primary-blue tw-text-white hover:tw-bg-hover-blue tw-shadow-base`,
        secondary : tw`tw-px-4 tw-bg-primary-gray tw-text-white hover:tw-bg-hover-gray tw-shadow-base`,
        success : tw`tw-px-4 tw-bg-primary-green tw-text-white hover:tw-bg-hover-green tw-shadow-base`,
        danger: tw`tw-px-4 tw-bg-primary-red tw-text-white hover:tw-bg-hover-red tw-shadow-base`,
        warning : tw`tw-px-4 tw-bg-primary-yellow tw-text-white hover:tw-bg-hover-yellow tw-shadow-base`,
        dark : tw`tw-px-4 tw-bg-primary-black tw-text-white hover:tw-bg-black tw-shadow-base`,
    }
    
    const containerOutline = {
    // Named class sets
    primary: tw`tw-px-4 tw-border tw-border-primary-blue tw-text-primary-blue tw-bg-transparent hover:tw-bg-primary-blue hover:tw-text-white tw-shadow-base`,
    secondary: tw`tw-px-4 tw-border tw-border-primary-gray tw-text-primary-gray tw-bg-transparent hover:tw-bg-primary-gray hover:tw-text-white tw-shadow-base`,
    success: tw`tw-px-4 tw-border tw-border-primary-green tw-text-primary-green tw-bg-transparent hover:tw-bg-primary-green hover:tw-text-white tw-shadow-base`,
    danger: tw`tw-px-4 tw-border tw-border-primary-red tw-text-primary-red tw-bg-transparent hover:tw-bg-primary-red hover:tw-text-white tw-shadow-base`,
    warning: tw`tw-px-4 tw-border tw-border-primary-yellow tw-text-primary-yellow tw-bg-transparent hover:tw-bg-primary-yellow hover:tw-text-white tw-shadow-base`,
    dark: tw`tw-px-4 tw-border tw-border-primary-black tw-text-primary-black tw-bg-transparent hover:tw-bg-primary-black hover:tw-text-white tw-shadow-base`,
    }
    
    const containerSolidRound = {
    // Named class sets
    primary: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-blue tw-rounded-full tw-text-white hover:tw-bg-hover-blue tw-shadow-base`,
    secondary: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-gray tw-rounded-full tw-text-white hover:tw-bg-hover-gray tw-shadow-base`,
    success: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-green tw-rounded-full tw-text-white hover:tw-bg-hover-green tw-shadow-base`,
    danger: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-red tw-rounded-full tw-text-white hover:tw-bg-hover-red tw-shadow-base`,
    warning: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-yellow tw-rounded-full tw-text-white hover:tw-bg-hover-yellow tw-shadow-base`,
    dark: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-black tw-rounded-full tw-text-white hover:tw-bg-black tw-shadow-base`,
    glass: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-bg-primary-glass tw-backdrop-filter tw-backdrop-blur-xl tw-rounded-full tw-text-primary-gray hover:tw-bg-hover-glass tw-shadow-base`,
    }
    
    const containerOutlineRound = { 
    // Named class sets
    primary: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-blue tw-rounded-full tw-text-primary-blue tw-bg-transparent hover:tw-bg-primary-blue hover:tw-text-white tw-shadow-base`,
    secondary: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-gray tw-rounded-full tw-text-primary-gray tw-bg-transparent hover:tw-bg-primary-gray hover:tw-text-white tw-shadow-base`,
    success: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-green tw-rounded-full tw-text-primary-green tw-bg-transparent hover:tw-bg-primary-green hover:tw-text-white tw-shadow-base`,
    danger: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-red tw-rounded-full tw-text-primary-red tw-bg-transparent hover:tw-bg-primary-red hover:tw-text-white tw-shadow-base`,
    warning: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-yellow tw-rounded-full tw-text-primary-yellow tw-bg-transparent hover:tw-bg-primary-yellow hover:tw-text-white tw-shadow-base`,
    dark: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-black tw-rounded-full tw-text-primary-black tw-bg-transparent hover:tw-bg-primary-black hover:tw-text-white tw-shadow-base`,
    glass: tw`tw-flex tw-items-center tw-justify-center tw-px-0 tw-py-0 tw-border tw-border-primary-black tw-rounded-full tw-text-primary-black tw-bg-transparent hover:tw-bg-primary-black hover:tw-text-white tw-shadow-base`,
    }
    
    const containerIcon = {
        // Named class sets
        primary: tw`tw-px-0 tw-py-0 tw-text-primary-blue tw-bg-transparent hover:tw-text-hover-blue hover:tw-bg-transparent`,
        secondary: tw`tw-px-0 tw-py-0 tw-text-primary-gray tw-bg-transparent hover:tw-text-hover-gray hover:tw-bg-transparent`,
        success: tw`tw-px-0 tw-py-0 tw-text-primary-green tw-bg-transparent hover:tw-text-hover-green hover:tw-bg-transparent`,
        danger: tw`tw-px-0 tw-py-0 tw-text-primary-red tw-bg-transparent hover:tw-text-hover-red hover:tw-bg-transparent`,
        warning: tw`tw-px-0 tw-py-0 tw-text-primary-yellow tw-bg-transparent hover:tw-text-hover-yellow hover:tw-bg-transparent`,
        dark: tw`tw-px-0 tw-py-0 tw-text-primary-black tw-bg-transparent hover:tw-text-black hover:tw-bg-transparent` ,
    }
    const ButtonForm = styled.button(({ size, type, variant }) => [
    tw`tw-flex tw-items-center tw-text-xl tw-rounded tw-transform tw-duration-75 tw-bg-primary-blue tw-text-white hover:tw-bg-hover-blue`,

        type === 'solid' && [ ({ variant = 'primary' }) => containerSolid[variant]],
        type === 'outline' && [ ({ variant = 'primary' }) => containerOutline[variant]],
        type === 'solid-round' && [ ({ variant = 'primary' }) => containerSolidRound[variant]],
        type === 'outline-round' && [ ({ variant = 'primary' }) => containerOutlineRound[variant]],
        type === 'icon' && [ ({ variant = 'primary' }) => containerIcon[variant]],

        (type ==='solid' || type ==='outline') && size ==='small' ? css`height:36px; font-size: 1rem;` :
        (type ==='solid' || type ==='outline') && size ==='base' ? css`height:40px;`:
        (type ==='solid' || type ==='outline') && size ==='large' ? css`height:72px; font-size: 1.5rem;` : 
        (type ==='solid' || type ==='outline') && !size && css`height:40px;`,

        (type ==='solid-round' || type ==='outline-round') && size ==='small' ? css`height:42px; width:42px;`:
        (type ==='solid-round' || type ==='outline-round') && size ==='base' ? css`height:60px; width:60px;`:
        (type ==='solid-round' || type ==='outline-round') && size ==='large' ? css`height:72px; width:72px;` :  
        (type ==='solid-round' || type ==='outline-round') && !size && css`height:60px; width:60px;`,

        type ==='icon' && size ==='small' ? css`height:30px;` :
        type ==='icon' && size ==='base' ? css`height:40px;`:
        type ==='icon' && size ==='large' ? css`height:72px;` : 
        type ==='icon' && !size  && css`height:40px;`,

        !type && [ ({ variant = 'primary' }) => containerSolid[variant]],
        !type && !size && css`height:40px;`
    ])
    const Button = (props) => (
        <ButtonForm 
            {...{size:props.size, type:props.type, variant:props.variant }} 
            onClick={props.onClick}
        >
                { props.icon ?
                 <>
                    {
                        props.isLoading ?
                        <FontAwesomeIcon
                            className="mr2 f-13px"
                            icon={['far',"spinner-third"]}
                            pulse
                        />
                    :
                        <FontAwesomeIcon
                            className="tw-mr-2"
                            style={{
                                width: "15px",
                                height: "auto",
                            }}
                            icon={props.icon}
                        />
                    }
                 </>
                   
                :
                
                (props.type === "solid" || props.type === "outline") && props.isLoading && 
                <FontAwesomeIcon
                    className="mr2 f-13px"
                    icon={['far',"spinner-third"]}
                    pulse
                />
                }
                
                {props.children}
        </ButtonForm>
    )

export default Button
