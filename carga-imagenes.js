// Carga de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imagenes img');
    
    images.forEach(img => {
        if(img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});