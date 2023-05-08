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
    }
}

main.scrollBar();