const slides = document.querySelectorAll(".slides");
var c = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index*100}%`;
    }
)

function slideImage(){
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${c*100}%)`;
        }
    )
}

function goNextSlide() {
    if(c < slides.length-1){
        c++;
        slideImage();
    }
    else{
        alert('end of slide');
    }
}


function goPreviousSlide() {
    if(c > 0){
        c--;
        slideImage();
    }
    else{
        alert('end of slide');
    }
}