import React from 'react';
import { createRoot, Link} from 'react-router-dom';
import ConsoleButt from './ConsoleButt';

export default function Header(){

    return (
        <div className='Header'>
            <div className='HeaderTextBox'>
                <Link to = "/">&gt;Me And AI</Link>
            </div>
            <div className='Console'>
            <div className='In'>&gt;</div><ConsoleButt/>
            </div>
        </div>
    );
}


