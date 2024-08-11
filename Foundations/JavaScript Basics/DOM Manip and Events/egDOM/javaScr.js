const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.style.cssText = "color: red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

const div = document.createElement("div");
div.setAttribute("style", "border: 1px solid black; background: pink; width: 500px; height: 500px;");
const hOne = document.createElement("h1");
hOne.textContent = "I'm in a div";
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
div.appendChild(hOne);
div.appendChild(para2);
container.appendChild(div);