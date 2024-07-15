// Cargar la API de YouTube
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    height: "315",
    width: "560",
    videoId: "-jAiLSf1zhE", // Reemplaza con tu VIDEO_ID
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // El reproductor está listo, puedes hacer acciones adicionales si es necesario
}

// Evento para evitar mensajes innecesarios en la consola
window.onYouTubePlayerAPIReady = function () {
  // Puedes agregar acciones adicionales si es necesario
};
