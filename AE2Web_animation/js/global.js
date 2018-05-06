lottie.loadAnimation({
    container: document.getElementById("animation"), // the dom element that will contain the animation
    renderer: 'svg', //'svg' / 'canvas' / 'html' to set the renderer
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
});