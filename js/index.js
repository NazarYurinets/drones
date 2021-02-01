window.onload = function() {
    for (const el of document.querySelectorAll(".collapse")) {
        el.addEventListener("click", function(e) {
            this.classList.toggle('is-active');
        });
    }
}