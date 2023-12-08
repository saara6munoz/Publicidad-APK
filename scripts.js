window.onload = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    
    if (!isMobile) {
        alert("Debe realizar la descarga desde un dispositivo móvil.");
        window.location.href = "advertencia.html";
    }
};

function downloadApk() {
    var userAgent = navigator.userAgent.toLowerCase();

    // Verifica si el usuario está utilizando un navegador móvil
    var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    if (isMobile) {
        // Si es un navegador móvil, redirige a la descarga del APK
        href = 'AsistenciaDuco.apk'; // Ajusta la ruta según tu estructura
    } else {
        // Si es un navegador de escritorio, muestra un mensaje de error
        alert('Ingrese desde un dispositivo móvil para poder descargar la aplicación.');
    }
}
