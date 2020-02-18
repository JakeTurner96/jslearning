var textState = false;

function changeText(){

    if(textState == false){
        document.getElementById("changeText").innerText = "The text has been changed!";
        document.getElementById("textBtn").innerText = "Change text back";
        textState = true;

    }else{
        document.getElementById("changeText").innerText = "Push the button to change the text!";
        document.getElementById("textBtn").innerText = "Push me!";
        textState = false;
    }
}
