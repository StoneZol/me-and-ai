import React, { useState, useEffect } from 'react';
import { createRoot, Link } from 'react-router-dom';

export default function StartPage() {
    const [textLines, setTextLines] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = [
        ">Тут должен был быть текст о том как я не мог понять асинхронные функции, а ИИ " +
        "помог мне, создавая упражнения которые я решал.",
        ">В процессе которых и появилась идея для этого проекта.",
        ">В процессе реализации которой я начал понимать еще и Хуки. Да и в целом поднял" +
        " общее понимание и навыки, работая с документацией.",
        ">Все серверные запросы выполнялись через использование библиотеки axios т.к.на " +
        "данный момент fetch я еще не отработал.",
        ">Далее будут задания которые придумал ИИ, и решения к ним, которые он счел верн" +
        "ыми, с каким то подобием интерактива.",
        ">Может даже будет дополняться.",
        ">Хотя кому оно надо?",
        ">За дизайн извиняться не буду. Мои вкусы весьма специфичны.",
        ">Пока делал эту анимацию, понял что когда поялвяется много текста, я в нем рассворяюсь.",
        ">Надо перестроить разум на блочные строгие последовательности.",
        ">Кнопка Резульаты перехала на верх т.к я не знаю сколько еще мыслепотока окажется на странице."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextLines(prevLines => {
                const newLines = [...prevLines]; //создаем копию состояния строк
                if (currentIndex < text.length) { //проверка что currentIndex до дошла до конца 
                    newLines[currentIndex] = text[currentIndex].slice(0, newLines[currentIndex] ? newLines[currentIndex].length + 1 : 1);
                    if (newLines[currentIndex].length === text[currentIndex].length){
                        setCurrentIndex(prevIndex => prevIndex + 1);
                    }
                }
                return newLines;
            })
        }, 20);
        return () =>clearInterval(interval);
    },[currentIndex]);

    return (
        <div className='Page'>
            <div className='PageBox Text'>
            <div className='ButtonToCase'>
                    <div className='ButtonToCaseBox'>
                        <Link to='/Sub'>&gt;Результаты</Link>
                    </div>
                </div>
                {
                    text.map((_, index) => (
                        <p key={index}>{textLines[index]}</p>
                    ))
                }
            </div>
        </div>
    );
}
