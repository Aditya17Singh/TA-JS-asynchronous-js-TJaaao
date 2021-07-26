const img = document.querySelector("img")
const name = document.querySelector("h1")
const workingAt = document.querySelector("p")
const followers = document.querySelector(".followers")
const following = document.querySelector(".following")
const input = document.querySelector("input")

function displayUI(data){
    img.src = data.avatar_url
    name.innerText = data.name;
    workingAt.innerText = data.company;
    following.innerText = `Following: ${data.following}`
    followers.innerText = `Followers: ${data.followers}`
}


function handleChange(event){
    if(event.keyCode === 13){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`)
    xhr.onload = function(){
    let userData = JSON.parse(xhr.response)
    displayUI(userData)
    }
    xhr.send();
    event.target.value = ""
  }
}

input.addEventListener('keyup', handleChange)
