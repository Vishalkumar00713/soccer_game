const form=document.querySelector('form');

const player1=document.querySelector('#player1');
const player2=document.querySelector('#player2');

const select=document.querySelector("select");
const p1=document.querySelector("#p1");
const p2=document.querySelector("#p2");

const h2=document.querySelector('h2');

//reset button
const reset=document.querySelector('#reset');



let i=0;//for player1
let j=0;//for player2

 



player1.addEventListener('click',function(e)

{
    e.preventDefault();
    i=i+1;
    if(i<(select.value)){
    p1.innerText=`${i} `;
    }

    else{
        p1.innerText=`${i} `;
        player1.disabled=true;
        player2.disabled=true;
        p1.style.color="green";
        p2.style.color="red";
        h2.innerText="PLAYER1 won congratssssssss";
        h2.style.color="green"

    }


   
})


player2.addEventListener('click',function(e)

{
    e.preventDefault();
    j=j+1;
    if(j<(select.value)){
        p2.innerText=`${j}`;
    }
    
    else{
        p2.innerText=`${j}`;
        player1.disabled=true;
        player2.disabled=true;
        p1.style.color="red";
        p2.style.color="green";
        h2.innerText="PLAYER2 won congratssssssss";
        h2.style.color="green";

    }
   
})


reset.addEventListener('click',function(e){
    form.reset();
})
















