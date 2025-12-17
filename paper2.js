
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





function playGame(){
    let humanscore=0;
    let computerscore=0;
    let even=0;
    function playRound(computerchoice,humanchoice){
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
    // for (let i=0; i<rounds; i++){
        let rounds=0;
        const buttons = document.querySelectorAll("button");
        const ul=document.querySelector("ol");
        const hscore=document.querySelector("input.human");
        const cscore=document.querySelector("input.computer");
        buttons.forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                const humanChoice = button.textContent.toLowerCase();
                console.log("Human choice is: "+humanChoice);
                let ccc=getComputerChoice();
                // console.log(humanChoice+" ---- "+ccc);
                const li=document.createElement("li");
                const span=document.createElement("span");
                const span2=document.createElement("span");
                li.appendChild(span);
                li.appendChild(span2);
                span.textContent=`${humanChoice} --------------- ${ccc}`
                ul.appendChild(li);
                playRound(ccc,humanChoice);
                rounds++;
                hscore.value=humanscore;
                cscore.value=computerscore;
                let t1=`------  after ${rounds} rounds the final winner is...`;
                let t2="";
                if (humanscore>computerscore){
                    t2=" human!";
                    hscore.style.backgroundColor = 'yellow';
                    cscore.style.backgroundColor = 'white';
                }
                else if (humanscore==computerscore){
                    t2="neighter of you!";

                }
                else {
                    t2="computer!";
                    cscore.style.backgroundColor = 'yellow';
                    hscore.style.backgroundColor = 'white';
                }
                
                span2.textContent=t1+t2;

    
            });
        });
    




        // playRound(getComputerChoice(),getHumanChoice());
    // }
    // console.log(`after ${rounds} rounds the final winner is...`);
    // if (humanscore>computerscore)
    //     console.log(" human!");
    // else if (humanscore==computerscore)
    //     console.log("neighter of you!");
    // else 
    //     console.log("computer!");
    
}





playGame();