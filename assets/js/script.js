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
                startNewQuiz();
            }
        })
    }    
})

function startNewQuiz(){

}

function displayNextImage(){

}

function deleteLastChar(){
    let textBox = document.getElementById("spelling");
    if(textBox.value != ""){
        let strValue = textBox.value;
        strValue = strValue.substr(0, strValue.length-1);
        textBox.value = strValue;
    }
}
    