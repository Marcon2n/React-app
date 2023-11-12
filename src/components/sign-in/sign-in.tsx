import React from 'react'
import { TFunction } from 'i18next';
import TextField from '@mui/material/TextField';
import './idex.css'

interface SignInProps {
    t: TFunction;
}

export const SignIn = ({t}:SignInProps) => {
    return (
        <div>
            <TextField id="outlined-basic" label={t("authorize.password")} variant="outlined" />
        </div>
    )
}