import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase';

const Signout = () => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button className='signout-btn' onClick={() => auth.signOut()}> Logout</Button>
        </div>
    )
}

export default Signout
