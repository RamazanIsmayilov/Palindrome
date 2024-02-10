const input = document.querySelector('input');
const form = document.querySelector('form');
const output = document.querySelector('.output');


const checkPalindrome = (e) => {
    e.preventDefault();
    const text = input.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseText = text.split('').reverse().join('');
    if (!text) {
        alert('Please input a value');
    }else {
        if(text === reverseText) {
            output.innerHTML = "Yes, <strong><em>" + input.value + "</em></strong> is a palindrome.";
        }else{
            output.innerHTML = "No, <strong><em>" + input.value + "</em></strong> is not a palindrome.";
        }
    }
    input.value = "";
    
}

form.onsubmit = checkPalindrome;