let TheWord = document.getElementById("TheWord");
let toSendTheWord = document.getElementById("toSendTheWord");
/* let InpTypeYourAnser = document.querySelectorAll(".InpTypeYourAnser") */
let theMainWord = "";
let yourPostion = 0;
let nice = false;
let anserDiv = document.getElementById("anserDiv");
var theIntval 


toSendTheWord.addEventListener("click" , ()=>{
    theMainWord = TheWord.value 
    let afterSplit = theMainWord.split("");
    build(afterSplit);
    theIntval = setInterval(()=>{
        check(afterSplit)
    }, 1000);
    
})




function  build(theLength) {
    if (anserDiv.children.length >theLength.length ) {
       return
    }
    else if(anserDiv.children.length <theLength.length){
        for(let i=0; i<theLength.length; i++){
        let inp = document.createElement("input");
        inp.classList.add("InpTypeYourAnser");
        inp.setAttribute("maxlength","1");
        inp.setAttribute("type","text");
        anserDiv.appendChild(inp);
        } 
    }
    
    
}
   

function check(theword) {
let InpTypeYourAnser = document.querySelectorAll(".InpTypeYourAnser");

   if(theword[yourPostion] ===InpTypeYourAnser[yourPostion].value) {
        console.log("hello world");
        nice = true;
        
   }
   else if(theword[yourPostion] !==InpTypeYourAnser[yourPostion].value){
    nice = false;
   }

   if(nice){
    yourPostion++
   }
  
   if (yourPostion ===  InpTypeYourAnser.length) {
    alert("you win");
    clearInterval(theIntval)    
   }else{
    InpTypeYourAnser[yourPostion].focus()
   }
   

}







   


