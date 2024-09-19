let currentQuiz = ""; // This will hold name of the currently selected quiz 
let myArray; // This will hold names of the pictures in the current quiz-type       
let index = -1; // Index of the picture being currently displayed
let validationMessage = document.getElementById("validationMessage");
let numberOfQuestions = 0;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

    // Get the modal
    var modal = document.getElementById("modalInstruct");
    // Get the button that opens the modal
    var btn = document.getElementById("btnInstruct");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.id == "backspace") {
                deleteLastChar();
            } else if (this.id == "next") {
                // Check for emptiness of array
                if (typeof myArray === 'undefined' || myArray.length < 1) {
                    validationMessage.innerHTML = "<i>Please select a new Quiz!</i>";
                    validationMessage.style.color = "red";
                } else {
                    // Get random number between 0 and max index of the array                
                    index = Math.floor(Math.random() * myArray.length);
                    displayNextImage(myArray[index]);
                }
            } else if (this.id == "submit") {
                // Check for emptiness of array
                if (typeof myArray === 'undefined' || myArray.length < 1) {
                    validationMessage.innerHTML = "<i>Please select a new Quiz!</i>";
                    validationMessage.style.color = "red";
                } else {
                    checkSpelling();
                }
            } else if (this.classList.contains("alpha")) {
                if (currentQuiz === "") {
                    validationMessage.innerHTML = "<i>Please select a new Quiz!</i>";
                    validationMessage.style.color = "red";
                } else {
                    document.getElementById("spelling").value += this.textContent;
                }
            } else if (this.className === "quiz-type") {
                changeCurrentQuiz(this.textContent);
                startNewQuiz();
            }
        });
    }
});

/**
 * This function will reset old quiz button to its original styling(color etc)
 * and change styling of the new quiz button 
 */
function changeCurrentQuiz(newQuiz) {
    //remove background color of question-area if set
    document.getElementById("question-area").style.backgroundColor = "transparent";
    //remove displayed image
    document.getElementById("display-pic").setAttribute("src", "");

    // Reset button of previous quiz type      
    if (currentQuiz !== null) {
        var btncurrQuiz = document.getElementById(currentQuiz);
        if (btncurrQuiz !== null) {
            btncurrQuiz.style.backgroundColor = "burlywood";
            btncurrQuiz.style.color = "black";
        }
    }

    currentQuiz = newQuiz;
    if (newQuiz == "") {
        //remove alt attribute until any image is displayed
        document.getElementById("display-pic").setAttribute("alt", "");
        document.getElementById("msg").textContent = "Please select a new quiz!";
        return;
    }

    validationMessage.innerHTML = "";
    //set alt attribute of displayed image    
    document.getElementById("display-pic").setAttribute("alt", "display-pic");
    document.getElementById("msg").textContent = "";
    // Change color of new quiz button
    var btnQuiz = document.getElementById(currentQuiz);
    if (btnQuiz !== null) {
        btnQuiz.style.backgroundColor = "green";
        btnQuiz.style.color = "white";
    }
}

/**
 * This function is called when user clicks any of the 4 quiz-type buttons,
 * with an intention of starting a new quiz.
 */
function startNewQuiz() {
    // Clear score cards
    document.getElementById("correct").textContent = 0;
    document.getElementById("incorrect").textContent = 0;
    validationMessage.innerHTML = "";

    // Get currentQuiz name and load respective array in myArray
    if (currentQuiz === "Fruits") {
        myArray = ["apple", "mango", "banana", "grapes", "strawberry"];
    } else if (currentQuiz === "Colors") {
        myArray = ["red", "yellow", "blue", "green", "orange", "purple", "black", "white", "gray", "pink"];
    } else if (currentQuiz === "Animals") {
        myArray = ["tiger", "lion", "fox", "giraffe", "turtle", "monkey", "zebra"];
    } else if (currentQuiz === "Birds") {
        myArray = ["crow", "sparrow", "parrot", "peacock", "hen"];
    }

    numberOfQuestions = myArray.length;

    // Get random number between 0 and max index of the array#
    // and call display image function
    if (numberOfQuestions) {
        index = Math.floor(Math.random() * numberOfQuestions);
        displayNextImage(myArray[index]);
    }
}

/**
 * This function will search for a picture (with a name provided as its parameter)
 * in the images folder and display the same as a next question
 */
function displayNextImage(name) {
    // Clear spelling textbox before displaying new image
    document.getElementById("spelling").value = "";

    let imgElement = document.getElementById("display-pic");
    // Display next color if color quiz is selected
    if (currentQuiz === "Colors") {
        let colorDiv = document.getElementById("question-area");
        colorDiv.style.backgroundColor = name;
        imgElement.setAttribute("src", "");
        imgElement.setAttribute("alt", "");
        return;
    }

    // Display next picture
    let imgPath = "assets/images/" + name + ".png";
    imgElement.setAttribute("src", imgPath);
}

/**
 * This function will be called when a "backspace" button is clicked.
 * It will delete the last character in the "spelling" textbox.
 */
function deleteLastChar() {
    let textBox = document.getElementById("spelling");
    if (textBox.value != "") {
        let strValue = textBox.value;
        strValue = strValue.substr(0, strValue.length - 1);
        textBox.value = strValue;
    }
}

/**
 * This function will check correctness of the spelling entered by the user
 */
function checkSpelling() {
    let textBox = document.getElementById("spelling");
    if (textBox.value != "") {
        let strValue = textBox.value.toLowerCase();
        if (strValue === myArray[index]) {
            incrementScore();
        } else {
            incrementIncorrectScore();
        }
    }

    // Remove previous word from the array
    myArray.splice(index, 1);
    // Get random number between 0 and max index of the array and display next image
    if (myArray.length > 0) {
        index = Math.floor(Math.random() * myArray.length);
        displayNextImage(myArray[index]);
    } else {
        let score = parseInt(document.getElementById("correct").textContent);
        // Deselect current quiz
        changeCurrentQuiz("");
        let message = "";
        let fraction = score / numberOfQuestions;
        if (fraction > 0.8) {
            message = "Wow, that's astronomically fantastic!";
        } else if (fraction > 0.5) {
            message = "OK, a reasonably good score but I know you can do better. :)";
        } else if (fraction > 0.2) {
            message = "Hmm, some improvement is needed.";
        } else {
            message = "Have you done your homework?";
        }
        validationMessage.style.color = "black";
        validationMessage.innerHTML = `<h3>Final Score: ${score}, ${message}</h3>`;
    }
}

/**
 * This function will increment and display the correct score
 */
function incrementScore() {
    let elementScore = document.getElementById("correct");
    let score = parseInt(elementScore.textContent);
    elementScore.textContent = ++score;
}

/**
 * This function will increment and display the incorrect score
 */
function incrementIncorrectScore() {
    let elementIncorrectScore = document.getElementById("incorrect");
    let score = parseInt(elementIncorrectScore.textContent);
    elementIncorrectScore.textContent = ++score;
}