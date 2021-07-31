const ul = document.querySelector("ul")
const character = document.querySelector(".character-list")

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
      button.addEventListener("click" , () => popup(elm));
      button.innerText = `Show Character(${elm.characters.length})`
      li.append(h2,p,button);
      ul.append(li);
  })
}

{/* <div class="flex container">
                <h4>
                    character-list
                </h4>
                <button>
                    close
                </button>
            </div> */}

function popup(elm){
  ul.innerHTML = "";
     let div1 = document.createElement("div")
      div1.classList.add("flex" , "container" , "flex-100")
      let h4 = document.createElement("h4")
      h4.innerText = "character-list"
      let btn = document.createElement("button")
      btn.innerText = "close";
      btn.addEventListener("click" , close)
      div1.append(h4,btn)
      ul.append(div1)
  elm.characters.forEach((elm1) => {
    fetch(elm1)
    .then((res) => res.json())
    .then((data1) => {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = data1.name
      let p1 = document.createElement("p");
      p1.innerText = data1.gender
      let p2 = document.createElement("p");
      p2.innerText = data1.aliases;
      let p3 = document.createElement("p");
      p3.innerText = data1.tvSeries
      div.append(h3,p1,p2,p3)
      character.append(div)
    })
  })
}

// function close(){
//   if(character.style.display === "block"){
//     character.style.display = "none" 
//   }else{
//     ul.style.display = "block"
//   }
//   // ul.style.display = "block"
//   // character.style.display = "none"
// }


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




// let div1 = document.createElement("div")
      // div1.classList.add("flex" , "container")
      // let h4 = document.createElement("h4")
      // h4.innerText = "character-list"
      // let btn = document.createElement("button")
      // btn.innerText = "close";
      // div1.append(h4,btn)