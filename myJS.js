console.log("LAODED THE JAVASCRIPT");

// CLASSES 
class gameState
{
    playerName;
    levelData;

    constructor(name)
    {
        this.name = name;
        this.levelData = new levelState;
    }
}

class levelState
{
    levelNumber;
    mapData; // changes depending on the level
    levelScoring; // contains information about what gives what kinds of points 

    constructor()
    {
        this.loadLevel(1);
    }

    loadLevel(newLevelNumber) // to be called when a new level is reached.
    {
        console.log("LOADING LEVEL");
        this.levelNumber = newLevelNumber;
        this.mapData = new mapState(newLevelNumber);
        this.levelScoring = this.getLevelScoringData(newLevelNumber);
    }

    getLevelScoringData(levelNumber)
    {
    }

    getPoints() // to be used whenever the user adds a new line 
    {
    }

    victoryCheck() // returns 1 on victory and 0 on not yet 
    {
    }

    //method to change level 
}

class mapState // 
{
    Placement; // an array which contains the coordinates of each "button"
    userDrawing; // property which contains the information given by lines given by player
    levelNumber;

    constructor(level)
    {
        const mapImageLocations = [
            "images/test.jpeg"
        ]
        this.levelNumber = level;

        this.buttonPlacement = [];

        window.onload = function()
        {
            let canvas= document.getElementById("playerScreen");
            let ctx = canvas.getContext("2d");

            let img = new Image();
            img.setAttribute("src" , mapImageLocations[level]);
            img.setAttribute("height", "900px");
            img.setAttribute("width", "1200px");

            img.onload = function()
            {
                ctx.drawImage(img, 0, 0);
            }
        }

        let currentPositionArray;

        // the following provides data on where each button is 
        if ( level === 1)
        {
            const positionArray = [ // this is where coordinates are provided 
                10,10,
                20,20,
                30,30,
                40,40,
                50,50,
                60,60,
                70,70,
                80,80
            ];

            currentPositionArray = positionArray;
            
        }
        else if ( level === 2)
        {
            const positionArray = [ // this is where coordinates are provided 
            10,10,
            20,20,
            30,30,
            40,40,
            50,50,
            60,60,
            70,70,
            80,80
            ];
            currentPositionArray = positionArray;
        }
        else if ( level === 3)
        {
            const positionArray = [ // this is where coordinates are provided 
            10,10,
            20,20,
            30,30,
            40,40,
            50,50,
            60,60,
            70,70,
            80,80
            ];
            currentPositionArray = positionArray;
        }
        else if ( level === 4)
        {
            const positionArray = [ // this is where coordinates are provided 
            10,10,
            20,20,
            30,30,
            40,40,
            50,50,
            60,60,
            70,70,
            80,80
            ];
            currentPositionArray = positionArray;
        }
        else if ( level === 5)
        {
            const positionArray = [ // this is where coordinates are provided 
            10,10,
            20,20,
            30,30,
            40,40,
            50,50,
            60,60,
            70,70,
            80,80
            ];
            currentPositionArray = positionArray;
        }
        else
        {
            console.error("invalid level");
        }

        for ( let i = 0 ; i < currentPositionArray.length/2 ; i = i+2)
        {
            let cL = new clickLocation(currentPositionArray[i], currentPositionArray[i+1]);
            this.buttonPlacement.push(cL);
        }
    }

    addPoint(pointData)
    {
        //find all buttons. if no button is near this point clicked, add nothing 

        if ( this.userDrawing.push(pointData)%2 === 0 ) 
        {
            this.addLine();
        }
    }
    addLine()
    {
        const arrayLength = this.userDrawing.length;

        const coord1 = this.userDrawing[arrayLength-1];
        const coord2 = this.userDrawing[arrayLength-2];

        drawLine(coord1, coord2);

    }

    removeLine()
    {
        //erase and recreate canvas up to the line drawn 
    }


    findIntersection(L1coord1, L1coord2, L2coord1, L2coord2)
    {
        let slope1 = (L1coord1.yCord-L1coord2.yCord)/(L1coord1.xCord-L1coord2.xCord);

        let slope2 = (L2coord1.yCord-L2coord2.yCord)/(L2coord1.xCord-L2coord2.xCord);

    }
    findAllIntersections()
    {

    }

    findLineDistance(coord1, coord2)
    {
        const a = Math.abs(coord1.xCord-coord2.xCord);
        const b = Math.abs(coord1.yCord-coord2.yCord);

        let cSquared = a*a + b*b;

        return Math.sqrt(cSquared);
    }

    findTotalDistance()
    {
        let totalLineDistance = 0;

        for ( let i = 0 ; i < this.userDrawing.length ; i = i+2)
        {
            totalLineDistance = totalLineDistance + findLineDistance(this.userDrawing[i], this.userDrawing[i+1]);
        }

        return totalLineDistance;
    }
}

class clickLocation
{
    xCord;
    yCord;
    constructor(x, y)
    {
        this.xCord = x;
        this.yCord = y;
    }
}


// FUNCTIONS 

function mainMenu()
{
    window.onload = function()
    {
        let canvas= document.getElementById("playerScreen");
        let ctx = canvas.getContext("2d");

        let img = new Image();
        img.setAttribute("src" , "images/test.jpeg");
        img.setAttribute("height", "900px");
        img.setAttribute("width", "1200px");

        img.onload = function()
        {
            ctx.drawImage(img, 0, 0);
        }

        let playButton = document.createElement("button");
        playButton.setAttribute("id", "playButton");
        playButton.innerHTML = "Play";
        let cenDiv = document.getElementById("canvasDiv");

        playButton.addEventListener("click", function()
        {
            let gS = new gameState("Player");
            playGame(gS);
        })


        cenDiv.appendChild(playButton);
    }
}


function playGame(gS)
{

}


function getMouseClickLocation(myCanvas, event)
{   
    let myRectangle = myCanvas.getBoundingClientRect();

    let x = event.clientX - myRectangle.left;
    let y = event.clientY - myRectangle.top;

    const cL = new clickLocation(x,y);
    console.log(cL);
    return cL;
}

function drawLine(coord1, coord2)
{
    let myCanvas = document.querySelector("canvas");
    let ctx = myCanvas.getContext("2d");

    ctx.moveTo(coord1.xCord, coord1.yCord);
    ctx.lineTo(coord2.xCord, coord2.yCord);
    ctx.stroke();
}

let myCanvas = document.querySelector("canvas");

myCanvas.addEventListener("mousedown", function(e)
{
    getMouseClickLocation(myCanvas, e);
});




// CODE 

// load in the main menu 
// on play, initiate the game state 

mainMenu();
console.log("main menu loaded");


