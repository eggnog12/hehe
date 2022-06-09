def on_forever():
    serial.write_line("" + str((sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS))))
    if sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS) > 1:
        basic.show_string("pie=")
    else:
        basic.show_string("3.14159")
basic.forever(on_forever)
