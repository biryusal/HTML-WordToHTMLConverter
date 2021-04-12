export default function htmlConvert(htmlWord) {

  if (!htmlWord) {
    throw new Error("Код для конвертирования не может быть пустым."); //если код из ввода пустой, выкидываем ошибку.
  }

  let output = htmlWord.replace(/<\/?[wom]:.*\n?.*\/?>/g, " ") //в противном случае обрабатываем код регулярными выражениями
                        .replace(/(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/g, " ")
                        .replace(/<!--.*/g, " ")
                        .replace(/.*-->/g, " ")
                        .replace(/\s{2,}/g, " ")
                        .trim(); // и удаляем в конечном итоге лишние пробелы
  
  return output;
}
