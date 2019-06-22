import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import styled from 'styled-components';
import Item from "./item";

const Holder2 = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    max-width: 460px;
    background-color : #FFFFFF;
    flex-flow: column;
    overflow-y: scroll;
    border-right-width: 1px;
    border-right-style:solid;
    border-right-color: #000000;

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
            }
        });


        if(this.state.usersAll !== undefined) {
            chatRoomsList = (
                this.state.usersAll.map((user) => (
                    <Item user={ user } key={ user._id } {...this.props} />
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

                    { this.renderUsersList() }
                </Holder2>
            
        );
    }
}