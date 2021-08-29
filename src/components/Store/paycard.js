import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    label: {
        marginLeft: 30,
        fontSize: 35,
        textSizeAdjust: 50,
    },
    label2 :{
        marginLeft: 80,
    },
    button: {
        marginLeft: 130,
        width: 100,
    },
    date: {
        marginLeft: 80,
        width: 190,
    }
  });

export default function Form(callback){

    const classes = useStyles();

    const handleSubmit = (event)=>{
        alert('Thanks You To Puy From Our Store 😘');
    };

    return (
        <>
        <div>
            <form className={classes.label} noValidate autoCapitalize='off'>
                <br/>
                <br/>
                <TextField className={classes.label} label='Full Name' />
                <TextField className={classes.label2} label='Credit Card' />
                <br/>
                <br/>
                <TextField className={classes.label} label='Address' />
                <TextField className={classes.date} label='Expiration' type='date' defaultValue='2021/4/7' InputLabelProps={{shrink: true,}} />
                <br/>
                <br/>
                <TextField className={classes.label} label='City' />
                <TextField className={classes.label2} label='CVV' />
                <br/>
                <br/>
                <TextField className={classes.label} label='State' />
                <br/>
                <br/>
                <TextField className={classes.label} label='Zip' />
                <br/>
                <br/>
                <Button className={classes.button} variant='contained' color='primary' onClick={handleSubmit}> Pay </Button>
            </form>
        </div>
        </>
    )
}