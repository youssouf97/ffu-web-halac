window.addEventListener('domcontentloaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerdispaly = Array.fromdocument.querySelectorAll('.dispayplayer');
    const resetbutton = Array.fromdocument.querySelectorAll('.#reset');
    const   announcer = document.querySelector('.announcer');

    let board =['','','','','','','','',''];
    let currentplayer ='x';
    let isgameactive = true;

    const playerx_won = 'player_won';
    const playero_won = 'player_won';
    const tie ='tie';
    /*
    indexes within the board
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
 */
    const winningconditions =[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
    ];
   tiles.forEach(tile,(index)=> {
  tile.addEventListener('click',() => useraction(tile,index));
   });


  resetbutton.addeventlistener('click' ,resetboard);
});