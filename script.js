let TheWord = document.getElementById("TheWord");
let toSendTheWord = document.getElementById("toSendTheWord"); 
let theMainWord = "";
let yourPostion = 0;
let nice = false;
let anserDiv = document.getElementById("anserDiv");
var theIntval ;
let TheSelect = document.getElementById("TheSelect")
let selecContent = document.getElementById("selecContent");
let inpAddContent = document.getElementById("inpAddContent");
let addContent = document.getElementById("addContent");


toSendTheWord.addEventListener("click" , ()=>{
    everyThing()
} )

TheWord.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        everyThing()
    }
  })

TheSelect.onchange = function(){
    selecContent.innerHTML = TheSelect.value;
}
     
addContent.addEventListener("click" , ()=>{
    TheSelect.innerHTML += ` <option value=`+inpAddContent.value+`>`+inpAddContent.value+`</option>`;
    console.log(TheSelect);
})

function everyThing() {
    theMainWord = TheWord.value 
    let afterSplit = theMainWord.split("");
    build(afterSplit);
    theIntval = setInterval(()=>{
        check(afterSplit)
        
    }, 100);
}



function  build(theLength) {
    yourPostion = 0;
    
    if (anserDiv.children.length >theLength.length||TheWord.value === "" ) {
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
    
    TheWord.style.display = "none";
    TheSelect.style.display = "none";
    
}
   

function check(theword) {
    
let InpTypeYourAnser = document.querySelectorAll(".InpTypeYourAnser");
   if(theword[yourPostion] ===InpTypeYourAnser[yourPostion].value) {
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
    clearInterval(theIntval);
    TheWord.style.display = "flex"; 
    TheSelect.style.display = "flex";
    TheWord.value = ""; 
    anserDiv.innerHTML ="";
    selecContent.innerHTML = 'select content';
    
   
   }else{
    InpTypeYourAnser[yourPostion].focus()
   }
}







   


