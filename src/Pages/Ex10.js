import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex10t } from './CodeBlocks'

export default function Ex10() {

    async function deleteUser(userId) {
        try {
            const response = await axios.delete(
                `https://jsonplaceholder.typicode.com/users/${userId}`);
            return response.data;
        } catch (error) {
            throw new Error("Error deleting user")
        }
    }

    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState()

    const numb = parseInt(inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        deleteUser(inputValue)
            .then(deletedUser => {
                setInputSave(`${deletedUser}, ${inputValue}, "User deleted"`)
                console.log(deletedUser)
            })
            .catch(error => setInputSave(`${error}, "User delete Error"`))
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
                        {ex10t}
                    </SyntaxHighlighter>
                </div>
                <div className='Results'>
                    <div className='In'>&gt;</div>
                    <input type='number' onChange={handleChange} onKeyDown={handlerKeyDown} placeholder='userId'></input>
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