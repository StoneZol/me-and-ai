import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex4t } from './CodeBlocks'

export default function Ex4() {


    async function getBookID() {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            return response.data
        } catch (error) {
            throw new Error('Error');
        }
    }

    getBookID()
        .then(books => console.log(books))
        .catch(error => console.log(error))

    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        setInputSave('')
        getBookID()
            .then(result => {
                setInputSave(result)
            })
            .catch((error) => {
                console.log(error)
            })
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
                        {ex4t}
                    </SyntaxHighlighter>
                </div>
                <div className='Results'>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <a onClick={handlerClick} onKeyDown={handlerKeyDown}>&gt;Выполнить</a>

                        </div>
                    </div>
                </div>
                <SubPageButt/> {
                    Array.isArray(inputSave) && inputSave.map(
                        (item, index) => (<p key={index}>{JSON.stringify(item, null, 2)}</p>)
                    )
                }
            </div>
        </div>
    );
}