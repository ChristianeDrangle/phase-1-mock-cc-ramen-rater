// write yourde here
//add Images
//connect to api pictures
getRamen();
const ramenMenuDiv = document.querySelector("#ramen-menu");
function getRamen() {
  fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((ramens) => showAllRamen(ramens));
}

function showAllRamen(ramens) {
  ramens.forEach((ramen) => renderRamen(ramen));
}

function renderRamen(ramen) {
  const ramenImg = document.createElement("img");
  ramenImg.src = ramen.image;
  ramenImg.addEventListener("click", () => seeRamenInfo(ramen));
  ramenMenuDiv.append(ramenImg);
}

function seeRamenInfo(ramen) {
  console.log(ramen);
}
