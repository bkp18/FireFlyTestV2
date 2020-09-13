let afstand = 0
basic.showLeds(`
    # . . . #
    # . . . #
    # . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    afstand = Firefly.getSampledDistance(DigitalPin.P0, DigitalPin.P1)
    serial.writeLine("" + (afstand))
    if (afstand < 50) {
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, 90)
    } else {
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, 0)
    }
    if (input.buttonIsPressed(Button.A)) {
        Firefly.setServo(Firefly.ServoPinValues.servo1, 0)
        basic.pause(1000)
        Firefly.setServo(Firefly.ServoPinValues.servo1, 80)
        basic.pause(1000)
    }
})
