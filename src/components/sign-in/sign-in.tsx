import React from 'react'
import TextField from '@mui/material/TextField';
import './idex.css'

export const SignIn = ({t}) => {
    return (
        <div>
            <TextField id="outlined-basic" label={t("authorize.password")} variant="outlined" />
        </div>
    )
}