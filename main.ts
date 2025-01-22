let obstacles = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    basic.clearScreen()
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    let obstacle = 0
    obstacles = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (obstacle < 5) {
        cuteBot.stopcar()
    } else {
        cuteBot.forward()
    }
})
basic.forever(function () {
	
})
