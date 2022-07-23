import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));

const Login = ({ handleChange }) => {

    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }


    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField label='Username'
                        placeholder='Enter username'
                        fullWidth required
                        variant='outlined'
                        className={classes.inputField}
                        {...register("name", {
                            required: "Username cannot be empty"
                        })}
                        error={!!errors.name}
                        helperText={errors?.name ? errors.name.message : null}
                    />
                    <TextField label='Password'
                        placeholder='Enter password'
                        type='password'
                        fullWidth required
                        variant='outlined'
                        className={classes.inputField}
                        {...register("password", {
                            required: "password cannot be empty",
                            pattern: {
                                value: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/,
                                message: "password length must be 10 & more & must include uppercase & special characters"
                            }
                        })}
                        error={!!errors.password}
                        helperText={errors?.password ? errors.password.message : null}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                        <Link href="https://sense-demo.qlik.com/sso/single/?appid=cd840389-f841-4477-86be-532fb0b13775&sheet=aLvPhq&opt=ctxmenu,currsel" style={{ border: 'none', width: '100%', height: '100%', textDecoration: 'none', color: 'white' }}>
                            Login
                        </Link>
                    </Button>
                    <Typography >
                        <Link href="#" onClick={() => handleChange("event", 1)} >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#" onClick={() => handleChange("event", 1)} >
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login