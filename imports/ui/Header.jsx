import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.div`

    padding: 20px;
    width: 100%;
    background-color: #ccc;
    display: flex;
    flex-flow: row;
    align-items:center;
    justify-conent: flex-end;
`;

const GoToRight = styled.div`

    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    padding:22px;
`;

const GoToLeft = styled.div`

    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items:center;
    padding:22px;
    margin-right:auto;
`;

const Logo = styled.img`

    width:64px;
    height:64px;
    border-radius: 25px;
`;

const Motto = styled.p`

    font-size:16px;
    margin-left: 5px;
    color:#0360ad;
`;

const Button = styled.button`

    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #ccc;
    vertical-align: center;
    text-align:center;
    border:none;
    outline:none;

    &:hover {
    background-color: #3d3e3f;
    }   
`;

const ImageInButton = styled.img`

    height:64px;
    width:64px;
`;

export default class Header extends Component {

    render(){
        return(

            <Holder>
                <GoToLeft>
                    <Logo src="/images/pp.jpg"/>
                    <Motto>connecting peopole through ideas</Motto> 
                </GoToLeft>
                <GoToRight>
                    <Button style={{"border-bottom-left-radius": "10px","border-top-left-radius": "10px"}}>
                        <ImageInButton src="/images/home.png"/>
                    </Button>
                    <Button><ImageInButton src="/images/lock2.png"/></Button>
                    <Button><ImageInButton src="/images/arrow_up.png"/></Button>
                    <Button style={{"border-bottom-right-radius": "10px","border-top-right-radius": "10px"}}>
                        Have a cool idea? Tell us!
                    </Button>
                </GoToRight>
            </Holder>
        );
    }
}