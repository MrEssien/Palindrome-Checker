const inputText = document.getElementById('data');
const button = document.getElementById('btn')


button.addEventListener("click", () => {
if (!inputText.value) alert('Input is empty ')
else {
    const inputVal=inputText.value.replace(/[\W_]/g, '').toLowerCase();  //to strip away special characters and spaces 
    const newVal = inputText.value.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase();  // to split the input text into array, then reverse the array to check if the same n to remove Capitals letters
    if(
        inputVal == newVal ){
            document.getElementById('output').textContent = `${inputText.value} is a Palindrome!`  
        } else{
            document.getElementById('output').textContent = `${inputText.value} is not a Palindrome!`  
        }

   }
})
