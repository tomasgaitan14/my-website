import React from 'react';
import '../index.css'

import { BiSolidDownload } from 'react-icons/bi';

const FloatBall = () => {
    return (
        <button style={{ cursor:'pointer', position: 'fixed', background: '#ff4a57',borderRadius:'100px', padding:'20px', fontSize:'20px',top:'87%',right:'5%',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}}><a href='#contact'><BiSolidDownload /></a></button>
    )
}




export default FloatBall; 