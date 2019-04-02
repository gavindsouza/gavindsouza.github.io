// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZ3AagzZI1gPDEzQm8bDmzoRTW-mgm59g",
    authDomain: "gavindsouza-github-io.firebaseapp.com",
    databaseURL: "https://gavindsouza-github-io.firebaseio.com",
    projectId: "gavindsouza-github-io",
    storageBucket: "gavindsouza-github-io.appspot.com",
    messagingSenderId: "510073608812"
};
firebase.initializeApp(config);

var database = firebase.database();

function sendMessage(name, body) {
    userId = name + Math.random()
    firebase.database().ref('users/' + userId).set({
        username: name,
        body: body
    });
}