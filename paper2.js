

// getHumanChoice();
// getComputerChoice();


// function playRound(computerchoice,humanchoice){
//     switch (humanchoice) {
//         case "rock":
//             if (computerchoice=="rock") {
//                 result=3;
//                 even++;
//                 break;
//             }
                
//             else if (computerchoice=="paper") {
//                 result=2;
//                 computerscore++;
//                 break;
//             }
                
//             else if (computerchoice=="scissors") {
//                 result=1;
//                 humanscore++;
//                 break;
//             }
                
    
    
//         case "paper":
//             if (computerchoice=="rock") {
//                 result=1;
//                 humanscore++;
//                 break;
//             }
                
//             else if (computerchoice=="paper") {
//                 result=3;
//                 even++;
//                 break;
//             }
                
//             else if (computerchoice=="scissors") {
//                 result=2;
//                 computerscore++;
//                 break;
//             }
    
    
//         case "scissors":
//             if (computerchoice=="rock") {
//                 result=2;
//                 computerscore++;
//                 break;
//             }
                
//             else if (computerchoice=="paper") {
//                 result=1;
//                 humanscore++;
//                 break;
//             }
                
//             else if (computerchoice=="scissors") {
//                 result=3;
//                 even++;
//                 break;
//             }
    
    
//     }

//     console.log(`by far human score is ${humanscore} and computer score is ${computerscore}.`);

// }



// playRound(getComputerChoice(),getHumanChoice());

function getHumanChoice(){
    let humanchoice=prompt("Rock, Paper, Scissors?");
    humanchoice=humanchoice.toLowerCase();
    console.log("human choice is: "+humanchoice);
    return humanchoice;

}

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

    // getHumanChoice();
    // getComputerChoice();

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
    let a;
    let b;
    for (let i=0; i<rounds; i++){
        // a=getComputerChoice();
        // b=getHumanChoice();
        // playRound(a,b);
        playRound(getComputerChoice(),getHumanChoice());
    }
    console.log(`after ${rounds} the final winner is...`);
    if (humanscore>computerscore)
        console.log(" human!");
    else if (humanscore==computerscore)
        console.log("neighter of you!");
    else 
        console.log("computer!");
    
}

playGame(5);