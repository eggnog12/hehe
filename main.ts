basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 1) {
        basic.showString("pie=")
    } else {
        basic.showString("3.14159")
    }
})
basic.forever(function () {
    music.playMelody("E F G F D F E G ", 120)
})
basic.forever(function () {
    music.playMelody("F E E D A G E E ", 120)
})
