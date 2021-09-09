var displayScreen = document.querySelector("#display-screen");
var buttons = document.querySelectorAll(".btn");
var solution="";
var displayScreenValue=[];
var expValue=[];

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var btnValue=this.textContent;
        switch (btnValue) {
            case "AC":
                displayScreenValue = [];
                expValue = [];
                displayScreen.value = displayScreenValue.join("");
                break;
            case "DEL":
                displayScreenValue.pop();
                expValue.pop();
                displayScreen.value = displayScreenValue.join("");
                break;
            case "=":
                solution=eval(expValue.join(""));
                displayScreen.value = solution;
                expValue=[];displayScreenValue=[];
                expValue.push(displayScreen.value);
                displayScreenValue.push(displayScreen.value);
                break;
            case "*":
                expValue.push(btnValue);
                displayScreenValue.push("×");
                displayScreen.value=displayScreenValue.join("");
                break;
            case "/":
                expValue.push(btnValue);
                displayScreenValue.push("÷");
                displayScreen.value=displayScreenValue.join("");
                break;
            case "%":
                expValue.push("/ 100");
                displayScreenValue.push("%");
                displayScreen.value=displayScreenValue.join("");
                break;
            case "𝝅":
                expValue.push("Math.PI");
                displayScreenValue.push("𝝅");
                displayScreen.value=displayScreenValue.join("");
                break;
            default:
                displayScreenValue.push(btnValue);
                expValue.push(btnValue);
                displayScreen.value = displayScreenValue.join("");  
                break;
        }
        
    });
}
var theme = document.querySelector("#theme-change-link");

theme.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("body-theme-2");
    document.querySelector(".container").classList.toggle("container-theme-2");
    document.querySelector(".display-result").classList.toggle("display-result-theme-2");
    document.querySelector(".btn-group").classList.toggle("btn-group-theme-2");
    for(var i=0;i<buttons.length;i++){
        buttons[i].classList.toggle("btn-theme-2");
    }
    document.querySelector(".eql").classList.toggle("eql-theme-2");
    document.querySelector(".del").classList.toggle("del-theme-2");
    document.querySelector(".alc").classList.toggle("alc-theme-2");
    document.querySelector(".theme-icon").classList.toggle("fa-sun");
    document.querySelector(".theme-icon").classList.toggle("fa-moon");
});