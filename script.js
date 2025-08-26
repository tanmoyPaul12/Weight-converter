const inputEle = document.getElementById("input")
const errorEle = document.getElementById("error")
const ansEle = document.getElementById("ans")

let errorTime;
let noErrorTime;


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
        },4000)
    }
}


inputEle.addEventListener("keydown" , (event)=>{
    if (event.key==="Enter") {
        updateResult();      
        // console.log(inputEle.value);
        // console.log(ansEle.innerText)
    }
    
})
    
    