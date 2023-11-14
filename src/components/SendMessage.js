import Input from '@material-ui/core/Input'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { app, db } from '../firebase';
import { auth } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import { Hourglass } from 'react-loader-spinner';

const SendMessage = () => {

    const [msg, setMsg] = useState('')

    const [loader, setLoader] = useState(false);

    const sendMessage = async (e) => {
        setLoader(true)
        e.preventDefault();
        const messagesRef = collection(db, 'messages');
        const { uid, photoURL } = auth.currentUser;

        await addDoc(messagesRef, {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        });
        setLoader(false)
        setMsg('');
    }

    return (
        <div>
            {loader ?
                <div className={`background-content ${loader ? 'loader-container' : ''}`}>
                    <Hourglass
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    />
                </div>
                : null}
            <form onSubmit={sendMessage}>
                <div className='sendMsg'>
                    <Input style={{ width: "90%", color: "whitesmoke" }} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                    <Button className='msg-send' type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
