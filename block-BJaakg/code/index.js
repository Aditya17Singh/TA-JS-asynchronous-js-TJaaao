let ul = document.querySelector("ul")
let character = document.querySelector(".character-list")
let btn = document.querySelector(".btn");
let h4 = document.querySelector("h4")


function handleSpin(status = false){
  if(status){
  ul.innerHTML = `<div class="loader"></div>`;
}
};


function displayUI(data){
  ul.innerHTML = "";
  data.forEach((elm) => {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerText = elm.name;
    let p = document.createElement("p");
    p.innerText = elm.authors;
    let button = document.createElement("button");
    button.innerText = `Show Character(${elm.characters.length})`
    button.addEventListener("click" , () => {
      popup(elm)
      character.style.display = "block"
      btn.style.display = "block"
      h4.style.display = "block"
      character.querySelector(".btn").addEventListener("click" , () => {
        character.style.display = "none"
        displayUI(data)
      })
    })
      li.append(h2,p,button);
      ul.append(li);
    })
  }
  
  function popup(elm){
    ul.innerHTML = "";
    elm.characters.forEach((elm1) => {
      fetch(elm1)
      .then((res) => res.json())
      .then((data1) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = `${data1.name} : ${data1.aliases}()`
        let p1 = document.createElement("p");
        p1.innerText = data1.gender
        let p3 = document.createElement("p");
        p3.innerText = data1.tvSeries
        div.append(h3)
        character.append(div)
      })
    })
  }
  
  function fetch1 (){
    handleSpin(true)
    fetch(`https://www.anapioficeandfire.com/api/books`)
    .then((res) =>  res.json())
    .then((data) => {
      handleSpin(false)
      displayUI(data)
  })
  .finally(() => handleSpin(false))
}
fetch1()
