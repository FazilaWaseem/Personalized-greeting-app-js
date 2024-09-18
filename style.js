function personalizedgreetingapp () {
    let yourName = +prompt("What is your name?");
    let yourAge = +prompt("what is your age?:");

    let greetingmessage = document.getElementById('greetingMessage');

    if (yourName){
        greetingmessage.innerHTML = `Hello, ${yourName}! Wellcome to our Website!!`;
        
    } else {
            greetingmessage.innerHTML = `Hello,Fazila waseem! Wellcome to our Website!!`;
        }
   

    }
