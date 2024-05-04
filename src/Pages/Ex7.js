import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex7t } from './CodeBlocks'

export default function Ex7() {
    const codeString = ex7t;

async function getUsers(index) {
    try {
        const users = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return users
            .data
            .slice(0, index);
    } catch (error) {
        throw new Error("Error");
    }
}

    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState([])

    const numb = parseInt(inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        setInputSave([])
        getUsers(numb)
            .then(users => {
                setInputSave(users)
                console.log(users)
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
                        {codeString}
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
                {inputSave.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>UserName: {user.username}</p>
                </div>
            ))}
            </div>
        </div>
    );
}
