import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Hourglass } from 'react-loader-spinner';

const Signin = () => {

    const [loader, setLoader] = useState(false);

    function signInWithGoogle() {

        const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider()
        setLoader(true)
        signInWithPopup(auth, provider) // Use signInWithPopup() with auth instance
            .then((result) => {
                // alert(result.user.displayName);
            })
            .catch((error) => {
                // alert(error);
                setLoader(false)
            });
    }

    return (

        <div>
            {loader ?
                <div className={`background-content ${loader ? 'loader-container' : ''}`}>
                    <Hourglass
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    />
                </div>
                : null}
            <div className='formContainer'>
                <h2 className='signin-btn-h2'> Please Sign in to start your Chat-App</h2>
                <Button className='signin-btn' onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Signin;
