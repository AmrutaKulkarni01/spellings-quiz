let currentQuiz = "";  //this will hold name of the currently selected quiz 
let myArray; //this will hold names of the pictures in the current quiz-type       
let index = -1; //index of the picture being currently displayed

// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.id == "backspace") {
                console.log("you clicked backspace");
                deleteLastChar();
            }
            else if (this.id == "next") {
                //check for emptiness of array
                if(typeof myArray === 'undefined' || myArray.length < 1) {
                    alert("Please select a new Quiz!");
                }                
                else {
                    // Get random number between 0 and max index of the array                
                    index = Math.floor(Math.random() * myArray.length);
                    displayNextImage(myArray[index]);                
                }
            }
            else if(this.id == "submit") {
                console.log(myArray);
                //check for emptiness of array
                if(typeof myArray === 'undefined' || myArray.length < 1) {
                    alert("Please select a new Quiz!");
                }
                else{
                    checkSpelling();                    
                }                                
            }
            else if (this.classList.contains("alpha")) {                
                if(currentQuiz === ""){
                    alert("Please select a new Quiz!");
                }
                else{
                    document.getElementById("spelling").value += this.textContent;             
                }
            }
            else if (this.className === "quiz-type") {               
                changeCurrentQuiz(this.textContent);
                startNewQuiz();
            }
        }) 
    }    
})

/**
 * This function will reset old quiz button to its original styling(color etc)
 * and change styling of the new quiz button 
 */
function changeCurrentQuiz(newQuiz) {
    //reset button of previous quiz type  
    console.log("currentQuiz : " + currentQuiz);
    if (currentQuiz !== null) {
        var btncurrQuiz = document.getElementById(currentQuiz);
        if (btncurrQuiz !== null) {
            btncurrQuiz.style.backgroundColor = "burlywood";
            btncurrQuiz.style.color = "black";
        }
    }
    
    currentQuiz = newQuiz;
    if(newQuiz == "")
        return;
    //change color of new quiz button
    var btnQuiz =  document.getElementById(currentQuiz);
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
    //clear score cards
    document.getElementById("correct").textContent = 0;
    document.getElementById("incorrect").textContent = 0;
    // get currentQuiz and change color of the respective button
    console.log("Inside startNewQuiz : currentQuiz : "+currentQuiz);
    //let myArray;
    if ( currentQuiz === "Fruits") {
        myArray = ["apple", "mango", "banana", "grapes", "strawberry" ];  
    }
    else if (currentQuiz === "Colors") {
        myArray = []; // ["red", "yellow", "blue", "green", "orange" ];  
    }
    else if (currentQuiz === "Animals") {
        myArray = ["tiger", "lion", "fox", "giraffe", "turtle", "monkey", "zebra" ];  
    }
    else if (currentQuiz === "Birds") {
        myArray = ["crow", "sparrow", "parrot", "peacock", "hen" ];  
    }
        
    // Get random number between 0 and max index of the array
    if (myArray.length > 0) {
        index = Math.floor(Math.random() * myArray.length);
        displayNextImage(myArray[index]);
    }
}

/**
 * This function will search for a picture (with a name provided as its parameter)
 * in the images folder and display the same as a next question
 */
function displayNextImage(name) {
    //clear spelling textbox before displaying new image
    document.getElementById("spelling").value = "";

    //display next picture
    console.log("Inside displayNextImage : "+name);
    let imgElement = document.getElementById("display-pic");
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
        strValue = strValue.substr(0, strValue.length-1);
        textBox.value = strValue;
    }
}

/**
 * This function will check correctness of the spelling entered by the user
 */
function checkSpelling() {
    let textBox = document.getElementById("spelling")
    if (textBox.value != "") {
        let strValue = textBox.value.toLowerCase();
        if (strValue === myArray[index]) {            
            incrementScore();
        }
        else {            
            incrementIncorrectScore();
        }
    }

    // Remove previous word from the array
    myArray.splice(index, 1);
    alert("myArray.length:" + myArray.length);
    // Get random number between 0 and max index of the array and display next image
    if (myArray.length > 0) {
        index = Math.floor(Math.random() * myArray.length);
        displayNextImage(myArray[index]);
    }
    else {
        let score = parseInt(document.getElementById("correct").textContent);
        //deselect current quiz
        changeCurrentQuiz("");
        alert(`Final Score : ${score}\nPlease select a new Quiz!`);
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