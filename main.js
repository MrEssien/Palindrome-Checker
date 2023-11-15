const inputText = document.getElementById('data');
const button = document.getElementById('btn')


const palindrome =(str) => {
    str=str.replace(/[\W_]/g, '');  //to strip away special characters and spaces 
    str= str.toLowerCase();  // to remove Capitals letters
    
    // then for loop to go through string to check for correct same amount of characters
     for(let i=0; i<str.length; i+=1){
         if(str[i] !== str[str.length-1 -i]){
            return false;
            }  
        }
        return true;
    
    }

    console.log(palindrome(inputText))
    button.addEventListener("click", palindrome);