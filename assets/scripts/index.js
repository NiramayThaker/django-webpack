import "./helper1.js";
import "./helper2.js";
import Alpine from 'alpinejs'
import "../styles/index.css"

window.Alpine = Alpine
Alpine.start()

window.htmx = require('htmx.org');

window.addEventListener('load', () => {
    document.getElementById("message").textContent = 'Rebundle JS'
})
