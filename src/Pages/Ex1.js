import React from 'react'
import {useState, useRef} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import SubPageButt from './SubPageButt';

export default function Ex1() {
    const codeString = `
  function HW(t){
      return setTimeout(function(){
              console.log("Hello world " , t)
          }, t)
  }

  HW(t);
`;

    const [inputValue, setInputValue] = useState('');
    const [inputSave, setInputSave] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handlerClick = (event) => {
        setInputSave('')
        HW(inputValue)
        console.log("Ok", inputValue)
    }

    const handlerKeyDown = (event) => {
        if (event.key === 'Enter') {
            setInputSave('')
            HW(inputValue)
            console.log("Ok", inputValue)
        } else 
            console.log('Error')
    }

    function HW(t) {
        return setTimeout(function () {
            console.log("Hello world", t)
            setInputSave(`Результат > Hello world ${inputValue}`)
        }, t)
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