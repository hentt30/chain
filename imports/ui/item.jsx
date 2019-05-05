import React, { Component } from 'react';
import styled from 'styled-components';


const GoToLeft = styled.div`

    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items:center;
    padding:100px;
    margin-right:auto;
`;

const Logo = styled.img`

    width:28px;
    height:28px;
    border-radius: 25px;
`;

const Holder2 = styled.div`

    width: 1%;

    display: flex;
    flex-flow: column;
    align-items:center;
    justify-conent: flex-end;
`;  

const Name = styled.p`

    font-size:16px;
    margin-left: 5px;
    color:#0360ad;
`;

export default class Item extends Component {

    render(){
        return(

            <Holder2>
                <GoToLeft>
                    <Logo src="/images/rubens.jpeg"/>
                    <Name>Rubens</Name> 
                </GoToLeft>
                <GoToLeft>
                    <Logo src="/images/rubens.jpeg"/>
                    <Name>Rubens2</Name> 
                </GoToLeft>
            </Holder2>
            );
    }
}