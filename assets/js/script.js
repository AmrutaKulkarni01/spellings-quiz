// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

let currentQuiz = "Fruits";

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons){
        button.addEventListener("click", function() {
            if(this.id == "backspace"){
                console.log("you clicked backspace");
                deleteLastChar();
            }
            else if(this.id == "next"){
                alert("you clicked next");
                displayNextImage();
            }
            else if(this.classList.contains("alpha")) {                
                document.getElementById("spelling").value += this.textContent;             
            }
            else if(this.className === "quiz-type") {               
                changeCurrentQuiz(this.textContent);
                startNewQuiz();
            }
        })
    }    
})

function changeCurrentQuiz(newQuiz){
    //reset button of previous quiz type  
    console.log("currentQuiz : " + currentQuiz);
    if(currentQuiz !== null){
        var btncurrQuiz = document.getElementById(currentQuiz);
        if(btncurrQuiz !== null)
        {
            btncurrQuiz.style.backgroundColor = "burlywood";
            btncurrQuiz.style.color = "black";
        }
    }
    currentQuiz = newQuiz;
    var btnQuiz =  document.getElementById(currentQuiz);
    if(btnQuiz !== null){
        btnQuiz.style.backgroundColor = "green";
        btnQuiz.style.color = "white";    
    }    
}

function startNewQuiz(){    
    // get currentQuiz and change color of the respective button
    console.log("Inside startNewQuiz : currentQuiz : "+currentQuiz);
    let myArray;
    if( currentQuiz === "Fruits"){
        myArray = ["apple", "mango", "banana", "grapes", "strawberry" ];  
    }
    else if(currentQuiz === "Colors"){
        myArray = []; // ["red", "yellow", "blue", "green", "orange" ];  
    }
    else if(currentQuiz === "Animals"){
        myArray = []; // ["tiger", "lion", "fox", "camel", "bear" ];  
    }
    else if(currentQuiz === "Birds"){
        myArray = []; // ["crow", "sparrow", "parrot", "peacock", "hen" ];  
    }
        
    // Get random number between 0 and max index of the array
    if(myArray.length > 0){
        let index = Math.floor(Math.random() * myArray.length);
        displayNextImage(myArray[index]);
    }
}

function displayNextImage(name){
    //clear spelling textbox before displaying new image
    document.getElementById("spelling").value = "";

    //display next picture
    console.log(name);
    let imgElement = document.getElementById("display-pic");
    let imgPath = "assets/images/" + name + ".png";
    imgElement.setAttribute("src", imgPath);    
}

function deleteLastChar(){
    let textBox = document.getElementById("spelling");
    if(textBox.value != ""){
        let strValue = textBox.value;
        strValue = strValue.substr(0, strValue.length-1);
        textBox.value = strValue;
    }
}