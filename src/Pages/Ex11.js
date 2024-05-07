import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex11t } from './CodeBlocks'

export default function Ex11() {

    async function patchUser (userId, patchedData){
        try{
            const response = await axios.patch(
                `https://jsonplaceholder.typicode.com/users/${userId}`, patchedData)
            return response.data
        } catch (error) {
            throw new Error("Error patching user")
        }
    }
     const userPatchedData = {
        name: "lol",
        username: "Obemba"
     }
    
     patchUser(4, userPatchedData)
     .then(patchedUser => { 
        console.log('User patched', patchedUser)}
        
        ).catch(error => {
            console.error('Error patching user:', error.message)
        })

    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState()

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        patchUser(inputValue, userPatchedData)
            .then(deletedUser => {
                setInputSave(deletedUser)
                console.log(deletedUser)
            })
            .catch(error => setInputSave(`${error}, "User patched Error"`))
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
                        {ex11t}
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