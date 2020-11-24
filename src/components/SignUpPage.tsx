import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './../css/SignUpPage.css'

type State = {
    name: string
}

type Props = {
    name: string,

}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class SignUpPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    render() {
        return (

            <Container component="main" maxWidth="xs">
               
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </div>
                
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>

        )
    }
}


export default SignUpPage;
