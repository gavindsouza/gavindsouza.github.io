if('serviceWorker' in navigator){
    try {
        navigator.serviceWorker.register('./serviceworker.js');
    } catch (error) {
        console.log(error);
    }
}