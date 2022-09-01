const loadData = async () => {
  const response = await fetch("./database/data.json");
  const database = await response.json();
  return database;
};

const displayUi = async () => {
  const database = await loadData();
  const topBanner = document.getElementById("top-banner");
  removeInnerText("top-banner");
  for (const data of database.banner) {
    const viewtopBanner = document.createElement("div");
    viewtopBanner.innerHTML = ` <img src="${data.image}" alt="" class="img-fluid">`;
    topBanner.appendChild(viewtopBanner);
  }
  displayHtml();
};

const displayHtml = async () => {
  const database = await loadData();
  const htmlUi = document.getElementById("htmlUi");
  removeInnerText("htmlUi");
  for (const data of database.HTML) {
    const viewHtmlUi = document.createElement("div");
    viewHtmlUi.innerHTML = `
        <h2>${data.title}</h2>
        <p class="text-justify fs-4">${data.description}</p>        
        <img src="${data.image}" alt="" class="img-fluid pt-3 py-3">        
      `;
    htmlUi.appendChild(viewHtmlUi);
  }
  removeInnerText("cssUi");
  removeInnerText("jSUi");
  removeInnerText("gitUi");
};
const displayCSS = async () => {
  const database = await loadData();
  const cssUi = document.getElementById("cssUi");
  removeInnerText("cssUi");
  for (const data of database.CSS) {
    const viewcssUi = document.createElement("div");
    viewcssUi.innerHTML = `
        <h2>${data.title}</h2>
        <p class="text-justify fs-4">${data.description}</p>
        <img src="${data.image}" alt="" class="img-fluid pt-3 py-3">        
      `;
    cssUi.appendChild(viewcssUi);
  }
  removeInnerText("htmlUi");
  removeInnerText("jSUi");
  removeInnerText("gitUi");
};

const displayGit = async () => {
  const database = await loadData();
  const gitUi = document.getElementById("gitUi");
  removeInnerText("gitUi");
  for (const data of database.Git) {
    const viewgitUi = document.createElement("div");
    viewgitUi.innerHTML = `
        <h2>${data.title}</h2>
        <p class="text-justify fs-4">${data.description}</p>
        <img src="${data.image}" alt="" class="img-fluid pt-3 py-3">        
      `;
    gitUi.appendChild(viewgitUi);
  }
  removeInnerText("htmlUi");
  removeInnerText("cssUi");
  removeInnerText("jSUi");
};

const displayJS = async () => {
  const database = await loadData();
  const jSUi = document.getElementById("jSUi");
  removeInnerText("jSUi");
  for (const data of database.JavaScript) {
    function listed(lists) {
      return `<ul>${lists
        .map((list) => `<li class="fs-4">${list}</li>`)
        .join("")}</ul>`;
    }
    const viewjSUi = document.createElement("div");
    viewjSUi.innerHTML = `
            <h2>${data.title}</h2>
            <p class="text-justify fs-4">${data.description}</p>
             ${data.list.length > 0 ? listed(data.list) : ""}           
            <img src="${data.image}" alt="" class="img-fluid pt-3 py-3">        
          `;
    jSUi.appendChild(viewjSUi);
  }
  removeInnerText("htmlUi");
  removeInnerText("cssUi");
  removeInnerText("gitUi");
};
displayUi();

function removeInnerText(elementById) {
  const element = document.getElementById(elementById);
  element.innerText = ``;
}
const btnRemove = (firstElement, secondElement, thirdElement) => {
  const element1 = document.getElementById(firstElement);
  const element2 = document.getElementById(secondElement);
  const element3 = document.getElementById(thirdElement);
  element1.classList.remove("active");
  element2.classList.remove("active");
  element3.classList.remove("active");
};
document.getElementById("html").addEventListener("click", function () {
  btnRemove("css", "js", "git");
});
document.getElementById("css").addEventListener("click", function () {
  const addActive = document.getElementById("css");
  addActive.classList.add("active");
  btnRemove("html", "js", "git");
});
document.getElementById("js").addEventListener("click", function () {
  const addActive = document.getElementById("js");
  addActive.classList.add("active");
  btnRemove("html", "css", "git");
});
document.getElementById("git").addEventListener("click", function () {
  const addActive = document.getElementById("git");
  addActive.classList.add("active");
  btnRemove("html", "css", "js");
});
