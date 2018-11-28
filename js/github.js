const githubURL = "https://api.github.com/users/gavindsouza/repos";


window.addEventListener('load', event => {
    loadGitHubData();
})

async function loadGitHubData() {
    const result = await fetch(githubURL);
    const myInfo = await result.json();

    console.log("Number of public Repositories: ", myInfo.length);
    
    forks = []; repos = [];
    for (let i = 0; i < myInfo.length; i++) {
        if (myInfo[i]["fork"] == true)
            forks.push(myInfo[i]["name"]);
        else
            repos.push(myInfo[i]["name"]);
    }
    console.log(forks, repos);
}



/* 
first version: gitHub data

let request = new XMLHttpRequest();
request.open('get', githubURL);
request.onload = OnSuccessfulLoadofJSON;
request.onerror = OnUnsuccessfulLoadofJSON;
request.send();

function OnSuccessfulLoadofJSON() {
    let myInfo = JSON.parse(request.responseText);
    console.log("Number of public Repositories: ", myInfo.length);
    forks = []; repos = [];
    for (let i = 0; i < myInfo.length; i++) {
        if (myInfo[i]["fork"] == true)
            forks.push(myInfo[i]["name"]);
        else
            repos.push(myInfo[i]["name"]);
    }

    console.log(forks, repos);

}

function OnUnsuccessfulLoadofJSON() {
    console.log("why is this happening to us :(\nPleasee tweet me @itbegavin, thanks :)");
}
 */