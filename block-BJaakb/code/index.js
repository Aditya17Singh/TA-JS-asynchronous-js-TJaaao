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


function fetch(event,url = `https:api.unsplash.com/search/photos/?query=${event.target.value}&client_id=181lKfOJmdxVuHpLFWstxWjEBkWeZpT7zbsddVHINLM`){
    if(event.keyCode === 13){
        return new Promise((resolve , reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET" , url)
            xhr.onload = function (){
                let user = JSON.parse(xhr.response)
                displayUI(user)
            }
            xhr.onerror = () => reject("went wrong")
            xhr.send();
        })
    }

}

input.addEventListener("keyup" , fetch)






