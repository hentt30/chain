import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left:0px;
    width:100%; 
`;

const StyledIconButton = withStyles({
    root: {
      flexGrow:1,
    },

})(IconButton)


const StyledTypography = withStyles({
    root: {
        flexGrow:1,
    },
    })(Typography)


  export default function BarTop() {

    return (
      <Wrapper>
        <AppBar position="static">
          <Toolbar>
            <StyledTypography variant="h6">
              Chat
            </StyledTypography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Wrapper>
    );
  }
  