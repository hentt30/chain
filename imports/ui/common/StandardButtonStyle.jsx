import {withStyles} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from '@material-ui/icons/Navigation';

export const StyledFab = withStyles({
    root: {
        margin : '8px',
    },
})(Fab)

export const StyledNavigationIcon = withStyles({
    root: {
        marginRight:'8px',
    },

})(NavigationIcon)
