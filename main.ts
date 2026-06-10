let x = 0
StartbitV2.startbit_Init()
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 90, 500)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 90, 500)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 180, 500)
basic.forever(function () {
    x = StartbitV2.startbit_ultrasonic()
    StartbitV2.lineFollowSensor_init(StartbitV2.startbit_lineFollowPort.port1)
    StartbitV2.ultrasonic_init(StartbitV2.startbit_ultrasonicPort.port2)
    basic.showLeds(`
        . # # . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        . # # . .
        `)
    if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black)) {
        StartbitV2.startbit_setMotorSpeed(-30, 80)
    } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.White)) {
        StartbitV2.startbit_setMotorSpeed(80, -30)
    } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.Black)) {
        StartbitV2.startbit_setMotorSpeed(-60, 90)
    } else if (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.Black) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.White)) {
        StartbitV2.startbit_setMotorSpeed(90, -60)
    } else {
        if (x <= 18 && x > 10) {
            StartbitV2.startbit_setMotorSpeed(0, 0)
            basic.showLeds(`
                # # # . #
                . . # . #
                # # # # #
                # . # . .
                # . # # #
                `)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 45, 500)
            basic.pause(1000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 90, 500)
            basic.pause(1000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 90, 500)
            basic.pause(1000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 180, 500)
            basic.pause(1000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 180, 500)
            basic.pause(1000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 90, 500)
            basic.pause(1000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 180, 500)
        } else {
            StartbitV2.startbit_setMotorSpeed(100, 100)
        }
    }
})
