const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let check = expr;
    let a = '';
    let arrEmpty = [];
    let morz = []; 
    let morzStr = '';
    let morzNum = '';
 
     for (let i = 0; i < check.length; i++) {
       a = a + check[i]
       if (a.length == 10) {
         arrEmpty.push(a)
         a = ''; 
       }
     }
 
     for (let i = 0; i < arrEmpty.length; i++){
       if (arrEmpty[i] == '**********') {
         morz.push(' ')
       }
       for (let k = 0; k < arrEmpty[i].length; k++ ){
         a = a + arrEmpty[i][k];
         // console.log(a)
         if (a.length == 2 && a == 10){
           morzNum += '.'
           a = ''
         }
         if (a.length == 2 && a == 11){
           morzNum += '-'
           a = ''
         }
         if (a.length == 2 && a !== 10 && a !== 11){
          a = ''
         }
         
       } 
       // console.log(morzNum)
       morz.push(morzNum)
       morzNum = ''
     }
 
     for (let i= 0; i < morz.length; i++){
       if (morz[i] == ' '){
           morzStr += ' '
       }      
       for (key in MORSE_TABLE){
         if (morz[i] == [key]){
           morzStr += MORSE_TABLE[key]
         }
       }
       
     } 
 //  console.log(morzStr)
 
    return morzStr
   //  console.log(arrEmpty)
 }
 
 console.log(decode('000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110'))
 

module.exports = {
    decode
}