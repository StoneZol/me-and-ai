import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex8t } from './CodeBlocks'

export default function Ex8() {

    async function createUser(userData) {
        try {
            const response = await axios.post(
                `https://jsonplaceholder.typicode.com/users/`,
                userData
            );
            return response.data;
        } catch (error) {
            throw new Error("Error create user")
        }
    }
    const newUser = {
        name: 'Makka',
        userName: 'Makka666',
        email: 'Makaka666@mail.ru'
    };
    createUser(newUser)
        .then(createdUser => {
            console.log('User created!', createdUser)
        })
        .catch(error => {
            console.error('Error', error.message)
        })



    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState()

    const numb = parseInt(inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        setInputSave('')
        createUser(newUser)
            .then(cratedUser => {
                setInputSave(cratedUser)
                console.log(createUser)
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
                        {ex8t}
                    </SyntaxHighlighter>
                </div>
                <div className='Results'>
                    <div className='In'>&gt;</div>
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