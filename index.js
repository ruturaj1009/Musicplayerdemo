var song = document.getElementById('song');
var icon = document.getElementById('icon');
var img1 = document.getElementById('turn');
let rotate1 = 0;
icon.onclick = function(){
    if (song.paused) {
        song.play();
        icon.src="pause.png";
    } else {
        song.pause();
        icon.src="play.png";
    }
}
img1.onclick = function(){
    var image = new Image();
        image.src = 'b.jpg';
        document.body.navbar.append(image);
        image.style.transform = "rotate(90deg)";
}


// turn.addEventListener('click',()=>{
//     console.log("dhdjjdjd")
//     rotate1 = rotate1 + -90;
//     turn.style.transform = 'rotate(${rotate1}deg)'
// })
