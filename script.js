const inputEle = document.getElementById("input")

const errorEle = document.getElementById("error")

const ansEle = document.getElementById("ans")

let errorTime;

let noErrorTime;

let resultUpdateTime;

let delay = 3000;

const  updateResult = function(){

    if (inputEle.value<=0 || isNaN(inputEle.value)) {
        errorEle.style.display = "block" //first a hide thkbo -ve aile show hoibo
        errorEle.innerText = "Please enter a valid number...";

        clearTimeout(errorTime) // eta na dile after every 2secs reset hoibo value 1 after 1 dite time
        errorTime = setTimeout( ()=>{
            errorEle.innerText = "";
            inputEle.value = "";
        }, 2000);//2seconds
    }

    else{
        ansEle.innerText = (+inputEle.value/2.2).toFixed(2); //+ will convert to no.  
        clearTimeout(noErrorTime)      
        noErrorTime = setTimeout(function(){
            inputEle.value = "";
            ansEle.innerText = "";
        },4000);
    }
    
    
}


//it will take everyvalue without enter

// inputEle.addEventListener("input",updateResult)


//submit and wait for 3s==>

// inputEle.addEventListener("keydown", (e)=>{
//     if (e.key==="Enter") {
//         clearTimeout(resultUpdateTime)
//        resultUpdateTime = setTimeout(()=>{
//             updateResult();
//         },3000)
        
//     }
// })
    

//auto submit after delay==>


inputEle.addEventListener("input" , ()=>{
    
    clearTimeout(resultUpdateTime)

    resultUpdateTime = setTimeout(()=>{
        updateResult();
    },delay)

})