import React from 'react';
import '../index.css'

import { BiSolidDownload } from 'react-icons/bi';

const FloatBall = () => {
    return (
        <div className='floatball' style={{
        background: '#ff4a57', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'auto',
        right: '50px',
        bottom: '40px',
        position: 'fixed',
        zIndex: '100',
        borderRadius: '50%'}}>
            <a href='https://drive.google.com/file/d/1OJ0Qpc92CknAQjgIgXnh_HDobvbVs5D4/view?usp=sharing'
            style={{
                color: 'white',
                text: 'decoration-none',
                height: 'auto',
                padding: '20px',
                fontSize: '20px',
                borderRadius: '50%'}} 
            target='_BLANK' 
            rel="noreferrer">
            <BiSolidDownload/></a>
        </div> 
    )
}


export default FloatBall; 