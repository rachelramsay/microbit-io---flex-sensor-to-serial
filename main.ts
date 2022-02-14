let flexReading = 0
basic.forever(function () {
    flexReading = Math.map(pins.analogReadPin(AnalogPin.P0), 150, 920, 0, 1023)
    pins.analogWritePin(AnalogPin.P1, flexReading)
    serial.writeValue("Flex sensor reading", flexReading)
    control.waitMicros(500000)
})
