// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

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
                alert(`Lets start ${this.textContent} Quiz!`);                
                startNewQuiz(this.textContent);
            }
        })
    }    
})

function startNewQuiz(quizType){
    //const fruits = ["apple", "mango", "banana", "grapes", "strawberry" ];
    let myArray;
    if( quizType === "Fruits"){
        myArray = ["apple", "mango", "banana", "grapes", "strawberry" ];  
    }
    else if(quizType === "Colors"){
        myArray = []; // ["red", "yellow", "blue", "green", "orange" ];  
    }
    else if(quizType === "Animals"){
        myArray = []; // ["tiger", "lion", "fox", "camel", "bear" ];  
    }
    else if(quizType === "Birds"){
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