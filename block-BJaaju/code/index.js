const div = document.querySelector(".image-search");
const input = document.querySelector("input");

function displayUI(data) {
  div.innerHTML = "";
  let final = data.results;
  final.forEach((elm) => {
    let image = document.createElement("img");
    image.src = elm.urls.small;
    div.append(image);
  });
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=181lKfOJmdxVuHpLFWstxWjEBkWeZpT7zbsddVHINLM`
    );
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.send();
    event.target.value = "";
  }
}
input.addEventListener("keyup", handleChange);
