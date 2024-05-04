import React, { useState, useRef, } from 'react';


const ConsoleButt = () => {
  const [inputValue, setInputValue] = useState('');
  const [commands, setCommands] = useState({
    '/': '/',
    '/Sub': '/Sub',
    '/1': '/Sub/1',
    '/2': '/Sub/2',
    // Добавьлене команды - ссылки
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const command = inputValue.trim();
      if (commands.hasOwnProperty(command)) {
        // Действие при вводе корректной команды
        console.log(`Команда ${command} обработана`);
        // Переход по соответствующей ссылке
        window.location.href = commands[command];
      } else {
        // Действие при вводе некорректной команды
        console.log('Неверная команда');
      }
      // Очистка поля ввода
      setInputValue('');
    }
  };

  return (
    <input
      autoFocus
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder=""
    />
  );
};

export default ConsoleButt;
