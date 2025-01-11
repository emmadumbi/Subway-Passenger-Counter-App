const countEl = document.getElementById("count-el");

const saveEl = document.getElementById("save-el");

const incrementBtn = document.getElementById("increment-btn");

const saveBtn = document.getElementById("save-btn");

let count = 0;

incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", function() {
   saveEl.textContent += count + " - ";
   count = 0;
   countEl.textContent = 0;
});