let input = document.getElementById("todo-input");
let button = document.getElementById("todo-btn");
let ul = document.getElementById("ul");

function clickBtn() {
  let inputVal = input.value;

  if(input.value === ''){
    alert('Please add your task');
  } else{
    let li = document.createElement("li");
    li.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "space-y-3",
      "li"
    );
    li.innerHTML = `  <div class="flex items-center h-6">
      <div id='circle' class="w-5 h-5 pb-2 rounded-full border-2 border-[#e0e0e0] mr-3 circle"></div>
      <img id='check'  class="w-5 h-5 mr-3  hidden check" src="images/check.png" alt="">
      <p id='texts'  class="text-sm leading-none h-fit font-medium">${inputVal}
      <p>
  </div>
  <img id='image' class="w-5 h-5 px-[5px] rounded-full hover:bg-[#bebebe] py-[5px] bg-[#e0e0e0]" src="images/close.png" alt="">
  `;
    ul.appendChild(li);
    input.value = "";
  }

  
}

ul.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.id === "texts") {
    event.target.classList.add("line-through");
    event.target.previousElementSibling.classList.remove("hidden");
    let check = event.target.previousElementSibling;
    check.previousElementSibling.classList.add("hidden");
  } else if (event.target.id === "circle") {
    event.target.classList.add("hidden");
    console.log(event.target.nextElementSibling.classList.remove("hidden"));
    let check = event.target.nextElementSibling;
    check.nextElementSibling.classList.add("line-through");
  } else if (event.target.id === "image") {
    event.target.classList.add("hidden");
    let circle = event.target.previousElementSibling.classList.add("hidden");
  }
});
