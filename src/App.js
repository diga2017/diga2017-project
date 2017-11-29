import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';


//Here you can set your css like that format below 
const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class App extends Component{

    state = {
        age: '',
        name: 'hai',
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };


    render() {

        const {classes} = this.props;

        // Here is my project layout
        // <Grid item md={3} sm={3} name="left"> is for the left part
        // <Grid item md={6} sm={3} name="chart"> for chart
        // <Grid item md={3} sm={3} name="right"> for right
        // When you decide to add another elements you need you set className={class.YourCss}

        return (
            <div className={classes.container}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>Metsämittari</Paper>
                    </Grid>
                    <Grid item md={3} sm={3} name="left">
                        <h2 className={classes.paper}>Skenaarioden valinta</h2>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                            <Select
                                native
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                input={<Input id="age-native-simple" />}
                            >
                                <option value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                            <Select
                                native
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                input={<Input id="age-native-helper" />}
                            >
                                <option value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                            <FormHelperText>Some important helper text</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} sm={3} name="chart">
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item md={3} sm={3} name="right">
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>



        );
    }
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
