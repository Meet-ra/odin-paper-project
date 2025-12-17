
function getComputerChoice(){
    let computerchoicenum=Math.floor(Math.random()*3) + 1;
    switch(computerchoicenum) {
        case 1:
            computerchoice="rock";
            break;
        case 2:
            computerchoice="paper";
            break;
        case 3:
            computerchoice="scissors";
            break;
    }
    console.log("computer choice is: "+computerchoice);
    return computerchoice;

}





function playGame(rounds){
    let humanscore=0;
    let computerscore=0;
    let even=0;
    function playRound(computerchoice,humanchoice){
        console.log("??????"+humanchoice);
        switch (humanchoice) {
            case "rock":
                if (computerchoice=="rock") {
                    result=3;
                    even++;
                    break;
                }
                    
                else if (computerchoice=="paper") {
                    result=2;
                    computerscore++;
                    break;
                }
                    
                else if (computerchoice=="scissors") {
                    result=1;
                    humanscore++;
                    break;
                }
                    
        
        
            case "paper":
                if (computerchoice=="rock") {
                    result=1;
                    humanscore++;
                    break;
                }
                    
                else if (computerchoice=="paper") {
                    result=3;
                    even++;
                    break;
                }
                    
                else if (computerchoice=="scissors") {
                    result=2;
                    computerscore++;
                    break;
                }
        
        
            case "scissors":
                if (computerchoice=="rock") {
                    result=2;
                    computerscore++;
                    break;
                }
                    
                else if (computerchoice=="paper") {
                    result=1;
                    humanscore++;
                    break;
                }
                    
                else if (computerchoice=="scissors") {
                    result=3;
                    even++;
                    break;
                }
        
        
        }

        console.log(`by far human score is ${humanscore} and computer score is ${computerscore}.`);

    }
    // 
    for (let i=0; i<rounds; i++){
        const buttons = document.querySelectorAll("button");
        const ul=document.querySelector("ul");
        buttons.forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                const humanChoice = button.textContent.toLowerCase();
                console.log(humanChoice);
                let ccc=getComputerChoice();
                console.log(humanChoice+" ---- "+ccc);
                const li=document.createElement("li");
                const span=document.createElement("span");
                li.appendChild(span);
                span.textContent=`${humanChoice} --------------- ${ccc}`
                ul.appendChild(li);
                playRound(ccc,humanChoice);
    
    
    
    
            });
        });
    




        // playRound(getComputerChoice(),getHumanChoice());
    }
    console.log(`after ${rounds} rounds the final winner is...`);
    if (humanscore>computerscore)
        console.log(" human!");
    else if (humanscore==computerscore)
        console.log("neighter of you!");
    else 
        console.log("computer!");
    
}





playGame(1);