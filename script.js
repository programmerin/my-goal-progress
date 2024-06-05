const el = document.querySelector(".range");
const con = el.getAttribute("style");

let count = +con[con.length - 1];

if (localStorage.getItem("count")) {
  count = +localStorage.getItem("count");
}

console.log(count);
const content = `--p:${count}`;
  el.setAttribute("style", content);

const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");

btnPlus.addEventListener("click", () => {
  count += 1;
  localStorage.removeItem("count");
  localStorage.setItem("count", count);
  const content = `--p:${count}`;
  el.setAttribute("style", content);
});

btnMinus.addEventListener("click", () => {
  count -= 1;
  localStorage.removeItem("count");
  localStorage.setItem("count", count);
  const content = `--p:${count}`;
  el.setAttribute("style", content);
});
