let count = 0;
let turnx = true;
let newbtn = document.getElementById("newbtn");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");
let winmsg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer");
let drawmsg = document.querySelector(".drawmsg");

const winningpatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) =>
    box.addEventListener("click", () => {
        if (turnx) {
            box.innerText = "X";
        } else {
            box.innerText = "O";
        }
        turnx = !turnx;
        box.disabled = true;
        count++;
        check();
        console.log(count);
        if (count == 9 && msgcontainer.classList.contains("hide")) {
            drawmsg.classList.remove("hide");
        }
    })
);

let disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let check = () => {
    for (let patterns of winningpatterns) {
        let first = boxes[patterns[0]].innerText;
        let second = boxes[patterns[1]].innerText;
        let third = boxes[patterns[2]].innerText;
        if (first != "" && second != "" && third != "") {
            if (first === second && second === third) {
                disableboxes();
                showwinner(first);
                return;
            };
        };
    }
};

let showwinner = (winner) => {
    winmsg.innerText = (`Congratulations, Winner is ${winner}`);
    msgcontainer.classList.remove("hide");
};

let reset = () => {
    turnx = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msgcontainer.classList.add("hide");
    count = 0;
    drawmsg.classList.add("hide");
}
resetbtn.addEventListener("click", reset);

newbtn.addEventListener("click", reset);