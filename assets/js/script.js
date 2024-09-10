// Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("class").includes("alpha")) {                
                document.getElementById("spelling").value += this.textContent;             
            }
            else{
                alert(`you clicked something else`);                
            }
        })
    }
})