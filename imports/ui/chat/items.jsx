import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import styled from 'styled-components';
import Item from "./item";


const GoToLeft = styled.div`

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items:center;
    padding-left: 5px;
    margin-right:auto;
`;

const Logo = styled.img`

    width:28px;
    height:28px;
    border-radius: 25px;
`;

const Holder2 = styled.div`

    width: 1%;
    margin-bottom: 15px;
    display: flex;
    flex-flow: column;
    align-items:center;
    justify-conent: flex-end;
`;

const Name = styled.div`
    margin-bottom: 5px;
    font-size:16px;
    margin-left: 5px;
    color:#0360ad;
`;


export default class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            usersAll: undefined,
        };
        this.updateUsers = this.updateUsers.bind(this);
    }

    updateUsers(usersAll){
        this.setState({usersAll: usersAll});
    }

    renderUsersList() {
        let chatRoomsList;

        Meteor.call('usersAll', (error, result) => {
            if(error) {
            } else if (this.state.usersAll === undefined) {
                this.setState({usersAll: result});
                console.log(this.state.usersAll);
            }
        });


        if(this.state.usersAll !== undefined) {
            chatRoomsList = (
                this.state.usersAll.map((user) => (
                    <GoToLeft>
                        <Item user={ user } key={ user._id } {...this.props} />
                    </GoToLeft>
                ))
            );
        } else {
            chatRoomsList = (
                <p> Please wait...</p>
            )
        }

        return chatRoomsList;
    }

    render(){
        return(
            <Holder2>
                <GoToLeft>
                    { this.renderUsersList() }
                </GoToLeft>
            </Holder2>
        );
    }
}