function getNumber(num){
    let result=document.getElementById("result")
   result.value +=num
}

function clearRes(){
    let result=document.getElementById("result")
    result.value=""
}

function getResult(){
    let res= document.getElementById("result")
    res.value = eval(res.value)
}


// concatenation understanding:
// let a = "a";
//     a = a + "b";
// console.log(a)

// let a = "";
// let word = "billa"
// for(let i = 0;i<word.length;i++){
//     a+=word[i]
//     console.log(a)
// }


// let word = prompt ("Enter your word")
// let check ="";
// for(let i = word.length-1;i>=0;i--){
//     check +=word[i]
// }
// if(word == check){
//     console.log("Your entered word is palindrome!")
// }else{
//     console.log("Not palindrome!")
// }


