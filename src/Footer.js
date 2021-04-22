import { Box, makeStyles } from '@material-ui/core';
import { colors } from './common';

const useStyle = makeStyles({
    footer: {
        backgroundColor: colors.grey,
        display: "flex",
        justifyContent: "center",
        alignSelf: "flex-end",
        fontSize: "15px",
        marginTop: "5em",
    }
});


function Footer() {
    const classes = useStyle();

    return (
        <Box className={classes.footer}>
            <p>© AYaSoNice Authentic Jamaican Food.</p>
        </Box>
    );
}

export default Footer;