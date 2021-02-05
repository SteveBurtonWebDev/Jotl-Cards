
function changeImage(imgClicked) {
        var imgChange = "img" + imgClicked;
        document.getElementById(imgChange).style.opacity = 0.4; 
           
}

function resetImages() {
    document.getElementById("img1").style.opacity = 1; 
    document.getElementById("img2").style.opacity = 1; 
    document.getElementById("img3").style.opacity = 1; 
    document.getElementById("img4").style.opacity = 1; 
    document.getElementById("img5").style.opacity = 1; 
    document.getElementById("img6").style.opacity = 1; 
    document.getElementById("img7").style.opacity = 1; 
    document.getElementById("img8").style.opacity = 1; 

}