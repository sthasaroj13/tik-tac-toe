let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');

let msg = document.querySelector('#para');
// i select all the classes and id and create a variables

let turn0= true ;
// i create a varibale  who trun come a first

const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]
// i create a winner pattern through  array
const reStart = ()=>{
turn0 = true;
enables()
msg.innerText =''


}
// i use loop in boxes so that i can use all the box 
// than i envoke a eventlistiner  and use if else
boxes.forEach(box => {
    box.addEventListener('click', () =>{
        // console.log('box is clicked')
        if (turn0) {
            box.innerText ='0'
            turn0 = false;
            // i did  this turn0 false because after the turn0 turn it will not again  repeat
        } else {
            box.innerText ='X'
            turn0 =true;
            
        }
        box.disabled = true; // i do this  if there is winner then the box will disable
        checkWinner() //  i call the function
    })

});
const stop = (box) =>{
for (const box of boxes) {
    box.disabled =true;
    
}
}
const enables = (box) =>{
    for (const box of boxes) {
        box.disabled =false;
        box.innerText =''
        
    }
    }

const showWinner =(winner)=>{
msg.innerText =` ${winner} You won the Game  `
stop()
}
const checkWinner = () =>{
for (const pattern of winner) {
//     console.log (pattern[0],pattern[1],pattern[2])
//     console.log (boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    let val1 = boxes[pattern[0]].innerText;
   let val2 = boxes[pattern[1]].innerText;
   let val3 = boxes[pattern[2]].innerText;

    if (val1 !='' && val2!=''  && val3!='') {
         if (val1 === val2 && val2=== val3) {
            showWinner(val1)
         }
        
    } else {
        
    }
}

}
reset.addEventListener('click',reStart)