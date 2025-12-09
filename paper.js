let humanchoice=prompt("Rock, Paper, Scissors?");
let computerchoicenum=Math.floor(Math.random()*3) + 1;
console.log(computerchoicenum);
let computerchoice="";
switch(computerchoicenum) {
    case 1:
        computerchoice="Rock";
        break;
    case 2:
        computerchoice="Paper";
        break;
    case 3:
        computerchoice="Scissors";
        break;
}
        
console.log("computer choice is: "+computerchoice);
console.log("human choice is: "+humanchoice);

// if human won result=1
// if computer won result=2
// if they even result=3
let result=0; 

switch (humanchoice) {
    case "Rock":
        if (computerchoice=="Rock") {
            result=3;
            break;
        }
            
        else if (computerchoice=="Paper") {
            result=2;
            break;
        }
            
        else if (computerchoice=="Scissors") {
            result=1;
            break;
        }
            


    case "Paper":
        if (computerchoice=="Rock") {
            result=1;
            break;
        }
            
        else if (computerchoice=="Paper") {
            result=3;
            break;
        }
            
        else if (computerchoice=="Scissors") {
            result=2;
            break;
        }


    case "Scissors":
        if (computerchoice=="Rock") {
            result=2;
            break;
        }
            
        else if (computerchoice=="Paper") {
            result=1;
            break;
        }
            
        else if (computerchoice=="Scissors") {
            result=3;
            break;
        }


}


console.log("result is: "+ result)
switch (result){
    case 1:{
        console.log("Human won!");
        break;
    }
    case 2:{
        console.log("Computer won!");
        break;
    }
    case 3:{
        console.log("You both chose the same!");
        break;
    }
        
}
