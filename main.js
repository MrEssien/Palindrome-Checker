const inputText = document.getElementById('data').value;
const button = document.getElementById('btn')

inputText=inputText.replace(/[\W_]/g, '');  //to strip away special characters and spaces 
inputText= inputText.toLowerCase();  // to remove Capitals letters

const palindrome =() => {
   // inputText=inputText.replace(/[\W_]/g, '');  //to strip away special characters and spaces 
    //inputText= inputText.toLowerCase();  // to remove Capitals letters
    
    // then for loop to go through string to check for correct same amount of characters
     for(let i=0; i<inputText.length; i+=1){
         if(inputText[i] !== inputText[inputText.length-1 -i]){
            document.getElementById('output').textContent = false;
            }  
        }
        document.getElementById('output').textContent= true;
    
    }

    button.addEventListener("click", palindrome);