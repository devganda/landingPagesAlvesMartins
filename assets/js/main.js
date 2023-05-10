const main = {
    scrollBar() {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > header.offsetHeight) {
                header.classList.remove('linear-gradient-white');
            } else {
                header.classList.add('linear-gradient-white')
            }
        });
    },

    swiperService() {
        const swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    },

    tipoEscrita() {
        const title = document.getElementById('maquinaDeEscrever');
        const texto = title.innerHTML.split('');
        title.innerHTML = '';
        texto.forEach((letra, i) => {
            setTimeout(() => title.innerHTML += letra, 75 * i)
        });
    }
}

main.scrollBar();
main.swiperService();
main.tipoEscrita();
