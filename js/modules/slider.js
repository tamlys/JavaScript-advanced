function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider
    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    const indicators = document.createElement('ol'),
          dots = [];
    
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNoteDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function showTotalSlides() {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = `${slides.length}`;
            current.textContent = slideIndex;
        }
    }

    function slideTransform() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function changeOpacityDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function showNextSlide() {
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    }

    function showPrevSlide() {
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    }

    showTotalSlides();

    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset === deleteNoteDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoteDigits(width);
        }
        
        showNextSlide();
        slideTransform();
        showTotalSlides();
        changeOpacityDots();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNoteDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNoteDigits(width);
        }

        showPrevSlide();
        slideTransform();
        showTotalSlides();
        changeOpacityDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNoteDigits(width) * (slideTo - 1);

            slideTransform();
            showTotalSlides();
            changeOpacityDots();
        });
    });
}

export default slider;