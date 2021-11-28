const test = {
    0: [1, "hallvares_test.jpg", "hallvares"],
    1: [2, "naerukajakas_test.jpg", "naerukajakas"],
    2: [3, "rasvatihane_test.jpg", "rasvatihane"],
    3: [4, "sinikael-part_test.jpg", "sinikael-part"],
    4: [5, "tuvi_test.jpg", "tuvi"],
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

let cycle = [0,1,2,3,4];

for(let i = cycle.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = cycle[i]
    cycle[i] = cycle[j]
    cycle[j] = temp
  }
console.log(cycle)

function checkAnswer() {
    input = document.getElementById("testInput").value;
    if (ans == input.toLowerCase()) {
        if (cycle.length != 0) {
            document.getElementById("feedback").style.color="green";
            document.getElementById("feedback").innerHTML = "Õige vastus!"
        } else {
            document.getElementById("feedback").style.color="green";
            document.getElementById("feedback").innerHTML = "Kõik õige!"
        }
        document.getElementById("testInput").setAttribute("value", "");
        nextQuestion();
    } else {
        document.getElementById("feedback").style.color="blue";
        document.getElementById("feedback").innerHTML = "Proovi veel!"
    }
}


let img;
function nextQuestion() {
    for (key in test) {
        if (key == cycle[0]) {
            img = test[key][1];
            ans = test[key][2];
            cycle.shift();
            break;
        }
    }
    document.getElementById("testImage").src="../assets/images/"+img;
}




nextQuestion();

document.getElementById("testButton").addEventListener("click", checkAnswer);
document.getElementById("testInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkAnswer();
    }
});

