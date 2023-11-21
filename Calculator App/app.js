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