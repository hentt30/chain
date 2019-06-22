import React from 'react';
import { Meteor } from 'meteor/meteor';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const StyledCard = withStyles({
    minHeight: '100px',
    margin: 8,
})(Card)

const StyledTypography = withStyles({
})(Typography)

const Wrapper = styled.div`
    align-self: center;
    margin-bottom: 10px;
    height: auto;
`;

export class SuggestionSubject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            subject: undefined,
            chatRoomId: undefined,
            suggestionSubject: 'Please Wait...',
        };
    }

    renderSubject = () => {
        let suggestionSubject = 'Please Wait...';
        let chatRoomId = this.props.match.params.chatRoomId;
        Tracker.autorun(() => {
            Meteor.subscribe('findMessage', chatRoomId);
        });
        if (this.state.suggestionSubject === suggestionSubject || this.state.chatRoomId !== chatRoomId) {
            Meteor.call('subjectMatch', chatRoomId, (error, result) => {
                if (!error) {
                    this.setState({subject: result, chatRoomId: chatRoomId});
                }
            });
        }

        if(this.state.subject !== undefined) {
            suggestionSubject = (
                <StyledTypography> Converse sobre {this.state.subject[0]} ou {this.state.subject[1]} </StyledTypography>
            );
        } else {
            suggestionSubject = (
                <StyledTypography> Please wait...</StyledTypography>
            )
        }
        this.state.suggestionSubject = suggestionSubject;
    };

    render() {
        return (
            <Wrapper>
                {this.renderSubject()}
                <StyledCard >
                    <CardContent>
                    {this.state.suggestionSubject}
                    </CardContent>
                </StyledCard>


            </Wrapper>
        );
    }
}
