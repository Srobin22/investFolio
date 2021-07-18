import React from "react"
import styled,{css} from "styled-components"
const Logo =styled.div`
    font-size: 1.5em;
`
const Bar=styled.div`
    display:grid;
    margin-bottom:40px;
    grid-template-columns: 180px auto 100px 100px;
`
const ControlButtonElem=styled.div`
    cursor:pointer;
    ${props=>props.active && css`
        text-shadow: 0 0 40px #FF0000;
    `}
`
function captilizeFirstLetter(lower){
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}
function ControlButton({name,active}){
    return(
        <ControlButtonElem active={active}>
            {captilizeFirstLetter(name)}
        </ControlButtonElem>
    )
}
export default function(){
    return <Bar>
            <div>CryptoApp</div>
            <div></div>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
         </Bar>
}