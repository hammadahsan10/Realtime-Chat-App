import React, { useEffect, useState } from 'react';
import Signout from './Signout';
import { db, auth } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';
import { Hourglass } from 'react-loader-spinner';

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data()));
            setLoader(false)
        });

        return () => {
            unsubscribe();
        };
    }, []);

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
            <Signout />
            <h1 className='my-chatbox'>Welcome to My Chat-Box</h1>
            <div className='chat-container'>
                <div className='msgs'>
                    {messages.length ?
                        messages.map(({ id, text, photoURL, uid }) => (
                            <div>
                                <div key={id} className={`msg-concat ${uid == auth.currentUser.uid ? 'sent' : 'received'}`}>
                                    <img src={photoURL} alt='img' />
                                    <p style={{ color: 'black' }}>{text}</p>
                                </div>
                            </div>
                        ))
                        :
                        <h1 className='start-convo'> Start a Conversation...</h1>}
                    <SendMessage />
                </div>
            </div>
        </div>
    );
}

export default Chat;
