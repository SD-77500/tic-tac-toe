let boxes=document.querySelectorAll(".box");
let rb=document.querySelector(".rb");
let ngb=document.querySelector("#new-btn");
let mc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const resetgame=()=>{
  turno = true;

  disablBoxes();
   enableBoxes();
  mc.classList.add("hide");
}
       
        boxes.forEach((box)=>{
          box.addEventListener("click",()=>{
            console.log("box was cliced");
   if(turno){
    box.innerText="O";
    turno=false;
   }
   else{
      box.innerText="x";
      turno=true;
            }
            box.disabled=true;
            cw();
          });
    });


const disablBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
    box.innerText="";
  }
}

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
  }
}

const showWinner=(winner)=>{
msg.innerHTML='Congratulation,Winner is '+winner;
mc.classList.remove("hide");

}



    const cw=()=>{
      for( let pattern of winpatterns){
let pv1=boxes[pattern[0]].innerText;
let pv2=boxes[pattern[1]].innerText;
let pv3=boxes[pattern[2]].innerText;

if(pv1 !=""&&pv2 !=""&&pv3 !=""){
  if(pv1===pv2&&pv2===pv3){
    console.log("winner",pv1);
    showWinner(pv1);
  }
}
      }
    };
 rb.addEventListener("click",resetgame);
ngb.addEventListener("click",resetgame);


