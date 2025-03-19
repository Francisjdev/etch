const container = document.querySelector('.container')
const gridContainer = document.querySelector('.grid-container')
const button = document.querySelector('button')
createGrid()
clickHandler(button)


function createGrid(grid = 256, boxDimensions = '40px'){ 
    gridContainer.textContent = ''
    for(let i = 0; i < grid; i++){
        console.log(grid)
        let box = document.createElement('div')
        let color = getRandomColor()
        
        box.classList = 'box'
        box.style.width = boxDimensions
        box.style.height = boxDimensions
        box.style.backgroundColor = color
        mouseOverHandler(box)
        gridContainer.appendChild(box)

    }
}

function getRandomColor(){
    let red = Math.round(Math.random()*256)
    let green = Math.round(Math.random()*256)
    let blue = Math.round(Math.random()*256)
    return color =`rgb(${red}, ${green}, ${blue})`
}
function clickHandler(obj){
    obj.addEventListener('click', (e)=> {
        let userInput =  prompt("how many squares per side do you want")
        let boxes = parseInt(userInput) * parseInt(userInput)
        let size = 640/parseInt(userInput)
        size = `${size}px`
        
        createGrid(boxes, size)
    })
}
function mouseOverHandler(obj){
    obj.addEventListener('mouseover', () => {
        let color = getRandomColor()
        obj.style.backgroundColor = color
    })
}

