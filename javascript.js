
const main = document.querySelector(".main");
let myLibrary = [];

function Game(title, developer, hours, completed){
    this.title= title
    this.developer=developer
    this.hours=hours
    this.completed=completed
}

function addGameToLibrary(){
    let add = true;
    while(add==true){
        let title= prompt("Enter a game title: ");
        let developer = prompt("Enter the developer: ");
        let hours = prompt("How many hours have you played: ");
        let completed = prompt("Completed: ");
        completed = completed == "true";
        let newGame = new Game(title,developer,hours,completed);
        myLibrary.push(newGame);
        console.log(myLibrary);
        let answer=prompt("New Game? y/n");
        answer === "y" ? add = true : add = false;
    }
    
    displayLibrary();
}
function deleteGame(gameTitle){
    let index = myLibrary.findIndex(x=>x.title===gameTitle);
    let remove = prompt("Are you sure want to delete this book? y/n")
    if (remove==="y"){
        myLibrary.splice(index,1);
        const deletedGame = document.getElementById(gameTitle);
        main.removeChild(deletedGame);
    }
    console.log(myLibrary)
}
function displayLibrary(){
    for(let i=0;i<(myLibrary.length);i++){
        const game = document.createElement('div');
        game.className="game";
        game.id=`${myLibrary[i].title}`
        const info = document.createElement("p");
        info.id=`p ${myLibrary[i].title}`
        info.innerText=`Title: ${myLibrary[i].title}\nDeveloper: ${myLibrary[i].developer}\nHours Played: ${myLibrary[i].hours}\nCompleted: ${myLibrary[i].completed}`;
        game.appendChild(info)
        main.appendChild(game);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "delete";
        deleteButton.setAttribute("onclick",`deleteGame("${myLibrary[i].title}")`);
        game.appendChild(deleteButton);
        const completedButton = document.createElement('button');
        completedButton.textContent="completed";
        completedButton.setAttribute("onclick",`setCompletedStatus("${myLibrary[i].title}")`);
        game.appendChild(completedButton);
    }
}
function setCompletedStatus(gameTitle){
    let index = myLibrary.findIndex(x=>x.title===gameTitle);
    if (myLibrary[index].completed ===true){
        myLibrary[index].completed =false;
    }else{
        myLibrary[index].completed =true;
    }
    const gameInfo = document.getElementById(`p ${gameTitle}`)
    gameInfo.innerText=`Title: ${myLibrary[index].title}\nDeveloper: ${myLibrary[index].developer}\nHours Played: ${myLibrary[index].hours}\nCompleted: ${myLibrary[index].completed}`;
    console.log(myLibrary)
}

addGameToLibrary()