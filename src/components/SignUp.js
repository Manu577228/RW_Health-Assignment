import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));


const SignUp = (handleChange) => {

    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }



    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField fullWidth label='Name'
                        placeholder="Enter your name"
                        name='name'
                        variant='outlined'
                        autoComplete='name'
                        autoFocus
                        className={classes.inputField}
                        {...register("name", {
                            required: "name cannot be empty"
                        })}
                        error={!!errors.name}
                        helperText={errors?.name ? errors.name.message : null}
                    />

                    <TextField fullWidth label='Email'
                        placeholder="Enter your email"
                        variant='outlined'
                        name="email"
                        autoComplete='name'
                        autoFocus
                        className={classes.inputField}
                        {...register("email", {
                            required: "email cannot be empty",
                            pattern: {
                                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                message: "Invalid Email Address"
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />

                    <FormControl component="fieldset" style={marginTop}>

                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth label='Phone Number'
                        placeholder="Enter your phone number"
                        variant='outlined'
                        name="phone"
                        autoComplete='name'
                        autoFocus
                        className={classes.inputField}
                        {...register("phone", {
                            required: "phone number cannot be empty",
                            pattern: {
                                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                message: "Invalid Phone Number"
                            }
                        })}
                        error={!!errors.phone}
                        helperText={errors?.phone ? errors.phone.message : null}
                    />

                    <TextField fullWidth label='Password'
                        placeholder="Enter your password"
                        variant='outlined'
                        name='password'
                        autoComplete='name'
                        autoFocus
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

                    <TextField fullWidth label='Confirm Password'
                        placeholder="Confirm your password"
                        variant='outlined'
                        name='Password'
                        autoComplete='name'
                        autoFocus
                        className={classes.inputField}
                        {...register("Password", {
                            required: "Password cannot be empty",
                            pattern: {
                                value: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/,
                                message: "password doesnot match"
                            }
                        })}
                        error={!!errors.Password}
                        helperText={errors?.Password ? errors.Password.message : null}
                    />

                    <FormControlLabel
                        control={<Checkbox name="tnc"
                        />}
                        label="I accept the terms and conditions."
                    />

                    < Button type='submit' variant='contained' color='primary'>
                        <Link href="login" style={{ textDecoration: 'none', color: 'white' }} onClick={() => handleChange("event", 1)} >

                            Sign Up
                        </Link>
                    </Button>


                </form>
            </Paper>
        </Grid >
    )
}

export default SignUp;