import React, {useState} from 'react';
import './Styles.scss';
import { Sidebar } from '../Sidebar/Sidebar';


export const Navigation
    = () => {
        const [show, setShow] = useState(false)

        return (
            <div>
            <div className='container'>
                <div className="navbar">
        <div className='leftside'> 
                <div className='icon'>
                    <span onClick={() => setShow(!show)}>{show ? 'X' : 'Menu'}</span>
                </div>
                <div className='heading'>
                     Integrated core Manager (ICM)
                </div>
                </div>
                <div className='rightside'>
                <div>
            <input className='input' placeholder='Search' />
                </div>
                <div>
                    Alekya Mure(199158)
                </div>    
                </div>                  
                </div>
            </div>
            { show && <Sidebar />} 
            </div>
        );
    }