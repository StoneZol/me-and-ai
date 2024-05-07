import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex3t } from './CodeBlocks'

export default function Ex3() {

async function getBookID(bookId) {
    try {
        const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${bookId}`
        )
        return response.data
    } catch (error) {
        throw new Error('Error')
    }
}

    const [inputValue, setInputValue]= useState('')
    const[inputSave, setInputSave] = useState()

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
     
    const handlerClick = () => {
        setInputSave('')
        getBookID(numb).then(result =>{
            setInputSave(result)
        }).catch((error) => {
            console.log(error)
        })
    }

    const handlerKeyDown = (event) => {
        if (event.key ==='Enter'){
            handlerClick();
        } 
        else return;
    }

    const numb = parseInt(inputValue)


    return (
        <div className='Page'>
            <div className='PageBox'>
                <div className='Code'>
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomDark}
                        showLineNumbers="showLineNumbers">
                        {ex3t}
                    </SyntaxHighlighter>
                </div>
                <div className='Results'>
               <div className='In'>&gt;</div>
            <input type='number' onChange={handleChange} onKeyDown={handlerKeyDown} placeholder='bookID'></input> 
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <a onClick={handlerClick}>&gt;Выполнить</a>     
                        </div>
                    </div>
                </div>
                <SubPageButt/>
                <p> {JSON.stringify(inputSave, null, 2)}</p>
            </div>
        </div>
    );
}
