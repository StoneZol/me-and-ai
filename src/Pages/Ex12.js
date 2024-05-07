import React from 'react'
import {useState} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SubPageButt from './SubPageButt'
import axios from 'axios'
import { ex12t } from './CodeBlocks'

export default function Ex12() {

    async function getToDos(userId, index){
        try{
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            return response.data.slice(0, index)
        } catch (error) {
            throw new Error('Error')
        }
    }
    
    // getToDos(inputValue, 10)
    //     .then(todos => console.log(todos))
    //     .catch(error => console.log('Error get todos:', error.messadge))

    const [inputValue, setInputValue] = useState('')
    const [inputSave, setInputSave] = useState([])

    const numb = parseInt(inputValue);

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = () => {
        getToDos(inputValue , 10)
            .then(gettedtodos => {
                setInputSave(gettedtodos)
                console.log(gettedtodos)
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
                        {ex12t}
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
                {inputSave.map((todos, index) => (
                <div key={index}>
                    <p>userId: {todos.userId}</p>
                    <p>title: {todos.title}</p>
                </div>
            ))}
            </div>
        </div>
    );
}