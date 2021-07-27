const div = document.querySelector(".image-search");
const input = document.querySelector("input")


function displayUI(data){
    div.innerHTML = ""
    let final = data.results
    final.forEach((elm) => {
        let image = document.createElement("img")
        image.src = elm.urls.small;
        div.append(image)
    })
}


function handleChange(event){
    if(event.keyCode === 13){
        let xhr = new XMLHttpRequest();
        xhr.open("GET" , `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=181lKfOJmdxVuHpLFWstxWjEBkWeZpT7zbsddVHINLM`)
        xhr.onload = function(){
            let userData = JSON.parse(xhr.response)
            displayUI(userData)
        }
        xhr.send()
        event.target.value =""
    }

}

input.addEventListener("keyup" , handleChange)





// https://api.unsplash.com/search/photos/?query=mountain&client_id=181lKfOJmdxVuHpLFWstxWjEBkWeZpT7zbsddVHINLM




// function displayUI(data){
//     img.src = data.avatar_url
//     name.innerText = data.name;
//     workingAt.innerText = data.company;
//     following.innerText = `Following: ${data.following}`
//     followers.innerText = `Followers: ${data.followers}`
// }

// function displayFollowers(data1){
//     data1.forEach((elm) => {
//         let image = document.createElement("img")
//         image.src = elm.avatar_url;
//         followers.append(image)
//     })
// }

// function displayFollowing(data2){
//     data2.forEach((elm1) => {
//         let image1 = document.createElement("img")
//         image1.src = elm1.avatar_url
//         following.append(image1)
//     })
// }

// function handleChange(event){
//     let val = event.target.value;
//     if(event.keyCode === 13){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://api.github.com/users/${val}`)
//     xhr.onload = function(){
//     let userData = JSON.parse(xhr.response)
//     displayUI(userData)
//     }
//     xhr.send()
//     event.target.value =""

//     let xhr1 = new XMLHttpRequest();
//     xhr1.open('GET', `https://api.github.com/users/${val}/followers`)
//     xhr1.onload = function(){
//     let userData1 = JSON.parse(xhr1.response)
//     displayFollowers(userData1)
//     }
//     xhr1.send()
//     event.target.value =""

//     let xhr2 = new XMLHttpRequest();
//     xhr2.open('GET', `https://api.github.com/users/${val}/following`)
//     xhr2.onload = function(){
//     let userData2 = JSON.parse(xhr2.response)
//     displayFollowing(userData2)
//     }
//     xhr2.send()
//     event.target.value =""
//   }