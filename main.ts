/**
 * THIS IS FOR SIMONS FOLLOWER
 * 
 * Playing sound requires speaker or V2 Microbit!
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (input.isGesture(Gesture.Shake)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 2) {
        if (input.isGesture(Gesture.LogoDown)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 3) {
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 4) {
        if (input.isGesture(Gesture.TiltRight)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 5) {
        if (input.isGesture(Gesture.ScreenDown)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 6) {
        if (input.isGesture(Gesture.FreeFall)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 7) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 8) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 9) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            soundExpression.happy.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
basic.showString("SIMON SAYS")
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
radio.setGroup(1)
