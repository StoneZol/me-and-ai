import React from 'react'
import {createRoot, Link} from 'react-router-dom';

export default function SubPage() {
    return (
        <div className='Page'>
            <div className='PageBox'>
                <div className='Ex'>
                    <h2>&gt;Упражнение 1</h2>
                    <p>&gt;Напиши асинхронную функцию, которая будет выводить в консоль сообщение
                        "Привет, мир!" через 3 секунды после вызова функции. Используй функцию
                        setTimeout для задержки.</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/1'>&gt;Ответ</Link>
                        </div>
                    </div>
                </div>
                <div className='Ex'>
                    <h2>&gt;Упражнение 2</h2>
                    <p>&gt;Напиши асинхронную функцию, которая будет принимать на вход два числа и
                        возвращать их сумму через определенное количество миллисекунд, используя
                        setTimeout. Количество миллисекунд должно быть передано в качестве третьего
                        аргумента функции..</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/2'>&gt;Ответ</Link>
                        </div>
                    </div>
                </div>
                <div className='Ex'>
                    <h2>&gt;Упражнение 3</h2>
                    <p>&gt;Напиши асинхронную функцию, которая будет получать данные о книге из
                        внешнего API. API возвращает объект книги в формате JSON. Твоя функция должна
                        принимать на вход идентификатор книги (например, ISBN) и возвращать объект
                        книги.</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/3'>&gt;Ответ</Link>
                        </div>
                    </div>
                </div>
                <div className='Ex'>
                    <h2>&gt;Упражнение 4</h2>
                    <p>&gt;Напиши асинхронную функцию, которая будет получать список книг из
                        внешнего API. API возвращает массив объектов книг в формате JSON. Твоя функция
                        должна возвращать этот массив книг.</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/4'>&gt;Ответ</Link>
                        </div>
                    </div>
                </div>
                <div className='Ex'>
                    <h2>&gt;Упражнение 5</h2>
                    <p>&gt;Напиши асинхронную функцию, которая будет получать данные о пользователе
                        из внешнего API. API возвращает объект пользователя в формате JSON. Твоя функция
                        должна принимать на вход идентификатор пользователя и возвращать объект
                        пользователя. Для выполнения запроса к API используй библиотеку Axios или
                        встроенный объект Fetch.</p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/5'>&gt;Ответ</Link>
                        </div>
                    </div>
                </div>
                <div className='Ex'>
                    <h2>&gt;Упражнение 6</h2>
                    <p>&gt;Напиши асинхронную функцию, которая будет получать список комментариев
                        книги из внешнего API. API возвращает массив объектов комментариев в формате
                        JSON. Твоя функция должна принимать на вход идентификатор книги (например, ISBN)
                        и возвращать массив комментариев.
                    </p>
                    <p>&gt;На этом моменте я придумал что можно сделать с jsonplaceholder.typicode.com
                    </p>
                    <div className='ButtonToCase'>
                        <div className='ButtonToCaseBox'>
                            <Link to='/Sub/6'>&gt;Ответ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
