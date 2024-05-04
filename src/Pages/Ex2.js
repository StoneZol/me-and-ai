import React from 'react'
import {useState, useRef} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SubPageButt from './SubPageButt';

export default function Ex2() {
    const codeString = `
    async function delayedSum(a, b, delay) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const sum = a + b;
                    resolve(sum);
                }, delay)
            })
        }
        
        delayedSum(delay, delay, delay)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error("Error", error)
            })
            //> для ввода delay
`;

    const [inputValue, setInputValue] = useState('');
    const [inputSave, setInputSave] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const numb = parseInt(inputValue);

    const handlerClick = () => {
        setInputSave('')
        delayedSum(numb, numb, inputValue)
        .then(result => {
            console.log(result)
            setInputSave(`Результат >  ${result}`)
        })
        .catch(error => {
            console.error("Error", error)
        })
        console.log("Ok", inputValue)
    }

    const handlerKeyDown = (event) => {
        if (event.key === 'Enter') {
            setInputSave('')
           delayedSum(numb, numb, inputValue)
            .then(result => {
                console.log(result)
                setInputSave(`Результат >  ${result}`)
            })
            .catch(error => {
                console.error("Error", error)
            })
            console.log("Ok", inputValue)
        } else {return}
    }


    async function delayedSum(a, b, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const sum = a + b;
                resolve(sum);
            }, delay)
        })
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
                    <div className='In'>></div>
                    <input type='number' onChange={handleChange} onKeyDown={handlerKeyDown}></input>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <a onClick={handlerClick}>>Выполнить</a>
                        </div>
                    </div>
                    <p>
                        {inputSave}</p>
                </div>
                <SubPageButt/>
            </div>
        </div>
    );
}