import React from 'react'
import {createRoot, Link} from 'react-router-dom';

export default function StartPage() {
    return (
        <div className='Page'>
            <div className='PageBox Text'>
                <p>>Тут должен был быть текст о том как я не мог понять асинхронные функции, а
                    ИИ помог мне, создавая упражнения которые я решал.</p>
                <p>>В процессе которых и появилась идея для этого проекта.</p>
                <p>> В процессе реализации которой я начал понимать еще и Хуки. Да и в целом
                    поднял общее понимание навыки, работая с документацией.</p>
                <p>>Все серверные запросы выполнялись через использование библиотеки <code>axios</code> т.к.
                    на данный момент <code>fetch()</code> я еще не отработал.
                </p>
                <p>>За дизайн извиняться не буду. Мои вкусы весьма специфичны.</p>

                <div className='ButtonToCase'>
                    <div className='ButtonToCaseBox'>
                        <Link to='/Sub'>>Результаты</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
