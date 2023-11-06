//function_1
function palindrome(str)
    {
        str = str.toLowerCase().replace(/\s|[,.!?"/-]/g,"");
        return str === str.split("").reverse().join("");
    }
//function_2
function extractDigits(str) {
    // Создаем пустую строку для хранения найденных цифр
    let number = '';
  
    // Проходимся по каждому символу в строке
    for (let i = 0; i < str.length; i++) {
      // Если текущий символ является цифрой от 0 до 9, добавляем его в строку number
      if (/[0-9]/.test(str[i])) 
      {
        number += str[i];
      }
    }
  
    // Проверяем, были ли найдены цифры
    if (number.length === 0) {
      return NaN;
    }
  
    // Преобразуем строку number в целое положительное число и возвращаем его
    return parseInt(number);
  }
//function_3
function AddSymbols(str, minLenght, symbols) {
    if (str.length >= minLenght) {
      return str;
    } else {
      const symbolsLenght = minLenght - str.length;
      const slicedSymbols = symbols.slice(0, symbolsLenght);
      return slicedSymbols + str;
    }
}
//function_4
function checkStringLength(str, maxLength) {
    return str.length <= maxLength;
  }