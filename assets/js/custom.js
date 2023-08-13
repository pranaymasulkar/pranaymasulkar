    
function BubltStars(){
    setTimeout(()=>{
        var nightStars ='<div class="shooting_star"></div>';
        var startBox = document.querySelector(".night");
        for(let i = 0; i<= 20; i++) {
            startBox.innerHTML += nightStars;
            // console.log(i)
        }

        var bubbles = '<div class="bubble"></div>';;
        var BubCanva = document.querySelector(".canvas");
        for(let i = 0; i <= 50; i++){
            BubCanva.innerHTML += bubbles;
            // console.log(i)
        }
    }, 12000)
}
BubltStars();




