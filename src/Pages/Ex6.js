import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex6t } from './CodeBlocks'

export default function Ex6() {
    const codeString = ex6t

async function getBookComments(index) {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/comments?postId=${index}`
        )
        return response.data;
    } catch (error) {
        throw new Error('Error');
    }
}


    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState([])

    const numb = parseInt(inputValue) - 1;

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        setInputSave([])
        getBookComments(numb)
            .then(bookObj => setInputSave(bookObj))
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
                {inputSave.map((comment, index) => (
                <div key={index}>
                    <p>Name: {comment.name}</p>
                    <p>Email: {comment.email}</p>
                    <p>Body: {comment.body}</p>
                </div>
            ))}
            </div>
        </div>
    );
}
