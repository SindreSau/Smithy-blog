function animate() {
    const animateElements = document.querySelectorAll('.animate');

    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200);
    });
}

document.addEventListener('DOMContentLoaded', animate);
document.addEventListener('astro:after-swap', animate);
