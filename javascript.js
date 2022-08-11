
const main = document.querySelector(".main");
let myLibrary = [];

function Game(title, developer, hours, completed){
    this.title= title
    this.developer=developer
    this.hours=hours
    this.completed=completed
}

function addGameToLibrary(){
    const form = document.getElementById("new-game-form");
    const title = form[0].value;
    const developer = form[1].value;
    const hours = form[2].value;
    let completed=form[3].checked;
    console.log(completed)
    let newGame = new Game(title,developer,hours,completed);
    myLibrary.push(newGame);
    console.log(myLibrary); 
    hideForm();   
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
    const gameInfo = document.getElementById(`p ${gameTitle}`);
    gameInfo.innerText=`Title: ${myLibrary[index].title}\nDeveloper: ${myLibrary[index].developer}\nHours Played: ${myLibrary[index].hours}\nCompleted: ${myLibrary[index].completed}`;
    console.log(myLibrary);
}

function displayForm(){
    
    //Where to add form
    const formSpot = document.querySelector(".form-location");

    //Check if new game is already being added
    if (formSpot.childElementCount>0){
        return
    }

    //Create form element
    const form = document.createElement("form");
    form.setAttribute("id","new-game-form");

    //Create input for title property
    const title = document.createElement("input");
    title.setAttribute("type","text");
    title.setAttribute("id","title");
    title.setAttribute("name","title");

    //Create label for title input
    const titleLabel = document.createElement("label");
    titleLabel.innerText= "Title:";
    titleLabel.setAttribute("for","title");

    //Create input for developer property
    const developer = document.createElement("input");
    developer.setAttribute("type","text");
    developer.setAttribute("id","developer");
    developer.setAttribute("name","developer");

    //Create label for developer input
    const developerLabel = document.createElement("label");
    developerLabel.innerText = "Developer:";
    developerLabel.setAttribute("for","developer");

    //Create input for hours played property
    const hours = document.createElement("input");
    hours.setAttribute("type","number");
    hours.setAttribute("id","hours");
    hours.setAttribute("name","hours");

    //Create label for hours input
    const hoursLabel = document.createElement("label");
    hoursLabel.innerText="Hours Played:";
    hoursLabel.setAttribute("for","hours");

    //Create input for completed property
    const completed = document.createElement("input");
    completed.setAttribute("type","checkbox");
    completed.setAttribute("id","completed");
    completed.setAttribute("name","completed");

    //Create label for completed input
    const completedLabel = document.createElement("label");
    completedLabel.innerText="Completed?";
    completedLabel.setAttribute("for","developer");

    //Create submit button
    const submitButton = document.createElement("input");
    submitButton.innerText="Create";
    submitButton.setAttribute("value","create");
    submitButton.setAttribute("type","button");
    submitButton.setAttribute("onclick",`checkForm()`);

    //Create cancel operation button
    const cancelButton = document.createElement("input");
    cancelButton.innerText="Cancel";
    cancelButton.setAttribute("type","button");
    cancelButton.setAttribute("value","cancel");
    cancelButton.setAttribute("onclick","hideForm()");


    //Append all form elements to proper locations
    formSpot.appendChild(form);
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(developerLabel);
    form.appendChild(developer);
    form.appendChild(hoursLabel);
    form.appendChild(hours);
    form.appendChild(completedLabel);
    form.appendChild(completed);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    
}

function checkForm(){
    const form = document.getElementById("new-game-form");
    for(let i=0;i<=form.length-4;i++){
        if (!form[i].value){
            return
        }
    }
    addGameToLibrary();
}

function hideForm(){
    const formLoc = document.querySelector(".form-location");
    const form = document.getElementById("new-game-form");
    formLoc.removeChild(form);
}