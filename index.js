// const h1 = document.createElement("h1");
// h1.innerText = "Hello World";

function getUserItem(user) {
  // Create a new Item
  const divTag = document.createElement("div");
  divTag.classList.add("item");
  // divTag.style.border = "1px solid black";
  // divTag.style.padding = "10px";
  // divTag.style.margin = "10px";
  // divTag.style.borderRadius = "10px";
  // divTag.style.display = "flex";
  // divTag.style.alignItems = "center";

  // for Image
  const imgTag = document.createElement("img");
  imgTag.src = `https://avatars.dicebear.com/api/male/${user.name}.svg`;
  imgTag.width = 50;
  divTag.appendChild(imgTag);

  //   for Name
  const nameTag = document.createElement("h2");
  nameTag.innerText = user.name + " " + user.email;
  divTag.appendChild(nameTag);

  return divTag;
}

const wrapper = document.getElementById("wrapper");


console.log("loading....");

fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    response.json().then(users => {
        const userHtmlList = []
        users.forEach(user => {
            const htmlItem = getUserItem(user);
            userHtmlList.push(htmlItem)
        });
        wrapper.append(...userHtmlList)
        console.log("done....");
    })
});



