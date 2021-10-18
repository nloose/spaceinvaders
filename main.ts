basic.forever(function () {
    for (let Index = 0; Index <= 4; Index++) {
        if (Math.randomBoolean()) {
            led.plot(0, Index)
            led.plot(4, Index)
        }
    }
    for (let Index = 0; Index <= 4; Index++) {
        if (Math.randomBoolean()) {
            led.plot(1, Index)
            led.plot(3, Index)
        }
    }
    for (let Index = 0; Index <= 4; Index++) {
        if (Math.randomBoolean()) {
            led.plot(2, Index)
        }
    }
    basic.pause(400)
    basic.clearScreen()
})
