const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "MJ4X1e6QZqkev2pb69ZMuQ==zEYlJRvy9zxmpjNm";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later :)";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        console.log(error);
    }

    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);