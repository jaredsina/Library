
const sidebar = document.querySelector(".sidebar");
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
        let newGame = new Game(title,developer,hours,completed);
        myLibrary.push(newGame);
        console.log(myLibrary);
        let answer=prompt("New Game? y/n");
        answer === "y" ? add = true : add = false;
    }
    displayLibrary();
}
function displayLibrary(){
    for(let i=0;i<(myLibrary.length);i++){
        const game = document.createElement('div');
        game.textContent= myLibrary[i].title;
        sidebar.appendChild(game);
    }
}
addBookToLibrary()