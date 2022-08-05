//Bonus: Add sky and grass
// 1. Declare variables
let horizon = window.innerHeight * 0.57
let skyHeight = window.innerHeight - horizon
let landHeight = horizon


// 2. Create function
function repeatTile(url, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {   // repeat in bottom to top in y-direction
        for(let w = 0; w < width; w++) {  // repeat left to right in x-direction
            newImage(url, (left + w * 100), (bottom + h * 100)) // add png tiles until window.innerWidth/window.innerHeight are covered
        }
    }
}

// 3. Call function
repeatTile('assets/sky.png', 0, horizon, window.innerWidth/100, skyHeight/100)  // sky (x,y) position starts at (0, horizon), ends at (window.innerWidth, window.innerheight)
repeatTile('assets/grass.png', 0, 0, window.innerWidth/100, landHeight/100)  // grass (x,y) position starts at (0,0), ends at ~ (window.innerWidth, horizon)


// Add images:
// 1. Created function
function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

// 2. Called function to display images
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


// Add items:
// 1. Created function
function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {  //replaced traditional function with arrow function
        object.remove()
    })
}

// 2. Called function to display items
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)



