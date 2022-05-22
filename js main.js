//x => <i class="fas fa-times"></i>
//o => <i class="fas fa-circle-notch"></i>

// selecting All "startingpage" Tags
let startingpage = document.querySelector("#startingpage");
let choose = document.querySelector(".choose");

// selecting All "main page" Tags
let mainpage = document.querySelector("#mainpage");
let showchange = document.querySelector("#showchange");
let boxes = document.querySelectorAll("#.boxes");

//selecting All "winner page" Tags
let winner = document.querySelector("#winner");
let winnername = document.querySelector("#winnername");
let quit = document.querySelector("#quit");

// how can we change turns
// false => x's Turn
// true => o's Turn
 let  changeTurn = null;


// select which you want to be>
// x or o
choose.forEach(choosenow =>{
    choosenow.addEventlistener("click", ()=>{
        if(choosenow,id === "playerx"){
            changeTurn = false;
            //console.log(changeTurn);
            showchange.style.left =`160px`;
        }else{
            changeTurn = true;
           // console.log(changeTurn);
           showchange.style.left =`0px`;

        }
        startingpage.style.display = "none";
        mainpage.style.display = "block";
    })
});

boxes.forEach(items =>{
    items.addEventlistener("click", ()=>{
        // add "x" icon If "changeturn" = false
         // add "o" icon If "changeturn" = true
         if(changeTurn == false){
             items.innerHTML =` <i class="fas fa-times"></i>`;
             items.id = "x";
             items.style.pointerEvents = "none";
             showchange.style.left =`160px`;

             // change  the "changetrun" value false into true
             changeTurn = "true";
         }else{
            items.innerHTML = ` <i class="fas fa-circle-notch"></i> `;
            items.id = "o";
            items.style.pointerEvents = "none";
            showchange.style.left =`opx`;

            // change  the "changetrun" value false into true
            changeTurn = "false";
         }
         winningfunc();
         Drawfunc();
    })
})

// All possible winning combinations
let combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let winningfunc = () =>{
    for (let a = 0; a <= 7; a++){
        let b =  winningcombinations[a];
       // console.log(b);

        if(boxes[b[o]].id == "" ||  boxes[b[1]].id == "" ||  boxes[b[2]].id == "");{
            continue;  
        } else if(boxes[b[0]].id == "x" && boxes[b[1]].id == "x" && boxes[d[2]].id =="x" ){
            // console.log("x is the winner");

            //adding winner text
            winnername.innertext = `player x win game!`;

            //show "winner page" & hide "mai page"
            mainpage.style = "none";
            winner.style = "block";

    }else if(boxes[b[0]].id == "o" && boxes[b[1]].id == "o" && boxes[d[2]].id =="o" ){
        console.log("o is the winner");

        
            //adding winner text
            winnername.innertext = `player o win game!`;

            //show "winner page" & hide "mai page"
            mainpage.style = "none";
            winner.style = "block";
   }
    else{
        continue;
    }
           
    
    }

}

//  match Draw function
let Drawfunc = ()=>{
    if(boxes[0].id !="" &&  boxes[1].id !="" && 
    boxes[2].id !="" &&  boxes[3].id !="" && 
    boxes[4].id !="" &&  boxes[5].id !="" && 
    boxes[6].id !="" &&  boxes[7].id !="" &&  boxes[8].id !=""){
       
         //adding "draw" text
         winnername.innertext = ` match Draw`;

         //show "winner page" & hide "mai page"
         mainpage.style = "none";
         winner.style = "block";
    }
}

// reset game
quit.addEventlistener("click" , ()=>{
    window.location.reload();
})
