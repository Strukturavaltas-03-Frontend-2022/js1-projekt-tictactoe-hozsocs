const matrix = [];
let stepCount = 0;
let cols = 3;
let rows =3;
let mark ="X";

const inintState = () => {

// Hogy működik az értékadás? 
for (let row = 0; row < rows+1; row++) {
    for (let cell = 0; cell < cols+1; cell++) {
        changeMatrixValue([row][cell])="";
        }
    };
}
// Mit kell az elementben megadni, ha meghívom?
const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10); 
    const cell = parseInt(element.dataset.cell, 10); 
    matrix[row][cell] = element.textContent;};

// Talán ugyanaz, mint az initState!!
    const deleteSigns = () => {
    cells.forEach((cell) => {
        cell.innerHTML = "";
    });
    };

    const increaseCounter = () => {
    stepCount++;
    };

    const modifyCell = (element) => {
    element.innerHTML=mark
   element.removeEventListener('click', handleClick );
    };

    const setMark = () => {
    if (mark==="X") {mark="0"
        
    } else {
     mark="X"   
    }
    }

    const handleClick = (event) => {
        increaseCounter();
        modifyCell(event.target);
        setMark();
        changeMatrixValue(event.target);
        checkWinner();
    };
           
    // Ide nem a changeMatrixValue fgv kell? Továbbra sem értem a cells és a cell szavakat!
    const addClickListener = () => {
    cells.forEach(cell => cells.addEventListener('click', handleClick));
    };

    const removeAllClickListeners = () => {
        cells.forEach(cell => cells.removeEventListener('click', handleClick));
    };
    
    const checkValues = (array) => array.map((row) => {
        row.every(item=>item.innerHTML==="X");}).indexOf(true) !== -1;

    const checkColumnValues = () => 
    checkValues(matrix.map((array, i) => 
    array.map((item, j) => matrix[j][i])));

    const checkDiagonalValues = () =>
        checkValues([
        matrix.map((array, i) => matrix[i][i]),
        matrix.map((array, i) => matrix[i][matrix[i].length - i - 1])

    ]);

    const checkWinner = () => {
        Consol.log(checkColumnValues());
        consol.log(checkDiagonalValues());
        };
    
        const setMessage = (message) => {
            document.querySelectorbyclass("message").innerHTML=message;
        };  

        const startGame = () => {
           initState();
           addClickListener();
           newGame();
        };

        const endGame = () => {
            setMessage ('The winner is Player '+ (mark === 'X' ? 'O' : 'X') + '.');
            removeAllClickListeners();
            
        };  
        // Hogyan kell megadni a klikk után, ha több függvényt is futtatnék!! 
        const newGame = () => {
         document.querySelectorbyId(btn__newGame).addEventListener('click', {
            initState();
            addClickListener();
            deleteSigns();
            setMessage('Playing...');
            setMark();
         })   
        };
startGame();
