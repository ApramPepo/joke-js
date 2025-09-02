const joke = document.querySelector(".joke");
const jokeBtn = document.querySelector(".jokeBtn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

async function randomJoke() {
    fetch(url).then((resp) => resp.json())

    .then((data) => {
        joke.innerHTML = data.joke;
    })

}


randomJoke();

jokeBtn.addEventListener("click", ()=>{
    randomJoke();
});