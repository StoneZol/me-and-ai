import React from 'react'
import {createRoot, Link} from 'react-router-dom';

export default function SubPage() {
    return (
        <div className='Page'>
            <div className='PageBox'>
                <div className='Ex'>
                    <h2>>Упражнение 1</h2>
                    <p>>Напиши асинхронную функцию, которая будет выводить в консоль сообщение
                        "Привет, мир!" через 3 секунды после вызова функции. Используй функцию
                        setTimeout для задержки.</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/1'>>Ответ</Link>
                        </div>
                    </div>
                </div>
                <div className='Ex'>
                    <h2>>Упражнение 2</h2>
                    <p>>Напиши асинхронную функцию, которая будет принимать на вход два числа и возвращать их сумму через определенное количество 
                        миллисекунд, используя setTimeout. Количество миллисекунд должно быть передано в качестве третьего аргумента функции..</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/2'>>Ответ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
