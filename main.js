const button = document.getElementById('myButton')
let isHeld = false
let holdtime = 0

function updateHoldTime() {
    holdtime = holdtime + 1
}

button.addEventListener('mousedown', () => {
    isHeld = true
    console.log('Button is being held down')
    holdtime = 0
    while (isHeld) {
        in(updateHoldTime, 100)
    }
})

button.addEventListener('mouseup', () => {
    isHeld = false
    console.log('Button released')
    console.log(`Button was held for ${holdtime} ms`)
})

button.addEventListener('mouseleave', () => {
    if (isHeld) {
        isHeld = false
        console.log('Button released (mouseleave)')
    }
})  


    