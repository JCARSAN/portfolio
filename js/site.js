window.onload = () =>{
    let slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('#prev-slide');
    const nextButton = document.querySelector('#next-slide');
    let indexSlides = 0;
    const totalSlidesIndex = slides.length - 1;

    slides[indexSlides].style.display = 'flex';

    nextButton.onclick = () => {
        if(indexSlides < totalSlidesIndex){
            slides[indexSlides].style.display = 'none';
            indexSlides += 1;
            slides[indexSlides].style.display = 'flex';
        }
        //console.log('Index Slides: ',indexSlides);
    }
    prevButton.onclick = () => {
        console.log('Index prevButton: ', indexSlides)
        if(indexSlides > totalSlidesIndex){
            indexSlides = totalSlidesIndex;
        }
        if(indexSlides > 0){
            //console.log('Entrou aqui - indexSlides: ',indexSlides);
            slides[indexSlides].style.display = 'none';
            indexSlides -= 1;
            slides[indexSlides].style.display = 'flex';
        }
    }
}