function showPrompt() {
    userValue = prompt("Por favor, digite o tamanho desejado para a ampulheta. \nObs: Número precisa ser maior que 20.")
}

function askUser() {
    showPrompt();
    while(userValue < 20) {
        if(userValue < 20) {
            alert("Número digitado precisa ser maior que 20. Digite novamente.")
            showPrompt();
        }
    }
}

function printTop(userValue) {
        HASHTAG = "#";

        hashtags = HASHTAG.repeat(userValue);
        string = ("#" + hashtags + "#");

        console.log(string);
}

function printTriangle(userValue){

    for(let i = 0; i < userValue; i++) {

        HASHTAG = "#";
        EMPTY = " ";

        for(let j = 0; j <= i; j++){

            numberOfEmpties = j;
            numberOfHashtag = userValue - numberOfEmpties * 2;

            if(numberOfHashtag > 0){
                hashtags = HASHTAG.repeat(numberOfHashtag);
                empties = EMPTY.repeat(numberOfEmpties);
    
                string = ("#" + empties + hashtags + empties + "#");
            }
        }
        if(numberOfHashtag > 0) {
            console.log(string);
        }
    }
}

function printInverseTriangle(userValue) {
    
    for(let i = 0; i < userValue; i++) {

        HASHTAG = "#";    
        NO_HASHTAG = " ";
        EMPTY = " ";

        for(let j = 0; j <= i; j++) {

            numberOfEmpties = userValue - j;
            numberOfNoHashtag = userValue - numberOfEmpties * 2;

            if(numberOfNoHashtag > 0) {

                noHashtag = NO_HASHTAG.repeat(numberOfNoHashtag);
                empties = EMPTY.repeat(numberOfEmpties - 1);
                string = ("#" + empties + "#" + noHashtag + "#" + empties + "#");
            }
        }
        if(numberOfNoHashtag > 0) {
            console.log(string);
        }
    }
}

function printBottom(userValue) {
    HASHTAG = "#";

    hashtags = HASHTAG.repeat(userValue);
    string = ("#" + hashtags + "#");

    console.log(string);
}

function printHourglass(userValue) {
    printTop(userValue);
    printTriangle(userValue);
    printInverseTriangle(userValue);
    printBottom(userValue);
}

askUser();
printHourglass(userValue);