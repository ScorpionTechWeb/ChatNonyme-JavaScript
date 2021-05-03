const frm = document.querySelector("form");
const pseudoIpt = document.querySelector("#pseudo");
const msgIpt = document.querySelector("#message");
const colorIpt = document.querySelector("#color");
const ul = document.querySelector("ul");
// const submitIpt = document.querySelector("form > input");
const submitIpt = document.querySelector("input[type='submit']");

frm.addEventListener("submit", e => {
    e.preventDefault();

    let li = document.createElement("li");
    li.textContent = " " + msgIpt.value.trim() + " ";
    li.style.color = colorIpt.value;
    
    let span = document.createElement("span");
    if (pseudoIpt.value) {
        span.textContent = pseudoIpt.value + " : ";
    } else {
        span.textContent = "ChatNonyme : ";
    }
    
    span.style.fontWeight = "bold";
    
    let btnSuppr = document.createElement("button");
    btnSuppr.textContent = "Supprimer";
    
    btnSuppr.addEventListener("click", () => {
        btnSuppr.parentElement.remove();
        // li.remove();
        msgIpt.focus();
    });
    
    li.prepend(span);
    li.append(btnSuppr);
    
    ul.append(li);
    
    msgIpt.value = "";
    submitIpt.disabled = true;
    msgIpt.focus();
});

msgIpt.addEventListener("keyup", () => {
    if (msgIpt.value.trim()) {
        submitIpt.disabled = false;
    } else {
        submitIpt.disabled = true;
    }
    
    // submitIpt.disabled = !msgIpt.value;
});