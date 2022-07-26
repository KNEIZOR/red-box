export default function slider(ref, time) {
    let slideIndex = 1;
        showSlides(slideIndex);

        function showSlides(n) {
            let slides = ref.current.children;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (let slide of slides) {
                slide.style.display = "none";
            }
            slides[slideIndex - 1].style.display = "flex";
        }

        setInterval(function () {
            slideIndex++;
            showSlides(slideIndex);
        }, time);
}
