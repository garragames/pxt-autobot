/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

//import * as data from './es_resource.json';
//let fooBarVal = data.foo_bar;

//% color=#fa8f13 icon="\uf1b9" block="AutoBot"
//% groups=['Commands', 'Sensors', 'Logic', 'Variables']
namespace autoBot {

    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023; // 100 km/hr

    const FIRST_GEAR   = 0
    const SECOND_GEAR  = 1
    const THIRD_GEAR   = 2
    const FOURTH_GEAR  = 3
    const FIFTH_GEAR   = 4
    const DRIVE_GEAR   = 5
    const NEUTRAL_GEAR = 6
    const PARKING_GEAR = 7
    const REVERSE_GEAR = 8

    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true) // Set true to DEBUG

    // Engine Sates
    export enum Engine {
        //% block="off"
        //% jres=icons.engine-off
        Off = 0,
        //% block="on"
        //% jres=icons.engine-on
        On = 1
    }

    // Directions
    export enum Directions {
        //% block="left"
        //% jres=icons.direction-left
        Left = 1,
        //% block="front"
        //% jres=icons.direction-front
        Front = 2,
        //% block="right"
        //% jres=icons.direction-right
        Right = 3
    }

    // Seat Belt States
    export enum BeltStates {
        //% block="unfasten"
        //% jres=icons.belt-unfasten
        Unfasten = 0,
        //% block="fasten"
        //% jres=icons.belt-fasten
        Fasten = 1
    }

    // Signs
    export enum Signs {
        //% block="stop"
        //% jres=icons.stop-sign
        Stop = 0,
        //% block="left"
        //% jres=icons.left-sign
        Left = 1,
        //% block="straight"
        //% jres=icons.straight-sign
        Straight = 2,
        //% block="backward"
        //% jres=icons.backward-sign
        //Backward = 3,
        //% block="right"
        //% jres=icons.right-sign
        Right = 4
    }

    // Manual Gears
    export enum ManualGears {
        //% block="first gear"
        //% jres=icons.first-gear
        First = FIRST_GEAR,
        //% block="third gear"
        //% jres=icons.third-gear
        Third = THIRD_GEAR,
        //% block="fifth gear"
        //% jres=icons.neutral-gear
        Neutral = NEUTRAL_GEAR,
        //% block="second gear"
        //% jres=icons.second-gear
        Second = SECOND_GEAR,
        //% block="fourth gear"
        //% jres=icons.fourth-gear
        Fourth = FOURTH_GEAR,
        //% block="reverse gear"
        //% jres=icons.reverse-gear
        Reverse = REVERSE_GEAR
    }

    // Automatic Gears
    export enum AutomaticGears {
        //% block="first gear"
        //% jres=icons.parking-gear
        Parking = PARKING_GEAR,
        //% block="third gear"
        //% jres=icons.reverse-gear
        Reverse = REVERSE_GEAR,
        //% block="fifth gear"
        //% jres=icons.neutral-gear
        Neutral = NEUTRAL_GEAR,
        //% block="second gear"
        //% jres=icons.drive-gear
        Drive = DRIVE_GEAR,
        //% block="fourth gear"
        //% jres=icons.second-gear
        Second = SECOND_GEAR,
        //% block="reverse gear"
        //% jres=icons.first-gear
        First = FIRST_GEAR
    }

    /**
     * Global Variables
     */

    let _sign = Signs.Straight
    let _belt = BeltStates.Unfasten
    let _direction = Directions.Front
    let _engine = Engine.Off
    let _automaticGear = AutomaticGears.Parking
    let _manualGear = ManualGears.Neutral
    let _speed = 0
    let _forward = true
    let _gear = 0


    /**
     * Stop the autobot
     */
    export function _stop(): void {
        console.log('Stop')
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Turn the autobot right
     */
    export function _right(): void {
        console.log('Right')
        pins.digitalWritePin(DigitalPin.P12, _forward?0:1)
        pins.digitalWritePin(DigitalPin.P13, _forward?0:1)
        pins.digitalWritePin(DigitalPin.P14, _forward?1:0)
        pins.digitalWritePin(DigitalPin.P15, _forward?0:1)
    }

    /**
    * Turn the autobot left
    */
    export function _left(): void {
        console.log('Left')
        pins.digitalWritePin(DigitalPin.P12, _forward?0:1)
        pins.digitalWritePin(DigitalPin.P13, _forward?1:0)
        pins.digitalWritePin(DigitalPin.P14, _forward?0:1)
        pins.digitalWritePin(DigitalPin.P15, _forward?0:1)
    }

    /**
     * Moves the autobot straight
     */
    export function _straight(): void {
        console.log('Straight')
        pins.digitalWritePin(DigitalPin.P12, _forward?0:1)
        pins.digitalWritePin(DigitalPin.P13, _forward?1:0)
        pins.digitalWritePin(DigitalPin.P14, _forward?1:0)
        pins.digitalWritePin(DigitalPin.P15, _forward?0:1)
    }

    /**
     * Set Speed
     * @param gear
     */
    function _setSpeed(gear: number): void {
        switch (gear) {
            case NEUTRAL_GEAR:
                _speed = 0
                break
            case PARKING_GEAR:
                _speed = 0
                break
            case FIRST_GEAR:
                _speed = 20
                break
            case REVERSE_GEAR:
                _speed = 20
                break
            case SECOND_GEAR:
                _speed = 40
                break
            case THIRD_GEAR:
                _speed = 60
                break
            case FOURTH_GEAR:
                _speed = 80
                break
            case FIFTH_GEAR:
                _speed = 100
                break
            case DRIVE_GEAR:
                _speed = 100
                break
        }
        let s = _speed * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para motor izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para motor derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    /**
     * Set seat belt state
     * @param status
     */
    //% blockId=setSeatbelt
    //% block="seat belt $state"
    //% state.defl=BeltStates.unfasten
    //% state.fieldEditor="imagedropdown"
    //% state.fieldOptions.columns=2
    //% state.fieldOptions.width="150"
    //% state.fieldOptions.maxRows=1
    //% group="Commands"
    //% weight=590
    export function setSeatbelt(state: BeltStates): void {
        if (state == BeltStates.Unfasten) {
            if (_engine == Engine.Off) {
                _belt = state
            } else {
                console.error('Do not unfasten your seat belt while the engine is on')
            }
        } else {
            _belt = state
        }
    }

    /**
    * Turn Engine On/Off
    * @param state
    */
    //% blockId=setEngine
    //% block="turn engine $state"
    //% state.defl=Engine.off
    //% state.fieldEditor="imagedropdown" 
    //% state.fieldOptions.columns=2
    //% state.fieldOptions.width="150"
    //% state.fieldOptions.maxRows=1
    //% group="Commands"
    //% weight=550
    export function setEngine(state: Engine): void {

        if (_belt == BeltStates.Unfasten && state == Engine.On) {
            console.warn('You cannot turn on the engine if you have not fastened your seat belt.')
            return;
        }

        if (_manualGear != ManualGears.Neutral && state == Engine.On) {
            console.warn('You need to put the AutoBot in neutral or parking to turn on the engine.')
            return;
        }

        if (_manualGear != ManualGears.Neutral && state == Engine.Off) {
            console.warn('You need to put the AutoBot in neutral or parking to be able to turn off the engine.')
            return;
        }

        _engine = state;
    }

    /**
    * Set Direction
    * @param direction
    */
    //% blockId=turnDirection
    //% block="turn direction $direction"
    //% direction.defl=Directions.front
    //% direction.fieldEditor="imagedropdown" 
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="225"
    //% direction.fieldOptions.maxRows=1
    //% group="Commands"
    //% weight=380
    export function turnDirection(direction: Directions): void {
        _direction = direction
    }

    /**
    * Set Manual Gear
    * @param gear
    */
    //% blockId=setManualGear
    //% block="set gear $gear"
    //% blockImage=icons.first-gear
    //% gear.defl=Gears.Third
    //% gear.fieldEditor="imagedropdown" 
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Commands"
    //% weight=370
    export function setManualGear(gear: ManualGears): void {
        if (_belt == BeltStates.Fasten) {
            _manualGear = gear
            _gear = gear
            if (gear == REVERSE_GEAR) {
                _forward = false
            } else {
                _forward = true
            }
        } else {
            console.warn('You cannot shift gears if you do not have your seat belt fastened.')
        }
    }

    /**
        * Set Automatic Gear 
        * @param gear
        */
    //% blockId=setAutomaticGear
    //% block="set gear $gear"
    //% gear.defl=Gears.Third
    //% gear.fieldEditor="imagedropdown" 
    //% gear.fieldOptions.columns=1
    //% gear.fieldOptions.width="75"
    //% gear.fieldOptions.maxRows=6
    //% group="Commands"
    //% weight=360
    export function setAutomaticGear(gear: AutomaticGears): void {
        if (_belt == BeltStates.Fasten) {
            _automaticGear = gear
            _gear = gear
            if (gear == REVERSE_GEAR) {
                _forward = false
            } else {
                _forward = true
            }
        } else {
            console.warn('You cannot shift gears if you do not have your seat belt fastened.')
        }
    }

    /**
     * Move de AutoBot
     */
    //% blockId=move
    //% block="move"
    //% block.loc.es-ES="moverse"
    //% group="Commands"
    //% weight=340
    export function move(): void {
        _setSpeed(_gear)
        console.log('Move: ' + _speed);
        switch (_direction) {
            case Directions.Front:
                _straight()
                break
            case Directions.Left:
                _left()
                break
            case Directions.Right:
                _right()
                break
        }
    }

    /**
     * Stop the AutoBot
     */
    //% blockId=brake
    //% block="stop"
    //% block.loc.es-ES="detenerse"
    //% group="Commands"
    //% weight=330
    export function stop(): void {
        _stop()
    }

    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=senseUltrasonic
    //% block="ultrasonic sensor"
    //% group="Sensors"
    export function senseUltrasonic(maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(5)
        pins.digitalWritePin(DigitalPin.P1, 0)
        // read pulse
        let d = pins.pulseIn(DigitalPin.P0, PulseValue.High, maxCmDistance * 58)
        
        if (d == 0) {
            d = maxCmDistance
        }
        return Math.idiv(d, 58); 
    }

    /**
     * Detects the line through the five infrared sensors in front of the AutoBot, and returns straight, left, right or stop.
     */
    //% blockId=senseLine
    //% block="infrared sensor"
    //% group="Sensors"
    export function senseLine(): Signs {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
            return Signs.Straight
        } else
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                return Signs.Left
            } else
                if (pins.digitalReadPin(DigitalPin.P0) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                    return Signs.Left
                } else
                    if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 0 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                        return Signs.Right
                    } else
                        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 0)))) {
                            return Signs.Right
                        } else
                            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                                return Signs.Stop
                            }
        return Signs.Stop // If no condition then Stop motors
    }

    /**
     * Compares two values and returns true if equal or false if not equal
     * @param A
     * @param B
     */
    //% blockId=compare
    //% block="$A equal to $B"
    //% B.fieldEditor="imagedropdown"
    //% B.fieldOptions.columns=4
    //% B.fieldOptions.width="300"
    //% B.fieldOptions.maxRows=1
    //% group="Logic"
    export function compare(A: number, B: Signs): boolean {
        return A == B
    }

    /**
     * Manual Gear Selector
     * @param gear
     */
    //% blockId=getManualGear
    //% block="$gear"
    //% gear.defl=ManualGears.third
    //% gear.fieldEditor="imagedropdown"
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Variables"
    //% weight=800
    export function getManualGear(gear: ManualGears): number {
        return gear
    }

    /**
     * Automatic Gear Selector
     * @param gear
     */
    //% blockId=getAutomaticGear
    //% block="$gear"
    //% gear.defl=AutomaticGears.third
    //% gear.fieldEditor="imagedropdown"
    //% gear.fieldOptions.columns=3
    //% gear.fieldOptions.width="225"
    //% gear.fieldOptions.maxRows=2
    //% group="Variables"
    //% weight=820
    export function getAutomaticGear(gear: AutomaticGears): number {
        return gear
    }

    /**
    * Direction Selector
    * @param direction
    */
    //% blockId=getDirection
    //% block="$direction"
    //% direction.defl=Directions.front
    //% direction.fieldEditor="imagedropdown"
    //% direction.fieldOptions.columns=3
    //% direction.fieldOptions.width="225"
    //% direction.fieldOptions.maxRows=2
    //% group="Variables"
    //% weight=830
    export function getDirection(direction: Directions): number {
        return direction
    }

    /**
    * Sign Selector
    * @param sign
    */
    //% blockId=getSign
    //% block="$sign"
    //% block.
    //% sign.fieldEditor="imagedropdown"
    //% sign.fieldOptions.columns=4
    //% sign.fieldOptions.width="300"
    //% sign.fieldOptions.maxRows=2
    //% group="Variables"    
    //% weight=840
    export function getSign(sign: Signs): number {
        return sign
    }

    console.log('AutoBot, (c)2023 Garragames')
    console.log('micro:bit version: ' + control.hardwareVersion() )

}
