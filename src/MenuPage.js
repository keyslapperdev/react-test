import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { colors } from './common';

const useStyles = makeStyles({
    menuHeader: {
        borderRadius: ".3em",
        backgroundColor: colors.secondary,
        color: colors.white,
        padding: ".5em",
        marginTop: "1.3em",
        margin: "1em 0 1em 0 ",
    },
});

function MenuPage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" disableGutters>
            <h2 className={classes.menuHeader}>Menu</h2>
            <img style={{width: "100%"}} alt="ayasonice menu" src="http://ayasonice.com/files/resized/678136/1170;901;431188637f1fe691ebddcd4fc395994529ae10b2.png" />
        </Container>
    );
}

export default MenuPage