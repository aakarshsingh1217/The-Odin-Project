const unorderedList = document.querySelector("ul");
const inpt = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const inptValue = inpt.value;
    inpt.value = '';
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    unorderedList.appendChild(newLi);
    newSpan.textContent = inptValue;
    newBtn.textContent = 'Delete';

    newBtn.addEventListener("click", () => {
        newLi.remove();
    });

    inpt.focus();
});