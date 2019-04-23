import React, { Component } from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
    margin: 0;
    margin-left: -20px;
    padding: 0;
    width: 200px;
    background-color: #ccc;
    position: fixed;
    height: 100%;
    overflow: auto;
`;

const ElementInSideBar = styled.p`

  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  margin:0;

  &:hover{
    background-color: #0360ad;
    color: white;
  }
`;


export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render()
    {
        return(
            <Sidebar>
                <ElementInSideBar>Login</ElementInSideBar>
                <ElementInSideBar>Sign Up</ElementInSideBar>
                <ElementInSideBar>Give us a suggestion</ElementInSideBar>
            </Sidebar>
        )
    }
}