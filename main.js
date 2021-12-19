canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
bg_image = "https://static-01.daraz.pk/p/5062d1472142fa40864528a930830e59.jpg";
rover_image = "";
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = bg_image ;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image ;
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if ((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
        alphabetKey();
        document.getElementById("d1").innerHTML="YES PRESSED ALPHABET KEY";
        console.log("alphabet key");
    }
}
function alphabetKey() {
img_image="AlpKey.png";
add();
}