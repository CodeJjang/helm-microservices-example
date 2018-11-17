import { Theme, WithStyles, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import * as React from "react";

const styles = (theme: Theme): StyleRules => ({
    blat: {
        
    },
    root: {
        fontSize: '35px'
    },
    vlat: {}
});

interface IMyState {
    state: string;
}

interface IMyProps extends WithStyles<typeof styles> {
    prop: string;
}

class MyComponent extends React.Component<IMyProps, IMyState> {
    public render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
                Hello TS, env: {process.env.REACT_APP_MY_ENV}
            </div>
        );
    }
}

export default withStyles(styles)(MyComponent);