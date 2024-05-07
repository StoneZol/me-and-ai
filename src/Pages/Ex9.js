import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex9t } from './CodeBlocks'

export default function Ex9() {

    async function updateUser(userId, updatedUser) {
        try {
            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
            return response.data;
        } catch (error) {
            throw new Error("Error updating user")
        }
    }
    const updatedUser = {
        name: 'Makka',
        userName: 'Makka666',
        email: 'Makaka666@mail.ru'
    };

    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState()

    const numb = parseInt(inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        updateUser(inputValue, updatedUser)
            .then(createdUser => {
                setInputSave(createdUser)
                console.log(createdUser)
            })
            .catch(error => console.log(error))
        }

    const handlerKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerClick();
        } else 
            return;
        }
    
    return (
        <div className='Page'>
            <div className='PageBox'>
                <div className='Code'>
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomDark}
                        showLineNumbers="showLineNumbers">
                        {ex9t}
                    </SyntaxHighlighter>
                </div>
                <div className='Results'>
                    <div className='In'>&gt;</div>
                    <input type='number' onChange={handleChange} onKeyDown={handlerKeyDown} placeholder='index'></input>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <a onClick={handlerClick} onKeyDown={handlerKeyDown}>&gt;Выполнить</a>
                        </div>
                    </div>
                </div>
                <SubPageButt/>
                <p>
                    {JSON.stringify(inputSave, null, 2)}</p>
            </div>
        </div>
    );
}