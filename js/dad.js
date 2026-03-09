async function loadJoke() {
  const jokeEl = document.getElementById("joke");

  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    });

    const data = await response.json();
    jokeEl.textContent = data.joke;

  } catch (error) {
    jokeEl.textContent = "Failed to load joke.";
    console.error(error);
  }
}


window.addEventListener("DOMContentLoaded", loadJoke);