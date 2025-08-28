 


const hearts = document.getElementsByClassName("heartsClass");

for(const heart of hearts){
    heart.addEventListener("click", function(e){

      e.preventDefault();
    const heartCountNm =parseInt( document.getElementById("heart-count").innerText);
        
     document.getElementById("heart-count").innerText = heartCountNm+1;
 
    })
}
   
// call button feature

const calls = document.getElementsByClassName("call-btn");

for(const call of calls ){
  call.addEventListener("click",function(){

    let title =call.parentNode.parentNode.children[1].innerText; 
    // console.log(title);
   let num = call.parentNode.parentNode.children[3].innerText;
    // console.log(num);

    
    let time={
      date:new Date().toLocaleTimeString(),
    }
    
      let  coinCount  =document.getElementById("coin-count");
    
       let coinCountNum = coinCount.innerText;
   
      let newcoinCountNum = coinCountNum - 20;

      if(newcoinCountNum  < 0){
            alert("you don't have enough coin to make call ,you need 20 coin");
            return;
          }
          else{
             alert( "calling "+ title+" "+num + "...");
          }
     
          
         coinCount.innerText = newcoinCountNum;
          
    //  call history added task
    let historyParentDiv = document.getElementById("call-history-container-parent");
    let historyDiv=document.createElement("div");
    historyDiv.innerHTML  = `
     <div class="card1 w-[350px] flex py-[16px] px-[16px] mb-[20px] justify-between items-center bg-[#FAFAFA] rounded-[8px] ">
          <div><h3 class="title text-[#111111] font-semibold text-[1.125rem] ">
          ${title}
          </h3>
          <p class="number hind-madurai-font text-[#5C5C5C] text-[1.125rem] ">${num}</p>
         </div>
 
          <div class="timeOFCall">
          <p class="time text-[#111111] text-[1.125rem] hind-madurai-font">${time.date}</p>
          </div>

         </div>
    `
       historyParentDiv.append(historyDiv);

     // clear btn 

     let clearBtn = document.getElementById("clear-btn"). addEventListener("click", function(){
     historyDiv.innerText=" ";
    })

      
  })

}

   // copy btn
   let copyBtns = document.getElementsByClassName("copy");

   for(let copyBtn of copyBtns){
    copyBtn.addEventListener("click", function(){

let copyCount = document.getElementById("copy-count");

let copyCountNm = copyCount.innerText;

let newCopyCount = Number(copyCountNm) + 1;

 console.log(newCopyCount);

copyCount.innerText = newCopyCount;

let copyNumber = copyBtn.parentNode.parentNode.children[3].innerText;


navigator.clipboard.writeText(copyNumber);




    })
   }