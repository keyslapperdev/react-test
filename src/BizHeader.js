import { makeStyles } from '@material-ui/core/styles';

import { colors } from './common';

const useStyles = makeStyles({
  bizContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    margin: "0",
    padding: ".9em",
    textAlign: "center",
    fontSize: "2.5em",
  },
});

function BizHeader() {
  const classes = useStyles();
  return <h1 className={classes.bizContainer}>AYaSoNice Authentic Jamaican Food</h1>
}

export default BizHeader;