const input = document.querySelector('input');
const form = document.querySelector('form');
const output = document.querySelector('.output');


const checkPalindrome = (e) => {
    e.preventDefault();
    const text = input.value;
    const reverseText = text.split('').reverse().join('');
    if (!text) {
        alert('Please input a value');
    }else {
        if(text === reverseText) {
            output.innerHTML = text + " a palindrome.";
        }else{
            output.innerHTML = text + " is not a palindrome.";
        }
    }
    input.value = ""
    
}

form.onsubmit = checkPalindrome;