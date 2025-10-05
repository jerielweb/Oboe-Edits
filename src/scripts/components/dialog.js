const servicios = {
    video: {
        titulo: "Edición/Creación de Video",
        descripcion: "Ofrecemos un servicio integral de edición y creación de video, diseñado para transformar tus ideas o material grabado en contenido visual atractivo y profesional.",
        descripcion2: "Nuestro objetivo es producir videos que comuniquen tu mensaje de forma efectiva, ya sean videos promocionales, corporativos, educativos o personales.",
        caracteristicas: ["Edición profesional",
          "Efectos visuales",
          "Corrección de color",
          "Efectos de Sonido",
          "Subtitulos"],
        tipo: ["Videos para YouTube",
        "Videos Cortos (Shorts, Reels y Tik Tok)",
        "Pubicidad"],

        precio: "$50 por video",
        ejemplo: "Video Sobre Polemica",
        content: "https://www.youtube.com/embed/vNbcctIrIZM",
        contentType: "iframe_youtube",

        ordenBtn1: "https://wa.link/5n9z20",
        ordenBtn2: "form.html",
    },
    grafico: {
        titulo: "Diseño Gráfico",
        descripcion: "Diseño gráfico personalizado para tu marca o negocio.",
        descripcion2: "se manejará como vacío",
        caracteristicas: ["Logotipos",
          "Banners",
          "Flyers",
          "Miniaturas"],
        precio: "Desde $30",
        ejemplo: "Miniatura Hecha para YouTube",
        content: "assets/content/Sitioweb.webp",
        contentType: "imagen",

        ordenBtn1: "https://wa.link/5n9z20",
        ordenBtn2: "form.html",
    },
    codigo: {
        titulo: "Codificación",
        descripcion: "Soluciones de codificación y desarrollo web.",
        caracteristicas: ["Sitios web responsivos","Optimización SEO",
        "Dominio propio personalizable"
        ],
        precio: "Desde $100",
        ejemplo: "La misma web que visitaste Justo ahora",
        content: "assets/content/Sitioweb.webp",
        contentType: "imagen",
        ordenBtn1: "https://wa.link/5n9z20",
        ordenBtn2: "form.html",
    }
};

const popup = document.getElementById("popup")
function generarContenidoMultimedia(date) {
    if (!date.content || !date.contentType) {
        return '';
    }

    const src = date.content
    const type = date.contentType
    
    switch (type) {
        case 'iframe_youtube':
            return `<iframe 
                        src="${src}" 
                        allowfullscreen 
                        frameborder="0"
                        title="Ejemplo de Video">
                    </iframe>`
        case 'imagen':
            return `<img 
                        src="${src}" 
                        alt="Ejemplo de Contenido" 
                        style="
                            width: 100%; 
                            height: 100%; 
                            object-fit: contain; 
                            border-radius: 10px;">`
        
        default:
            return ''
    }
}


function cerrarDialog() {
    const popupContent = popup.querySelector('.popup-content')
    
    if (popupContent) {
        popupContent.classList.add('fadeout')
        popupContent.addEventListener('animationend', function handler(e) {
            if (e.animationName === 'FadeOut') { 
                popup.innerHTML = ""
                popup.style.display = "none"
            }
        }, { once: true })
    } else {
        popup.style.display = "none"
    }
}


function mostrarDialog(servicioId) {
    const date = servicios[servicioId]
    if (!date) return
    const multimediaHTML = generarContenidoMultimedia(date);
    const tiposHTML = date.tipo ? 
        `<ul>${date.tipo.map(c => '<li>' + c + '</li>').join('')}</ul>` : 
        '<p>No aplica tipos específicos.</p>';

    popup.innerHTML = `
        <div class="popup-content" id="popup-content">
            <a href="#" id="close-btn">
                <img src="assets/icons/close.svg" alt="Cerrar">
            </a>
            <div class="col-1">
                <h1>${date.titulo}</h1>
                <p>${date.descripcion}</p>
                <p>${date.descripcion2 ? date.descripcion2 : ''}</p> <div>
                    <h4>Características:</h4>
                    <ul>${date.caracteristicas.map(c => '<li>' + c + '</li>').join('')}</ul>
                </div>
                <p><b>Precio:</b> ${date.precio}</p>
            </div>
            <div class="col-2">
                <div id="col-1">
                    <h4>Tipos:</h4>
                    ${tiposHTML}
                </div>
                <div id="col-2">
                    <h4>Ejemplo:</h4>
                    <p>${date.ejemplo}</p>
                    ${multimediaHTML} </div>
                
                <footer id="orden-btn">
                    <a target="_blank" href="${date.ordenBtn1}">Pedir Por WhatsApp</a>
                    <a target="_blank" href="${date.ordenBtn2}">Pedir Por Correo</a>
                </footer>
            </div>
        </div>
    `;
    
    popup.style.display = "flex";
    const popupContent = popup.querySelector('.popup-content')
    if (popupContent) {
        popupContent.classList.remove("fadeout")
    }

    const closeButton = document.getElementById("close-btn")
    if (closeButton) {
        closeButton.onclick = function(e) {
            e.preventDefault();
            cerrarDialog();
        };
    }

    popup.onclick = function(e) {
        if (e.target.id === 'popup') {
            cerrarDialog();
        }
    };
}